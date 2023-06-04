<template>
  <slider-component :events="mainEvents"></slider-component>
  <week-events :week-events="eventsOfWeek"></week-events>
  <events-component
    :filters="filters"
    :events="events"
    @inputSearch="changeFilterSearch"
    @selectWeekDay="changeDayFilter"
    :is-show-more="true"
  ></events-component>
  <coming-soon :coming-events="comingEvents"></coming-soon>
  <contact-us></contact-us>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onBeforeMount, ref } from 'vue'
import SliderComponent from '@/components/slider/slider-component.vue'
import type { Ref } from 'vue'
import type { IEvent } from '@/domain/interfaces/response/event.interface'
import type { IFilters } from '@/domain/interfaces/response/filters.interface'
import EventsComponent from '@/components/events-component/events-component.vue'
import WeekEvents from "@/components/week-events/week-events.vue";
import ComingSoon from '@/components/coming-soon/coming-soon.vue'
import ContactUs from '@/components/contact-us/contact-us.vue'

const store = useStore()
const mainEvents = computed(() => store.getters['mainEvents/getMainEvent'])
const eventsOfWeek = computed(() => store.getters['weekEvents/getWeekEvents'])
const comingEvents = computed(() => store.getters['searchEvents/getComingEvents'])
const events = computed(() => store.getters['searchEvents/getEvents'])
const filters: Ref<IFilters> = ref({
  offset: 0,
  limit: 20,
  search: '',
  day: 'ALL'
})

const fetchMainEvents = async () => {
  await store.dispatch('mainEvents/fetchMainEvents')
}
const fetchWeekEvents = async () => {
  await store.dispatch('weekEvents/fetchWeekEvent')
}

const fetchComingEvents = async () => {
  await store.dispatch('searchEvents/fetchComingEvents')
}
const searchEvents = async () => {
  await store.dispatch('searchEvents/searchEvents', filters.value)
}
const fetchMainEventsImages = async () => {
  if (mainEvents.value) {
    mainEvents.value.forEach(
      async (event: IEvent) => await store.dispatch('file/fetchFile', event.imageId)
    )
  }
}

const fetchEventsImages = async () => {
  if (events.value) {
    events.value.forEach(
      async (event: IEvent) => await store.dispatch('file/fetchFile', event.imageId)
    )
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

onBeforeMount(async () => {
  await fetchMainEvents()
  await fetchWeekEvents()
  await searchEvents()
  await fetchMainEventsImages()
  await fetchEventsImages()
  await fetchComingEvents()
})
</script>
<script setup lang="ts"></script>
