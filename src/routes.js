import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/Home/Home.vue"),
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: () => import("./components/Movie/SingleMovie.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: routes,
});

export default router;
