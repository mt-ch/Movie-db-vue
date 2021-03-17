<template>
  <div>
    <Movie v-for="(movie, i) in popular" :key="i" :movie="movie" />
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
const PopularRepository = Repository.get("popular");

import Movie from "../Movie/Movie";
export default {
  name: "Popular",
  components: {
    Movie
  },
  data() {
    return {
      popular: []
    };
  },
  created() {
    this.getPopular();
  },
  methods: {
    getPopular: async function() {
      const { data } = await PopularRepository.get();
      this.popular = data.results;
    }
  }
};
</script>