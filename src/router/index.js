import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MeeshoModuleRoutes from "../modules/meesho/router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
   ...MeeshoModuleRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
