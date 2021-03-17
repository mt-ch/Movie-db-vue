<template>
  <div id="app">
    <NavBar/>
    <!-- <ListToggle/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/Nav.vue";
// import ListToggle from "./components/ListToggle.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    // ListToggle
  }
}
</script>

<style>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #1c212e;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
}
</style>
