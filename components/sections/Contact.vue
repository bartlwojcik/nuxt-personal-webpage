<template>
  <div class="section__content">
    <div class="contact">
      <h2 class="mb-6 text-4xl font-display">Let's get in touch!</h2>
      <form class="contact__form" @submit.prevent>
        <div class="contact__input">
          <label for="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div class="contact__input required">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div class="contact__input">
          <label for="Subject">Subject</label>
          <input type="text" name="subject" />
        </div>
        <div class="contact__input required">
          <label for="message">Message</label>
          <textarea rows="4"></textarea>
        </div>
        <div class="flex justify-end">
          <AppButton disabled>Send</AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '../Button'

export default {
  components: {
    AppButton: Button
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
  }
}
</style>
