<template>
  <div class="schedule">
    <div class="schedule__container _container">
      <div class="schedule__search">
        <input type="text" placeholder="Найди свое меропнриятие" v-model="searchValue" @input="$emit('inputSearch', searchValue)">
        <i class="fa fa-search"></i>
      </div>
      <div class="schedule__tabs schedule-tabs">
        <nav class="schedule-tabs__items">
          <button class="schedule-tabs__item" v-for="(value, key) in WeekDay" :class="{_active: key.toString() === filters.day}" @click="$emit('selectWeekDay', key)">
            {{value}}
          </button>
        </nav>
        <div class="schedule-tabs__body">
          <div class="schedule-tabs__block _active" id="tab1">
            <event-search v-for="event in (isShowMore ? events.slice(0, 4) : events)" :event="event" ></event-search>
          </div>
        </div>
        <div class="schedule__footer">
          <router-link to="/events" class="schedule__btn" v-if="events.length > 4 && isShowMore">Показать еще{{  }}</router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {PropType} from "vue";
import EventSearch from "@/components/event-search/event-search.vue";
import type {IFilters} from "@/domain/interfaces/response/filters.interface";
import {ref} from "vue";
import type { Ref } from 'vue'
import {WeekDay} from "@/utiities/enums/week-day";
const props = defineProps({
events: {
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
</script>

<style scoped>

</style>