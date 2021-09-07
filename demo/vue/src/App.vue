<template>
  <div id="app">
    <sdds-theme />
    <Header />
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>

<style>
body {
  background: var(--sdds-grey-50);
}
</style>
