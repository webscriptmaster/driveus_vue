<template>
  <Header title="services" />

  <Split
    class="pt-12"
    :flip="true"
    title="Executive Transportation"
    description="Your business deserves a professional car service to safely transport your employees and clients on time and in style.
<br /><br />
Our luxury fleet of chauffeur driven cars is available for corporate hospitality, conventions, and business meetings."
  >
    <img class="object-cover w-full h-full" src="@/assets/images/look-phone.png" />
  </Split>
  <Container>
    <div class="border-b border-accent-darkest"></div>
  </Container>

  <Split
    class="pt-12"
    title="Luxury Vancouver Airport Transfers"
    description="Your business deserves a professional car service to safely transport your employees and clients on time and in style.
<br /><br />
Our luxury fleet of chauffeur driven cars is available for corporate hospitality, conventions, and business meetings."
  >
    <img class="object-cover w-full h-full" src="@/assets/images/s560.png" />
  </Split>
  <Container>
    <div class="border-b border-accent-darkest"></div>
  </Container>

  <Split
    class="pt-12 pb-24"
    :flip="true"
    title="Chauffeured Tours"
    description="Explore the best that Vancouver and Whistler have to offer with our knowledgeable local chauffeurs."
  >
    <img class="object-cover w-full h-full" src="@/assets/images/door-open.png" />
  </Split>

  <CarCTA />
</template>

<script>
import CarCTA from "../../components/layouts/cta/CarCTA.vue";
import Container from "../../components/layouts/Container.vue";
import Split from "../../components/layouts/Split.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Split,
    Container,
    CarCTA,
  },
};
</script>
