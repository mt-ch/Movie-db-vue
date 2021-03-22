<template>
  <div>
    <Movie
      v-for="(movie, i) in topRated"
      :key="i"
      :movie="movie"
    />
  </div>
</template>

<script>
import Movie from "../Movie/Movie.vue";
import { mapState } from "vuex";

export default {
  name: "TopRated",
  components: {
    Movie,
  },
  computed: {
    ...mapState(["topRated"]),
  },
  created() {
    this.$store.dispatch("getTopRated", { self: this });
    // setInterval(() => {
    //   this.$store.state.isLoading = false;
    // }, 2000);
  },
};
</script>