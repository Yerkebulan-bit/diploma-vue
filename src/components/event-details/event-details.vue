<template>
  <div class="event-details">
    <div class="event-detail__main event-main" :style="getBackgroundProperty()">
      <div class="event-main__container _container">
        <div class="event-main__info">
          <div class="event-main__genre">{{ EventType[event.type] }}</div>
          <div class="event-main__name">{{event.name}}</div>
          <div class="event-main__description">{{event.shortDescription}}</div>
        </div>
        <div class="event-main__rating">
          <i class="fa fa-star" v-for="rate in randomRating()"></i>
        </div>
        <div class="event-main__action">
          <div class="event-main__icon">{{ event.constraints }}</div>
          <div class="event-main__statistics">
            <div class="event-main__item">
              <div class="event-main__number">Расположение</div>
              <span>{{ event.location }}</span>
            </div>
          </div>
        </div>
        <button class="event-main__btn" @click="$emit(event.isFollowed ? 'unFollowEvent' : 'followEvent', event.id)">Записаться на мероприятие</button>
      </div>
    </div>
    <div class="event-detailt__about about-event">
      <div class="about-event__container _container">
        <div class="about-event__synopsis event-synopsis">
          <h2 class="event-synopsis__title">Информация</h2>
          <div class="event-synopsis__body">
            <div class="event-synopsis__video">
              <iframe :src="event.ytUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="event-synopsis__info">
              <div class="event-synopsis__name">Описание</div>
              <div class="event-synopsis__description">
                {{ event.description }}
              </div>
              <ul class="event-synopsis__additional-info" v-if="event.organization">
                <li><span>ОРГАНИЗАЦИЯ</span>{{ event.organization.name }}</li>
                <li><span>НОМЕР ТЕЛЕФОНА</span>{{event.organization.phone}}</li>
                <li><span>ПОЧТА</span>{{event.organization.email}}</li>
                <li><span>САЙТ</span>{{event.organization.site}}</li>
                <li><span>АДРЕСС</span>{{event.organization.address}}</li>
              </ul>
              <ul class="event-synopsis__social">
                <li>
                  <a href=""><span class="fa fa-facebook-f"></span></a>
                </li>
                <li>
                  <a href=""><span class="fa fa-twitter"></span></a>
                </li>
                <li>
                  <a href=""><span class="fa fa-instagram"></span></a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="event-details__comments event-comments">
      <div class="event-comments__container _container">
        <div class="event-comments__content">
          <h2 class="event-comments__title">Комментарии</h2>
          <div class="event-comments__items" v-if="comments.length > 0">
            <div class="event-comments__item" v-for="comment in comments" >
              <div class="event-comments__avatar _ibg">
                <img src="../../assets/img/comment/undefined-user.png" alt="">
              </div>
              <div class="event-comments__info">
                <div class="event-comments__date">{{ formatDate(comment.date) }}</div>
                <div class="event-comments__name">{{ comment.fullName }}</div>
                <div class="event-comments__comment">{{ comment.text }}</div>
              </div>
            </div>
          </div>

          <div class="event-comments__item" v-else>
            <div class="event-comments__comment">Список комментариев пуст</div>
          </div>
        </div>
        <div class="event-comments__form comment-form">
          <h2 class="comment-form__title">Поделитесь своими впечатлениями от мероприятия!</h2>
          <form @submit.prevent="$emit('saveComment', newComment)">
            <div class="comment-form__item">
              <div class="comment-form__text">Добавлять комментарии могут только зарегистрированные пользователи<span>*</span></div>
            </div>

            <div class="comment-form__item">
              <label for="">Имя пользователя<span>*</span></label>
              <input type="text" class="comment-form__input" :disabled="!isAuthUser">
            </div>
            <div class="comment-form__item">
              <label for="">Комментарий<span>*</span></label>
              <textarea name="" v-model="newComment" cols="30" rows="10" class="comment-form__textarea" :disabled="!isAuthUser"></textarea >
            </div>
            <button class="comment-form__button" type="submit" :disabled="!isAuthUser">Опубликовать</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type {PropType, Ref} from "vue";
import type {IEventDetail} from "@/domain/interfaces/response/event-detail.interface";
import type {IFile} from "@/domain/interfaces/file.interface";
import {EventType} from "../../utiities/enums/event-type";
import {randomRating} from "@/utiities/functions/randomRating";
import type {IComment} from "@/domain/interfaces/response/comment.interface";
import {formatDate} from "../../utiities/functions/formatDate";
import {ref} from "vue";

const props = defineProps({
  event: {
    type: Object as PropType<IEventDetail>,
    required: true
  },
  eventImage: {
    type: Object as PropType<IFile>,
    required: true
  },
  comments: {
    type: Array as PropType<IComment[]>,
    required: true
  }
})

const newComment: Ref<string> = ref('')

const isAuthUser: Ref<boolean> = ref(localStorage.getItem('access_token') ? true : false)
const getBackgroundProperty = () => {
  return `background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/png;base64,${props.eventImage.img}');`
}
</script>
<style lang="scss">
@import "event-details";
</style>