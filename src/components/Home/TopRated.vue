<template>
  <div>
    <Movie
      v-for="(movie, i) in topRated"
      :key="i"
      :movie="movie"
      :loading="loading"
    />
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
const TopRatedRepository = Repository.get("topRated");

export default {
  name: "TopRated",
  components: {
    Movie: () => import("../movie/Movie.vue"),
  },
  props: {
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      topRated: [],
    };
  },
  created() {
    this.getTopRated();
  },
  methods: {
    getTopRated: async function () {
      const { data } = await TopRatedRepository.get();
      this.topRated = data.results;
      this.loading = false;
    },
  },
};
</script>