<template>
  <div id="app">
    <Header />
    <Query />
    <Services />
    <Styles />
  </div>
</template>

<script>
import Header from "./components/Header";
import Query from "./components/Query.vue";
import Styles from "./components/Styles.vue";
import Services from "./components/Services.vue";
export default {
  name: "app",
  components: {
    Header,
    Query,
    Services,
    Styles,
  },
};
</script>

<style></style>
