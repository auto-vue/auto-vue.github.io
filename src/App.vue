<template>
  <div id="app">
    <Header />
    <Query />
    <Services />
    <News />
    <Footer />
    <Styles />
  </div>
</template>

<script>
import Header from "./components/Header";
import Query from "./components/Query.vue";
import Styles from "./components/Styles.vue";
import Services from "./components/Services.vue";
import News from "./components/News.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Query,
    Services,
    News,
    Footer,
    Styles,
  },
};
</script>

<style></style>
