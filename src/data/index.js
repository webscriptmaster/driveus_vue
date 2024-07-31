import { getRoutes, getNavigation } from "@/data/utils";

export const SITE_PATH = "Project";

const MASTER_ROUTES = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/home"),
    hidden: false,
  },
  {
    path: "/cars",
    label: "cars",
    component: () => import("@/views/cars"),
    hidden: false,
  },
  {
    path: "/cars/:id",
    label: "cars",
    component: () => import("@/views/cars/[carId]"),
    hidden: false,
  },
  {
    path: "/services",
    label: "services",
    component: () => import("@/views/services"),
    hidden: false,
  },
  {
    path: "/faq",
    label: "faq",
    component: () => import("@/views/faq"),
    hidden: false,
  },
  {
    path: "/contact",
    label: "contact",
    component: () => import("@/views/contact"),
    hidden: false,
  },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);

const baseURL = "/driveus-website/";
export const cars = [
  {
    id: "caddy-escalade",
    name: "2022 Cadillac Escalade ESV Sport Platinum",
    label: "The Legend Reimagined, Again",
    description:
      "Custom ordered from Cadillac with Night Vision, Fridge/Freezer Centre console, 36 Speaker AKG Reference Audio System, Hyper Cruise and Augmented Reality Navigation.",
    slogan: "POWER AND SOPHISTICATION",
    imgSrc: baseURL + "cars/cadillac/index.png",
    images: [baseURL + "cars/cadillac/images/1.png", baseURL + "cars/cadillac/images/2.png"],
  },
];
