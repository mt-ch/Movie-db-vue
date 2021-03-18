<template>
  <div>
    <h5 class="movie-recommendations-header">Recommendations</h5>
    <div class="movie-recommendations">
      <div
        v-for="(recommendation, i) in recommendations"
        :key="i"
        class="movie-recommedation"
      >
        <router-link :to="{ name: 'movie', params: { id: recommendation.id } }">
          <b-card
            :img-src="filmPoster + recommendation.poster_path"
            img-alt="Card image"
            img-left
            class="mb-3 text-left"
          >
            <b-card-title>{{ recommendation.title }}</b-card-title>
            <b-card-sub-title class="mb-2"
              >{{ recommendation.release_date | momentYearDate
              }}{{
                recommendation.vote_average | ratingPercentage
              }}</b-card-sub-title
            >
          </b-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "../../styles/recommendations.scss";
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
    momentYearDate: function (date) {
      return moment(date).format("(YYYY)");
    },
    ratingPercentage: function (rating) {
      return rating * 10 + "%";
    },
  },
};
</script>
