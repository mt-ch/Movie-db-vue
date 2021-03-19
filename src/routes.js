import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/home/Home.vue"),
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: () => import("./components/movie/SingleMovie.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: routes,
});

export default router;
