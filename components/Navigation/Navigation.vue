<template>
  <div>
    <button class="md:hidden" @click="$bus.$emit('toggle-nav-drawer', true)">
      <font-awesome-icon :icon="['fas', 'bars']" class="text-xl" />
    </button>
    <div class="hidden md:block">
      <NavButton target="#about" :active="activeSection === 'about'">
        About me
      </NavButton>
      <NavButton target="#experience" :active="activeSection === 'experience'">
        My experience
      </NavButton>
      <NavButton target="#contact" :active="activeSection === 'contact'">
        Contact me
      </NavButton>
    </div>
  </div>
</template>

<script>
import NavButton from '../NavButton'

export default {
  components: {
    NavButton
  },
  props: {
    activeSection: {
      type: String,
      required: true
    }
  }
}
</script>
