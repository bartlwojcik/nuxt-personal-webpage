<template functional>
  <div class="flex mb-8 font-body">
    <div class="w-4 h-4 mt-2 mr-4 bg-accent"></div>
    <div>
      <h4 class="font-medium text-md sm:text-xl font-block">
        <span class="relative inline-block position"
          ><slot name="position"></slot
        ></span>
        at
        <span class="relative"><slot name="company"></slot></span>
      </h4>
      <p>
        <slot name="period"></slot>
      </p>
      <p>
        <slot name="desc"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceItem'
}
</script>
