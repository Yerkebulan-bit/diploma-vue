<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__body">
        <div
          class="footer__column"
          v-for="navigationBlock in model.navigation"
          :key="navigationBlock.id"
        >
          <div class="footer__title">{{ navigationBlock.title }}</div>
          <ul class="footer__list">
            <li v-for="navigationItem in navigationBlock.items" :key="navigationItem.id">
              <router-link :to="navigationItem.route" class="footer__link">{{
                navigationItem.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__title">Социальные сети</div>
          <ul class="footer__list footer__socials">
            <li v-for="social in model.socials" :key="social.id">
              <a :href="social.link" class="footer__link">
                <span class="footer__icon">
                  <i :class="`icon-${social.icon}`"></i>
                </span>
                <span class="footer__value">
                  {{ social.title }}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__title">Никакого спама, только полезное</div>
          <form @submit.prevent="viewModel.subscribe()" class="footer__form">
            <input type="email" v-model="model.email" placeholder="Введите email" class="footer__input" />
            <button class="footer__button" type="submit">Подписаться</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { FooterModel } from '@/components/footer/footer-model'
import {FooterViewModel} from "@/components/footer/footer-view-model";

const model: Ref<any> = ref(
  new FooterModel({
    navigation: [
      {
        id: 1,
        title: 'О Нас',
        items: [
          {
            id: 1,
            title: 'Главная',
            route: '/'
          },
          {
            id: 2,
            title: 'Вопрос/ответ',
            route: '/faqs'
          },
          {
            id: 3,
            title: 'Связаться с нами',
            route: '/contact'
          }
        ]
      },
      {
        id: 1,
        title: 'Главная информация',
        items: [
          {
            id: 1,
            title: 'Новости',
            route: '/news'
          },
          {
            id: 3,
            title: 'Мероприятия',
            route: '/events'
          },

        ]
      }
    ],

    socials: [
      {
        id: 1,
        icon: 'instagram',
        title: 'Instagram',
        link: 'https://www.instagram.com'
      },
      {
        id: 2,
        icon: 'whatsapp',
        title: 'Whatsapp',
        link: 'https://www.whatsapp.com'
      },
      {
        id: 3,
        icon: 'telegram',
        title: 'Telegram',
        link: 'https://www.telegram.com'
      }
    ]
  })
)

const viewModel: Ref<FooterViewModel> = ref(new FooterViewModel(model))
</script>

<style lang="scss">
@import 'footer-component';
</style>
