<template>
  <b-container fluid>
    <b-row>
      <b-col class="footer-block">
        <!-- Линия -->
        <hr class="footline" />
        <!-- Нав. меню -->
        <b-container class="f-links">
          <b-row>
            <b-col class="f-main xl-1">
              <a style="color: #686d79" href="#">Главная</a>
            </b-col>
            <b-col class="f-news xl-1">
              <a style="color: #686d79" href="#news">Новости</a>
            </b-col>
            <b-col class="f-sales xl-1">
              <a style="color: #686d79;" href="#sales">Акции</a>
            </b-col>
            <b-col class="f-catalog xl-1">
              <a style="color: #686d79" href="#catalog">Каталог</a>
            </b-col>
            <b-col class="f-payment xl-1">
              <a style="color: #686d79" href="#payment">Оплата</a>
            </b-col>
            <b-col class="f-delivery xl-1">
              <a style="color: #686d79" href="#delivery">Доставка</a>
            </b-col>
            <b-col class="f-contacts xl-1">
              <a style="color: #686d79" href="#contacts">Контакты</a>
            </b-col>
          </b-row>
        </b-container>
        <!-- Контент -->
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
