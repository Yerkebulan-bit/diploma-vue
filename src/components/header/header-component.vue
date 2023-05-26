<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__contact">
        <a href="tel:+77002871565" class="header__phone">
          <span class="header__icon">
            <img src="../../assets/icons/phone.svg" alt="" />
          </span>
          +7 700 287 1565
        </a>
      </div>
      <div class="header__body">
        <div class="header__logo">
          <router-link to="/" class="header__logo">
            <img src="../../assets/img/logo/logo-no-background.svg" alt="" />
          </router-link>
        </div>
        <button class="menu__icon icon-menu" @click="openMenu()" :class="{ _active: isOpenMenu }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="header__menu menu" :class="{ _active: isOpenMenu }">
          <nav class="menu__nav">
            <ul class="menu__list">
              <li v-for="navigation in navigations" :key="navigation.id">
                <router-link
                  :to="navigation.route"
                  :class="{ _active: navigation.isActive }"
                  class="menu__link"
                  >{{ navigation.title }}</router-link
                >
              </li>
              <li>
                <router-link :to="isAuth ? (userType === 'client' ? '/profile' : '/organization') : '/login'" class="menu__link">{{
                  isAuth ? 'Профиль' : 'Войти'
                }}</router-link>
              </li>
              <li>
                <button v-if="isAuth" class="menu__link" @click="logout()">Выйти</button>
              </li>
            </ul>
            <ul class="menu__social">
              <li v-for="social in socials" :key="social.id">
                <a class="menu__social-link"
                  ><span :class="`icon-${social.iconPrefix}` ? social.iconPrefix : ''"></span
                ></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { INavigation } from '@/domain/interfaces/INavigation.interface'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { ISocial } from '@/domain/interfaces/ISocial.interface'
import {useStore} from "vuex";
const navigations: Ref<INavigation[]> = ref([
  {
    id: 1,
    title: 'Главная',
    route: '/',
    isActive: true
  },
  {
    id: 2,
    title: 'Мероприятия',
    route: '/events',
    isActive: false
  },
  {
    id: 3,
    title: 'Новости',
    route: '/news',
    isActive: false
  }
])

const socials: Ref<ISocial[]> = ref([
  {
    id: 1,
    iconPrefix: 'instagram',
    link: 'https://www.instagram.com'
  }
])

const store = useStore()
const isOpenMenu: Ref<boolean> = ref(false)

const openMenu = () => (isOpenMenu.value = !isOpenMenu.value)

const isAuth = computed(() => store.state.auth.access_token)
const userType = computed(() => store.state.auth.userType)
const logout = () => store.dispatch('auth/logout')
</script>

<style lang="scss">
@import 'header-component';
</style>
