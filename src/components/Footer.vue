<template functional>
  <footer class="w-full px-10 py-20 text-center bg-white shadow-md">
    <div class="flex justify-center">
      <component
        :is="injections.components.AppButton"
        href="https://www.linkedin.com/in/bartlomiejwojcik92/"
        class="mr-6"
        icon
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="mr-0" />
      </component>
      <component
        :is="injections.components.AppButton"
        href="https://github.com/bartlwojcik"
        icon
      >
        <font-awesome-icon :icon="['fab', 'github']" class="mr-0" />
      </component>
    </div>
    <p class="mt-8 text-sm font-display credits">
      Created by Bartłomiej Wójcik with
      <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>,
      <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
      some <font-awesome-icon :icon="['fas', 'coffee']" class="icon" /> and
      <font-awesome-icon :icon="['fas', 'heart']" class="heart icon" /> for
      coding &copy; <span class="font-bold">{{ new Date().getFullYear() }}</span
      >.
    </p>
    <p class="mt-2 text-sm font-display credits">
      All illustrations created by the amazing
      <a href="https://twitter.com/ninalimpi" target="_blank">
        Katerina Limpitsouni
      </a>
      (<a href="https://undraw.co/" target="_blank">unDraw.co</a>).
    </p>
    <p class="mt-2 text-sm font-display credits">
      All fonts by
      <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>.
    </p>
    <p class="mt-10 text-lg font-bold font-display">
      Thanks for stopping by!
    </p>
  </footer>
</template>

<script>
import Button from './Button'

export default {
  name: 'Footer',
  inject: {
    components: {
      default: {
        AppButton: Button
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.credits a {
  @apply font-bold;
  transition: opacity 0.3s ease;

  &:hover {
    @apply opacity-75;
  }
}

.icon {
  display: inline-block;
  width: 0.65rem;
}
</style>
