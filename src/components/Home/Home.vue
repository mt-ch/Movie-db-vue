<template>
  <div class="container">
    <ListToggle
      :handlePopular="handlePopular"
      :handleUpcoming="handleUpcoming"
      :handleTopRated="handleTopRated"
    />
    <Popular v-if="toggleView === 1" />
    <TopRated v-if="toggleView === 2" />
    <Upcoming v-if="toggleView === 3" />
  </div>
</template>
<script>
import Popular from "./Popular.vue";
import TopRated from "./TopRated.vue";
import Upcoming from "./Upcoming.vue";
import ListToggle from "./ListToggle";

export default {
  components: {
    Popular,
    TopRated,
    Upcoming,
    ListToggle,
  },
  data() {
    return {
      toggleView: 1,
    };
  },
  methods: {
    handlePopular() {
      this.toggleView = 1;
    },
    handleUpcoming() {
      this.toggleView = 2;
    },
    handleTopRated: function () {
      this.toggleView = 3;
    },
  },
};
</script>
<style>
</style>