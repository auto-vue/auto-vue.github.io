<template>
  <b-container fluid>
    <b-row>
      <!-- Левый блок -->
      <b-col class="query-block" md="6">
        <!-- Заголовки -->
        <b-row>
          <b-col id="itemsearch" xl="12" align="left"> Поиск товара </b-col>
        </b-row>
        <b-row>
          <b-col id="query-zg" xl="12" align="left"> Запрос по VIN </b-col>
        </b-row>
        <!-- Имя: заголовок и форма -->
        <b-row>
          <b-col id="nametitle" xl="12" align="left"> Введите имя </b-col>
        </b-row>
        <b-col lg="4">
          <b-form-input
            class="dataform"
            id="input-none"
            :state="null"
            placeholder="Петров Петр Петрович"
          ></b-form-input>
        </b-col>
        <!-- Почта: заголовок и форма -->
        <b-row>
          <b-col id="emailtitle" xl="12" align="left">
            Введите электронную почту
          </b-col>
        </b-row>
        <b-col lg="4">
          <b-form-input
            class="dataform"
            id="input-none"
            :state="null"
            placeholder="amkorauto@mail.ru"
          ></b-form-input>
        </b-col>
        <!-- Телефон: заголовок и форма -->
        <b-row>
          <b-col id="phonetitle" md="12" align="left">
            Введите телефон
          </b-col>
        </b-row>
        <b-col lg="4">
          <b-form-input
            class="dataform"
            id="input-none"
            :state="null"
            placeholder="+7(___)___-__-__"
          ></b-form-input>
        </b-col>
        <!-- Чекбоксы -->
        <b-container>
          <b-row>
            <b-col>
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  id="checkbox-group-2"
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-2"
                >
                  <b-form-checkbox class="ch1" value="cb1"
                    >Только оригинал</b-form-checkbox
                  >
                  <b-form-checkbox class="ch2" value="cb2"
                    >Минимальная цена</b-form-checkbox
                  >
                  <b-form-checkbox class="ch3" value="cb3"
                    >Наши рекомендации</b-form-checkbox
                  >
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <!-- Правый блок -->
      <b-col class="send-block" md="6">
        <!-- Заголовки -->
        <b-container>
          <b-col class="tabsblock" offset-xl="1" xl="8">
            <b-row>
              <v-tabs v-model="tab" background-color="transparent" grow>
                <v-tab class="firsttab">
                  Данные автомобиля
                </v-tab>
                <v-tab class="secondtab">
                  Запчасти
                </v-tab>
              </v-tabs>
              <!-- Контент -->
              <v-tabs-items v-model="tab">
                <!-- 1 вкладка -->
                <v-tab-item>
                  <v-card class="firstcard" flat>
                    <v-card-text>
                      <b-col>
                        <!-- VIN: заголовок и форма -->
                        <b-row>
                          <b-col id="vintitle" xl="12" align="left">
                            VIN
                          </b-col>
                          <v-text-field
                            id="vinform"
                            placeholder="XXXX XXXX XXXX XXXX"
                            required
                          ></v-text-field>
                        </b-row>
                        <!-- Модель: заголовок и форма -->
                        <b-row>
                          <b-col id="modelstitle" xl="12" align="left">
                            Марка и модель
                          </b-col>
                          <v-text-field
                            id="modelsform"
                            placeholder="Lada X-RAY"
                            required
                          ></v-text-field>
                        </b-row>
                        <!-- Год: заголовок и форма -->
                        <b-row>
                          <b-col id="yeartitle" xl="12" align="left">
                            Год выпуска
                          </b-col>
                          <v-text-field
                            id="yearform"
                            placeholder="2000"
                            required
                          ></v-text-field>
                        </b-row>
                        <!-- Кнопка отправки -->
                        <b-row>
                          <a href="#1234" id="rectangle">
                            <p id="recp">Отправить</p>
                          </a>
                        </b-row>
                        <!-- Политика конфиденциальности -->
                        <b-row>
                          <p class="accepttext">
                            Заполняя форму и нажимая на кнопку вы соглашаетесь с
                            <b> политикой конфиденциальности </b> и на сбор и
                            обработку персональных данных
                          </p>
                        </b-row>
                      </b-col>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <!-- 2 вкладка -->
                <v-tab-item>
                  <v-card class="secondcard" flat>
                    <v-card-text>
                      <b-col>
                        <b-row>
                          <b-col sm="9" xl="12">
                            <!-- Форма для ввода -->
                            <b-form-textarea
                              class="partsinput"
                              id="textarea-rows"
                              placeholder="Введите нужные детали"
                              rows="15"
                              no-resize
                            ></b-form-textarea>
                          </b-col>
                        </b-row>
                      </b-col>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </b-row>
          </b-col>
        </b-container>
      </b-col>
    </b-row>
    <Styles />
  </b-container>
</template>

<script>
import Styles from "./Styles";
export default {
  data() {
    return {
      selected: [],
      tab: null,
    };
  },
  components: {
    Styles,
  },
};
</script>
