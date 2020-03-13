<template>
  <div
    class="relative ml-10 lang-select"
    @mouseover="listVisible = true"
    @mouseleave="listVisible = false"
  >
    <NavButton>
      {{ $root.$i18n.locale.toUpperCase() }}
    </NavButton>
    <transition name="list">
      <ul
        v-if="listVisible"
        class="absolute w-full p-3 uppercase cursor-pointer lang-select__list"
        :class="{ 'bg-white': scrolled }"
      >
        <li
          v-for="locale in locales"
          :key="locale.code"
          class="relative mb-3 text-center lang-select__list--item"
        >
          <nuxt-link :to="switchLocalePath(locale.code)" class="relative z-10">
            {{ locale.code }}
          </nuxt-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import NavButton from '../NavButton'

export default {
  name: 'LangSelect',
  components: {
    NavButton
  },
  data() {
    return {
      scrolled: false,
      listVisible: false
    }
  },
  computed: {
    locales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
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

<style lang="scss" scoped>
.lang-select {
  &__list {
    &--item {
      &:before {
        content: '';
        position: absolute;
        bottom: -0.1em;
        left: 0;
        width: 70%;
        height: 100%;
        max-height: 0;
        background-color: theme('colors.accent');
        transition: max-height 0.3s;
      }

      &:hover:before {
        transition: max-height 0.3s;
        max-height: 1em;
      }
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
