<script setup lang="ts">

import type {PropType} from "vue";

defineProps({
  advantages: Array as PropType<{
    id: number,
    title: string,
    text: string,
    icon: string
  }[]>
})
</script>

<template>
  <div class="advantages">
    <div class="advantages_body">
      <h1 class="advantages__title main-title">Наши преимущества</h1>
      <div class="advantages__content">
        <div class="advantages__items">
          <div class="advantages__item" v-for="item in advantages?.slice(0,3)" :key="item.id">
            <div class="advantages__icon">
              <i :class="`icon-${item.icon}`"></i>
            </div>
            <div class="advantages__group">
              <h2 class="advantages__small-title">{{ item.title }}</h2>
              <div class="advantages__text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "advantages-component";
</style>