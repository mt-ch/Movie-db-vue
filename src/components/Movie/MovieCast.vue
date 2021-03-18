<template>
  <div class="container crew-container">
    <h5 class="text-left">Cast</h5>
    <div class="movie-casts">
      <div v-for="(person, i) in cast" :key="i" class="movie-cast">
        <b-card
          :img-src="filmPoster + person.profile_path"
          img-alt="Image"
          img-top
          class="cast-card"
        >
          <p><strong>{{ person.character }}</strong></p>
          <p>{{ person.name }}</p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import "../../styles/cast.scss";

export default {
  name: "MovieCast",
  props: {
    cast: {
      type: Array,
    },
  },
  data() {
    return {
      filmPoster: "https://image.tmdb.org/t/p/w500/",
    };
  },
};
</script>
