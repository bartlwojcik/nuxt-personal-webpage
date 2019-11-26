<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    target="_blank"
    class="w-30 mx-4 font-body font-semibold cursor-pointer focus:outline-none relative navigation-button"
    :class="{ avatar, active }"
    @click="handleClick"
  >
    <slot></slot>
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
    background-color: theme('colors.orange-1');
    z-index: -1;
    transition: max-height 0.3s;
  }

  &.active:before,
  &:hover:before {
    transition: max-height 0.3s;
    max-height: 1em;
  }

  &.avatar {
    border: 1px solid black;
    border-radius: 50%;

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
