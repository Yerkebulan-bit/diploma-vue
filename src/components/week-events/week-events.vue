<template>
  <div class="week-events">
    <div class="week-events__container _container">
      <div class="week-events__title">Мероприятия недели</div>
      <div class="week-events__items">
        <event-component v-for="event in weekEvents" :event="event"></event-component>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "week-events";
</style>
<script setup lang="ts">
import EventComponent from "@/components/event/event-component.vue";
import type {PropType} from "vue";
import type {IEvent} from "@/domain/interfaces/response/event.interface";


const props = defineProps({
  weekEvents: Array as PropType<IEvent[]>
})
</script>



