<template>
  <view>
    <!-- <SearchExpressage></SearchExpressage> -->
    <home-page></home-page>
  </view>
</template>

<script>
import HomePage from './components/HomePage.vue'
// import SearchExpressage from './components/SearchExpressage.vue'

export default {
  name: 'App',
  components: {
    // SearchExpressage,
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
