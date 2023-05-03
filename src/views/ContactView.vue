<template>
  <div class="page-top">
    <div class="page-top__container _container">
      <div class="page-top__text">ANY QUESTIONS?</div>
      <h1 class="page-top__title">Please contact us</h1>
    </div>
  </div>
  <div class="contact">
    <div class="contact__container _container">
      <div class="contact__body">
        <h2 class="contact__title">SEND MESSAGE</h2>
        <form action="" class="contact__form contact-form">
          <div class="contact-form__item">
            <label for="">Name<span>*</span></label>
            <input type="text" class="contact-form__input">
          </div>
          <div class="contact-form__item">
            <label for="">Email<span>*</span></label>
            <input type="email" class="contact-form__input">
          </div>
          <div class="contact-form__item">
            <label for="">WHERE DID YOU HEAR ABOUT US?</label>
            <input type="email" class="contact-form__input">
          </div>
          <div class="contact-form__item">
            <label for="">Message</label>
            <textarea name="" id="" cols="30" rows="10" class="contact-form__textarea">
                  </textarea>
          </div>
          <div class="contact-form__item">
            <input type="submit" class="contact-form__button" value="Send">
          </div>
        </form>
        <div class="contact__info contact-info">
          <div class="contact-info__item">
            <div class="contact-info__icon"><i class="fa fa-map-marker"></i></div>
            <div class="contact-info__text">
              <div class="contact-info__title">Address</div>
              <div class="contact-info__small-text">Almaty city, Nazarbayev street, 71
              </div>
            </div>
          </div>
          <div class="contact-info__item">
            <div class="contact-info__icon"><i class="fa fa-envelope-open"></i></div>
            <div class="contact-info__text">
              <div class="contact-info__title">Email</div>
              <div class="contact-info__small-text">cinema_planet@mail.ru
              </div>
            </div>
          </div>
          <div class="contact-info__item">
            <div class="contact-info__icon"><i class="fa fa-phone"></i></div>
            <div class="contact-info__text">
              <div class="contact-info__title">Phone number</div>
              <div class="contact-info__small-text">+7 700 287 1565
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.contact__container {
  padding: 10px;
}
@media (min-width: 767.98px) {
  .contact__container {
    margin: -65px auto 0;
    border-radius: 40px 40px 0 0;
    background: #fff;
    overflow: hidden;
  }
}
.contact__map {
  position: relative;
  overflow: hidden;
  border-radius: 40px 40px 0 0;
  margin: 0 0 60px 0;
  padding-bottom: 40%;
}
.contact__map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media (max-width: 767.98px) {
  .contact__map {
    border-radius: 0;
    margin: -10px -10px 40px;
  }
}
@media (max-width: 479.98px) {
  .contact__map {
    padding-bottom: 60%;
  }
}
.contact__title {
  color: #ec7532;
  flex: 1 1 100%;
  margin: 0 0 40px 0;
}
.contact__body {
  padding: 0 0 40px;
}
@media (min-width: 767.98px) {
  .contact__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0 75px;
  }
}

.contact-form {
  flex: 0 0 50%;
}
@media (max-width: 767.98px) {
  .contact-form {
    margin: 0 0 30px 0;
  }
}
.contact-form__item:not(:last-child) {
  margin: 0 0 23px 0;
}
.contact-form label {
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4a4a4a;
}
.contact-form label span {
  margin: 0 0 0 5px;
}
.contact-form__input, .contact-form__textarea {
  font-size: 14px;
  height: 41px;
  padding: 0 15px;
  width: 100%;
  transition: all 0.3s ease 0s;
  border: 1px solid #d8d8d8;
}
.contact-form__input:focus, .contact-form__textarea:focus {
  border-color: #fbbd61;
}
.contact-form__textarea {
  height: 162px;
}
.contact-form__button {
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ec7532;
  padding: 12px 24px;
  border-radius: 30px;
  border: 1px solid #ec7532;
  background: transparent;
  transition: all 0.3s ease 0s;
}
.contact-form__button:hover {
  color: #fff;
  background: #ec7532;
}

.contact-info {
  flex: 0 0 33.3333%;
}
.contact-info__item {
  display: flex;
  align-items: center;
}
.contact-info__item:not(:last-child) {
  margin: 0 0 30px 0;
}
.contact-info__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 75px;
  min-height: 75px;
  max-width: 75px;
  max-height: 75px;
  border: solid 1px #d8d8d8;
  border-radius: 50%;
  margin: 0 25px 0 0;
}
.contact-info__icon i {
  font-size: 25px;
  color: #ec7532;
}
.contact-info__title {
  color: #4a4a4a;
  font-weight: 300 !important;
  line-height: 1.4em;
  font-size: 18px;
}
.contact-info__small-text {
  color: #717171 !important;
  font-size: 16px !important;
  line-height: 1.42857143;
}

/*----------------------------------------------------*/
.page-top {
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url(../img/main-slider/Slide_2.jpg);
}
.page-top__container {
  padding: 200px 15px 100px;
}
@media (max-width: 767.98px) {
  .page-top__container {
    padding: 80px 20px 60px;
  }
}
.page-top__text {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fbbd61;
}
.page-top__title {
  font-size: 52px;
  font-weight: 300;
  letter-spacing: 3px;
  line-height: 1.4em;
  color: #fff;
}
@media (max-width: 767.98px) {
  .page-top__title {
    font-size: 35px;
  }
}
</style>