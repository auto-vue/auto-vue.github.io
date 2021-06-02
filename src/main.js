import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
