<template>
  <div class="events">
    <div class="events__container">
      <page-header :title="'Мероприятия недели'" :image="'Slide_4.jpg'" :text="'Предстоящие мероприятия'"></page-header>
      <events-component :events="events" @inputSearch="changeFilterSearch" @selectWeekDay="changeDayFilter" :filters="filters"></events-component>
      <contact-us></contact-us>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {computed, onBeforeMount, ref} from "vue";
import type {IFilters} from "@/domain/interfaces/response/filters.interface";
import type { Ref } from 'vue'
import EventsComponent from "@/components/events-component/events-component.vue";
import PageHeader from "@/components/page-header/page-header.vue";
import ContactUs from "@/components/contact-us/contact-us.vue";

const store = useStore()

const events = computed(() => store.getters["searchEvents/getEvents"])
const filters: Ref<IFilters> = ref({
  offset: 0,
  limit: 20,
  search: "",
  day: "ALL",
})

const searchEvents = await store.dispatch('searchEvents/searchEvents', filters.value)

const changeFilterSearch = async (searchValue: string) => {
  filters.value.search = searchValue
  await store.dispatch('searchEvents/searchEvents', filters.value)
}

const changeDayFilter = async (day: string) => {
  filters.value.day = day
  await store.dispatch('searchEvents/searchEvents', filters.value)
}

onBeforeMount( async () => {
  await searchEvents()
})
</script>

<style lang="scss">
/*----------------------------------------------------*/
.page-top {
  background: no-repeat, linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/img/main-slider/Slide_3.jpg') ;
}
.page-top__container {
  padding: 200px 15px 100px!important;
}
@media (max-width: 767.98px) {
  .page-top__container {
    padding: 80px 20px 60px;
  }
}
.page-top__text {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fbbd61;
}
.page-top__title {
  font-size: 52px;
  font-weight: 300;
  letter-spacing: 3px;
  line-height: 1.4em;
  color: #fff;
}
@media (max-width: 767.98px) {
  .page-top__title {
    font-size: 35px;
  }
}
</style>