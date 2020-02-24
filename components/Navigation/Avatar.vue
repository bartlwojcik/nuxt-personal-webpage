<template functional>
  <component :is="injections.components.NavButton" target="#home" avatar>
    <div
      class="relative flex items-center justify-center w-8 h-8 font-bold border rounded-full font-display avatar"
    >
      B
    </div>
  </component>
</template>

<script>
import NavButton from '../NavButton'

export default {
  name: 'Avatar',
  inject: {
    components: {
      default: {
        NavButton
      }
    }
  }
}
</script>
