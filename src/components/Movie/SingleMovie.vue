<template>
  <div style="height: 100%">
    <a v-on:click="handleBack">
      <b-icon-arrow-left></b-icon-arrow-left>
    </a>
    <MovieHeader :poster="movie.poster_path" :backdrop="movie.backdrop_path" />
      <MovieInfo :movie="movie" :movieGenres="movie.genres" />
      <Recommendations :recommendations="recommendations" />
      <MovieCast :cast="cast" />
      <MovieCrew :crew="crew" />
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
import MovieHeader from "./MovieHeader.vue";
import { BIconArrowLeft } from "bootstrap-vue";
import MovieInfo from "./MovieInfo.vue";
import Recommendations from "./Recommendations.vue";
import MovieCast from "./MovieCast.vue";
import MovieCrew from "./MovieCrew.vue";

const MovieRepository = Repository.get("movie");

export default {
  name: "Movie",
  components: {
    BIconArrowLeft,
    MovieHeader,
    Recommendations,
    MovieInfo,
    MovieCast,
    MovieCrew,
  },
  data() {
    return {
      movie: [],
      recommendations: [],
      cast: [],
      crew: [],
      filmPoster: "https://image.tmdb.org/t/p/w500/",
    };
  },
  created() {
    this.getMovie();
  },
  methods: {
    getMovie: async function () {
      const movieData = await MovieRepository.get(this.$route.params.id);
      const recommendationsData = await MovieRepository.getRecommendations(
        this.$route.params.id
      );
      const creditsData = await MovieRepository.getCredits(
        this.$route.params.id
      );

      const crewData = creditsData.data.crew;
      const castData = creditsData.data.cast;

      this.cast = castData;
      this.crew = crewData;
      this.recommendations = recommendationsData.data.results;
      this.movie = movieData.data;
    },
    handleBack: function () {
      history.back();
    },
  },
};
</script>


