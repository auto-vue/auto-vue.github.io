<template>
  <b-container fluid>
    <b-row>
      <b-col class="footer-block">
        <!-- Линия -->
        <hr class="footline" />
        <!-- Нав. меню 1 -->
        <b-container fluid class="f-menu">
          <b-row>
            <b-col col offset-xl="1" offset-lg="0" xl="1" class="f-main">
              <a style="color: #686d79" href="#">Главная</a>
            </b-col>
            <b-col col xl="1" class="f-news">
              <a style="color: #686d79" href="#news">Новости</a>
            </b-col>
            <b-col col xl="1" class="f-sales">
              <a style="color: #686d79;" href="#sales">Акции</a>
            </b-col>
            <b-col col xl="1" class="f-catalog">
              <a style="color: #686d79" href="#catalog">Каталог</a>
            </b-col>
            <b-col col xl="1" class="f-payment">
              <a style="color: #686d79" href="#payment">Оплата</a>
            </b-col>
            <b-col col xl="1" class="f-delivery">
              <a style="color: #686d79" href="#delivery">Доставка</a>
            </b-col>
            <b-col col xl="1" class="f-contacts">
              <a style="color: #686d79" href="#contacts">Контакты</a>
            </b-col>
          </b-row>
        </b-container>
        <!-- Нав. меню 2 -->
        <b-container fluid class="f-links">
          <b-row>
            <b-col col offset-xl="1" offset-lg="0" xl="2" class="f-lk">
              <a style="color: #686d79" href="#">Личный кабинет</a>
            </b-col>
            <b-col col xl="2" class="f-cart">
              <a style="color: #686d79" href="#">Корзина</a>
            </b-col>
            <b-col col xl="2" class="f-about">
              <a style="color: #686d79;" href="#">О компании</a>
            </b-col>
            <b-col col xl="2" class="f-feedback">
              <a style="color: #686d79" href="#">Обратная связь</a>
            </b-col>
            <b-col col xl="2" class="f-policy">
              <a style="color: #686d79" href="#">Политика конфиденциальности</a>
            </b-col>
          </b-row>
        </b-container>
        <!-- Контент -->
        <b-container fluid class="f-content">
          <b-row>
            <!-- Лого -->
            <b-col col offset-xl="1" offset-lg="0" xl="3">
              <a href="#">
                <img
                  src="../../img/foot-logo.svg"
                  width="221"
                  height="127"
                  alt="amkorauto"
              /></a>
            </b-col>
            <b-col xl="2">
              <p class="address1">
                ООО «Амкоравто Урал»
              </p>
              <p class="address2">
                633 044 Россия, Свердловская область г. Нижний Тагил ул.
                Аграркова, дом 54 «А»
              </p>
              <p class="address3">
                ИНН 1234567890 КПП 08642
              </p>
            </b-col>
            <b-col offset-xl="1" offset-lg="0" xl="2">
              <p class="f-tel">
                +7 (3435) 12-34-56
              </p>
              <p class="f-mail">
                amkor@mail.ru
              </p>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
    <Styles />
  </b-container>
</template>

<script>
import Styles from "./Styles";

export default {
  components: {
    Styles,
  },
  data() {
    return {};
  },
};
</script>
