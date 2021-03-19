import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import SingleMovie from "./components/Movie/SingleMovie.vue";
import Home from "./components/Home/Home.vue";

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
