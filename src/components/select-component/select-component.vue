<script setup lang="ts">
import type {PropType, Ref} from 'vue'
import type {WeekToSelect} from "@/domain/interfaces/WeekToSelect.interace";
import {ref} from "vue";

defineProps({
  selectedItem: Object as PropType<WeekToSelect>,
  items: Array as PropType<WeekToSelect[]>
})

const isOpen: Ref<boolean> = ref(false)
const toggle = () => isOpen.value = !isOpen.value
</script>

<template>
  <div class="select-component">
    <div class="select-component__header" @click="toggle()">
      <div class="select-component__title">{{ selectedItem?.name }}</div>
      <div class="select-component__close">
        <div class="select-component__content" v-if="isOpen">
          <ul class="select-component__list">
            <li
                class="select-component__item"
                v-for="item in items"
                :key="item.id"
                @click="$emit('select', item.value)"
            >
              <div class="select-component__small-title">
                {{ item.name }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "select-component";
</style>
