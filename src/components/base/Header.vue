<template>
  <div class="relative">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="@/assets/images/hero-image.png" alt="" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-accent-darkest mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <Container>
      <div class="pb-8 pt-24">
        <h1 class="text-white max-w-5xl">
          {{ title }}
        </h1>
        <p v-if="description" class="mt-6 text-xl text-indigo-100 max-w-3xl">
          {{ description }}
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/layouts/Container.vue";

export default {
  components: { Container },
  name: "Header",
  props: {
    title: String,
    description: String,
  },
};
</script>
