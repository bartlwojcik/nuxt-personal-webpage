<template functional>
  <div class="px-4 section__content sm:px-0">
    <h2 class="mb-8 text-4xl font-display">
      {{ parent.$t('experience.header') }}
    </h2>
    <component :is="injections.components.ExperienceItem">
      <template v-slot:position>
        Full Stack Developer
      </template>
      <template v-slot:company>
        Multinion
      </template>
      <template v-slot:period>
        {{ parent.$t('experience.multinion') }}
      </template>
    </component>
    <component :is="injections.components.ExperienceItem">
      <template v-slot:position>
        Junior Frontend Developer
      </template>
      <template v-slot:company>
        Next42
      </template>
      <template v-slot:period>
        {{ parent.$t('experience.next42') }}
      </template>
    </component>
    <component :is="injections.components.ExperienceItem">
      <template v-slot:position>
        UI/UX Designer
      </template>
      <template v-slot:company>
        SALESmanago
      </template>
      <template v-slot:period>
        {{ parent.$t('experience.uiSalesmanago') }}
      </template>
    </component>
    <component :is="injections.components.ExperienceItem">
      <template v-slot:position>
        Junior Frontend Developer
      </template>
      <template v-slot:company>
        SALESmanago
      </template>
      <template v-slot:period>
        {{ parent.$t('experience.frontSalesmanago') }}
      </template>
    </component>
  </div>
</template>

<script>
import ExperienceItem from './ExperienceItem'

export default {
  name: 'Experience',
  inject: {
    components: {
      default: {
        ExperienceItem
      }
    }
  }
}
</script>
