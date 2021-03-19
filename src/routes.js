import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import SingleMovie from "./components/movie/SingleMovie.vue";
import Home from "./components/home/Home.vue";

const router = new VueRouter({
  // mode: "history",
  // linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: SingleMovie,
    },
  ],
});

export default router;
