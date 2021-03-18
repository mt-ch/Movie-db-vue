<template>
  <div>
    <div class="container">
      <h3>{{ movie.title }} {{ movie.release_date | momentYearDate }}</h3>
    </div>

    <b-badge variant="primary">
      Rating
      <b-badge variant="light">{{
        movie.vote_average | ratingPercentage
      }}</b-badge>
    </b-badge>

    <div class="movie-info">
      <p>
        {{ movie.release_date | momentNumberDate }} •
        {{ movie.runtime | MovieTime }}
      </p>
      <div class="movie-genres">
        <p>{{ movieGenres | movieGenreSort }}</p>
      </div>
    </div>

    <div class="movie-overview container">
      <p class="movie-tagline">{{ movie.tagline }}</p>

      <h5>Overview</h5>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "../../styles/movieInfo.scss";

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
    momentYearDate: function (date) {
      return moment(date).format("(YYYY)");
    },
    momentNumberDate: function (date) {
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
