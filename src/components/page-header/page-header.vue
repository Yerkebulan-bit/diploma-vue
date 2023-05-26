<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
  bgColor: {
    type: String,
  }
})

const backgroundImageInlineStyle = computed(() => {
  return `background: no-repeat, linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/img/main-slider/${props.image}') ;`
})
</script>

<template>
  <div
    class="page-header"
    :style="image ? backgroundImageInlineStyle : `background-color: ${bgColor}`"
  >
    <div class="page-header__container _container">
      <div class="page-header__text" v-if="text">{{ text }}</div>
      <h1 class="page-header__title" v-if="title">{{ title }}</h1>
    </div>
  </div>
</template>

<style lang="scss">
@import 'page-header';
</style>
