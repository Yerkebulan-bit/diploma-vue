<template>
  <div class="accordion" :class="{ _active: item.isActive }">
    <div
      class="accordion__header"
      @click="$emit('toggle', item.id)"
      :class="{ _active: item.isActive }"
    >
      <div class="accordion__title">
        {{ item.question }}
      </div>
      <div class="accordion__icon">
        <i class="icon-keyboard_arrow_down"></i>
      </div>
    </div>
    <div class="accordion__content">
      <transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
      >
        <div class="accordion__text" v-show="item.isActive">
          {{ item.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IFaq } from '@/domain/interfaces/IFaq.interface'

defineProps({
  item: {
    type: Object as PropType<IFaq>,
    required: true
  }
})

const start = (el: any) => {
  el.style.height = el.scrollHeight + 'px'
}

const end = (el: any) => {
  el.style.height = ''
}
</script>

<style lang="scss" scoped>
@import 'accordion-component';
</style>
