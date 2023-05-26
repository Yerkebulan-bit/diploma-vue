<template>
  <div class="profile">
    <page-header :title="'Личный кабинет'" :text="`Добро пожаловать ${organization.name}!`" :image="'Slide_4.jpg'"></page-header>
    <div class="profile__container _container">
      <div class="profile__wrapper">
        <tabs-component :tabs="tabs" @select="selectTab($event)"></tabs-component>
        <div class="profile__content">
          <div class="profile__info">
            <profile-info v-if="selectedTab === 1" :user="organization" :is-client="false"></profile-info>
          </div>
          <div class="profile__events" v-if="selectedTab === 2">
            <div v-if="events.length > 0">
              <event-search v-for="event in events" :key="event.id" :event="event"></event-search>
            </div>
            <div class="profile__text" v-else>Список мероприятиев пуст</div>
          </div>
          <div class="profile-add-event" v-if="selectedTab === 3">
            <add-event @saveEvent="saveEvent($event)"></add-event>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import type { Ref } from 'vue'
import { computed, onBeforeMount, ref } from 'vue'
import TabsComponent from '@/components/tabs/tabs-component.vue'
import type { ITab } from '@/domain/interfaces/ITab.interface'
import PageHeader from '@/components/page-header/page-header.vue'
import ProfileInfo from '@/components/profile-info/profile-info.vue'
import FollowedEvents from "@/components/followed-events/followed-events.vue";
import EventSearch from "@/components/event-search/event-search.vue";
import AddEvent from "@/components/add-event/add-event.vue";
import type {IEventToSave} from "@/domain/interfaces/response/event-to-save.interface";

const store = useStore()
const organization = computed(() => store.getters['auth/getOrganization'])
const events = computed(() => store.state.searchEvents.eventsByOrg)
const selectedTab: Ref<number> = ref(1)
const tabs: Ref<ITab[]> = ref([
  {
    id: 1,
    title: 'Данные организации',
    isActive: true,
    isDisabled: false
  },
  {
    id: 2,
    title: 'Мероприятия',
    isActive: false,
    isDisabled: false
  },
  {
    id: 3,
    title: 'Добавить мероприятие',
    isActive: false,
    isDisabled: false
  }
])

const selectTab = (tabId: number) => {
  tabs.value.forEach((tab) => {
    tab.isActive = tab.id === tabId
  })
  selectedTab.value = tabId
}

const getOrganization = async () => {
  await store.dispatch('auth/loadOrganization')
}

const getEventsByOrg = async () => {
  await store.dispatch('searchEvents/getEventsByOrg', organization.value.id)
}

const saveEvent = async (event: IEventToSave) => {
  await store.dispatch('searchEvents/saveEvent', {
    ...event,
    organizationId: organization.value.id
  })
}

onBeforeMount(async () => {
  await getOrganization()
  await getEventsByOrg()
})
</script>

<style lang="scss">
.profile {
  &__wrapper {
    padding-top: 40px;
    padding-bottom: 80px;
  }
  &__content{
    padding: 60px 0;
  }
  &__text{
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4em;
    letter-spacing: 1.7px;
    text-transform: uppercase;
  }
}
</style>
