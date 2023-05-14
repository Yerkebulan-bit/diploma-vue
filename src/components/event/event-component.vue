<template>
  <div class="poster">
    <div class="poster__image _ibg">
      <img :src="'data:image/png;base64, ' + getImage(event.imageId)" alt="">
      <div class="poster__additional-info">
        <router-link :to="`event/${event.id}`" class="poster__btn"><i class="fa fa-play"></i></router-link>
        <router-link :to="`event/${event.id}`" href="movie.html" class="poster__more-info">Подробнее</router-link>
        <div class="poster__release-date">
          {{ formatDate(event.startedAt) + ' ' + event.time}}</div>
      </div>
    </div>
    <div class="poster__info">
      <div class="poster__name">{{ event.name }}</div>
      <div class="poster__rating">
        <i class="fa fa-star" v-for="rate in randomRating()"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {PropType} from "vue";
import {formatDate} from "../../utiities/functions/formatDate";
import {randomRating} from "../../utiities/functions/randomRating";
import {useStore} from "vuex";

const store = useStore()
const getImage = (imageId: string) => store.getters['file/getFile'](imageId) ? store.getters['file/getFile'](imageId).img : ''

const props = defineProps({
  event: {
    type: Object as PropType<IEvent>,
    required: true
  }
})



</script>

<style lang="scss">
@import "event-component";
</style>