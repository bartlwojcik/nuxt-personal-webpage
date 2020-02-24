<template functional>
  <div class="relative z-30 flex items-center -m-4 sm:m-2">
    <component :is="injections.components.Avatar" />
    <p
      class="text-2xl font-bold font-display name"
      :class="{ 'opacity-0': !scrolled }"
    >
      Bartłomiej Wójcik
    </p>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  name: 'Header',
  inject: {
    components: {
      default: {
        Avatar
      }
    }
  },
  props: {
    scrolled: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.avatar,
.name {
  transition: opacity 0.3s ease-in;
}
</style>
