<script setup lang="ts">
import AccordionComponent from '@/components/accordion-component/accordion-component.vue'
import type { PropType } from 'vue'
import type { IFaq } from '@/domain/interfaces/IFaq.interface'

defineProps({
  faq: Array as PropType<IFaq[]>
})
</script>

<template>
  <div class="faqs-info">
    <div class="faqs-info__body">
      <h1 class="faqs-info__title main-title">Вопросы и ответы</h1>
      <div class="faqs-info__content">
        <ul class="faqs-info__list">
          <li class="faqs-info__item" v-for="faqItem in faq" :key="faqItem.id">
            <accordion-component :item="faqItem" @toggle="$emit('toggle', $event)">
            </accordion-component>
          </li>
        </ul>
      </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
@import 'faqs-info';
</style>
