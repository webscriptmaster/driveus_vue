<template>
  <Header :title="item.name" />

  <Split :title="item.name" :slogan="item.slogan" withoutBorder description="">
    <template v-slot:extra-content>
      <p class="font-medium mt-5">{{ item.label }}</p>
      <p>{{ item.description }}</p>
    </template>
    <img :src="item.imgSrc" class="w-full h-full object-contain max-w-xl mx-auto" />
  </Split>

  <Container>
    <img :src="item.images[index]" alt="" class="w-full h-full object-cover" />
    <div class="flex items-center mt-4">
      <button class="btn btn-lg btn-light" @click="prev">&larr;</button>
      <button class="btn btn-lg btn-light ml-2 mr-auto" @click="next">&rarr;</button>
      <div class="flex items-center space-x-2">
        <button
          v-for="(image, i) in item.images"
          :key="i"
          class="w-3 h-3 rounded-full transition"
          :class="{ 'bg-gray-900': i === index, 'bg-gray-300': i !== index }"
          @click="jumpTo(i)"
        />
      </div>
    </div>
    <div class="border-b border-accent-darkest mt-12"></div>
  </Container>
  <Container>
    <h2 class="text-center">Booking Details</h2>
    <p class="max-w-4xl mx-auto text-center">
      We accept all major credit cards (VISA, MasterCard and American Express) for in-car mobile
      payment. GST is no longer included in prices, it is calculated and charged separately.
    </p>
    <div class="bg-accent-darkest text-lg text-white px-8 py-4 divide-y-2 max-w-4xl mx-auto mt-12">
      <div class="flex justify-between py-6">
        <span>Hourly Rate</span>
        <span class="font-medium">$130/h plus GST</span>
      </div>
      <div class="flex justify-between py-6">
        <span>Daily Rate (8 Hours)</span>
        <span class="font-medium">Inquire</span>
      </div>
      <div class="flex justify-between py-6">
        <span
          >Vancouver International (YVR) to <br />
          Downtown or Downtown to <br />
          Vancouver International (YVR)</span
        >
        <span class="font-medium">$130 plus GST</span>
      </div>
    </div>
    <div class="grid place-items-center mt-12">
      <router-link to="/contact" class="btn btn-xl btn-light"> Book this car </router-link>
    </div>
  </Container>
</template>

<script>
import Split from "../../components/layouts/Split.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "../../components/base/Header.vue";
import { LeftArrowIcon, RightArrowIcon } from "@heroicons/vue/solid";
import { cars } from "@/data";

export default {
  components: { Header, Container, Split, LeftArrowIcon, RightArrowIcon },
  data() {
    return {
      cars,
      item: cars.find((item) => item.id === this.$route.params.id),
      index: 0,
    };
  },
  watch: {
    $route() {
      this.item = cars.find((item) => item.id === this.$route.params.id);
    },
  },
  methods: {
    prev() {
      this.index = (this.index - 1 + this.item.images.length) % this.item.images.length;
    },
    next() {
      this.index = (this.index + 1) % this.item.images.length;
    },
    jumpTo(index) {
      this.index = index;
    },
  },
};
</script>
