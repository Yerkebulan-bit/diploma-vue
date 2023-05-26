<script setup lang="ts">
import type { IUser } from '@/domain/interfaces/response/user.interface'
import type { PropType } from 'vue'
import {formatDateWithYear} from "../../utiities/functions/formatDate";
import type {IOrganization} from "@/domain/interfaces/response/organization.interface";

const props = defineProps({
  isClient: {
    type: Boolean,
    required: true
  },
  user: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>

<template>
  <div class="profile-info">
    <div class="profile-info__content">
      <div class="profile-info__items">
        <div class="profile-info__item">
          <div class="profile-info__label">{{ isClient ? 'Имя' : 'Название компании' }}</div>
          <div class="profile-info__value">{{ user.name }}</div>
        </div>
        <div class="profile-info__item" v-if="isClient">
          <div class="profile-info__label">Фамилия</div>
          <div class="profile-info__value">{{ user.surname }}</div>
        </div>
        <div class="profile-info__item" v-if="isClient">
          <div class="profile-info__label">Дата рождения</div>
          <div class="profile-info__value">{{ formatDateWithYear(user.birth) }}</div>
        </div>
        <div class="profile-info__item">
          <div class="profile-info__label">Номер телефона</div>
          <div class="profile-info__value">{{ user.phone }}</div>
        </div>
        <div class="profile-info__item">
          <div class="profile-info__label">Почта</div>
          <div class="profile-info__value">{{ user.email }}</div>
        </div>
        <div class="profile-info__item" v-if="!isClient">
          <div class="profile-info__label">Сайт</div>
          <div class="profile-info__value">{{ user.site }}</div>
        </div>
        <div class="profile-info__item" v-if="!isClient">
          <div class="profile-info__label">Адрес</div>
          <div class="profile-info__value">{{ user.address }}</div>
        </div>
        <div class="profile-info__item" v-if="!isClient">
          <div class="profile-info__label">Описание</div>
          <div class="profile-info__value">{{ user.description }}</div>
        </div>
        <div class="profile-info__item" v-if="isClient">
          <div class="profile-info__label">О себе</div>
          <div class="profile-info__value">{{ user.about }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'profile-info';
</style>
