import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/home',
        name: 'home',
        component: HomeView
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/registro',
        name: 'registro',
        component: () =>
            import ( /* webpackChunkName: "registrarse" */ '../views/Registro.vue')
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: () =>
            import ( /* webpackChunkName: "usuarios" */ '../views/SesionUsuarios.vue')
    },
    {
        path: '/verhorarios',
        name: 'verhorarios',
        component: () =>
            import ( /* webpackChunkName: "horarios" */ '../views/VerHorarios.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router