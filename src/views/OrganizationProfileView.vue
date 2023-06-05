<template>
  <div class="profile">
    <page-header
      :title="'Личный кабинет'"
      :text="`Добро пожаловать ${organization.name}!`"
      :image="'Slide_4.jpg'"
    ></page-header>
    <div class="profile__container _container">
      <div class="profile__wrapper">
        <tabs-component :tabs="tabs" @select="$emit('selectTab', $event)"></tabs-component>
        <div class="profile__content">
          <div class="profile__info">
            <profile-info
              v-if="selectedTab === 1"
              :user="organization"
              :is-client="false"
            ></profile-info>
          </div>
          <div class="profile__events" v-if="selectedTab === 2">
            <div v-if="events.length > 0">
              <event-search v-for="event in events" :key="event.id" :event="event"></event-search>
            </div>
            <div class="profile__text" v-else>Список мероприятиев пуст</div>
          </div>
          <div class="profile-add-event" v-if="selectedTab === 3">
            <add-event @selectEventType="$emit('selectEventType', $event)" @selectImage="$emit('selectImage', $event);
            " @selectWeekDay="$emit('selectWeekDay', $event)" :week-days="weekDays" :eventTypes="eventTypes" @saveEvent="$emit('saveEvent', $event)"></add-event>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ITab } from '@/domain/interfaces/ITab.interface'
import type { IOrganization } from '@/domain/interfaces/response/organization.interface'
import type { IEvent } from '@/domain/interfaces/response/event.interface'
import TabsComponent from '@/components/tabs/tabs-component.vue'
import PageHeader from '@/components/page-header/page-header.vue'
import ProfileInfo from '@/components/profile-info/profile-info.vue'
import AddEvent from '@/components/add-event/add-event.vue'
import EventSearch from '@/components/event-search/event-search.vue'
import type {WeekToSelect} from "@/domain/interfaces/WeekToSelect.interace";
defineProps({
  selectedTab: {
    type: Number,
    required: true
  },
  tabs: {
    type: Array as PropType<ITab[]>,
    required: true
  },
  organization: {
    type: Object as PropType<IOrganization>,
    required: true
  },
  events: {
    type: Array as PropType<IEvent[]>,
    required: true
  },
  weekDays: {
    type: Array as PropType<WeekToSelect[]>,
    required: true
  },
  eventTypes: {
    type: Array as PropType<WeekToSelect[]>,
    required: true
  }
})
</script>

<style lang="scss">
.profile {
  &__wrapper {
    padding-top: 40px;
    padding-bottom: 80px;
  }
  &__content {
    padding: 60px 0;
  }
  &__text {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4em;
    letter-spacing: 1.7px;
    text-transform: uppercase;
  }
}
</style>
