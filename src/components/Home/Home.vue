<template>
  <div>
    <ListToggle
      :handlePopular="handlePopular"
      :handleUpcoming="handleUpcoming"
      :handleTopRated="handleTopRated"
      :popularActive="popularActive"
      :upcomingActive="upcomingActive"
      :topRatedActive="topRatedActive"
      :key="componentKey"
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
      popularActive: true,
      upcomingActive: false,
      topRatedActive: false,
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    handlePopular() {
      this.toggleView = 1;

      this.popularActive = true;
      this.upcomingActive = false;
      this.topRatedActive = false;
      this.forceRerender();

    },
    handleUpcoming() {
      this.toggleView = 2;

      this.popularActive = false;
      this.upcomingActive = true;
      this.topRatedActive = false;
      this.forceRerender();

    },
    handleTopRated: function () {
      this.toggleView = 3;

      this.popularActive = false;
      this.upcomingActive = false;
      this.topRatedActive = true;
      this.forceRerender();
    },
  
  },
};
</script>
<style>
</style>