<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    target="_blank"
    class="relative mx-4 font-semibold cursor-pointer font-body focus:outline-none navigation-button"
    :class="{ avatar, active }"
    @click="handleClick"
  >
    <span class="relative z-10"><slot></slot></span>
  </component>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    avatar: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      if (this.target) {
        this.$scrollTo(this.target)
      }
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-button {
  &:before {
    content: '';
    position: absolute;
    bottom: -0.1em;
    left: -0.4em;
    width: 100%;
    height: 100%;
    max-height: 0;
    background-color: theme('colors.accent');
    transition: max-height 0.3s;
  }

  &.active:before,
  &:hover:before {
    transition: max-height 0.3s;
    max-height: 1em;
  }

  &.avatar {
    &:before {
      border-radius: 50%;
      max-width: 2rem;
      max-height: 2rem;
      bottom: -0.25em;
      left: -0.25em;
      transition: bottom 0.3s, left 0.3s;
    }

    &:hover:before {
      bottom: 0;
      left: 0;
    }
  }
}
</style>
