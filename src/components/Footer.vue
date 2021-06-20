<template>
  <b-container fluid>
    <b-row>
      <b-col class="footer-block">
        <!-- Заголовоки-->
        <b-row>
          <b-col id="interest" xl="12" align="left"> Интересное </b-col>
        </b-row>
        <b-row>
          <b-col id="news-zg" xl="10" align="left">
            Новости
          </b-col>
        </b-row>
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
