import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/kategorie/:category",
    name: "Category",
    component: () => import("../views/Category.vue")
  },
  {
    path: "/suche/:searchTerm",
    name: "Suche",
    component: () => import("../views/SearchResults.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
