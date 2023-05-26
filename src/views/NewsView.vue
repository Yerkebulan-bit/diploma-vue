<template>
  <div class="news">
    <div class="news__container _container">
      <div class="news__body">
        <div class="news__items">
          <div class="news__item" v-for="newsItem in news" :key="newsItem.id">
            <div class="news__image _ibg">
<!--              <a href=""><img src="./img/news/64c4c6c6-b0a6-11ec-9c59-1edddcf76446.jpg" alt=""></a>-->
            </div>
            <div class="news__tags">
              <a href="" class="news__tag">{{ newsItem.category }}</a>
            </div>
            <h2 class="news__title">{{ newsItem.title }}</h2>
            <div class="news__text">{{ newsItem.content }}</div>
            <a href="" class="news__see-more">Прочитать полностью</a>
          </div>
        </div>
        <div class="news__sidebar news-sidebar">
          <div class="news-sidebar__search">
            <input type="text" placeholder="Поиск">
            <i class="fa fa-search"></i>
          </div>
          <div class="news-sidebar__item">
            <div class="news-sidebar__title">
              Категория
            </div>
            <ul class="news-sidebar__list">
              <li><a href="">Категория 1</a></li>
              <li><a href="">Категория 2</a></li>
              <li><a href="">Категория 3</a></li>
              <li><a href="">Категория 4</a></li>
            </ul>
          </div>
          <div class="news-sidebar__item">
            <div class="news-sidebar__title">
              Теги
            </div>
            <ul class="news-sidebar__tags">
              <li><a href="">ТЕГИ 1</a></li>
              <li><a href="">ТЕГИ 2</a></li>
              <li><a href="">ТЕГИ 3</a></li>
              <li><a href="">ТЕГИ 4</a></li>
              <li><a href="">ТЕГИ 5</a></li>
              <li><a href="">ТЕГИ 6</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeMount} from "vue";
import {useStore} from "vuex";

const store = useStore()
const news = computed(() => store.getters['news/getNews'])
const getNews = async () => {
  await store.dispatch('news/fetchNews')
}

onBeforeMount(async () => await getNews())
</script>

<style lang="scss">
.news {
  padding: 75px 0;
}
@media (max-width: 767.98px) {
  .news {
    padding: 40px 0;
  }
}
.news__body {
  display: flex;
  align-items: flex-start;
}
@media (max-width: 767.98px) {
  .news__body {
    flex-direction: column-reverse;
  }
}
.news__items {
  flex: 0 0 47%;
  margin: 0 150px 0 0;
}
@media (max-width: 991.98px) {
  .news__items {
    margin: 0 80px 0 0;
  }
}
@media (max-width: 767.98px) {
  .news__items {
    margin: 0;
  }
}
.news__item {
  padding-bottom: 50px;
  border-bottom: solid 1px #d8d8d8;
}
.news__item:not(:last-child) {
  margin: 0 0 50px 0;
}
@media (max-width: 767.98px) {
  .news__item {
    padding-bottom: 30px;
  }
  .news__item:not(:last-child) {
    margin: 0 0 30px 0;
  }
}
.news__image {
  width: 100%;
  height: 300px;
  margin: 0 0 40px 0;
  border-radius: 10px;
  overflow: hidden;
}
@media (max-width: 991.98px) {
  .news__image {
    height: 200px;
  }
}
.news__tag {
  font-size: 14px;
  display: inline-block;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ec7532;
  line-height: 1.42857143;
  transition: 0.3s color ease 0;
}
.news__tag:hover {
  color: #fbbd61;
}
@media (max-width: 991.98px) {
  .news__tag {
    font-size: 12px;
  }
}
.news__title {
  line-height: 1.4em;
  font-size: 28px;
  text-transform: none;
  margin: 0 0 20px 0;
}
@media (max-width: 767.98px) {
  .news__title {
    font-size: 23px;
  }
}
.news__text {
  color: #717171;
  font-size: 16px;
  line-height: 1.42857143;
  margin: 0 0 50px 0;
}
@media (max-width: 767.98px) {
  .news__text {
    margin: 0 0 30px 0;
  }
}
.news__see-more {
  display: inline-block;
  font-size: 13px;
  padding: 12px 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  border: 1px solid #ec7532;
  border-radius: 30px;
  color: #ec7532;
}
.news__see-more:hover {
  color: #fff;
  background: #ec7532;
}

.news-sidebar {
  flex: 0 1 25%;
}
@media (max-width: 767.98px) {
  .news-sidebar {
    width: 100%;
  }
}
.news-sidebar__search {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 15px;
  transition: all 300ms ease-in-out;
  margin: 0 0 40px 0;
  border: 1px solid #d8d8d8;
}
.input:focus + .news-sidebar__search {
  background-color: red;
}
.news-sidebar__title {
  color: #ec7532;
  padding: 0 0 10px 0;
  margin: 0 0 25px 0;
}
.news-sidebar__title::before {
  height: 2px;
}
.news-sidebar__item {
  margin: 0 0 40px 0;
}
.news-sidebar__list li:not(:last-child) {
  margin: 0 0 8px 0;
}
.news-sidebar__list li a {
  display: block;
  font-size: 16px;
  line-height: 1.42857143;
  transition: all 0.4s ease 0s;
  color: #717171;
}
.news-sidebar__list li a:hover {
  color: #fbbd61;
  transform: translateX(5px);
}
.news-sidebar__tags {
  display: flex;
  gap: 10px 8px;
  flex-wrap: wrap;
}
.news-sidebar__tags li a {
  display: inline-block;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  background-color: #d8d8d8;
  transition: all 0.4s ease 0s;
  font-size: 14px;
  padding: 5px 8px;
  letter-spacing: 2px;
  color: #717171;
  white-space: nowrap;
}
.news-sidebar__tags li a:hover {
  color: #fbbd61;
  background: #fff;
  border-color: #ec7532;
}

</style>