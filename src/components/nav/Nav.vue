<template>
  <Popover
    class="fixed left-0 w-full top-0 z-20 transition-all"
    :class="top ? 'bg-transparent' : 'bg-accent-darkest'"
  >
    <div
      class="transition-all max-w-7xl mx-auto px-4 sm:px-6 border-b"
      :class="top ? '' : 'border-transparent'"
    >
      <div class="flex justify-between items-center py-6 lg:justify-start">
        <PopoverGroup as="nav" class="hidden lg:flex space-x-6 xl:space-x-7">
          <NavItem
            v-for="item in navigation"
            :path="item.path"
            :key="item.label"
            :dropdownItems="item.dropdownItems"
          >
            {{ item.label }}
          </NavItem>
        </PopoverGroup>
        <div class="flex justify-start lg:mx-auto">
          <router-link to="/">
            <span class="sr-only">Company Name</span>
            <div class="flex items-center">
              <img class="h-12 w-auto" src="@/assets/logo.svg" alt="Company Name" />
            </div>
          </router-link>
        </div>
        <div class="hidden justify-end items-center lg:flex">
          <a
            href="tel:+1-778-868-8000"
            class="
              block
              with-underline
              text-white
              w-max
              hover:text-accent
              tracking-widest
              font-light
              mr-4
            "
            >+1-778-868-8000
          </a>
          <router-link to="/contact" class="btn btn-xl"> Book a car </router-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <PopoverButton
            class="
              p-2
              inline-flex
              items-center
              justify-center
              text-white
              hover:text-gray-500
              transition
              hover:bg-white
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6 text-accent" aria-hidden="true" />
          </PopoverButton>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden"
      >
        <div
          class="
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-accent-darkest
            text-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <router-link to="/">
                <img class="h-9 w-auto" src="@/assets/logo.svg" alt="Company name" />
              </router-link>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    transition
                    hover:bg-accent-lightest
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6 text-accent" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <PopoverButton>
                  <router-link
                    v-for="item in navigation"
                    :key="item.label"
                    :to="item.path"
                    class="nav-item-mobile"
                  >
                    <span class="nav-item-mobile__text">{{ item.label }}</span>
                  </router-link>
                  <router-link to="/contact" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">book a car</span>
                  </router-link>
                </PopoverButton>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  <div class="nav-gap" />
</template>

<script>
import NavItem from "@/components/nav/NavItem.vue";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { navigation } from "@/data";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    NavItem,
  },
  data() {
    return {
      top: true,
    };
  },
  // listen to top of page to close nav
  mounted() {
    window.addEventListener("scroll", () => {
      this.top = window.scrollY < 200;
    });
  },
  setup() {
    return { navigation: navigation.filter((n) => !n.path.includes("contact")) };
  },
};
</script>
