<script setup lang="ts">
import type {PropType, Ref} from "vue";
import type {IEventToSave} from "@/domain/interfaces/response/event-to-save.interface";
import {ref} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import SelectComponent from "@/components/select-component/select-component.vue";
import type {WeekToSelect} from "@/domain/interfaces/WeekToSelect.interace";

defineProps({
  weekDays: Array as PropType<WeekToSelect[]>,
  eventTypes: Array as PropType<WeekToSelect[]>,
})

const event:Ref<IEventToSave> = ref({
  name: '',
  type: '',
  shortDescription: '',
  time: '',
  runningTime: '',
  constraints: '',
  startedAt: '',
  description: '',
  location: '',
  day: '',
  organizationId: '',
})

</script>

<template>
  <div class="add-event">
      <form class="add-event__form" @submit.prevent="$emit('saveEvent', event)">
        <div class="add-event__item">
          <label for="username">Название мероприятия</label>
          <input
              type="text"
              class="add-event__input"
              name="username"
              v-model="event.name"
          />
        </div>
        <div class="add-event__item">
          <label for="username">Тип мероприятия</label>
          <select-component v-if="eventTypes" @select="$emit('selectEventType', $event);event.type = $event" :items="eventTypes" :selected-item="eventTypes.find(item => item.isActive)">
          </select-component>
        </div>
        <div class="add-event__item">
          <label for="username">Краткое описание</label>
          <input
              type="text"
              class="add-event__input"
              name="username"
              v-model="event.shortDescription"
          />
        </div>
        <div class="add-event__item">
          <label for="username">Время проведения</label>
          <VueDatePicker v-model="event.time" time-picker />
        </div>
        <div class="add-event__item">
          <label for="username">Продолжительность (В минутах)</label>
          <input
              type="number"
              class="add-event__input"
              name="username"
              v-model="event.runningTime"
          />
        </div>
        <div class="add-event__item">
          <label for="username">Возрастное ограничение</label>
          <input
              type="number"
              class="add-event__input"
              name="username"
              v-model="event.constraints"
          />
        </div>
<!--        <div class="add-event__item">-->
<!--          <label for="username">Идентификатор картинки</label>-->
<!--          <input-->
<!--              type="text"-->
<!--              class="add-event__input"-->
<!--              name="username"-->
<!--              v-model="event.imageId"-->
<!--          />-->
<!--        </div>-->
        <div class="add-event__item">
          <label for="username">Дата проведения</label>
          <VueDatePicker v-model="event.startedAt" :enable-time-picker="false"></VueDatePicker>
        </div>
        <div class="add-event__item">
          <label for="username">Полное описание</label>
          <input
              type="text"
              class="add-event__input"
              name="username"
              v-model="event.description"
          />
        </div>
        <div class="add-event__item">
          <label for="username">Место проведения</label>
          <input
              type="text"
              class="add-event__input"
              name="username"
              v-model="event.location"
          />
        </div>
        <div class="add-event__item">
          <label for="username">День проведения</label>
          <select-component v-if="weekDays" @select="$emit('selectWeekDay', $event);event.day = $event" :items="weekDays" :selected-item="weekDays.find(item => item.isActive)">
          </select-component>
        </div>
        <div class="add-event__item">
          <button class="add-event__button" type="submit">Сохранить</button>
        </div>
      </form>
    </div>
</template>

<style lang="scss">
.add-event {
  &__form{
    max-width: 700px;
  }
}
.add-event__item:not(:last-child) {
  margin: 0 0 23px 0;
}
.add-event label {
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4a4a4a;
}
.add-eventlabel span {
  margin: 0 0 0 5px;
}
.add-event__input {
  font-size: 14px;
  height: 41px;
  padding: 0 15px;
  width: 100%;
  transition: all 0.3s ease 0s;
  border: 1px solid #d8d8d8;
}
.add-event__input:focus {
  border-color: #fbbd61;
}
.add-event__button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ec7532;
  transition: all 0.3s ease 0s;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ec7532;
}
.add-event__button:hover {
  background: #ec7532;
  color: #fff;
}
.add-event__button:hover input,
.add-event__button:hover i {
  color: #fff;
}
.dp__input{
  font-family: 'Roboto Condensed';
  font-size: 14px;
}
</style>