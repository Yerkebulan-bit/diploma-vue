<template>
  <header class="header" ref="header" :class="{ _fixed: model.isFixed || $route.path === '/login' || $route.path === '/registration' || $route.path === '/confirm-code'  }">
    <div class="header__container _container">
      <div class="header__top">
        <a href="tel:+77002618520" class="header__contact">
          <span class="header__icon">
            <i class="icon-phone"></i>
          </span>
          <span class="header__phone">+ 7 700 261 8520</span>
        </a>
      </div>
      <div class="header__main">
        <div class="header__logo">
          <router-link to="/" class="header__image-wrapper">
            <img src="@/assets/img/logo/logo-no-background.svg" alt="Logo" />
          </router-link>
        </div>
        <div
          :class="['header__burger icon-menu', { _active: model.isOpenMenu }]"
          @click="viewModel.toggleMenu()"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header__menu" :class="{ _active: model.isOpenMenu }">
          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__item" v-for="item in model.navigation" :key="item.id">
                <router-link
                  @click="viewModel.toggleMenu()"
                  :to="item.route"
                  :class="['header__link', { _active: $route.path === item.route }]"
                  >{{ item.title }}</router-link
                >
              </li>
              <li class="header__item">
                <router-link
                  @click="viewModel.toggleMenu()"
                  :to="model.isAuth ? '/profile' : '/login'"
                  :class="['header__link', { _active: $route.path === '/profile' || $route.path === '/login' }]"
                  >{{ model.isAuth ? 'Профиль' : 'Войти' }}</router-link
                >
              </li>
              <li class="header__item" v-if="model.isAuth" @click="viewModel.toggleMenu()">
                <button class="header__link" @click="viewModel.logout()">Выйти</button>
              </li>
            </ul>
          </nav>
          <div class="header__socials">
            <div class="header__social" v-for="social in model.socials" :key="social.id">
              <a :href="social.link" class="header__social-link">
                <span class="header__social-icon">
                  <i :class="`icon-${social.icon}`"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import type { Ref } from 'vue'
import { HeaderModel } from '@/components/header/header-model'
import { HeaderViewModel } from '@/components/header/header-view-model'

const model: Ref<any> = ref(
  new HeaderModel({
    navigation: [
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
      },
    ],
    socials: [
      {
        id: 1,
        icon: 'instagram',
        link: 'https://www.instagram.com'
      },
      {
        id: 2,
        title: 'whatsapp',
        icon: 'whatsapp',
        link: 'https://www.whatsapp.com'
      },
      {
        id: 3,
        title: 'telegram',
        icon: 'telegram',
        link: 'https://www.telegram.com'
      }
    ]
  })
)
const header: Ref<any> = ref(null)
const viewModel: Ref<any> = ref(new HeaderViewModel(model.value))

onBeforeMount(() => {
  window.addEventListener('scroll', () => {
    viewModel.value.handleScroll(header.value.clientHeight)
  })
})
</script>

<style lang="scss">
@import 'header-component';
</style>
