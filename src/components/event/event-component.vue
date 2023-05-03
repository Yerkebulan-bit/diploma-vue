<template>
  <div class="poster">
    <div class="poster__image _ibg">
      {{ eventImage }}
<!--      <img src="./img/posters/poster_1.jpg" alt="">-->
      <div class="poster__additional-info">
        <router-link :to="`event/${event.id}`" class="poster__btn"><i class="fa fa-play"></i></router-link>
        <router-link :to="`event/${event.id}`" href="movie.html" class="poster__more-info">Show more</router-link>
        <div class="poster__release-date">
          {{ formatDate(event.startedAt) + ' ' + event.time}}</div>
      </div>
    </div>
    <div class="poster__info">
      <a href="" class="poster__name">{{ event.name }}</a>
      <div class="poster__rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {PropType, Ref} from "vue";
import {formatDate} from "../../utiities/functions/formatDate";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";

const eventImage: Ref<string> = ref('')

// eslint-disable-next-line vue/no-async-in-computed-properties
const getEventImage = (async () => {
  console.log('AAAAAA')
  const response = await axios.post(`${urlList.getFile}/${props.event?.imageId}`)
  eventImage.value = response.data.img
})

const props = defineProps({

  event: {
    type: Object as PropType<IEvent>,
    required: true
  }
})

onBeforeMount(async () => {
  await getEventImage()
})


</script>

<style lang="scss">
@import "event-component";
</style>