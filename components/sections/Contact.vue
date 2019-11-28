<template>
  <div class="section__content">
    <div class="w-full sm:w-10/12 contact">
      <h2 class="mb-6 text-4xl font-display">Say Hi!</h2>

      <!-- Contact form elemenet -->
      <template v-if="status === 'init' || status === 'inProgress'">
        <p v-if="status === 'init'" class="mb-6 text-sm font-body">
          Feel free to make use of the contact form or reach me by writing
          directly to
          <a
            class="font-medium email-link"
            href="mailto:bartlomiejwojcik92@gmai.com"
          >
            bartlomiejwojcik92@gmail.com </a
          >.
        </p>
        <form class="contact__form" @submit.prevent="send">
          <div
            class="contact__input required"
            :class="{
              'error--email': $v.email.$error && !$v.email.email,
              'error--required': $v.email.$error && !$v.email.required
            }"
          >
            <label for="email">Email</label>
            <input
              v-model.trim.lazy="$v.email.$model"
              type="email"
              name="email"
              @blur="$v.email.$touch()"
            />
          </div>
          <div
            class="contact__input required"
            :class="{
              'error--required': $v.subject.$error && !$v.subject.required
            }"
          >
            <label for="Subject">Subject</label>
            <input
              v-model.trim.lazy="$v.subject.$model"
              type="text"
              name="subject"
              @blur="$v.subject.$touch()"
            />
          </div>
          <div
            class="contact__input required"
            :class="{
              'error--required': $v.msg.$error && !$v.msg.required
            }"
          >
            <label for="msg">Message</label>
            <textarea
              v-model.trim="$v.msg.$model"
              rows="4"
              @blur="$v.msg.$touch()"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <AppButton :disabled="$v.$invalid" submit>
              <font-awesome-icon class="mr-2" :icon="['far', 'paper-plane']" />
              Send
            </AppButton>
          </div>
        </form>
      </template>

      <!-- Success screen -->
      <div v-else-if="status === 'success'" class="contact__message">
        <p class="mb-6 text-center">
          Thanks for the contact!<br />I'll try to respond as soon as possible.
        </p>
        <AppButton @clicked="reset">
          <font-awesome-icon
            class="mr-2"
            :icon="['fas', 'long-arrow-alt-left']"
          />
          Back
        </AppButton>
      </div>

      <!-- Error screen -->
      <div v-else-if="status === 'error'" class="contact__message">
        <p class="mb-6">Ups... something went wrong.</p>
        <div class="flex items-center justify-center">
          <AppButton class="mr-4" @clicked="status = 'init'">
            <font-awesome-icon
              class="mr-2"
              :icon="['fas', 'long-arrow-alt-left']"
            />
            Back
          </AppButton>
          <AppButton href="mailto:bartlomiejwojcik92@gmail.com" class="ml-4">
            <font-awesome-icon class="mr-2" :icon="['far', 'envelope']" />
            Use email client
          </AppButton>
        </div>
      </div>
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
      background-color: theme('colors.orange-1');
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
        color: theme('colors.orange-1');
      }
    }

    &.error--required:after,
    &.error--email:after {
      @apply block text-xs text-red;
    }

    &.error--required:after {
      content: 'This field is required.';
    }

    &.error--email:after {
      content: 'Please provide a valid email address.';
    }
  }
}
</style>
