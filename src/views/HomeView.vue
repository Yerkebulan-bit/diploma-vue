<template>
  <slider-component :events="mainEvents"></slider-component>
  <week-events :week-events="weekEvents"></week-events>
  <events-component :filters="filters" :events="events" @inputSearch="changeFilterSearch" @selectWeekDay="changeDayFilter" :is-show-more="true"></events-component>
<!--  <search-events :searchEvents="events" @inputSearch="changeFilterSearch" @selectWeekDay="changeDayFilter" :filters="filters" :is-show-more="true"></search-events>-->
</template>

<script setup lang="ts">
import WeekEvents from "@/components/week-events/week-events.vue";
import {computed, onBeforeMount, ref} from "vue";
import SliderComponent from "@/components/slider/slider-component.vue";
import {useStore} from "vuex";
import type { Ref } from 'vue'
import SearchEvents from "@/components/search-events/search-events.vue";
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {IFilters} from "@/domain/interfaces/response/filters.interface";
import EventsComponent from "@/components/events-component/events-component.vue";

const store = useStore()
const mainEvents = computed(() => store.getters["mainEvents/getMainEvent"])
const weekEvents = computed(() => store.getters["weekEvents/getWeekEvents"])
const events = computed(() => store.getters["searchEvents/getEvents"])
const filters: Ref<IFilters> = ref({
  offset: 0,
  limit: 20,
  search: "",
  day: "ALL",
})

const fetchMainEvents = async () => {
  await store.dispatch('mainEvents/fetchMainEvents')
}
const fetchWeekEvents = async () => {
  await store.dispatch('weekEvents/fetchWeekEvent')
}
const searchEvents = async () => {
  await store.dispatch('searchEvents/searchEvents', filters.value)
}
const fetchMainEventsImages = async () => {
  if (mainEvents.value) {
    mainEvents.value.forEach(async (event: IEvent) => await store.dispatch('file/fetchFile', event.imageId))
  }
}

const fetchEventsImages = async () => {
  if (events.value) {
    events.value.forEach(async (event: IEvent) => await store.dispatch('file/fetchFile', event.imageId))
  }
}

const changeFilterSearch = async (searchValue: string) => {
  filters.value.search = searchValue
  await store.dispatch('searchEvents/searchEvents', filters.value)
}

const changeDayFilter = async (day: string) => {
  filters.value.day = day
  await store.dispatch('searchEvents/searchEvents', filters.value)
}

onBeforeMount( async () => {
  await fetchMainEvents()
  await fetchWeekEvents()
   await searchEvents()
  await fetchMainEventsImages()
  await fetchEventsImages()
})
</script>