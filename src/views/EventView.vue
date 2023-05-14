<template>
<event-details :event="event" :event-image="eventImage"
               :comments="comments" @saveComment="saveComment"
               @followEvent="followEvent"
               @unFollowEvent="unFollowEvent"
></event-details>
</template>

<script setup lang="ts">
import EventDetails from "@/components/event-details/event-details.vue";
import {useRoute} from "vue-router";
import {computed, onBeforeMount} from "vue";
import {useStore} from "vuex";
import type {ICommentToSave} from "@/domain/interfaces/response/comment-to-save.interface";

const route = useRoute()
const store = useStore()

const event = computed( () => store.getters["event/getEventDetail"])
const eventImage = computed( () => store.getters["file/getFile"](event.value.imageId))
const comments = computed(() => store.getters["comments/getComments"])
const user = computed(() => store.getters["auth/getUser"])
const fetchEventDetail = async () => {
  await store.dispatch("event/fetchEventDetail", route.params.id)
}

const saveComment = async (comment: string) => {
  const body: ICommentToSave = {
    eventId: event.value.id,
    userId: user.value.id,
    text: comment
  }
  console.log(user.value)
  await store.dispatch("comments/saveComment", body)
}

const fetchEventImage = async () => {
    await store.dispatch('file/fetchFile', event.value.imageId )
}

const fetchComments = async () => {
  await store.dispatch("comments/fetchComments", event.value.id)
}

const followEvent = async () => {
  await store.dispatch("event/followEvent", {'userId': user.value.id, eventId: event.value.id})
}

const unFollowEvent = async () => {
  await store.dispatch("event/unFollowEvent", user.value.id, event.value.id)
}

onBeforeMount(async () => {
  await fetchEventDetail()
  await fetchEventImage()
  await fetchComments()
})
</script>

<style scoped>

</style>