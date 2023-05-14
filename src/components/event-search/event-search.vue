<template>
  <div class="event-search">
    <router-link :to="`event/${event.id}`" class="event-search__image _ibg">
      <img :src="'data:image/png;base64, ' + getImage(event.imageId)" alt="">
    </router-link>
    <div class="event-search__info">
      <div class="event-search__genre">{{ EventType.GENERAL }}</div>
      <div class="event-search__name">{{ event.name }}</div>
      <div class="event-search__description">{{event.shortDescription}}</div>
      <router-link :to="`event/${event.id}`" class="event-search__more">Подробнее</router-link>
      <div class="event-search__bottom">
        <div class="event-search__schedule">
          <div class="event-search__title">Дата и время</div>
          <div class="event-search__times">
            <div class="event-search__time">{{ event.time }}</div>
            <div class="event-search__time">{{formatDate(event.startedAt)}}</div>
          </div>
        </div>
        <div class="event-search__duration">
          <div class="event-search__title">{{ event.runningTime + ' ' + declination(event.runningTime, ['минута', 'минуты', 'минут'])}}</div>
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
import {useStore} from "vuex";
import {EventType} from "../../utiities/enums/event-type";
import {declination} from "@/utiities/functions/declination";

const store = useStore()
const getImage = (imageId: string) => store.getters['file/getFile'](imageId) ? store.getters['file/getFile'](imageId).img : ''
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