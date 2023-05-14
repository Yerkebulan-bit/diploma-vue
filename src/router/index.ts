import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/registration',
      name: 'registration',
        component: () => import('@/views/RegistrationView.vue'),
    },
    {
      path: '/event/:id',
      name: 'event',
        component: () => import('@/views/EventView.vue'),
    },
    {
      path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/events',
        name: 'events',
        component: () => import('@/views/EventsView.vue'),
    },
    {
        path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue'),
    },
{
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
}
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
