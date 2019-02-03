<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/globalComponent/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    background: #fff4e3;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
