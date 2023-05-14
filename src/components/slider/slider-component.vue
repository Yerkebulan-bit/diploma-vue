<template>
  <div class="main-slider">
    <swiper-container class="main-slider__body" :slides-per-view="1" speed="450" loop="true" :pagination="{
      clickable: true,
      el: '.main-slider__pagination',
    }">
      <swiper-slide class="main-slider__slide" v-for="event in events" :key="event.id" :style="getBackgroundProperty(event.imageId)">
        <div class="main-slider__content _container">
          <div class="main-slider__info">
            <div class="main-slider__genre">
              {{ formatDate(event.startedAt) + ' ' + event.time }}
            </div>
            <div class="main-slider__name">{{ event.name }}</div>
            <div class="main-slider__description">{{ event.shortDescription }}</div>
          </div>
          <div class="main-slider__action">
            <div class="main-slider__icon">{{ event.constraints }}</div>
            <router-link :to="`event/${event.id}`" class="main-slider__button">
              <i class="fa fa-play"></i> Подробнее
            </router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    <div class="main-slider__pagination _container"></div>
  </div>

</template>

<script setup lang="ts">
import type {PropType} from "vue";
import {formatDate} from "@/utiities/functions/formatDate";
import {useStore} from "vuex";
import type {IEvent} from "@/domain/interfaces/response/event.interface";
const store = useStore()
const props = defineProps({
  events: Array as PropType<IEvent[]>
})
const getImage = (imageId: string) => store.getters['file/getFile'](imageId) ? store.getters['file/getFile'](imageId).img : ''

const getBackgroundProperty = (imageId: string) => {
  return `background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/png;base64,${getImage(imageId)}');`
}

</script>

<style lang="scss">
@import "slider-component";


</style>