<template>
  <header class="fixed z-10 top-0 left-0 w-full">
    <div
      class="h-16 px-4 flex justify-between items-center navbar"
      :class="{ 'bg-white': scrolled, 'shadow-md': scrolled }"
    >
      <AppHeader :scrolled="scrolled" />
      <Navigation :active-section="activeSection" />
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation'
import Header from './Header'

export default {
  components: {
    AppHeader: Header,
    Navigation
  },
  props: {
    activeSection: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    this.handleScroll()
    document.addEventListener('scroll', this.handleScroll)
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
</style>
