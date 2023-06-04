<template>
  <div class="profile">
    <page-header :title="'Личный кабинет'" :text="`Добро пожаловать ${user.name}!`" :image="'Slide_4.jpg'"></page-header>
    <div class="profile__container _container">
      <div class="profile__wrapper">
        <tabs-component :tabs="tabs" @select="$emit('selectTab', $event)"></tabs-component>
        <div class="profile__content">
          <div class="profile__info">
            <profile-info v-if="selectedTab === 1" :user="user" :is-client="true"></profile-info>
          </div>
          <div class="profile__events" v-if="selectedTab === 2">
            <followed-events :followed-events="followedEvents"></followed-events>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TabsComponent from '@/components/tabs/tabs-component.vue'
import PageHeader from '@/components/page-header/page-header.vue'
import ProfileInfo from '@/components/profile-info/profile-info.vue'
import FollowedEvents from '@/components/followed-events/followed-events.vue'
import type {IUser} from "@/domain/interfaces/response/user.interface";
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {ITab} from "@/domain/interfaces/ITab.interface";
import type {PropType} from "vue";

defineProps({
  selectedTab: {
    type: Number,
    required: true
  },
  tabs: {
    type: Array as PropType<ITab[]>,
    required: true
  },
  user: {
    type: Object as PropType<IUser>,
    required: true
  },
  followedEvents: {
    type: Array as PropType<IEvent[]>,
    required: true
  }
})
</script>

<style lang="scss">
.profile {
  &__wrapper{
    padding-top: 40px;
    padding-bottom: 80px;
  }
  &__content{
    padding: 60px 0;
  }
}
</style>
