<template>
  <Header title="our cars" />

  <Container>
    <div class="">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="mb-4">Driven to exceed your expectation</h2>
        <p class="text-lg text-gray-500 mx-auto max-w-md md:max-w-full">
          DriveUs is Vancouver’s Premier Luxury Chauffeured Car Service. We offer the latest and
          most luxurious vehicles driven by professionally trained and locally knowledgeable
          chauffeurs.
        </p>
      </div>
      <div class="mt-12 grid lg:grid-cols-3 gap-8 pt-12 border-t border-accent-darkest">
        <div class="text-center flex flex-col items-center">
          <img
            src="@/assets/images/caddy-left.png"
            alt="caddy"
            class="mix-blend-multiply max-w-lg object-cover w-full h-full"
          />
          <p class="font-medium text-lg">2022 Cadillac Escalade ESV Sport Platinum</p>
          <p class="mt-1">The Legend Reimagined, Again</p>
          <button class="mt-4 btn btn-xl btn-light">View this car</button>
        </div>
        <div class="text-center flex flex-col items-center">
          <img
            src="@/assets/images/caddy-left.png"
            alt="caddy"
            class="mix-blend-multiply max-w-lg object-cover w-full h-full"
          />
          <p class="font-medium text-lg">2022 Cadillac Escalade ESV Sport Platinum</p>
          <p class="mt-1">The Legend Reimagined, Again</p>
          <router-link to="/cars/caddy-escalade" class="mt-4 btn btn-xl btn-light"
            >View this car</router-link
          >
        </div>
        <div class="text-center flex flex-col items-center">
          <img
            src="@/assets/images/merc.png"
            alt="merc"
            class="max-w-lg object-cover w-full h-full"
          />
          <p class="font-medium text-lg">2018 Mercedes Benz S560</p>
          <p class="mt-1">The Most Technologically Advanced S Class Ever Built</p>
          <button class="mt-4 btn btn-xl btn-light">View this car</button>
        </div>
      </div>
    </div>
  </Container>

  <CarCTA />
</template>

<script>
import FullSplit from "../../components/layouts/FullSplit.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import CarCTA from "../../components/layouts/cta/CarCTA.vue";

export default {
  components: {
    Header,
    Container,
    FullSplit,
    CarCTA,
  },
};
</script>
