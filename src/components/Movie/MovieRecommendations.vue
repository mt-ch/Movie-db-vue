<template>
  <div class="">
    <h5 class="movie-recommendations-header mt-3 mb-2 primary-text">
      Recommendations
    </h5>
    <div class="movie-recommendations">
      <div
        v-for="(recommendation, i) in recommendations"
        :key="i"
        class="movie-recommendation"
      >
        <router-link :to="{ name: 'movie', params: { id: recommendation.id } }">
          <b-card
            :img-src="filmPoster + recommendation.poster_path"
            img-alt="Card image"
            img-left
            class="text-left recommendation-card"
          >
            <p class="primary-text">
              <strong>{{ recommendation.title }}</strong>
            </p>
            <p class="mb-2 movie-date">
              {{ recommendation.release_date | yearDate }}
            </p>
            <b-badge variant="dark">
              Rating
              <b-badge variant="light">{{
                recommendation.vote_average | ratingPercentage
              }}</b-badge>
            </b-badge>
          </b-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/movie/movieRecommendations.scss";
import moment from "moment";

export default {
  name: "Recommendations",
  props: {
    recommendations: {
      type: Array,
    },
  },
  data() {
    return {
      filmPoster: "https://image.tmdb.org/t/p/w500/",
    };
  },
  filters: {
    yearDate: function (date) {
      return moment(date).format("(YYYY)");
    },
    ratingPercentage: function (rating) {
      return rating * 10 + "%";
    },
  },
};
</script>
