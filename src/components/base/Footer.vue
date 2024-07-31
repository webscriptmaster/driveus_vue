<template>
  <footer class="bg-accent-darkest text-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8">
        <router-link to="/">
          <img class="h-16 w-auto" src="@/assets/footer-logo.svg" alt="Company Name" />
        </router-link>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <p class="mb-3 text-white font-medium text-lg">Navigation</p>
            <div class="space-y-1">
              <router-link
                v-for="route in navigation"
                :key="route.label"
                class="
                  block
                  with-underline
                  w-max
                  transition
                  hover:text-accent
                  uppercase
                  tracking-wider
                  font-light
                  text-sm
                "
                :to="route.path"
                >{{ route.label }}</router-link
              >
            </div>
          </div>
          <div>
            <p class="mb-3 text-white font-medium text-lg">Contact Us</p>
            <div class="space-y-4 font-light tracking-wide text-sm">
              <address class="not-italic">
                2604-1011 W. Cordova St <br />
                Vancouver, BC V6C-0B2.
              </address>
              <a href="tel:+1-778-868-8000" class="block with-underline w-max hover:text-accent"
                >+1-778-868-8000
              </a>
              <a href="mailto:info@driveus.ca" class="block with-underline w-max hover:text-accent"
                >info@driveus.ca</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-200 md:flex md:items-center md:justify-between">
        <p class="text-base text-gray-400">Drive Us &copy; 2022</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
};
</script>
