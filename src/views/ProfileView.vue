<template>
  <div class="profile">
    <page-header :title="'Личный кабинет'" :text="`Добро пожаловать ${user.name}!`" :image="'Slide_4.jpg'"></page-header>
    <div class="profile__container _container">
      <div class="profile__wrapper">
        <tabs-component :tabs="tabs" @select="selectTab($event)"></tabs-component>
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
import { useStore } from 'vuex'
import type { Ref } from 'vue'
import { computed, onBeforeMount, ref } from 'vue'
import TabsComponent from '@/components/tabs/tabs-component.vue'
import type { ITab } from '@/domain/interfaces/ITab.interface'
import PageHeader from '@/components/page-header/page-header.vue'
import ProfileInfo from '@/components/profile-info/profile-info.vue'
import FollowedEvents from '@/components/followed-events/followed-events.vue'

const tabs: Ref<ITab[]> = ref([
  {
    id: 1,
    title: 'Личные данные',
    isActive: true,
    isDisabled: false
  },
  {
    id: 2,
    title: 'Подписки на мероприятия',
    isActive: false,
    isDisabled: false
  },
  {
    id: 3,
    title: 'Избранное',
    isActive: false,
    isDisabled: false
  }
])

const store = useStore()
const user = computed(() => store.getters['auth/getUser'])
const followedEvents = computed(() => store.state.auth.followedEvents)
const selectedTab: Ref<number> = ref(1)

const selectTab = (tabId: number) => {
  tabs.value.forEach((tab) => {
    tab.isActive = tab.id === tabId
  })
  selectedTab.value = tabId
}

const getUser = async () => {
  await store.dispatch('auth/loadUser')
}

const getFollowedEvents = async () => {
  await store.dispatch('auth/loadFollowedEvents', user.value.id)
}

onBeforeMount(async () => {
  await getUser()
  await getFollowedEvents()
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
