<template>
  <div>
    <button @click="$bus.$emit('toggle-nav-drawer', true)" class="md:hidden">
      <font-awesome-icon :icon="['fas', 'bars']" class="text-xl icon" />
    </button>
    <div class="hidden md:flex md:flex-no-wrap md:block">
      <NavButton :active="activeSection === 'about'" target="#about">
        {{ $t('nav.about') }}
      </NavButton>
      <NavButton :active="activeSection === 'experience'" target="#experience">
        {{ $t('nav.experience') }}
      </NavButton>
      <NavButton :active="activeSection === 'contact'" target="#contact">
        {{ $t('nav.contact') }}
      </NavButton>
      <LangSelect />
    </div>
  </div>
</template>

<script>
import NavButton from '../NavButton'
import LangSelect from './LangSelect'

export default {
  name: 'Navigation',
  components: {
    NavButton,
    LangSelect
  },
  props: {
    activeSection: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1.25rem;
}
</style>
