<template>
  <footer class="w-full px-10 py-20 text-center bg-white shadow-md">
    <div class="flex justify-center">
      <AppButton
        href="https://www.linkedin.com/in/bartlomiejwojcik92/"
        class="mr-6"
        icon
      >
        <font-awesome-icon class="mr-0" :icon="['fab', 'linkedin-in']" />
      </AppButton>
      <AppButton href="https://github.com/bartlwojcik" icon>
        <font-awesome-icon class="mr-0" :icon="['fab', 'github']" />
      </AppButton>
    </div>
    <p class="mt-8 text-sm font-display credits">
      Created by Bartłomiej Wójcik with
      <a href="https://nuxtjs.org/">Nuxt.js</a>,
      <a href="https://tailwindcss.com/">Tailwind CSS</a>
      some <font-awesome-icon :icon="['fas', 'coffee']" /> and
      <font-awesome-icon :icon="['fas', 'heart']" class="heart" /> for coding
      &copy; <span class="font-bold">{{ year }}</span
      >.
    </p>
    <p class="mt-2 text-sm font-display credits">
      All illustrations created by the amazing
      <a href="https://twitter.com/ninalimpi">Katerina Limpitsouni</a>
      (<a href="https://undraw.co/">unDraw.co</a>).
    </p>
    <p class="mt-2 text-sm font-display credits">
      All fonts by <a href="https://fontawesome.com/">Font Awesome</a>.
    </p>
    <p class="mt-10 text-lg font-bold font-display">
      Thanks for stopping by!
    </p>
  </footer>
</template>

<script>
import Button from './Button'

export default {
  components: {
    AppButton: Button
  },
  computed: {
    year() {
      return new Date().getFullYear()
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
</style>
