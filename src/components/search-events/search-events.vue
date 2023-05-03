<template>
  <div class="schedule">
    <div class="schedule__container _container">
      <div class="schedule__search">
        <input type="text" placeholder="Find your event">
        <i class="fa fa-search"></i>
      </div>
      <div class="schedule__tabs schedule-tabs">
        <nav class="schedule-tabs__items">
          <button class="schedule-tabs__item _active" data-tab="#tab1">MON</button>
          <button class="schedule-tabs__item" data-tab="#tab2">TUES</button>
          <button class="schedule-tabs__item" data-tab="#tab3">WED</button>
          <button class="schedule-tabs__item" data-tab="#tab4">THURS</button>
          <button class="schedule-tabs__item" data-tab="#tab5">FRI</button>
          <button class="schedule-tabs__item" data-tab="#tab6">SAT</button>
          <button class="schedule-tabs__item" data-tab="#tab7">SUN</button>
        </nav>
        <div class="schedule-tabs__body">
          <div class="schedule-tabs__block _active" id="tab1">
            <event-search :event="event" v-for="event in searchEvents"></event-search>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import EventSearch from "@/components/event-search/event-search.vue";

const props = defineProps({
  searchEvents: Array as PropType<IEvent[]>
})
</script>

<style lang="scss">
@import "search-events";
</style>