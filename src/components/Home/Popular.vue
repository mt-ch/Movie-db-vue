<template>
  <div>
    <!-- <div v-if="loading">
      <div>Loading...</div>
    </div> -->
    <transition name="fade">
      <div>
        <Movie v-for="(movie, i) in popular" :key="i" :movie="movie" />
      </div>
    </transition>
  </div>
</template>

<script>
import Movie from "../Movie/Movie.vue";
import { mapState } from "vuex";

export default {
  name: "Popular",
  components: {
    Movie,
  },

  computed: {
    ...mapState(["popular"]),
    loading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.$store.dispatch("getPopular", { self: this });
    // setInterval(() => {
    //   this.$store.state.isLoading = false;
    // }, 2000);
  },
};
</script>