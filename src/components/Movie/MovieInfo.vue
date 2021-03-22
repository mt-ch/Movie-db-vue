<template>
  <div class="movie-info-wrapper">
    <div class="mt-3 mb-2 movie-title">
      <h1 class="primary-text">
        {{ movie.title }}
        <span class="movie-year">{{ movie.release_date | yearDate }}</span>
      </h1>
    </div>

    <Rating :movieRating="movie.vote_average" />

    <div class="movie-info mt-3">
      <p>
        {{ movie.release_date | numberDate }} •
        {{ movie.runtime | MovieTime }}
      </p>
      <div class="movie-genres">
        <p>{{ movieGenres | movieGenreSort }}</p>
      </div>
    </div>

    <div class="movie-overview">
      <p class="movie-tagline mt-3 mb-3">{{ movie.tagline }}</p>

      <h4 class="mb-1 primary-text">Overview</h4>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Rating from "@/components/Rating.vue";
import "@/styles/movie/movieInfo.scss";

export default {
  name: "MovieInfo",
  components: {
    Rating,
  },
  props: {
    movie: {
      type: null,
    },
    movieGenres: {
      type: Array,
    },
  },
  filters: {
    yearDate: function (date) {
      return moment(date).format("(YYYY)");
    },
    numberDate: function (date) {
      return moment(date).format("DD/MM/YYYY");
    },
    MovieTime: function (time) {
      const h = (time / 60) | 0;
      const m = time % 60 | 0;
      return h + "h " + m + "m";
    },
    movieGenreSort: function (genres) {
      const genreList = [];
      for (const { name: name } of genres) {
        genreList.push(name);
      }
      return genreList.join(", ");
    },
  },
};
</script>
