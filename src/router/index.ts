import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/features/home/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/features/about/views/AboutView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
