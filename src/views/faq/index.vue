<template>
  <Header title="frequently asked questions" />

  <Container>
    <div class="space-y-6">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="grid md:grid-cols-2 md:gap-8 pb-8 border-accent-darkest"
        :class="{ 'border-b': index !== faqs.length - 1 }"
      >
        <p class="text-lg font-medium mb-4">{{ faq.question }}</p>
        <p>
          {{ faq.answer }}
        </p>
      </div>
    </div>
  </Container>

  <CarCTA />
</template>

<script>
import CarCTA from "../../components/layouts/cta/CarCTA.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const faqs = [
  {
    question: "Do you accept credit cards?",
    answer:
      "Yes! DriveUs accepts all major credit cards (VISA, MasterCard and American Express). All of our vehicles accept secure mobile payments - allowing you to complete your trip and receive a receipt on the spot.",
  },
  {
    question: "Is there an automatic 15% tip or gratuity added to the hourly rate?",
    answer:
      "No. DriveUs doesn’t believe in automatic gratuities. Recognition of service through gratuity can be done at the passenger’s discretion.",
  },
  {
    question: "Are there other hidden fees or fuel surcharge?",
    answer:
      "No. Our prices are all inclusive - including fuel, insurance and driver. We don’t believe in hidden fees.",
  },
  {
    question: "Are the cars pictured on the website the actual cars available to your customers?",
    answer:
      "Yes! All of the vehicles showcased on our website are our own vehicles. We always provide the exact vehicle reserved. We don’t believe in bait and switch … if you pay for a 2021 Cadillac Escalade ESV Sport that’s exactly what will show up. ",
  },
  {
    question: "Can we smoke inside the vehicle?",
    answer:
      "No. All of our vehicles are strictly non-smoking. However, we are happy to accommodate rest stops for a smoke break, if required.",
  },
  {
    question: "Do your driver’s speak any other languages?",
    answer:
      "Yes! Several of our drivers are fluent in other languages. Simply advise us when making a reservation and we will do our best to accommodate.",
  },
  {
    question: "Do you offer party buses or stretch limousines?",
    answer: "No. We are, however, happy to provide recommendations within Vancouver.",
  },
  {
    question: "Will the car and driver be on-time?",
    answer:
      "Yes! Our drivers arrive 10-15 minutes prior to the scheduled trip to ensure prompt and timely departure.",
  },
  {
    question: "Will my chauffeur respect my privacy and confidentiality?",
    answer:
      "Absolutely! Passenger comfort and confidentially are paramount. All our drivers have non-disclosure agreements that cover our passengers. What happens in the car remains in the car.",
  },
  {
    question: "Can we drink alcohol in the vehicle?",
    answer: "No. It is against the law in British Columbia to consume alcohol in a vehicle.",
  },
  {
    question: "Can I listen to my own music or playlist in the car?",
    answer:
      "Absolutely! All cars offer Bluetooth and Apple CarPlay audio connections. Our drivers are more than happy to connect your device(s) during your trip.",
  },
];

export default {
  components: {
    Header,
    Container,
    CarCTA,
  },
  data() {
    return {
      faqs,
    };
  },
};
</script>
