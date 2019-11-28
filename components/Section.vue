<template>
  <section
    :id="id"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0, 1] }
    }"
    class="px-4 sm:px-8"
    :class="[id, { right }]"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.$bus.$emit('waypoint-change', this.id)
      }
    }
  }
}
</script>

<style lang="scss">
section {
  @apply relative h-full flex items-center;
  min-height: calc(100vh - 4rem);
}

@media (min-width: 768px) {
  section {
    @apply px-8;
    background-repeat: no-repeat;
    background-position: 90% 80%;
    background-size: 30%;

    &.right {
      @apply justify-end;
      background-position: 10% 50%;
      background-size: 30%;
    }

    &.home {
      background-image: url('/illustrations/web_developer.svg');
    }

    &.about {
      background-image: url('/illustrations/innovative.svg');
    }

    &.experience {
      background-image: url('/illustrations/laravel_and_vue.svg');
    }

    &.contact {
      background-image: url('/illustrations/manage_chats.svg');
    }

    .section__content {
      @apply w-1/2 px-8 text-justify;
    }
  }
}
</style>
