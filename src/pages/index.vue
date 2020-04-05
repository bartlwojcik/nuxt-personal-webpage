<template>
  <div>
    <transition name="fade" mode="out-in">
      <!-- Page content -->
      <div
        key="page-content"
        v-if="contentReady"
        class="min-h-screen pt-16 mx-auto page"
      >
        <AppSection id="home"><Home /></AppSection>
        <AppSection id="about" right><About /></AppSection>
        <AppSection id="experience"><Experience /></AppSection>
        <AppSection id="contact" right><Contact /></AppSection>
      </div>
      <!-- Loading screen -->
      <div key="loading-screen" v-else>
        <LoadingScreen />
      </div>
    </transition>
    <!-- CV modal -->
    <transition :name="$mq === 'sm' ? 'slide-left' : 'fade'">
      <CvModal v-if="cvModalVisible" />
    </transition>
  </div>
</template>

<script>
import Section from '@/components/Section'
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience/Experience'
import Contact from '@/components/sections/Contact'
import LoadingScreen from '@/components/LoadingScreen'
import CvModal from '@/components/CvModal'

export default {
  components: {
    LoadingScreen,
    AppSection: Section,
    Home,
    About,
    Experience,
    Contact,
    CvModal
  },
  data() {
    return {
      contentReady: false,
      cvModalVisible: false
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

    this.$bus.$on('toggle-cv-modal', (val) => {
      this.cvModalVisible = val
    })
  },

  beforeDestroy() {
    this.$bus.$off('toggle-cv-modal')
  }
}
</script>
