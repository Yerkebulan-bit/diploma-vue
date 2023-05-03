<template>
<event-details :event="event"></event-details>
</template>

<script setup lang="ts">
import EventDetails from "@/components/event-details/event-details.vue";
import {useRoute} from "vue-router";
import type {Ref} from "vue";
import {onBeforeMount, ref} from "vue";
import {useStore} from "vuex";

const route = useRoute()
const store = useStore()

const event = store.getters["event/getEventDetail"]
const fetchEventDetail = await store.dispatch('event/fetchEventDetail', route.params.id)

onBeforeMount(async () => {
  await fetchEventDetail()
})
</script>

<style scoped>

</style>