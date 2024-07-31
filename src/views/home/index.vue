<template>
  <HeroImageOverlay>
    <div class="max-w-xl">
      <h1 class="text-accent-lightest leading-tight">vancouver’s premier Luxury car service</h1>
      <p class="text-accent-lightest mt-2">
        Professional team of chauffeurs providing exceptional services.
      </p>
      <router-link to="/cars" class="btn btn-xl mt-8">View cars</router-link>
    </div>
  </HeroImageOverlay>

  <!-- Split -->
  <Split
    title="what we do"
    description="
    DriveUs is Vancouver’s Premier Luxury Chauffeured Car Service. We offer the latest and most luxurious vehicles driven by professionally trained and locally knowledgeable chauffeurs.
    <br/><br/>
    Featuring Vancouver’s newest luxury fleet of sedans and SUVs. We provide exceptional service from our team of professional chauffeurs. Call us today and set up an account. After all, don’t you deserve the best?"
    :flip="true"
    :dark="true"
  >
    <img class="object-cover" src="@/assets/images/s560.png" alt="mercedes s560 driving on road" />
  </Split>

  <FeatureGridList
    title="Business Class"
    description="Featuring the most luxurious chauffeured automobiles Vancouver has to offer."
    :features="features"
  />
  <Container>
    <div class="border-t border-accent-darkest pt-12">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="mb-4">Driven to exceed your expectation</h2>
        <p class="text-lg text-gray-500 mx-auto max-w-md md:max-w-full">
          Professionally chauffeured luxury vehicles to transport you safely, confidentially and in
          grand style.
        </p>
      </div>
      <div class="mt-6 grid lg:grid-cols-3 gap-8">
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
          <button class="mt-4 btn btn-xl btn-light">View this car</button>
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

  <FullSplit class="bg-accent-darkest text-accent-lightest">
    <template v-slot:left>
      <h2 class="md:text-5xl text-white mb-5">guaranteed on time pick up</h2>
      <p>
        Professionally chauffeured luxury vehicles to transport you safely, confidentially and in
        grand style.
        <br /><br />
        We guarantee on time pick up or it’s free.
        <br />
        * Certain restrictions apply.
      </p>
    </template>
    <template v-slot:right>
      <img class="w-full h-full object-cover" src="@/assets/images/banner.png" alt="" />
    </template>
  </FullSplit>

  <Container>
    <h2 class="text-center max-w-2xl mx-auto">Our businesss is your comfort</h2>
    <div class="mt-6 grid lg:grid-cols-3 gap-8">
      <div class="text-center flex flex-col items-center">
        <img
          src="@/assets/images/look-phone.png"
          alt="man exiting car on phone"
          class="max-w-lg mb-4 h-64 object-cover w-full"
        />
        <p class="font-medium text-lg">Executive Transportation</p>
        <p class="mt-1">
          Allow us to transport your employees and clients in luxurious comfort you can trust.
        </p>
      </div>
      <div class="text-center flex flex-col items-center">
        <img
          src="@/assets/images/merc-behind.png"
          alt="merc from behind"
          class="max-w-lg mb-4 h-64 object-cover w-full"
        />
        <p class="font-medium text-lg">Luxury Vancouver Airport Transfers</p>
        <p class="mt-1">
          Relax and travel in style with our standard meet and greet at the airport or if you are
          departing from the greater Vancouver area, we will get you there on time and at ease.
        </p>
      </div>
      <div class="text-center flex flex-col items-center">
        <img
          src="@/assets/images/door-open.png"
          alt="chauffeur opening door"
          class="max-w-lg mb-4 h-64 object-cover w-full"
        />
        <p class="font-medium text-lg">Chauffeured Tours</p>
        <p class="mt-1">
          Explore the best that Vancouver and Whistler have to offer with our knowledgeable local
          chauffeurs.
        </p>
      </div>
    </div>
  </Container>

  <Container class="bg-accent-dark">
    <div class="text-center mb-4">
      <h2>You'll love drive us</h2>
      <p>See what our customers are saying.</p>
      <div class="flex items-center justify-between">
        <div class="hidden md:inline-flex">
          <button @click="prev" class="btn btn-light btn-xl mr-2">
            <ArrowLeftIcon class="w-4 h-4 text-white" />
          </button>
        </div>
        <div class="bg-white mt-10">
          <div class="p-6">
            <div
              class="p-8 w-full border border-accent-darkest text-center flex flex-col items-center"
            >
              <p class="font-medium text-lg">{{ reviews[curr].name }}</p>
              <p class="mt-1 max-w-4xl mx-auto">
                {{ reviews[curr].description }}
              </p>
              <div class="flex items-center space-x-1 mt-4">
                <StarIcon class="w-5 h-5" :class="reviews[curr].rating >= 1 && 'text-accent'" />
                <StarIcon class="w-5 h-5" :class="reviews[curr].rating >= 2 && 'text-accent'" />
                <StarIcon class="w-5 h-5" :class="reviews[curr].rating >= 3 && 'text-accent'" />
                <StarIcon class="w-5 h-5" :class="reviews[curr].rating >= 4 && 'text-accent'" />
                <StarIcon class="w-5 h-5" :class="reviews[curr].rating >= 5 && 'text-accent'" />
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:inline-flex">
          <button @click="next" class="btn btn-light btn-xl ml-2 hidden md:inline-flex">
            <ArrowRightIcon class="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center space-x-2 mt-6">
        <button
          v-for="(review, index) in reviews"
          @click="() => jumpTo(index)"
          :key="index"
          :class="`w-3 h-3 rounded-full ${index === curr ? 'bg-accent-darkest' : 'bg-gray-400'}`"
        ></button>
      </div>
      <div
        class="
          mt-12
          border-t-2 border-accent-darkest
          pt-12
          text-left
          flex
          items-center
          flex-col
          lg:flex-row
        "
      >
        <h3 class="mb-0">Enjoyed our service?</h3>
        <div
          class="
            flex flex-col
            items-center
            space-y-4
            mt-4
            lg:space-y-0 lg:flex-row lg:ml-auto lg:space-x-4
          "
        >
          <button class="btn btn-light btn-xl">Review us on google</button
          ><button class="btn btn-light btn-xl">Review us on facebook</button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import FullSplit from "../../components/layouts/FullSplit.vue";
import Container from "../../components/layouts/Container.vue";
import FeatureGridList from "../../components/layouts/features/FeatureGridList.vue";
import HeroImageOverlay from "../../components/layouts/hero/HeroImageOverlay.vue";
import Header from "@/components/base/Header";
import Split from "@/components/layouts/Split.vue";
import { StarIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";

const BASE_URL = "/driveus-website";
const getIconURL = (icon) => `${BASE_URL}/icons/${icon}.svg`;
const features = [
  {
    name: "Safety",
    icon: getIconURL("guard"),
    description:
      "Your comfort and safety are our priority - our licensed drivers are rigorously screened, knowledgeable and fully insured to get you to your final destination.",
  },
  {
    name: "No Hidden Fees",
    icon: getIconURL("money"),
    description:
      "We don't have an auto-gratuity of 15-20% or a fuel surcharge of 10-15%. No peak time surcharge and no cancellation fee if cancelled within 24 hours.",
  },
  {
    name: "Live GPS Tracking",
    icon: getIconURL("pin"),
    description: "All our vehicles are equipped with Live GPS Tracking.",
  },
  {
    name: "COVID-19",
    icon: getIconURL("sparkle"),
    description:
      "Our vehicles are sanitized after each ride with scent-free wipes. Complimentary masks and hand sanitizer. No-touch thermometers. Mandatory screening of drivers daily to ensure your safety.",
  },
  {
    name: "Complimentary Fiji Water",
    icon: getIconURL("droplet"),
    description:
      "All of our vehicles come stocked with complimentary bottles of Fiji water for your enjoyment.",
  },
  {
    name: "4K HD Dash Cameras",
    icon: getIconURL("cam"),
    description:
      "All vehicles have 4K HD Dash Cameras to ensure our chauffeurs follow our safety protocols.",
  },
  {
    name: "Dedicated Winter Tires",
    icon: getIconURL("cloud"),
    description:
      "All of our vehicles are equipped with dedicated winter tires during the winter months.",
  },
  {
    name: "Onboard Wi-Fi + Power",
    icon: getIconURL("wifi"),
    description:
      "All of our vehicles are equipped with onboard Wi-Fi and power for your convenience.",
  },
];

const reviews = [
  {
    name: "Michael L.",
    description: `I had never used a private car service before Drive Us, and I must say they left a very good impression and have set the standard. I requested both SUV's (which are both spacious and immaculately clean), to drive our wedding party and our parents. Both drivers were timely, communicative and very polite. If I had to imagine what having your own "Alfred" was like, I now know what it may have been like to be Bruce Wayne. Our driver Dorian, was great! I can't speak more highly of him. Thank you to Duke and the team at DriveUs for helping to make our wedding day a success!`,
    rating: 5,
  },
  {
    name: "Michael J.",
    description: `I had used a private car service before Drive Us, and I must say they left a very good impression and have set the standard. I requested both SUV's (which are both spacious and immaculately clean), to drive our wedding party and our parents. Both drivers were timely, communicative and very polite. If I had to imagine what having your own "Alfred" was like, I now know what it may have been like to be Bruce Wayne. Our driver Dorian, was great! I can't speak more highly of him. Thank you to Duke and the team at DriveUs for helping to make our wedding day a success!`,
    rating: 5,
  },
  {
    name: "Bob B.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam soluta nesciunt magnam fugiat consectetur ut dignissimos eius minima quisquam, error molestias optio nostrum aut nisi quis accusamus voluptate sequi, ipsa sint, ab corporis? Omnis dolore voluptate rerum repellendus quibusdam vel expedita quam, molestiae optio incidunt distinctio, deserunt aspernatur velit.`,
    rating: 4,
  },
];

export default {
  components: {
    Header,
    Split,
    HeroImageOverlay,
    FeatureGridList,
    Container,
    FullSplit,
    StarIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      features,
      reviews,
      curr: 0,
    };
  },
  methods: {
    next() {
      this.curr = (this.curr + 1) % this.reviews.length;
    },
    prev() {
      this.curr = (this.curr - 1 + this.reviews.length) % this.reviews.length;
    },
    jumpTo(index) {
      this.curr = index;
    },
  },
};
</script>
