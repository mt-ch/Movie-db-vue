<template>
  <div class="movie-crew mt-4">
    <div class="d-flex w-100 justify-content-between mt-3 mb-2">
      <h4 class="primary-text">Crew</h4>
      <b-button
        v-on:click="handleShowMore"
        size="sm"
        class="show-more-button"
        >{{ showMoreText }}</b-button
      >
    </div>
    <div v-for="(person, i) in crew.slice(0, 5)" :key="i">
      <div class="movie-crew-person">
        <img
          :src="person.profile_path | crewImg"
          alt=""
          class="movie-crew-photo"
        />
        <div>
          <p class="primary-text">
            <strong>{{ person.name }}</strong>
          </p>
          <p>{{ person.department }}</p>
        </div>
      </div>
    </div>
    <div v-if="showMore">
      <div v-for="(person, i) in crew.slice(5, crew.length)" :key="i">
        <div class="movie-crew-person">
          <img
            :src="person.profile_path | crewImg"
            alt=""
            class="movie-crew-photo"
          />
          <div>
            <p class="primary-text mb-1">
              <strong>{{ person.name }}</strong>
            </p>
            <p>{{ person.department }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/movie/movieCrew.scss";
export default {
  name: "MovieCrew",
  props: {
    crew: {
      type: Array,
    },
  },
  data() {
    return {
      showMoreText: "Show more",
      showMore: false,
      filmPoster: "https://image.tmdb.org/t/p/w500/",
      imgPlaceholder: "@/assets/img-crew-placeholder.jpg",
    };
  },
  filters: {
    crewImg: function (src) {
      if (src != null) {
        return "https://image.tmdb.org/t/p/w500/" + src;
      } else {
        return "https://i.ibb.co/M62wGdW/img-crew-placeholder.jpg";
      }
    },
  },
  methods: {
    handleShowMore() {
      if (!this.showMore) {
        this.showMoreText = "Show less";
        this.showMore = true;
      } else {
        this.showMoreText = "Show more";
        this.showMore = false;
      }
    },
  },
};
</script>
