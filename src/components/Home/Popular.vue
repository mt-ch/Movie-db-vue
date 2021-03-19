<template>
  <div>
    <Movie
      v-for="(movie, i) in popular"
      :key="i"
      :movie="movie"
      :loading="loading"
    />
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
import Movie from "../Movie/Movie.vue";

const PopularRepository = Repository.get("popular");

export default {
  name: "Popular",
  components: {
    Movie,
  },
  data() {
    return {
      popular: [],
    };
  },
  created() {
    this.getPopular();
  },
  methods: {
    getPopular: async function () {
      const { data } = await PopularRepository.get();
      this.popular = data.results;
      this.loading = false;
    },
  },
};
</script>