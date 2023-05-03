<template>
  <div class="registration">
    <div class="registration__container _container">
      <h1 class="registration__title">Registration</h1>
      <form @submit.prevent="registerUser()" class="registration__form">
        <div class="registration__item">
          <label for="name">Name</label>
          <input type="text" class="registration__input" name="name" v-model="user.name">
        </div>
        <div class="registration__item">
          <label for="surname">Surname</label>
          <input type="text" class="registration__input" name="surname" v-model="user.surname">
        </div>
        <div class="registration__item">
          <label for="email">Email</label>
          <input type="email" class="registration__input" name="email" v-model="user.email">
        </div>
        <div class="registration__item">
          <label for="birth">Date Birth</label>
          <input type="date" class="registration__input" name="birth" v-model="user.birth">
        </div>
        <div class="registration__item">
          <label for="phone">Phone number</label>
          <input type="text" class="registration__input" name="phone" v-model="user.phone">
        </div>
        <div class="registration__item">
          <label for="username">Username</label>
          <input type="text" class="registration__input" name="username" v-model="user.username">
        </div>
        <div class="registration__item">
          <label for="password">Password</label>
          <input type="password" class="registration__input" name="password" v-model="user.rawPassword">
        </div>
        <div class="registration__item">
          <label for="about">About yourself</label>
          <input type="text" class="registration__input" name="about" v-model="user.about">
        </div>
        <div class="registration__item">
          <button class="registration__button" type="submit">
            Registration
          </button>
          <router-link to="/login" class="registration__button">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Ref} from "vue";
import type {IUserToSave} from "@/domain/interfaces/response/user-to-save.interface";
import {ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const user: Ref<IUserToSave> = ref({
  name: '',
  surname: '',
  birth: '',
  email: '',
  about: '',
  phone: '',
  username: '',
  rawPassword: '',
})

const store = useStore()
const router = useRouter()

const registerUser = await store.dispatch('auth/registerUser', user.value)


</script>

<style scoped>
.registration__container {
  padding: 150px 0;
  max-width: 450px;
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
</style>