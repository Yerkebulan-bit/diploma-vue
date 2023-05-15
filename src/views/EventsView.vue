<template>
  <div class="page-top">
    <div class="page-top__container _container">
      <div class="page-top__text">Предстоящие мероприятия</div>
      <h1 class="page-top__title">Мероприятия недели</h1>
    </div>
  </div>
 <div class="all-events">
   <events-component :events="events" @inputSearch="changeFilterSearch" @selectWeekDay="changeDayFilter" :filters="filters"></events-component>
 </div>
  <div class="contact-us">
    <h2 class="contact-us__text">Нужна помощь? Свяжитесь с нами!</h2>
    <h1 class="contact-us__phone">+7 700 287 1565</h1>
  </div>
</template>

<script setup lang="ts">
import SearchEvents from "@/components/search-events/search-events.vue";
import {useStore} from "vuex";
import {computed, onBeforeMount, ref} from "vue";
import type {IFilters} from "@/domain/interfaces/response/filters.interface";
import type { Ref } from 'vue'
import EventsComponent from "@/components/events-component/events-component.vue";

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

.all-events {
  padding: 50px 10px 0;
}


.contact-us {
  border-top: 1px solid #d8d8d8;
  text-align: center;
  padding: 75px 0;
}
.contact-us__text {
  color: #4a4a4a;
  font-size: 24px;
  line-height: 1.4em;
  letter-spacing: 1px;
  margin: 0 0 10px 0;
}
@media (max-width: 767.98px) {
  .contact-us__text {
    font-size: 20px;
  }
}
.contact-us__phone {
  color: #ec7532;
  font-size: 46px;
  line-height: 1.42857143;
}
@media (max-width: 767.98px) {
  .contact-us__phone {
    font-size: 30px;
  }
}
@media (max-width: 767.98px) {
  .contact-us {
    padding: 40px 10px;
  }
}
</style>