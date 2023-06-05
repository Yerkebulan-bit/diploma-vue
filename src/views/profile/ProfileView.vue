<script setup lang="ts">
import UserProfileView from '@/views/UserProfileView.vue'
import OrganizationProfileView from '@/views/OrganizationProfileView.vue'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { ProfileModel } from '@/views/profile/profile-model'
import { ProfileViewModel } from '@/views/profile/profile-view-model'

const model: Ref<any> = ref(new ProfileModel({}))
const viewModel: Ref<any> = ref(new ProfileViewModel(model.value))
</script>

<template>
  <user-profile-view
    v-if="model.userType === 'USER'"
    :user="model.user"
    :followed-events="model.followedEvents"
    :selected-tab="model.selectedTabId"
    :tabs="model.tabs"
    @selectTab="viewModel.selectTab($event)"
  >
  </user-profile-view>
  <organization-profile-view
    v-if="model.userType === 'ORG'"
    :organization="model.organization"
    :week-days="model.weekDays"
    :event-types="model.eventTypes"
    :tabs="model.tabs"
    :selected-tab="model.selectedTabId"
    :events="model.eventsByOrg"
    @selectTab="viewModel.selectTab($event)"
    @saveEvent="viewModel.saveEvent($event)"
    @selectWeekDay="viewModel.selectWeekDay($event)"
    @selectEventType="viewModel.selectEventType($event)"

  ></organization-profile-view>
</template>

<style scoped lang="scss"></style>
