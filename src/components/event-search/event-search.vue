<template>
  <div class="event-search">
    <a href="movie.html" class="event-search__image _ibg">
<!--      <img src="./img/posters/poster_1.jpg" alt="">-->
    </a>
    <div class="event-search__info">
      <div class="event-search__genre">{{ event.type }}</div>
      <div class="event-search__name">{{ event.name }}</div>
      <div class="event-search__description">{{event.shortDescription}}</div>
      <router-link :to="`event/${event.id}`" class="event-search__more">SHOW MORE</router-link>
      <div class="event-search__bottom">
        <div class="event-search__schedule">
          <div class="event-search__title">Date and time</div>
          <div class="event-search__times">
            <div class="event-search__time">{{ event.time }}</div>
            <div class="event-search__time">{{formatDate(event.startedAt)}}</div>
          </div>
        </div>
        <div class="event-search__duration">
          <div class="event-search__title">{{ event.runningTime }} minutes</div>
          <div class="event-search__icon">{{event.constraints}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import {formatDate} from "../../utiities/functions/formatDate";

const props = defineProps(
    {
      event: {
        type: Object as PropType<IEvent>,
        required: true
      }
    })
</script>

<style lang="scss">
@import "event-search";
</style>