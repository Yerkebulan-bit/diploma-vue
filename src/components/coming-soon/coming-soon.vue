<script setup lang="ts">
import type { PropType } from 'vue'
import type { IEvent } from '@/domain/interfaces/response/event.interface'
import { formatDateWithYear } from '../../utiities/functions/formatDate'
import { useStore } from 'vuex'

defineProps({
  comingEvents: Array as PropType<IEvent[]>
})

const store = useStore()
const getImage = (imageId: string) =>
  store.getters['file/getFile'](imageId) ? store.getters['file/getFile'](imageId).img : ''
</script>

<template>
  <div class="coming-soon">
    <div class="coming-soon__container">
      <div class="coming-soon__main _container">
        <div class="coming-soon__header">
          <h1 class="coming-soon__title main-title">Предстоящие мероприятия</h1>
        </div>
        <swiper-container
          class="coming-soon__swiper"
          thumbs-swiper=".coming-soon__thumbs"
          slides-per-view="1"
          lazy="true"
          speed="400"
          effect="fade"
          space-between="30"
        >
          <swiper-slide
            v-for="event in comingEvents"
            :key="event.id"
            class="coming-soon__slide main-slide"
          >
            <div class="main-slide__content">
              <div class="main-slide__info">
                <div class="main-slide__main">
                  <div class="main-slide__type">{{ event.type }}</div>
                  <h2 class="main-slide__title">{{ event.name }}</h2>
                  <div class="main-slide__group">
                    <div class="main-slide__rating" v-if="event.rating">
                      <span class="main-slide__icon dark-yellow-text" v-for="_ in event.rating">
                        <i class="icon-star-full"></i>
                      </span>
                      <span class="main-slide__icon grey-text" v-for="_ in 5 - event.rating">
                        <i class="icon-star-full"></i>
                      </span>
                    </div>
                    <div class="main-slide__date">
                      <span class="main-slide__icon white-text">
                        <i class="icon-calendar"></i>
                      </span>
                      <div class="main-slide__date-text">
                        {{ formatDateWithYear(event.startedAt) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main-slide__description">{{ event.shortDescription }}</div>
                <router-link :to="`event/${event.id}`" class="main-slide__link">
                  Подробная информация
                  <div class="main-slide__icon">
                    <i class="icon-keyboard_arrow_right"></i>
                  </div>
                </router-link>
              </div>
              <div class="main-slide__image _ibg">
                <img :src="'data:image/png;base64, ' + getImage(event.imageId)" alt="" />
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
      <div class="coming-soon__bottom">
        <swiper-container
          class="coming-soon__thumbs _container"
          space-between="30"
          slides-per-view="6"
          speed="400"
          lazy="true"
          watch-slides-progress="true"
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 30
            }
          }"
        >
          <swiper-slide
            v-for="event in comingEvents"
            :key="event.id"
            class="coming-soon__thumb thumb-slide"
          >
            <div class="thumb-slide__content">
              <div class="thumb-slide__image _ibg">
                <img :src="'data:image/png;base64, ' + getImage(event.imageId)" alt="" />
              </div>
              <div class="thumb-slide__info">
                <div class="thumb-slide__name">{{ event.name }}</div>
                <div class="thumb-slide__date">{{ formatDateWithYear(event.startedAt) }}</div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'coming-soon';
</style>
