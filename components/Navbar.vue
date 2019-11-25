<template>
  <div
    class="fixed z-10 top-0 left-0 w-full h-16 px-10 flex justify-between items-center navbar"
    :class="{ 'bg-white': scrolled, 'shadow-md': scrolled }"
  >
    <div class="flex items-center">
      <NavButton target="#home" avatar>
        <div
          class="w-8 h-8 rounded-full flex justify-center items-center font-display font-bold"
        >
          B
        </div>
      </NavButton>
      <p
        class="font-display font-bold text-2xl name"
        :class="{ 'opacity-0': !scrolled }"
      >
        Bartłomiej Wójcik
      </p>
    </div>
    <div>
      <NavButton target="#about" :active="activeSection === 'about'"
        >About me</NavButton
      >
      <NavButton target="#experience" :active="activeSection === 'experience'"
        >My experience</NavButton
      >
      <NavButton target="#contact" :active="activeSection === 'contact'"
        >Contact me</NavButton
      >
    </div>
  </div>
</template>

<script>
import NavButton from './NavButton'

export default {
  components: {
    NavButton
  },
  data() {
    return {
      scrolled: false,
      activeSection: 'home'
    }
  },
  mounted() {
    this.handleScroll()
    document.addEventListener('scroll', this.handleScroll)
    this.$bus.$on('waypoint-change', (section) => {
      this.activeSection = section
    })
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    }
  }
}
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease-in, box-shadow 0.3s ease-in;
}

.avatar,
.name {
  transition: opacity 0.3s ease-in;
}
</style>
