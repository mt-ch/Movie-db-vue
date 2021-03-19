<template>
  <div class="">
    <h4 class="movie-recommendations-header mt-3 mb-2 primary-text">
      Recommendations
    </h4>
    <div class="movie-recommendations">
      <div
        v-for="(recommendation, i) in recommendations"
        :key="i"
        class="movie-recommendation"
      >
        <a v-on:click="handleRecommendClick(recommendation.id)">
          <b-card
            :img-src="recommendation.poster_path | posterImg"
            img-alt="Card image"
            img-left
            class="text-left recommendation-card"
          >
            <p class="primary-text mb-1">
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
        </a>
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
    posterImg: function (src) {
      if (src != null) {
        return "https://image.tmdb.org/t/p/w500/" + src;
      } else  {
        return "https://i.ibb.co/M62wGdW/img-crew-placeholder.jpg";
      }
    },
  },
  methods: {
    handleRecommendClick(id) {
      this.$router.push({ path: `/movie/${id}` })
      this.$router.go()
    }
  },
};
</script>
