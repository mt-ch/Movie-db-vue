<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    NavBar: () => import('./components/Nav.vue'),
    Footer: () => import('./components/Footer.vue'),
  }
}
</script>
