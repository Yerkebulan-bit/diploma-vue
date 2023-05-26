<script setup lang="ts">
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {PropType} from "vue";
import EventSearch from "@/components/event-search/event-search.vue";

defineProps({
  followedEvents: {
    type: Array as PropType<IEvent[]>,
    required: true
  }
})
</script>

<template>
<div class="followed-events">
  <div class="followed-events__wrapper">
    <div class="followed-events__items">
      <div class="followed-events__item" v-for="event in followedEvents" :key="event.id">
        <event-search :event="event"></event-search>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.followed-events{
  &__items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
  }
  &__item {
    width: 100%;
  }
}
</style>