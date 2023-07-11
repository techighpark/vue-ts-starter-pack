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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "center" */ "@features/about/views/Index.vue"
      ),
  },
  {
    path: "/trainer",
    name: "trainer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "trainer" */ "@features/about2/views/Index.vue"
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
