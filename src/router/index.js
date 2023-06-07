import { createRouter, createWebHistory } from "vue-router";
import SupplierModuleRoutes from '../modules/meesho/router.js'
const routes = [
  ...SupplierModuleRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
