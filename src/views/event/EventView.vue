<template>
<event-details :event="model.eventDetail" :event-image="model.eventImage"
               :comments="model.eventComments" @followEvent="viewModel.followEvent()"
                @unFollowEvent="viewModel.unFollowEvent()" @saveComment="viewModel.saveComment($event)"

></event-details>
</template>

<script setup lang="ts">
import EventDetails from "@/components/event-details/event-details.vue";
import {useRoute} from "vue-router";
import type {Ref} from "vue";
import {computed, onBeforeMount, ref} from "vue";
import {EventModel} from "@/views/event/event-model";
import {EventViewModel} from "@/views/event/event-view-model";
const route = useRoute()
const model: Ref<any> = ref(new EventModel({
  eventId: route.params.id
}))

const viewModel: Ref<any> = ref(new EventViewModel(model.value))



</script>

<style scoped>

</style>