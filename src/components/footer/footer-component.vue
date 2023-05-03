<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__body">
        <div class="footer__column" v-for="navigationBlock in navigation" :key="navigationBlock.id">
          <div class="footer__title">{{ navigationBlock.title }}</div>
          <ul class="footer__list">
            <li v-for="navigationItem in navigationBlock.items" :key="navigationItem.id">
              <router-link :to="navigationItem.route" class="footer__link">{{ navigationItem.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__title">Социальные сети</div>
          <ul class="footer__list footer__socials">
            <li v-for="social in socials" :key="social.id">
              <a :href="social.link" class="footer__link">
                <span class="footer__icon">
                <img :src="imagePath(social.iconPrefix)" alt="">
              </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type {INavigationBlock} from "@/domain/interfaces/INavigationBlock.interface";
import type {ISocial} from "@/domain/interfaces/ISocial.interface";

const navigation: INavigationBlock[] = [
  {
    id: 1,
    title: 'О Нас',
    items: [
      {
        id: 1,
        title: 'Об организации',
        route: '/',
      },
      {
        id: 1,
        title: 'Вопрос/ответ',
        route: '/',
      },
      {
        id: 1,
        title: 'Связаться с нами',
        route: '/',
      }
    ]
  },
  {
    id: 1,
    title: 'Главная информация',
    items: [
      {
        id: 1,
        title: 'Мероприятия',
        route: '/',
      },
      {
        id: 1,
        title: 'Блог',
        route: '/',
      },
      {
        id: 1,
        title: 'Новости',
        route: '/',
      }
    ]
  },
]

const socials: ISocial[] = [
  {
    id: 2,
    iconPrefix: 'facebook',
    link: '/',
  },
  {
    id: 1,
    iconPrefix: 'instagram',
    link: '/',
  },

  {
    id: 3,
    iconPrefix: 'tiktok',
    link: '/',
  },
  {
    id: 4,
    iconPrefix: 'youtube',
    link: '/',
  },
]

const imagePath = (imageName: string) => {
  return new URL(`../../assets/icons/${imageName}.svg`, import.meta.url).href
}
</script>

<style lang="scss">
@import "footer-component";
</style>