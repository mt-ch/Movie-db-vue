<template>
  <div class="col">
    <a v-on:click="handleBack">
      <b-icon-arrow-left></b-icon-arrow-left>
    </a>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.overview }}</p>
    <p>{{ movie.release_date }}</p>
    <p>{{ movie.runtime }}m</p>
    <p>{{ movie.tagline }}</p>
    <p>Rating: {{ movie.vote_average }}</p>
    <a :href="movie.homepage"><p>Website</p></a>
    <div class="movie-genres">
      <p v-for="(movie, i) in movie.genres" :key="i">{{ movie.name }}</p>
    </div>
    <img :src="filmPoster + movie.poster_path" alt="" class="movie-poster" />
    <div class="movie-recommendations">
      <h3>Recommendations</h3>
      <div
        v-for="(recommendation, i) in recommendations"
        :key="i"
        class="movie-recommedation"
      >
        <h4>{{ recommendation.title }}</h4>
        <p>{{ recommendation.release_date }}</p>
        <p>{{ recommendation.vote_average }}</p>
        <img
          :src="filmPoster + recommendation.poster_path"
          alt=""
          class="movie-poster"
        />
        <hr />
      </div>
    </div>
    <div class="movie-cast">
      <h3>Cast</h3>
      <div v-for="(person, i) in cast" :key="i" class="movie-cast-person">
        <p>{{ person.character }}</p>
        <p>{{ person.name }}</p>
        <img
          :src="filmPoster + person.profile_path"
          alt=""
          class="movie-poster"
        />
        <hr />
      </div>
    </div>
    <div class="movie-crew">
      <h3>Cast</h3>
      <div v-for="(person, i) in crew" :key="i" class="movie-crew-person">
        <p>{{ person.name }}</p>
        <p>{{ person.department }}</p>
        <img
          :src="filmPoster + person.profile_path"
          alt=""
          class="movie-poster"
        />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import Repository from "../../repositories/RepositoryFactory";
import { BIconArrowLeft } from "bootstrap-vue";
const MovieRepository = Repository.get("movie");

export default {
  name: "Movie",
  components: {
    BIconArrowLeft,
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

<style scoped>
.movie-poster {
  width: 15vw;
}
</style>