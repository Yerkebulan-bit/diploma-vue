<template>
  <page-header :bg-color="'#000'"></page-header>
  <div class="registration">
    <div class="registration__container _container">
      <h1 class="registration__title">Регистрация</h1>
      <form @submit.prevent="register()" class="registration__form">
        <div class="registration__item">
          <label for="name">Имя</label>
          <input type="text" class="registration__input" name="name" v-model="form.name" />
        </div>
        <div class="registration__item" v-if="userType === 'client'">
          <label for="surname">Фамилия</label>
          <input type="text" class="registration__input" name="surname" v-model="form.surname" />
        </div>
        <div class="registration__item">
          <label for="email">Почта</label>
          <input type="email" class="registration__input" name="email" v-model="form.email" />
        </div>
        <div class="registration__item" v-if="userType === 'client'">
          <label for="birth">Дата рождения</label>
          <input type="date" class="registration__input" name="birth" v-model="form.birth" />
        </div>
        <div class="registration__item">
          <label for="phone">Номер телефона</label>
          <input type="text" class="registration__input" name="phone" v-model="form.phone" />
        </div>
        <div class="registration__item">
          <label for="username">Логин</label>
          <input type="text" class="registration__input" name="username" v-model="form.username" />
        </div>
        <div class="registration__item">
          <label for="about">Пароль</label>
          <input type="password" class="registration__input" name="about" v-model="form.password" />
        </div>
        <div class="registration__item">
          <label for="about">О себе</label>
          <input type="text" class="registration__input" name="about" v-model="form.about" />
        </div>
        <div class="registration__item" v-if="userType === 'organization'">
          <label for="about">Краткая информация</label>
          <input
            type="text"
            class="registration__input"
            name="about"
            v-model="form.shortDescription"
          />
        </div>
        <div class="registration__item" v-if="userType === 'organization'">
          <label for="address">Адрес</label>
          <input type="text" class="registration__input" name="address" v-model="form.address" />
        </div>
        <div class="registration__item" v-if="userType === 'organization'">
          <label for="site">Сайт</label>
          <input type="text" class="registration__input" name="site" v-model="form.site" />
        </div>
        <div class="registration__item registration__group">
          <div class="registration__radio" v-for="type in userTypes" :key="type.id">
            <input type="radio" :id="type.value" :value="type.value" v-model="userType" />
            <label class="registration__radio-text" :for="type.value">{{ type.name }}</label>
          </div>
        </div>
        <div class="registration__item">
          <button class="registration__button" type="submit">Зарегистрироваться</button>
          <router-link to="/login" class="registration__button"
            >Войти в существуйющий аккаунт</router-link
          >
          <div class="error-message" v-if="errorInfo.isError">{{ errorInfo.message }}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { IUserToSave } from '@/domain/interfaces/response/user-to-save.interface'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { IOrganizationToSave } from '@/domain/interfaces/response/organization-to-save.interface'
import PageHeader from '@/components/page-header/page-header.vue'

const form: Ref<any> = ref({
  name: '',
  surname: '',
  birth: '',
  email: '',
  about: '',
  phone: '',
  username: '',
  password: '',
  shortDescription: '',
  site: ''
})



const userTypes: any[] = [
  {
    id: 2,
    name: 'Клиент',
    value: 'client'
  },
  {
    id: 1,
    name: 'Организация',
    value: 'organization'
  }
]

const errorInfo: Ref<{ message: string; isError: boolean }> = ref({
  message: '',
  isError: false
})

const userType: Ref<string> = ref('client')

const store = useStore()
const router = useRouter()

const registerUser = async () => {
  await store.dispatch('auth/registerUser', {
    name: form.value.name,
    email: form.value.email,
    username: form.value.username,
    phone: form.value.phone,
    surname: form.value.surname,
    birth: form.value.birth,
    about: form.value.about,
    rawPassword: form.value.password
  })
}

const registerOrganization = async () => {
  await store.dispatch('auth/registerOrganization', {
    name: form.value.name,
    email: form.value.email,
    address: form.value.address,
    username: form.value.username,
    phone: form.value.phone,
    shortDescription: form.value.shortDescription,
    site: form.value.site,
    imageId: '',
    description: form.value.about,
    password: form.value.password
  })
}

const register = async () => {

  userType.value === 'organization' ? await registerOrganization() : await registerUser()
}
</script>

<style scoped lang="scss">
.registration {
  padding: 150px 0;
  max-width: 450px;
  margin: 0 auto;
}
.registration__title {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4em;
  text-align: center;
  color: #ec7532;
  margin: 0 0 40px 0;
}
.registration__item:not(:last-child) {
  margin: 0 0 23px 0;
}
.registration label {
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4a4a4a;
}
.registration label span {
  margin: 0 0 0 5px;
}
.registration__input {
  font-size: 14px;
  height: 41px;
  padding: 0 15px;
  width: 100%;
  transition: all 0.3s ease 0s;
  border: 1px solid #d8d8d8;
}
.registration__input:focus {
  border-color: #fbbd61;
}
.registration__button {
  width: 100%;
  cursor: pointer;
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
.registration__button:not(:last-child) {
  margin: 0 0 10px 0;
}
.registration__button input {
  padding: 0;
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ec7532;
  background: transparent;
  transition: all 0.3s ease 0s;
}
.registration__button i {
  transition: all 0.3s ease 0s;
  color: #ec7532;
  margin: 0 10px 0 0;
}
.registration__button:hover {
  background: #ec7532;
  color: #fff;
}
.registration__button:hover input,
.registration__button:hover i {
  color: #fff;
}
.registration__group {
  display: flex;
  align-items: center;
  gap: 40px;
}
.registration__radio {
  display: flex;
  align-items: center;
  gap: 10px;
}
.registration__radio-text {
  margin-bottom: 0 !important;
}
.page-header {
  padding: 60px 15px;
  @media (max-width: $mobile + px) {
    padding: 35px 15px;
  }
}
</style>
