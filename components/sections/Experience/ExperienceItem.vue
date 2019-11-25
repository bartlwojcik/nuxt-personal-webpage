<template>
  <div class="flex mb-8 font-body">
    <div class="w-4 h-4 mt-2 mr-4 bg-orange-1"></div>
    <div>
      <h4 class="text-xl font-block font-medium">
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
