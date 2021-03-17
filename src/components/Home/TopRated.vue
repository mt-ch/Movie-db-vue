<template>
  <div class="col">
    <Movie v-for="(movie, i) in topRated" :key="i" :movie="movie" />
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
const TopRatedRepository = Repository.get("topRated");

import Movie from "../Movie/Movie";

export default {
  name: "TopRated",
  components: {
    Movie
  },
  data() {
    return {
      topRated: []
    };
  },
  created() {
    this.getTopRated();
  },
  methods: {
    getTopRated: async function() {
      const { data } = await TopRatedRepository.get();
      this.topRated = data.results;
    }
  }
};
</script>