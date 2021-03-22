<template>
  <!-- <b-skeleton-wrapper :loading="loading">
    <template #loading>
      <b-card>
        <b-skeleton width="85%"></b-skeleton>
        <b-skeleton width="55%"></b-skeleton>
        <b-skeleton width="70%"></b-skeleton>
      </b-card>
    </template> -->

    <transition name="fade">
      <router-link
        class="movie-link"
        :to="{ name: 'movie', params: { id: movie.id } }"
      >
        <b-card
          :img-src="filmPoster + movie.poster_path"
          :img-alt="movie.title"
          img-left
          class="mb-3 text-left movie-card"
        >
          <div class="movie-card-container">
            <div class="movie-card-container-left">
              <h5 class="movie-title primary-text mb-1">
                <strong>{{ movie.title }}</strong>
              </h5>
              <p class="movie-date">
                {{ movie.release_date | momentFullDate }}
              </p>
              <Rating class="mt-2" :movieRating="movie.vote_average" />
            </div>
            <p class="movie-overview">{{ movie.overview }}</p>
          </div>
        </b-card>
      </router-link>
    </transition>
  <!-- </b-skeleton-wrapper> -->
</template>

<script>
import moment from "moment";
import Rating from "@/components/Rating.vue";
import "@/styles/movie/movie.scss";

export default {
  components: {
    Rating,
  },
  props: {
    movie: { type: null },
  },
  filters: {
    momentFullDate: function (date) {
      return moment(date).format("D MMMM YYYY");
    },
  },
  computed: {
    loading() {
      return this.$store.state.isLoading;
    },
  },
  data() {
    return {
      filmPoster: "https://image.tmdb.org/t/p/w500/",
    };
  },
};
</script>