<!--<template>-->
<!--  <div class="event-details">{{ event }}-->
<!--    <div class="event-detail__main event-main">-->
<!--      <div class="event-main__container _container">-->
<!--        <div class="event-main__info">-->
<!--          <div class="event-main__genre">-->
<!--            FOOD FESTIVAL-->
<!--          </div>-->
<!--          <div class="event-main__name">{{event.name}}</div>-->
<!--          <div class="event-main__description">{{event.shortDescription}}</div>-->
<!--        </div>-->
<!--        <div class="event-main__rating">-->
<!--          <i class="fa fa-star"></i>-->
<!--          <i class="fa fa-star"></i>-->
<!--          <i class="fa fa-star"></i>-->
<!--          <i class="fa fa-star"></i>-->
<!--          <i class="fa fa-star grey"></i>-->
<!--        </div>-->
<!--        <div class="event-main__action">-->
<!--          <div class="event-main__icon">{{ event.constraints }}</div>-->
<!--          <div class="event-main__statistics">-->
<!--            <div class="event-main__item">-->
<!--              <div class="event-main__number">Location</div>-->
<!--              <span>{{ event.location }}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="event-detailt__about about-event">-->
<!--      <div class="about-event__container _container">-->
<!--        <div class="about-event__synopsis event-synopsis">-->
<!--          <h2 class="event-synopsis__title">INFORMATION</h2>-->
<!--          <div class="event-synopsis__body">-->
<!--            <div class="event-synopsis__video">-->
<!--              <iframe src="https://www.youtube.com/embed/DJ7rSS-lxmQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--            </div>-->

<!--            <div class="event-synopsis__info">-->
<!--              <div class="event-synopsis__name">The description</div>-->
<!--              <div class="event-synopsis__description">-->
<!--                {{ event.description }}-->
<!--              </div>-->
<!--              <ul class="event-synopsis__additional-info">-->
<!--                <li><span>ORGANIZER</span>{{ event.organization.name }}</li>-->
<!--                <li><span>PHONE NUMBER</span>{{event.organization.phone}}</li>-->
<!--                <li><span>EMAIL</span>{{event.organization.email}}</li>-->
<!--                <li><span>WEBSITE</span>{{event.organization.site}}</li>-->
<!--                <li><span>ADDRESS</span>{{event.organization.address}}</li>-->
<!--              </ul>-->
<!--              <ul class="event-synopsis__social">-->
<!--                <li>-->
<!--                  <a href=""><span class="fa fa-facebook-f"></span></a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href=""><span class="fa fa-twitter"></span></a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href=""><span class="fa fa-instagram"></span></a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href=""><span class="fa fa-google-plus"></span></a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="event-details__comments event-comments">-->
<!--      <div class="event-comments__container _container">-->
<!--        <div class="event-comments__content">-->
<!--          <h2 class="event-comments__title">COMMENTS</h2>-->
<!--          <div class="event-comments__item">-->
<!--            <div class="event-comments__avatar _ibg">-->
<!--&lt;!&ndash;              <img src="img/comment/undefined-user.png" alt="">&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="event-comments__info">-->
<!--              <div class="event-comments__date">NOVEMBER 15, 2017</div>-->
<!--              <div class="event-comments__name">Lee Grant</div>-->
<!--              <div class="event-comments__comment">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="event-comments__item">-->
<!--            <div class="event-comments__avatar _ibg">-->
<!--&lt;!&ndash;              <img src="img/comment/undefined-user.png" alt="">&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="event-comments__info">-->
<!--              <div class="event-comments__date">NOVEMBER 15, 2017</div>-->
<!--              <div class="event-comments__name">Lee Grant</div>-->
<!--              <div class="event-comments__comment">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="event-comments__item">-->
<!--            <div class="event-comments__avatar _ibg">-->
<!--&lt;!&ndash;              <img src="img/comment/undefined-user.png" alt="">&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="event-comments__info">-->
<!--              <div class="event-comments__date">NOVEMBER 15, 2017</div>-->
<!--              <div class="event-comments__name">Lee Grant</div>-->
<!--              <div class="event-comments__comment">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="event-comments__form comment-form">-->
<!--          <h2 class="comment-form__title">LEAVE A COMMENT</h2>-->
<!--          <form action="#">-->
<!--            <div class="comment-form__item">-->
<!--              <div class="comment-form__text">Your email address will not be published. Required fields are marked<span>*</span></div>-->
<!--            </div>-->

<!--            <div class="comment-form__item">-->
<!--              <label for="">NAME<span>*</span></label>-->
<!--              <input type="text" class="comment-form__input">-->
<!--            </div>-->
<!--            <div class="comment-form__item">-->
<!--              <label for="">EMAIL<span>*</span></label>-->
<!--              <input type="text" class="comment-form__input">-->
<!--            </div>-->
<!--            <div class="comment-form__item">-->
<!--              <label for="">COMMENT<span>*</span></label>-->
<!--              <textarea name="" id="" cols="30" rows="10" class="comment-form__textarea"></textarea>-->
<!--            </div>-->
<!--            <div class="comment-form__item checkbox">-->
<!--              <input type="checkbox" class="comment-form__checkbox">-->
<!--              <label for="">Save my name, email, and website in this browser for the next time i comment</label>-->

<!--            </div>-->
<!--            <button class="comment-form__button">Post comment</button>-->
<!--          </form>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<script setup lang="ts">

import type {PropType} from "vue";
import type {IEventDetail} from "@/domain/interfaces/response/event-detail.interface";

const props = defineProps({
  event: {
    type: Object as PropType<IEventDetail>,
    required: true
  }
})
</script>
<!--<style lang="scss">-->
<!--@import "event-details";-->
<!--</style>-->