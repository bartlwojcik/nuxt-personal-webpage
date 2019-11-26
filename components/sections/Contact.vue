<template>
  <div class="section__content">
    <div class="contact">
      <h2 class="mb-6 text-4xl font-display">Let's get in touch!</h2>
      <form class="contact__form" @submit.prevent>
        <div class="contact__input">
          <label for="name">Name</label>
          <input v-model="name" type="text" name="name" />
        </div>
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
        <div class="contact__input">
          <label for="Subject">Subject</label>
          <input v-model="subject" type="text" name="subject" />
        </div>
        <div
          class="contact__input required"
          :class="{
            'error--required': $v.message.$error && !$v.message.required
          }"
        >
          <label for="message">Message</label>
          <textarea
            v-model.trim.lazy="$v.message.$model"
            rows="4"
            @blur="$v.message.$touch()"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <AppButton :disabled="$v.$invalid">
            <font-awesome-icon class="mr-2" :icon="['far', 'paper-plane']" />
            Send
          </AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Button from '../Button'

export default {
  components: {
    AppButton: Button
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    message: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  @apply w-10/12 bg-white shadow-md p-8;

  &__form {
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
