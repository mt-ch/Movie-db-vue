<template>
  <div style="height: 100%">
    <MovieHeader :poster="movie.poster_path" :backdrop="movie.backdrop_path" />
    <MovieInfo :movie="movie" :movieGenres="movie.genres" />
    <Recommendations :recommendations="recommendations" />
    <MovieCast :cast="cast" />
    <MovieCrew :crew="crew" />
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
const MovieRepository = Repository.get("movie");

export default {
  name: "Movie",
  components: {
    MovieHeader: () => import("./MovieHeader.vue"),
    MovieInfo: () => import("./MovieInfo.vue"),
    MovieCast: () => import("./MovieCast.vue"),
    MovieCrew: () => import("./MovieCrew.vue"),
    Recommendations: () => import("./MovieRecommendations.vue"),
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
  },
};
</script>


