<template>
  <nav class="fixed top-0 left-0 z-20 w-full h-full bg-white px-4">
    <div class="flex justify-end h-16">
      <button @click="closeDrawer">
        <font-awesome-icon
          :icon="['fas', 'long-arrow-alt-right']"
          class="text-xl"
        />
      </button>
    </div>
    <ul class="px-8 py-4 text-3xl font-body font-medium">
      <li class="py-2">
        <NavButton
          target="#home"
          :active="activeSection === 'home'"
          @clicked="closeDrawer"
        >
          Home
        </NavButton>
      </li>
      <li class="py-2">
        <NavButton
          target="#about"
          :active="activeSection === 'about'"
          @clicked="closeDrawer"
        >
          About me
        </NavButton>
      </li>
      <li class="py-2">
        <NavButton
          target="#experience"
          :active="activeSection === 'experience'"
          @clicked="closeDrawer"
        >
          My experience
        </NavButton>
      </li>
      <li class="py-2">
        <NavButton
          target="#contact"
          :active="activeSection === 'contact'"
          @clicked="closeDrawer"
        >
          Contact me
        </NavButton>
      </li>
    </ul>
  </nav>
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
  },
  methods: {
    closeDrawer() {
      this.$bus.$emit('toggle-nav-drawer', false)
    }
  }
}
</script>
