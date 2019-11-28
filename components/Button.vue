<template>
  <component
    :is="tag"
    :href="href"
    target="_blank"
    class="relative inline-block h-10 mt-2 bg-transparent"
    :class="{ disabled }"
    :type="submit ? 'submit' : 'button'"
    @click="handleCLick($event)"
  >
    <span
      class="flex items-center justify-center block h-full px-4 text-sm font-medium border-2 border-black border-solid font-body"
    >
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    submit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag() {
      return this.href ? 'a' : 'button'
    }
  },
  methods: {
    handleCLick() {
      if (!this.href) this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
button,
a {
  position: relative;
  outline: none;
  z-index: 1;
  cursor: pointer;
  min-width: 120px;

  &:before {
    content: '';
    position: absolute;
    top: 0.4em;
    right: 0.4em;
    width: 100%;
    height: 100%;
    background-color: theme('colors.orange-1');
    z-index: -1;
    transition: top 0.3s, right 0.3s;
  }

  &:hover:before {
    top: 0;
    right: 0;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

@media only screen and (max-width: 640px) {
  button,
  a {
    min-width: 60px;
  }
}
</style>
