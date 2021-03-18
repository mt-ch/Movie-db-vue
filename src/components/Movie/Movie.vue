<template>
  <router-link :to="{ name: 'movie', params: { id: movie.id } }">
    <b-card
      :img-src="filmPoster + movie.poster_path"
      img-alt="Card image"
      img-left
      class="mb-3 text-left"
    >
      <b-card-title>{{ movie.title }}</b-card-title>
      <b-card-sub-title class="mb-2">{{
        movie.release_date | moment
      }}</b-card-sub-title>
      
    </b-card>
  </router-link>
</template>

<script>
import moment from "moment";

export default {
  filters: {
    moment: function (date) {
      return moment(date).format("D MMMM YYYY");
    },
  },
  props: {
    movie: { Array },
  },
  data() {
    return {
      filmPoster: "https://image.tmdb.org/t/p/w500/",
    };
  },
};
</script>

<style scoped>
.card {
  height: 20vh;
  width: 100%;
}
.card img {
  max-width: 25vw;
}
</style>