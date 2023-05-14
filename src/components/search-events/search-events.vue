<template>
  <div class="schedule">
    <div class="schedule__container _container">
      <div class="schedule__search">
        <input type="text" placeholder="Найди свое меропнриятие" v-model="searchValue" @input="$emit('inputSearch', searchValue)">
        <i class="fa fa-search"></i>
      </div>
      <div class="schedule__tabs schedule-tabs">
        <nav class="schedule-tabs__items">
          <button class="schedule-tabs__item" v-for="(value, key) in WeekDay" :class="{_active: key === filters.day}" @click="$emit('selectWeekDay', key)">
            {{value}}
          </button>
        </nav>
        <div class="schedule-tabs__body">
          <div class="schedule-tabs__block _active" id="tab1">
            <event-search :event="event" v-for="event in (isShowMore ? searchEvents.slice(0, 4) : searchEvents)"></event-search>
          </div>
        </div>
        <div class="schedule__footer">
          <router-link to="/events" class="schedule__btn" v-if="searchEvents.length > 4 && isShowMore">Показать еще{{  }}</router-link>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import EventSearch from "@/components/event-search/event-search.vue";
import {defineProps, ref, watch} from "vue";
import type { Ref } from 'vue'
import {WeekDay} from "@/utiities/enums/week-day";
import type {IFilters} from "@/domain/interfaces/response/filters.interface";
import router from "../../router";

const props = defineProps({
  searchEvents: {
    type: Array as PropType<IEvent[]>,
    required: true
  },
  filters: {
    type: Object as PropType<IFilters>,
    required: true
  },
  isShowMore: {
    type: Boolean,
    default: false
  }
})

const searchValue: Ref<string> = ref('')

watch(() => props.searchEvents, () => {
  searchValue.value = props.filters.search
})
</script>

<style lang="scss">
@import "search-events";
</style>