<template>
  <div>
    <button class="md:hidden" @click="$bus.$emit('toggle-nav-drawer', true)">
      <font-awesome-icon :icon="['fas', 'bars']" class="text-xl" />
    </button>
    <div class="hidden md:flex md:flex-no-wrap md:block">
      <NavButton target="#about" :active="activeSection === 'about'">
        {{ $t('nav.about') }}
      </NavButton>
      <NavButton target="#experience" :active="activeSection === 'experience'">
        {{ $t('nav.experience') }}
      </NavButton>
      <NavButton target="#contact" :active="activeSection === 'contact'">
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
