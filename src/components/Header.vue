<template>
  <div class="b-container fluid">
    <div class="header">
      <nav class="navbar navbar-expand-xl navbar-light bg-transparent">
        <!-- Логотип -->
        <a class="navbar-brand" href="#">
          <img src="../../img/logo.png" width="38" height="50" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Нав. меню -->
        <b-container>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active" id="newslink">
                <a class="nav-link" href="#news">Новости</a>
              </li>
              <li class="nav-item active" id="saleslink">
                <a class="nav-link" href="#sales">Акции</a>
              </li>
              <li class="nav-item active" id="cataloglink">
                <a class="nav-link" href="#catalog">Каталог</a>
              </li>
              <li class="nav-item active" id="paymentlink">
                <a class="nav-link" href="#payment">Оплата</a>
              </li>
              <li class="nav-item active" id="deliverylink">
                <a class="nav-link" href="#delivery">Доставка</a>
              </li>
              <li class="nav-item active" id="contactslink">
                <a class="nav-link" href="#contacts">Контакты</a>
              </li>
            </ul>
          </div>
        </b-container>
        <!-- Строка поиска -->
        <b-container>
          <b-row>
            <b-col md="9" offset-md="3">
              <b-form-input
                class="searchform"
                :id="searchform"
                :type="search"
              ></b-form-input>
            </b-col>
            <!-- Корзина, Личный кабинет -->
            <b-col class="cartlk">
              <a class="cart" href="#"> <img src="../../img/cart.png"/></a>
              <a class="lk" href="#"> <img src="../../img/lk.png"/></a>
            </b-col>
          </b-row>
        </b-container>
        <!-- Линия разделения -->
        <hr class="headline" />
      </nav>
      <!-- Баннер -->
      <b-container>
        <b-row id="headmid">
          <div class="header-zg-text col-lg-7">
            <p class="zg-header">Подготовься к зиме</p>
            <p class="text-header1">
              Подберем и подарим 4 литра масла, при покупке
            </p>
            <p class="text-header2">полного комплекта зимней резины</p>
          </div>
          <a class="rec col-lg-5" href="#"> <img src="../../img/rec.png"/></a>
        </b-row>
      </b-container>
      <!-- Ссылки на соц. сети -->
      <b-container fluid>
        <b-row class="snet col-lg-1">
          <a class="vk-link" href="https://vk.com/">
            <img src="../../img/vk.png"
          /></a>
          <a class="insta-link" href="https://www.instagram.com/">
            <img src="../../img/insta.png"
          /></a>
          <a class="fb-link" href="https://www.facebook.com/">
            <img src="../../img/fb.png"
          /></a>
          <a class="fb-link" href="https://www.youtube.com/">
            <img src="../../img/yt.png"
          /></a>
          <a class="ok-link" href="https://ok.ru/">
            <img src="../../img/ok.png"
          /></a>
        </b-row>
      </b-container>
    </div>
    <Styles />
  </div>
</template>

<script>
import Styles from "./Styles";
export default {
  data() {
    return {
      focused: false,
    };
  },
  components: {
    Styles,
  },
  types: ["search"],
};
</script>
