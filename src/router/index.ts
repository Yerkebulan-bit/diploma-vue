import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import EventView from "@/views/EventView.vue";
import ContactView from "@/views/ContactView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
    },
    {
      path: '/event/:id',
      name: 'event',
      component: EventView,
    },
    {
      path: '/contact',
      name: 'event',
      component: ContactView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
