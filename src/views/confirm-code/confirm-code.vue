<template>
  <div class="confirm">
    <div class="confirm__container _container">
      <h1 class="confirm__title">Подтверждение</h1>
      <form class="confirm__form" @submit.prevent="viewModel.confirmCode()">
        <div class="confirm__item">
          <label for="username">Код подтверждения</label>
          <input type="number" class="confirm__input" name="username" v-model="model.code" />
        </div>
        <div class="confirm__item">
          <button class="confirm__button" type="submit">Подтвердить код</button>
          <router-link to="/registration" class="confirm__button"
          >Вернуться назад</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { ConfirmCodeModel } from '@/views/confirm-code/confirm-code-model'
import { ConfirmCodeViewModel } from '@/views/confirm-code/confirm-code-view-model'

const model: Ref<any> = ref(new ConfirmCodeModel())

const viewModel: Ref<any> = ref(new ConfirmCodeViewModel(model.value))
</script>

<style scoped lang="scss">
.confirm {
  padding: 150px 0;
  max-width: 450px;
  margin: 0 auto;
}
.confirm__title {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4em;
  text-align: center;
  color: #ec7532;
  margin: 0 0 40px 0;
}
.confirm__item:not(:last-child) {
  margin: 0 0 23px 0;
}
.confirm label {
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4a4a4a;
}
.confirm label span {
  margin: 0 0 0 5px;
}
.confirm__input {
  font-size: 14px;
  height: 41px;
  padding: 0 15px;
  width: 100%;
  transition: all 0.3s ease 0s;
  border: 1px solid #d8d8d8;
}
.confirm__input:focus {
  border-color: #fbbd61;
}
.confirm__button {
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
.confirm__button:not(:last-child) {
  margin: 0 0 10px 0;
}
.confirm__button input {
  padding: 0;
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ec7532;
  background: transparent;
  transition: all 0.3s ease 0s;
}
.confirm__button i {
  transition: all 0.3s ease 0s;
  color: #ec7532;
  margin: 0 10px 0 0;
}
.confirm__button:hover {
  background: #ec7532;
  color: #fff;
}
.confirm__button:hover input,
.confirm__button:hover i {
  color: #fff;
}
</style>
