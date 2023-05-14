<template>
  <div class="login">
    <div class="login__container _container">
      <h1 class="login__title">Авторизация</h1>
      <form class="login__form" @submit.prevent="loginUser()">
        <div class="login__item">
          <label for="username">Логин</label>
          <input type="text" class="login__input" name="username" v-model="user.username">
        </div>
        <div class="login__item">
          <label for="password">Пароль</label>
          <input type="password" class="login__input" name="password" v-model="user.password">
        </div>
        <div class="login__item">
          <button class="login__button" type="submit">
            Войти
          </button>
          <router-link to="/registration" class="login__button">Зарегистрироваться</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IUserToLogin} from "@/domain/interfaces/response/user-to-login.interface";
import type {Ref} from "vue";
import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore()

const user: Ref<IUserToLogin> = ref({
  grant_type: 'password',
  username: '',
  password: '',
  scope: 'read'
})

const loginUser = async () => {
  await store.dispatch('auth/login', user.value)
}





</script>


<style scoped>
.login__container {
  padding: 150px 0;
  max-width: 450px;
}
.login__title {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4em;
  text-align: center;
  color: #ec7532;
  margin: 0 0 40px 0;
}
.login__item:not(:last-child) {
  margin: 0 0 23px 0;
}
.login label {
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4a4a4a;
}
.login label span {
  margin: 0 0 0 5px;
}
.login__input {
  font-size: 14px;
  height: 41px;
  padding: 0 15px;
  width: 100%;
  transition: all 0.3s ease 0s;
  border: 1px solid #d8d8d8;
}
.login__input:focus {
  border-color: #fbbd61;
}
.login__button {
  width: 100%;
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
.login__button:not(:last-child) {
  margin: 0 0 10px 0;
}
.login__button input {
  padding: 0;
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ec7532;
  background: transparent;
  transition: all 0.3s ease 0s;
}
.login__button i {
  transition: all 0.3s ease 0s;
  color: #ec7532;
  margin: 0 10px 0 0;
}
.login__button:hover {
  background: #ec7532;
  color: #fff;
}
.login__button:hover input,
.login__button:hover i {
  color: #fff;
}
</style>