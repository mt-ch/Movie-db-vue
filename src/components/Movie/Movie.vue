<template>
  <b-skeleton-wrapper :loading="loading">
    <template #loading>
      <b-card>
        <b-skeleton width="85%"></b-skeleton>
        <b-skeleton width="55%"></b-skeleton>
        <b-skeleton width="70%"></b-skeleton>
      </b-card>
    </template>

    <router-link class="movie-link" :to="{ name: 'movie', params: { id: movie.id } }">
      <b-card
        :img-src="filmPoster + movie.poster_path"
        :img-alt="movie.title"
        img-left
        class="mb-3 text-left movie-card"
      >
        <div class="movie-card-container">
          <div class="movie-card-container-left">
            <p class="movie-title primary-text">
              <strong>{{ movie.title }}</strong>
            </p>
            <p class="movie-date">{{ movie.release_date | momentFullDate }}</p>
            <b-badge variant="dark" class="movie-rating">
              Rating
              <b-badge variant="light">{{
                movie.vote_average | ratingPercentage
              }}</b-badge>
            </b-badge>
          </div>
          <p class="movie-overview">{{ movie.overview }}</p>
        </div>
      </b-card>
    </router-link>
  </b-skeleton-wrapper>
</template>

<script>
import moment from "moment";
import "@/styles/movie/movie.scss";

export default {
  filters: {
    momentFullDate: function (date) {
      return moment(date).format("D MMMM YYYY");
    },
    ratingPercentage: function (rating) {
      return rating * 10 + "%";
    },
  },
  props: {
    movie: { type: Object },
    loading: { type: Boolean },
  },
  data() {
    return {
      filmPoster: "https://image.tmdb.org/t/p/w500/",
    };
  },
  mounted() {
    // const ratingBadge = document.querySelectorAll(".movie-rating");
    // ratingBadge.forEach((badge) => {
    //   badge.classList.add("ratingGreen");
    // });
  },
};
</script>