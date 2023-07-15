import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@features/home/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/center",
    name: "center",
    component: () =>
      import(
        /* webpackChunkName: "center" */ "@features/about/views/Index.vue"
      ),
  },
  {
    path: "/trainer",
    name: "trainer",
    component: () =>
      import(
        /* webpackChunkName: "trainer" */ "@features/about2/views/Index.vue"
      ),
  },
  {
    path: "/machine",
    name: "machine",
    component: () =>
      import(
        /* webpackChunkName: "machine" */ "@features/about3/views/Index.vue"
      ),
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
