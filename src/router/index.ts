import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/registration/RegistrationView.vue')
    },
    {
      path: '/event/:id',
      name: 'event',
      component: () => import('@/views/event/EventView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/EventsView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/profile/ProfileView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/organization',
      name: 'organization',
      component: () => import('@/views/OrganizationProfileView.vue')
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: () => import('@/views/FaqsView.vue')
    },
    {
      path: '/confirm-code',
      name: 'confirm-code',
      component: () => import('@/views/confirm-code/confirm-code.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
