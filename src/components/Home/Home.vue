<template>
  <div class="home">
    <div class="d-flex">
      <ListToggle
        :handlePopular="handlePopular"
        :handleUpcoming="handleUpcoming"
        :handleTopRated="handleTopRated"
        :popularActive="popularActive"
        :upcomingActive="upcomingActive"
        :topRatedActive="topRatedActive"
        :key="componentKey"
      />
    </div>
    <Popular v-if="toggleView === 1" :loading="loading" />
    <TopRated v-if="toggleView === 2" :loading="loading" />
    <Upcoming v-if="toggleView === 3" :loading="loading" />
  </div>
</template>

<script>
export default {
  components: {
    Popular: () => import("./Popular.vue"),
    TopRated: () => import("./TopRated.vue"),
    Upcoming: () => import("./Upcoming.vue"),
    ListToggle: () => import("./ListToggle.vue"),
  },
  data() {
    return {
      loading: true,
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