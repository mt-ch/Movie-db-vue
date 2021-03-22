<template>
  <div>
    <Movie
      v-for="(movie, i) in upcoming"
      :key="i"
      :movie="movie"
    />
  </div>
</template>

<script>
import Movie from "../Movie/Movie.vue";
import { mapState } from "vuex";

export default {
  name: "Upcoming",
  components: {
    Movie,
  },
  computed: {
    ...mapState(["upcoming"]),
  },
  created() {
    this.$store.dispatch("getUpcoming", { self: this });
  },
};
</script>