<template>
  <div class="bg-gray content">
    <Navbar :active-section="activeSection" />
    <nuxt />
    <AppFooter />
    <transition name="slide-left">
      <NavDrawer v-if="isNavDrawerVisible" :active-section="activeSection" />
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'
import NavDrawer from '@/components/Navigation/NavDrawer'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    NavDrawer,
    AppFooter: Footer
  },
  data() {
    return {
      isNavDrawerVisible: false,
      activeSection: 'home'
    }
  },
  mounted() {
    this.$bus.$on('toggle-nav-drawer', (val) => {
      this.isNavDrawerVisible = val
    })
    this.$bus.$on('waypoint-change', (section) => {
      this.activeSection = section
    })
  }
}
</script>

<style lang="scss">
html {
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  z-index: -10;
}

::selection {
  background: theme('colors.accent');
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
  transform: translateX(0);
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(100%);
}
</style>
