<template>
  <div class="h-full p-4 mx-4 home">
    <div class="flex items-center text-5xl font-display">
      <h1 class="z-0">
        <p class="home__header--line-1">Hi,</p>
        <p class="home__header--line-2">
          I'm <span class="relative font-bold name">Bartłomiej</span>
        </p>
        <p class="home__header--line-3">and I'm into Web Development.</p>
      </h1>
    </div>
    <div class="mt-4">
      <AppButton
        href="https://www.linkedin.com/in/bartlomiejwojcik92/"
        class="mr-6"
      >
        <font-awesome-icon class="mr-2" :icon="['fab', 'linkedin-in']" />
        LinkedIn
      </AppButton>
      <AppButton href="https://github.com/bartlwojcik">
        <font-awesome-icon class="mr-2" :icon="['fab', 'github']" /> GitHub
      </AppButton>
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
.home {
  .name::before {
    content: '';
    position: absolute;
    bottom: -0.1em;
    left: -0.1em;
    width: 4.9em;
    height: 1em;
    background-color: theme('colors.orange-1');
    z-index: -1;
  }
}
</style>
