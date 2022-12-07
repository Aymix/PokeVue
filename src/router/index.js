import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/pokemon-list",
    name: "ListPokemon",
    component: () => import("../pages/ListPokemon.vue")
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router
