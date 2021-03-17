<template>
  <div class="col">
    <Movie v-for="(movie, i) in upcoming" :key="i" :movie="movie" />
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
const UpcomingRepository = Repository.get("upcoming");

import Movie from "../Movie/Movie";

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
    },
  },
};
</script>