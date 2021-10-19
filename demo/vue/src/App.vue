<template>
  <div id="app">
    <sdds-theme />
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
body {
  background: var(--sdds-grey-50);
}
</style>
