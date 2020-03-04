<template>
  <div class="h-full p-4 mx-4 home">
    <div class="flex items-center text-4xl md:text-5xl font-display">
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
        <font-awesome-icon
          class="mr-0 sm:mr-2"
          :icon="['fab', 'linkedin-in']"
        />
        <span class="hidden sm:block"> LinkedIn</span>
      </AppButton>
      <AppButton href="https://github.com/bartlwojcik" class="mr-6">
        <font-awesome-icon class="mr-0 sm:mr-2" :icon="['fab', 'github']" />
        <span class="hidden sm:block"> GitHub</span>
      </AppButton>
      <AppButton @click="scrollToContact">
        <font-awesome-icon class="mr-0 sm:mr-2" :icon="['far', 'envelope']" />
        <span class="hidden sm:block"> Say Hi</span>
      </AppButton>
    </div>
  </div>
</template>

<script>
import Button from '../Button'

export default {
  name: 'Home',
  components: {
    AppButton: Button
  },
  methods: {
    scrollToContact() {
      console.log('dupa')
      this.$scrollTo('#contact')
    }
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
    background-color: theme('colors.accent');
    z-index: -1;
  }
}
</style>
