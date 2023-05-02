<template>
  <div class="event-search">
    <a href="movie.html" class="event-search__image _ibg"><img src="./img/posters/poster_1.jpg" alt=""></a>
    <div class="event-search__info">
      <div class="event-search__genre">FOOD FESTIVAL</div>
      <div class="event-search__name">Brewery Tour And Tasting at Brewery Lemke</div>
      <div class="event-search__description">During the 2-hour guided tour through our brewery in Berlin-Mitte, we will show you how much work, but also the spirit of research and invention are behind the brewing process. You will follow the path of the beer from the brewhouse to bottling.</div>
      <a href="" class="event-search__more">SHOW MORE</a>
      <div class="event-search__bottom">
        <div class="event-search__schedule">
          <div class="event-search__title">Date and time</div>
          <div class="event-search__times">
            <div class="event-search__time">10:00 am</div>
            <div class="event-search__time">23 February 2023</div>
          </div>
        </div>
        <div class="event-search__duration">
          <div class="event-search__title">110 minutes</div>
          <div class="event-search__icon">18</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {IEvent} from "@/domain/interfaces/response/event.interface";

const props = defineProps(
    {
      event: Object as PropType<IEvent>
    })
</script>

<style lang="scss">
@import "event-search";
</style>