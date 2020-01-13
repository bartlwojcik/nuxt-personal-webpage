<template>
  <div class="loading-screen">
    <div class="spinner">SPINNER</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$spinner-size: 2em;

.loading-screen {
  @apply w-full min-h-screen flex justify-center items-center;
}

.spinner {
  width: $spinner-size;
  height: $spinner-size;
  position: relative;
  color: transparent;
  pointer-events: none;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: $spinner-size;
    height: $spinner-size;
    border: 4px solid theme('colors.orange-1');
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    animation: spin 0.5s infinite linear;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
