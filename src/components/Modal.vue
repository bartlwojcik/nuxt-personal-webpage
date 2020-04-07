<template>
  <div class="modal">
    <div @click="close" class="modal__backdrop"></div>
    <div class="w-11/12 modal__window sm:w-1/2">
      <slot></slot>
      <font-awesome-icon
        :icon="['fas', 'times']"
        @click="close"
        class="icon hover:opacity-75"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    handleKeydown(e) {
      const key = e.which || e.keyCode
      if (key === 27) {
        this.close()
      }
    },
    close() {
      this.$bus.$emit(`toggle-${this.name}`, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  @apply fixed inset-0 z-20 flex items-center justify-center;

  &__backdrop {
    @apply fixed inset-0 bg-white opacity-75 w-full h-full;
  }

  &__window {
    @apply relative p-10 bg-white shadow-md;

    .icon {
      @apply absolute cursor-pointer;

      top: 0.75rem;
      right: 0.75rem;
      width: 1rem;
      transition: opacity 0.3s ease;
    }
  }
}
</style>
