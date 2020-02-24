<template functional>
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    target="_blank"
    class="relative inline-block h-10 mt-2 bg-transparent custom-button"
    :class="[
      { disabled: props.disabled },
      { icon: props.icon },
      data.staticClass
    ]"
    :type="props.submit ? 'submit' : 'button'"
    @click="props.href ? '' : listeners.clicked"
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
  name: 'Button',
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
    },
    icon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.custom-button {
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

.icon {
  min-width: 60px;
}

@media only screen and (max-width: 640px) {
  button,
  a {
    min-width: 60px;
  }
}
</style>
