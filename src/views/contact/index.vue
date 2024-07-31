<template>
  <Header title="contact us " />

  <Split
    title=""
    :flip="true"
    description="
    DriveUs is Vancouver’s Premier Luxury Chauffeured Car Service. We offer the latest and most luxurious vehicles driven by professionally trained and locally knowledgeable chauffeurs.
    <br/><br/>
    Featuring Vancouver’s newest luxury fleet of sedans and SUV’s. We provide exceptional service from our team of professional chauffeurs. Call us today and set up an account. After all don’t you deserve the best."
  >
    <img src="@/assets/images/contact.png" alt="contact us" class="w-full h-full object-cover" />
    <template v-slot:extra-content>
      <address class="not-italic mt-6">
        2604-1011 W. Cordova St <br />
        Vancouver, BC V6C-0B2.
      </address>
      <a class="mt-6 block tracking-widest hover:underline" href="tel:+1-778-868-8000"
        >+1-778-868-8000</a
      >
      <a class="mt-2 block tracking-widest hover:underline uppercase" href="mailto:info@driveus.ca"
        >info@driveus.ca</a
      >
      <div class="mt-4 flex items-center space-x-4">
        <a href="#" target="_blank">
          <img src="@/assets/facebook.svg" alt="facebook" class="w-6 h-6" />
        </a>
        <a href="#" target="_blank">
          <img src="@/assets/instagram.svg" alt="facebook" class="w-6 h-6" />
        </a>
      </div>
    </template>
  </Split>
</template>

<script>
import Split from "../../components/layouts/Split.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Split,
  },
};
</script>
