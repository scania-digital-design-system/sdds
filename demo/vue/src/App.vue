<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>


