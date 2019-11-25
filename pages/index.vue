<template>
  <div class="min-h-screen pt-16 mx-auto">
    <AppSection id="home"><Home /></AppSection>
    <AppSection id="about" right><About /></AppSection>
    <AppSection id="experience"><Experience /></AppSection>
    <AppSection id="contact" right><Contact /></AppSection>
  </div>
</template>

<script>
import Section from '@/components/Section'
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience/Experience'
import Contact from '@/components/sections/Contact'

export default {
  components: {
    AppSection: Section,
    Home,
    About,
    Experience,
    Contact
  }
}
</script>
