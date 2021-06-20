<template>
  <b-container>
    <b-row>
      <b-col class="services-block">
        <!-- Заголовоки-->
        <b-row>
          <b-col id="interest" xl="12" align="left"> Интересное </b-col>
        </b-row>
        <b-row>
          <b-col id="news-zg" xl="10" align="left">
            Новости
          </b-col>
          <!-- Кнопка "Все новости" -->
          <b-col id="rec-news" xl="2" align="right">
            Все новости
          </b-col>
        </b-row>
        <!-- Контент -->
        <div class="news-cards">
          <b-card-group columns>
            <!--  Левая карточка -->
            <b-card
              overlay
              img-src="../../img/bg-news1.png"
              img-alt="Card Image"
              text-variant="white"
              style="width: 610px;"
            >
              <b-card-text class="dtcdl">
                03.04.2020
              </b-card-text>
              <b-card-text class="zgcdl">
                Номинант на оскар – фильм «Форд против Ферарри»
              </b-card-text>
              <b-card-text class="txtcdl">
                Интересные подробности со съемок
              </b-card-text>
            </b-card>
            <!-- Правая-верхняя карточка -->
            <b-card
              no-body
              class="overflow-hidden cd1"
              style="max-width: 540px; max-height: 232px;"
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="../../img/bg-news2.png"
                    alt="Image"
                    class="rounded-0 img23"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body>
                    <b-card-text class="dtcd">
                      14.03.2020
                    </b-card-text>
                    <b-card-text class="zgcd">
                      Аварийная ситуация! Ночное ДТП в центре Нижнего Тагила
                    </b-card-text>
                    <b-card-text class="txtcd">
                      Разбираемся в инциденте вместе с инспектором ГИБДД А. А.
                      Грибниковым
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <!-- Правая-нижняя карточка -->
            <b-card
              no-body
              class="overflow-hidden cd2"
              style="max-width: 540px; max-height: 232px;"
              img-width="232px"
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="../../img/bg-news3.png"
                    alt="Image"
                    class="rounded-0 img23"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body>
                    <b-card-text class="dtcd">
                      01.05.2020
                    </b-card-text>
                    <b-card-text class="zgcd">
                      Автовладельцы выступают против COVID-19
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
        </div>
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
