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

export default {
  name: "Upcoming",
  components: {
    Movie: () => import("../Movie/Movie.vue"),
  },
  props: {
    loading: {
      type: Boolean,
    },
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