<template>
  <div class="week-events">
    <div class="week-events__container _container">
      <div class="week-events__title">Мероприятия недели</div>
      <div class="week-events__content">
        <div class="week-events__items" v-if="weekEvents?.length > 1">
          <div class="week-events__item" v-for="event in weekEvents">
            <event-component :event="event"></event-component>
          </div>
        </div>
        <div class="week-events__skeleton" v-else>
          <div v-for="_ in 3" class="skeleton week-events__skeleton-block">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import EventComponent from "@/components/event/event-component.vue";
import type {PropType} from "vue";
import type {IEvent} from "@/domain/interfaces/response/event.interface";

defineProps({
  weekEvents: Array as PropType<IEvent[]>
})
</script>

<style lang="scss">
@import "week-events";

</style>