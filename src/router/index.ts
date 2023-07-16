import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@features/home/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      label: "Home",
    },
  },
  {
    path: "/about1",
    name: "about1",
    component: () =>
      import(
        /* webpackChunkName: "about1" */ "@features/about/views/Index.vue"
      ),
    meta: {
      label: "About1",
    },
  },
  {
    path: "/about2",
    name: "about2",
    component: () =>
      import(
        /* webpackChunkName: "about2" */ "@features/about2/views/Index.vue"
      ),
    meta: {
      label: "About2",
    },
  },
  {
    path: "/about3",
    name: "about3",
    component: () =>
      import(
        /* webpackChunkName: "abou3" */ "@features/about3/views/Index.vue"
      ),
    meta: {
      label: "About3",
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
