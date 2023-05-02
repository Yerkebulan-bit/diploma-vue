<template>
  <div class="poster">
    <div class="poster__image _ibg">
      <img src="./img/posters/poster_1.jpg" alt="">
      <div class="poster__additional-info">
        <router-link to="" class="poster__btn"><i class="fa fa-play"></i></router-link>
        <a href="movie.html" class="poster__more-info">Show more</a>
        <div class="poster__release-date">
          {{ formatDate(event.startedAt) + ' ' + event.time}}</div>
      </div>
    </div>
    <div class="poster__info">
      <a href="" class="poster__name">{{ event.name }}</a>
      <div class="poster__rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {PropType} from "vue";
import {formatDate} from "../../utiities/functions/formatDate";

const props = defineProps({
  event: Object as PropType<IEvent>
})


</script>

<style lang="scss">
@import "event-component";
</style>