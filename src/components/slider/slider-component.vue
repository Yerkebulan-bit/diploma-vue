<template>
  <div class="main-slider">
    <swiper-container class="main-slider__body _swiper">
      <swiper-slide class="main-slider__slide" v-for="event in events" :key="event.id" :style="{}">
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
              <i class="fa fa-play"></i> Preview
            </router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import {formatDate} from "@/utiities/functions/formatDate";

const props = defineProps({
  events: Array as PropType<any>
})
</script>

<style lang="scss">
@import "slider-component";
</style>