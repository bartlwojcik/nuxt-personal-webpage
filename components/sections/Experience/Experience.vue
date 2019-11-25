<template>
  <div class="section__content">
    <h2 class="mb-8 text-4xl font-display">IT Experience</h2>
    <ExperienceItem>
      <template v-slot:position>
        Full Stack Developer
      </template>
      <template v-slot:company>
        Multinion
      </template>
      <template v-slot:period>
        April 2018 - Now
      </template>
    </ExperienceItem>
    <ExperienceItem>
      <template v-slot:position>
        Junior Frontend Developer
      </template>
      <template v-slot:company>
        Next42
      </template>
      <template v-slot:period>
        October 2017 - March 2018
      </template>
    </ExperienceItem>
    <ExperienceItem>
      <template v-slot:position>
        UI/UX Designer
      </template>
      <template v-slot:company>
        SALESmanago
      </template>
      <template v-slot:period>
        June 2017 - September 2017
      </template>
    </ExperienceItem>
    <ExperienceItem>
      <template v-slot:position>
        Junior Frontend Developer
      </template>
      <template v-slot:company>
        SALESmanago
      </template>
      <template v-slot:period>
        November 2016 - May 2017
      </template>
    </ExperienceItem>
  </div>
</template>

<script>
import ExperienceItem from './ExperienceItem'

export default {
  components: {
    ExperienceItem
  }
}
</script>
