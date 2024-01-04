import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/PaginaMain"),
  },
  {
    path: "/crear",
    component: () => import("../components/CrearPersona"),
  },
  {
    path: "/mostrar",
    component: () => import("../components/MostrarTodos"),
  },
  {
    path: "/buscarID",
    component: () => import("../components/BuscarId"),
  },
  {
    path: "/editar/:ids-:nombres-:direcciones-:edades",
    name: "editar",
    props: true,
    component: () => import("../components/ActualizarPersona"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
