<template>
  <main class="lg:relative">
    <div
      :class="`${leftClass} mx-auto max-w-7xl md:pl-4 w-full pt-16 pb-20 lg:py-24 lg:flex ${
        flipped && 'justify-end'
      }
      `"
    >
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <slot name="left"></slot>
      </div>
    </div>
    <div
      :class="`
        ${rightClass}
        relative
        w-full
        h-72
        lg:h-96
        lg:absolute lg:inset-y-0 ${flipped ? 'lg:left-0' : 'lg:right-0'} lg:w-1/2 lg:h-full
        
      `"
    >
      <slot name="right"></slot>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    flipped: {
      type: Boolean,
      default: false,
    },
    leftClass: {
      type: String,
      default: "",
    },
    rightClass: {
      type: String,
      default: "",
    },
  },
};
</script>
