<template>
  <div class="movie-header">
    <img :src="filmPoster + poster" alt="" class="movie-poster" />
    <img :src="filmPoster + backdrop" alt="" class="movie-backdrop" />
  </div>
</template>

<script>
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

<style>
.movie-header {
  position: relative;
}

.movie-poster {
  width: 15vw;
  position: absolute;

}

.movie-backdrop {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    max-height: 30vh;
}
</style>