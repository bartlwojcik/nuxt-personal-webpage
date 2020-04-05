<template>
  <div class="h-full p-4 mx-4 home">
    <div class="flex items-center text-4xl md:text-5xl font-display">
      <h1 class="z-0">
        <p>
          {{ $t('greeting1') }}
          <span class="relative font-bold name">Bartłomiej</span>
        </p>
        <p>{{ $t('greeting2') }}</p>
      </h1>
    </div>
    <div class="mt-4">
      <AppButton
        href="https://www.linkedin.com/in/bartlomiejwojcik92/"
        class="mr-2 sm:mr-6"
      >
        <font-awesome-icon
          :icon="['fab', 'linkedin-in']"
          class="mr-0 sm:mr-2"
        />
        <span class="hidden sm:block"> LinkedIn</span>
      </AppButton>
      <AppButton href="https://github.com/bartlwojcik" class="mr-2 sm:mr-6">
        <font-awesome-icon :icon="['fab', 'github']" class="mr-0 sm:mr-2" />
        <span class="hidden sm:block"> GitHub</span>
      </AppButton>
      <AppButton @click="scrollToContact" class="mr-2 sm:mr-6">
        <font-awesome-icon :icon="['far', 'envelope']" class="mr-0 sm:mr-2" />
        <span class="hidden sm:block"> {{ $t('sayHi') }}</span>
      </AppButton>
      <AppButton @click="showCvModal">
        <font-awesome-icon :icon="['far', 'file-pdf']" class="mr-0 sm:mr-2" />
        <span class="hidden sm:block">{{ $t('cv.get') }}</span>
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
      this.$scrollTo('#contact')
    },
    showCvModal() {
      this.$bus.$emit('toggle-cv-modal', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .name {
    display: inline-block;

    &::before {
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
}
</style>
