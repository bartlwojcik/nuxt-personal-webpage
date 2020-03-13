<template>
  <div>
    <transition name="fade" mode="out-in">
      <!-- Page content -->
      <div
        v-if="contentReady"
        key="page-content"
        class="min-h-screen pt-16 mx-auto page"
      >
        <AppSection id="home"><Home /></AppSection>
        <AppSection id="about" right><About /></AppSection>
        <AppSection id="experience"><Experience /></AppSection>
        <AppSection id="contact" right><Contact /></AppSection>
      </div>
      <!-- Loading screen -->
      <div v-else key="loading-screen">
        <LoadingScreen />
      </div>
    </transition>
  </div>
</template>

<script>
import LoadingScreen from '../components/LoadingScreen'
import Section from '@/components/Section'
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience/Experience'
import Contact from '@/components/sections/Contact'

export default {
  components: {
    LoadingScreen,
    AppSection: Section,
    Home,
    About,
    Experience,
    Contact
  },
  data() {
    return {
      contentReady: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        this.contentReady = true
        this.$nuxt.$loading.finish()
      }, 1000)
    })
  }
}
</script>
