<template>
  <div class="movie-header-wrapper">
    <div class="movie-header">
      <img :src="filmPoster + poster" alt="" class="movie-poster" />
      <a href="/" class="back-button">
        <b-badge class="back-icon" variant="primary">
          <b-icon-arrow-left></b-icon-arrow-left>
        </b-badge>
      </a>
      <div>
        <img :src="filmPoster + backdrop" alt="" class="movie-backdrop" />
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/movie/movieHeader.scss";

export default {
  name: "movieHeader",
  props: {
    poster: { type: String },
    backdrop: { type: String },
  },
  data() {
    return {
      filmPoster: "https://image.tmdb.org/t/p/w500/",
    };
  },
};
</script>
