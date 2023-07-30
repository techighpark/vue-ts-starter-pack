import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@features/home/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "",
      label: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName: "about1" */ "@features/about/views/Index.vue"
      ),
    meta: {
      title: "About - ",
      label: "About",
    },
  },
  {
    path: "/traniner",
    name: "traniner",
    component: () =>
      import(
        /* webpackChunkName: "about2" */ "@features/about2/views/Index.vue"
      ),
    meta: {
      title: "Traniner - ",
      label: "Trainer",
    },
  },
  {
    path: "/center",
    name: "center",
    component: () =>
      import(
        /* webpackChunkName: "abou3" */ "@features/about3/views/Index.vue"
      ),
    meta: {
      title: "Center - ",
      label: "Center",
    },
  },
  {
    path: "/workout",
    name: "workout",
    component: () =>
      import(
        /* webpackChunkName: "abou3" */ "@features/about3/views/Index.vue"
      ),
    meta: {
      title: "Workout - ",
      label: "Workout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(_, __, ___) {
  //   return { top: 0, behavior: "smooth" };
  // },
});

export default router;
