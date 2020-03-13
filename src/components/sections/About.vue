<template functional>
  <div class="px-4 section__content sm:px-0">
    <h2 class="mb-6 text-4xl font-display">{{ parent.$t('about.header') }}</h2>
    <p class="text-sm md:pr-12 width-full font-body">
      <!-- {{ parent.$t('about.content_old') }}<br />-->
      {{ parent.$t('about.content') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.section__content p {
  text-align: justify;
  white-space: pre-line;
}
</style>
