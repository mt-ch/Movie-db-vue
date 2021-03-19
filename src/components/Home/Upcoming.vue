<template>
  <div>
    <Movie
      v-for="(movie, i) in upcoming"
      :key="i"
      :movie="movie"
      :loading="loading"
    />
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
const UpcomingRepository = Repository.get("upcoming");
import Movie from "../Movie/Movie.vue";

export default {
  name: "Upcoming",
  components: {
    Movie,
  },
  data() {
    return {
      upcoming: [],
    };
  },
  created() {
    this.getUpcoming();
  },
  methods: {
    getUpcoming: async function () {
      const { data } = await UpcomingRepository.get();
      this.upcoming = data.results;
      this.loading = false;
    },
  },
};
</script>