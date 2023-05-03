<template>
  <slider-component :events="mainEvents"></slider-component>
  <week-events :week-events="weekEvents"></week-events>
  <search-events :search-events="mainEvents"></search-events>
</template>

<script setup lang="ts">
import WeekEvents from "@/components/week-events/week-events.vue";
import {computed, onBeforeMount, onMounted} from "vue";
import axios from "axios";
import SliderComponent from "@/components/slider/slider-component.vue";
import {useStore} from "vuex";
import SearchEvents from "@/components/search-events/search-events.vue";

const store = useStore()
const mainEvents = computed(() => {
  return store.getters["mainEvents/getMainEvent"]
})
const weekEvents = computed(() => {
  return store.getters["weekEvents/getWeekEvents"]
})
const fetchMainEvents = await store.dispatch('mainEvents/fetchMainEvents')
const fetchWeekEvents = await store.dispatch('weekEvents/fetchWeekEvent')

onBeforeMount(async () => {
  await fetchMainEvents()
  await fetchWeekEvents()
})
</script>