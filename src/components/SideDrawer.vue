<template>
  <aside class="fixed top-0 left-0 z-20 w-full h-full px-4 bg-white">
    <div class="flex justify-end h-16">
      <button @click="closeDrawer">
        <font-awesome-icon
          :icon="['fas', 'long-arrow-alt-right']"
          class="text-xl icon"
        />
      </button>
    </div>
    <slot :closeDrawer="closeDrawer" />
  </aside>
</template>

<script>
export default {
  name: 'SideDrawer',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    closeDrawer() {
      this.$bus.$emit(`toggle-${this.name}`, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1.5rem;
}
</style>
