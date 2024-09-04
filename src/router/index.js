import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/producto/:id',
      name: 'producto',
      component: () => import('../views/ProductoView.vue'),
      props: (route) =>{
        return{
          id: Number(route.params.id),
          nombre: "Desayunos",
          descripcion: "Contamos con desayunos nutritivos y deliciosos",
          precio: 2000,
          cantidad: "Para dos personas"
        }
      },
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    }
  ]
})

export default router
