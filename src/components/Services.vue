<template>
  <b-container>
    <b-row>
      <b-col class="services-block">
        <!-- Заголовок -->
        <b-row>
          <b-col id="services-zg" xl="12" align="left">
            Вы можете нам доверить
          </b-col>
        </b-row>
        <!-- Карусель -->
        <swiper class="swiper" :options="swiperOption">
          <!-- 1 слайд -->
          <swiper-slide>
            <b-card
              title="Подбор и замена    ‌‌‍‍ масла"
              img-src="../../img/1sev.png"
              img-alt="Image"
              img-top
              tag="article"
              img-height="375px"
              img-width="300px"
              class="tcard mb-2"
            >
              <!-- style="height: 600px" -->
              <b-card-text class="cardprice">
                2000 Р
              </b-card-text>

              <b-button class="butcard" href="#" variant="primary"
                >Добавить</b-button
              >

              <a href="#" class="card-link">Подробнее</a>
            </b-card>
          </swiper-slide>
          <!-- 2 слайд -->
          <swiper-slide>
            <b-card
              title="Консультация по замене
автозапчастей"
              img-src="../../img/2sev.png"
              img-alt="Image"
              img-top
              tag="article"
              img-height="375px"
              img-width="300px"
              class="tcard mb-2"
            >
              <b-card-text class="cardprice">
                1444 Р
              </b-card-text>

              <b-button class="butcard" href="#" variant="primary"
                >Добавить</b-button
              >
              <a href="#" class="card-link">Подробнее</a>
            </b-card>
          </swiper-slide>
          <!-- 3 слайд -->
          <swiper-slide>
            <b-card
              title="Осмотр автомобиля
и рекомендации к ремонту"
              img-src="../../img/3sev.png"
              img-alt="Image"
              img-top
              tag="article"
              img-height="375px"
              img-width="300px"
              class="tcard mb-2"
            >
              <b-card-text class="cardprice">
                4800 Р
              </b-card-text>

              <b-button class="butcard" href="#" variant="primary"
                >Добавить</b-button
              >
              <a href="#" class="card-link">Подробнее</a>
            </b-card>
          </swiper-slide>
          <!-- <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide> -->
          <!-- Кнопки переключения слайдов -->
          <div class="butprev" slot="button-prev"></div>
          <div class="butnext" slot="button-next"></div>
        </swiper>
      </b-col>
    </b-row>
    <Styles />
  </b-container>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Styles from "./Styles";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Styles,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 60,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".butnext",
          prevEl: ".butprev",
        },
      },
    };
  },
};
</script>
