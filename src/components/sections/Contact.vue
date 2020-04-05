<template>
  <div class="section__content">
    <div class="w-full sm:w-10/12 contact">
      <h2 class="mb-6 text-4xl font-display">{{ $t('contact.header') }}</h2>

      <!-- Contact form elemenet -->
      <transition name="fade" mode="out-in">
        <div key="form" v-if="status === 'init' || status === 'inProgress'">
          <p v-if="status === 'init'" class="mb-6 text-sm font-body">
            {{ $t('contact.content') }}
            <a
              class="font-medium email-link"
              href="mailto:bartlomiejwojcik92@gmai.com"
            >
              bartlomiejwojcik92@gmail.com </a
            >.
          </p>
          <form @submit.prevent="send" class="contact__form">
            <div
              :class="{
                'error--email': $v.email.$error && !$v.email.email,
                'error--required': $v.email.$error && !$v.email.required
              }"
              :data-error-required="$t('contact.fieldRequired')"
              :data-error-email="$t('contact.invalidEmail')"
              class="contact__input required"
            >
              <label for="email">{{ $t('contact.email') }}</label>
              <input
                v-model.trim.lazy="$v.email.$model"
                @blur="$v.email.$touch()"
                type="email"
                name="email"
              />
            </div>
            <div
              :class="{
                'error--required': $v.subject.$error && !$v.subject.required
              }"
              :data-error-required="$t('contact.fieldRequired')"
              class="contact__input required"
            >
              <label for="Subject">{{ $t('contact.subject') }}</label>
              <input
                v-model.trim.lazy="$v.subject.$model"
                @blur="$v.subject.$touch()"
                type="text"
                name="subject"
              />
            </div>
            <div
              :class="{
                'error--required': $v.msg.$error && !$v.msg.required
              }"
              :data-error-required="$t('contact.fieldRequired')"
              class="contact__input required"
            >
              <label for="msg">{{ $t('contact.message') }}</label>
              <textarea
                v-model.trim="$v.msg.$model"
                @blur="$v.msg.$touch()"
                rows="4"
              ></textarea>
            </div>
            <div class="flex justify-end">
              <AppButton :disabled="$v.$invalid" submit>
                <font-awesome-icon
                  :icon="['far', 'paper-plane']"
                  class="mr-2"
                />
                {{ $t('contact.send') }}
              </AppButton>
            </div>
          </form>
        </div>

        <!-- Success screen -->
        <div
          key="success"
          v-else-if="status === 'success'"
          class="contact__message"
        >
          <p class="mb-6 text-center">
            {{ $t('contact.successMsg') }}
          </p>
          <AppButton @click="reset">
            <font-awesome-icon
              :icon="['fas', 'long-arrow-alt-left']"
              class="mr-2"
            />
            {{ $t('contact.back') }}
          </AppButton>
        </div>

        <!-- Error screen -->
        <div
          key="error"
          v-else-if="status === 'error'"
          class="contact__message"
        >
          <p class="mb-6">{{ $t('contact.errorMsg') }}</p>
          <div class="flex items-center justify-center">
            <AppButton @click="status = 'init'" class="mr-4">
              <font-awesome-icon
                :icon="['fas', 'long-arrow-alt-left']"
                class="mr-2"
              />
              {{ $t('contact.back') }}
            </AppButton>
            <AppButton href="mailto:bartlomiejwojcik92@gmail.com" class="ml-4">
              <font-awesome-icon :icon="['far', 'envelope']" class="mr-2" />
              {{ $t('contact.useClient') }}
            </AppButton>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'
import Button from '../Button'

const CONTACT_URL = '/api/contact'

export default {
  components: {
    AppButton: Button
  },
  data() {
    return {
      email: '',
      subject: '',
      msg: '',
      status: 'init'
    }
  },
  validations: {
    email: {
      required,
      email
    },
    subject: {
      required
    },
    msg: {
      required
    }
  },
  methods: {
    async send() {
      try {
        this.$v.$touch()

        if (this.$v.$invalid) {
          return
        }

        const { data } = await axios.post(CONTACT_URL, {
          name: this.name,
          email: this.email,
          subject: this.subject,
          msg: this.msg
        })
        if (data.success) {
          this.status = 'success'
        }
      } catch (err) {
        console.log(err)
        this.status = 'error'
      }
    },
    reset() {
      this.email = ''
      this.subject = ''
      this.msg = ''
      this.status = 'init'
      this.$v.$reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  @apply bg-white shadow-md p-8;

  &__message {
    @apply w-full py-4 flex flex-col justify-center items-center font-body;
  }

  .email-link {
    display: inline-block;
    position: relative;
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0.1rem;
      width: 100%;
      height: 100%;
      max-height: 20%;
      background-color: theme('colors.accent');
      z-index: -1;
      transition: max-height 0.3s;
    }

    &:hover:before {
      max-height: 50%;
    }
  }

  &__input {
    @apply my-2;

    label {
      @apply text-xs font-body;
    }

    input,
    textarea {
      @apply block w-full p-2 resize-none bg-gray outline-none text-sm font-body;

      transition: background-color 0.1s ease;

      &:hover,
      &:focus,
      &:active {
        background-color: theme('colors.lightgray');
      }
    }

    &.required {
      label:after {
        content: ' *';
        font-weight: bold;
        color: theme('colors.accent');
      }
    }

    &.error--required:after,
    &.error--email:after {
      @apply block text-xs text-red;
    }

    &.error--required:after {
      content: attr(data-error-required);
    }

    &.error--email:after {
      content: attr(data-error-email);
    }
  }
}
</style>
