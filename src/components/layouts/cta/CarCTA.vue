<template>
  <FullSplit class="bg-accent-dark" :flipped="true">
    <template v-slot:left>
      <h2 class="md:text-5xl mb-5">Book a car today</h2>
      <p>
        DriveUs is Vancouver’s Premier Luxury Chauffeured Car Service. We offer the latest and most
        luxurious vehicles driven by professionally trained and locally knowledgeable chauffeurs.
        <br /><br />
        Featuring Vancouver’s newest luxury fleet of sedans and SUV’s. We provide exceptional
        service from our team of professional chauffeurs. Call us today and set up an account. After
        all don’t you deserve the best.
      </p>
      <router-link to="/contact" class="btn btn-xl btn-light mt-6">Book a car</router-link>
    </template>
    <template v-slot:right>
      <img class="w-full h-full object-cover" src="@/assets/images/banner.png" alt="" />
    </template>
  </FullSplit>
</template>

<script>
import FullSplit from "../FullSplit.vue";
export default {
  components: { FullSplit },
};
</script>
