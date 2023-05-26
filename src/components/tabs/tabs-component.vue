<template>
  <div class="tabs">
    <div class="tabs__wrapper">
      <div class="tabs__items">
        <div
          class="tabs__item"
          v-for="tab in tabs"
          :key="tab.id"
          @click="!tab.isDisabled && $emit('select', tab.id)"
          :aria-selected="tab.isActive"
          :class="[tab.isDisabled ? '_disable' : '', tab.isActive ? '_active' : '']"
        >
          {{ tab.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITab } from '@/domain/interfaces/ITab.interface'
import type { PropType } from 'vue'

const props = defineProps({
  tabs: {
    type: Array as PropType<ITab[]>,
    required: true
  }
})

</script>

<style lang="scss">
@import 'tabs-component';
</style>
