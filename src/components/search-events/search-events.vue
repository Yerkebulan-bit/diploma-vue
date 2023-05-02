<template>
  <div class="schedule">
    <div class="schedule__container _container">
      <div class="schedule__search">
        <input type="text" placeholder="Find your event">
        <i class="fa fa-search"></i>
      </div>
      <div class="schedule__tabs schedule-tabs">
        <nav class="schedule-tabs__items">
          <button class="schedule-tabs__item _active" data-tab="#tab1">MON</button>
          <button class="schedule-tabs__item" data-tab="#tab2">TUES</button>
          <button class="schedule-tabs__item" data-tab="#tab3">WED</button>
          <button class="schedule-tabs__item" data-tab="#tab4">THURS</button>
          <button class="schedule-tabs__item" data-tab="#tab5">FRI</button>
          <button class="schedule-tabs__item" data-tab="#tab6">SAT</button>
          <button class="schedule-tabs__item" data-tab="#tab7">SUN</button>
        </nav>
        <div class="schedule-tabs__body">
          <div class="schedule-tabs__block _active" id="tab1">
            <div class="schedule-tabs__movie movie">
<!--              <a href="movie.html" class="movie__image _ibg"><img src="./img/posters/poster_1.jpg" alt=""></a>-->
              <div class="movie__info">
                <div class="movie__genre">FOOD FESTIVAL</div>
                <div class="movie__name">Brewery Tour And Tasting at Brewery Lemke</div>
                <div class="movie__description">During the 2-hour guided tour through our brewery in Berlin-Mitte, we will show you how much work, but also the spirit of research and invention are behind the brewing process. You will follow the path of the beer from the brewhouse to bottling.</div>
                <a href="" class="movie__more">SHOW MORE</a>
                <div class="movie__bottom">
                  <div class="movie__schedule">
                    <div class="movie__title">Date and time</div>
                    <div class="movie__times">
                      <div class="movie__time">10:00 am</div>
                      <div class="movie__time">23 February 2023</div>
                    </div>
                  </div>
                  <div class="movie__duration">
                    <div class="movie__title">110 minutes</div>
                    <div class="movie__icon">18</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="schedule-tabs__movie movie">
<!--              <a href="" class="movie__image _ibg"><img src="./img/posters/poster_3.jpg" alt=""></a>-->
              <div class="movie__info">
                <div class="movie__genre">
                  FOOD EVENT</div>
                <div class="movie__name">Wine and Cheese Tasting</div>
                <div class="movie__description">The first thing that comes to your mind when you think Germany probably isn't wine, and if it is then it is likely riesling from the Mosel. That is because Germany is keeping their wines as one of their best kept secrets.</div>
                <a href="" class="movie__more">SHOW MORE</a>
                <div class="movie__bottom">
                  <div class="movie__schedule">
                    <div class="movie__title">Date and time</div>
                    <div class="movie__time">04:00 pm</div>
                    <div class="movie__time">10 March 2023</div>
                  </div>
                  <div class="movie__duration">
                    <div class="movie__title">120 minutes</div>
                    <div class="movie__icon">18</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="schedule-tabs__movie movie">
<!--              <a href="/batman.html" class="movie__image _ibg"><img src="./img/posters/poster_4.jpg" alt=""></a>-->
              <div class="movie__info">
                <div class="movie__genre">FOOD EVENT</div>
                <div class="movie__name">
                  Wilhelm Restaurant at the Humboldt Forum</div>
                <div class="movie__description">Restaurant WILHELM is part of the WILHELM and ALEXANDER gastronomy concept, which combines a restaurant and a deli. The chef de cuisine is Fabian Fiedler.</div>
                <a href="/batman.html" class="movie__more">SHOW MORE</a>
                <div class="movie__bottom">
                  <div class="movie__schedule">
                    <div class="movie__title">Date and time</div>
                    <div class="movie__time">12:00 am</div>
                    <div class="movie__time">10 May 2023</div>
                  </div>
                  <div class="movie__duration">
                    <div class="movie__title">180 minutes</div>
                    <div class="movie__icon">18</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {IEvent} from "@/domain/interfaces/response/event.interface";

const props = defineProps({
  searchEvents: Array as PropType<IEvent[]>
})
</script>

<style lang="scss">
@import "search-events";
</style>