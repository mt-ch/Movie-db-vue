<template>
  <div class="movie-crew container">
    <h5>Crew</h5>
    <div v-for="(person, i) in crew" :key="i">
      <div class="movie-crew-person">
        <img
          :src="person.profile_path | crewImg"
          alt=""
          class="movie-crew-photo"
        />
        <div>
          <p>
            <strong>{{ person.name }}</strong>
          </p>
          <p>{{ person.department }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../styles/movieCrew.scss";
export default {
  name: "MovieCrew",
  props: {
    crew: {
      type: Array,
    },
  },
  data() {
    return {
      filmPoster: "https://image.tmdb.org/t/p/w500/",
      imgPlaceholder: "@/assets/img-crew-placeholder.jpg",
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
