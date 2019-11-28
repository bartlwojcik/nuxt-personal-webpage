<template>
  <div class="flex items-center -m-4 sm:m-2 relative z-30">
    <Avatar />
    <p
      class="font-display font-bold text-2xl name"
      :class="{ 'opacity-0': !scrolled }"
    >
      Bartłomiej Wójcik
    </p>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  components: {
    Avatar
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
