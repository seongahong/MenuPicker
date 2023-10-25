import { createRouter, createWebHistory } from "vue-router";
import Main from "../../components/page/Main.vue";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: Main,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
