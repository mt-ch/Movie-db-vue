<template>
  <div class="crew-container">
    <h4 class="text-left mt-3 mb-2 primary-text crew-header">Cast</h4>
    <div class="movie-casts">
      <div v-for="(person, i) in cast" :key="i" class="movie-cast">
        <b-card
          :img-src="person.profile_path | crewImg"
          :img-alt="person.name"
          img-top
          class="cast-card"
        >
          <p class="primary-text cast-char mb-1"><strong>{{ person.character }}</strong></p>
          <p class="cast-name">{{ person.name }}</p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/movie/movieCast.scss";

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
  filters: {
    crewImg: function (src) {
      if (src != null) {
        return "https://image.tmdb.org/t/p/w500/" + src;
      } else  {
        return "https://i.ibb.co/M62wGdW/img-crew-placeholder.jpg";
      }
    },
  },
};
</script>
