<template>
  <div class="movie-info-wrapper">
    <div class="mt-3 movie-title">
      <h3 class="primary-text">
        {{ movie.title }}
        <span class="movie-year">{{
          movie.release_date | yearDate
        }}</span>
      </h3>
    </div>

    <b-badge variant="light" class="mb-3 mt-3">
      Rating
      <b-badge variant="dark">{{
        movie.vote_average | ratingPercentage
      }}</b-badge>
    </b-badge>

    <div class="movie-info">
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

      <h5 class="mb-1 primary-text">Overview</h5>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "@/styles/movie/movieInfo.scss";

export default {
  name: "MovieInfo",
  props: {
    movie: {
      type: Object,
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
    ratingPercentage: function (rating) {
      return rating * 10 + "%";
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
