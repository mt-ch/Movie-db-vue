<template>
  <b-jumbotron class="greeting">
    <template #header>
      <h1 class="greeting-header display-3 primary-text">
        <strong>MovieDB</strong>
      </h1>
    </template>

    <template #lead>
      <div class="greeting-text w-75">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </template>

    <b-button
      type="light"
      class="greeting-button mt-4"
      href="https://github.com/mt-ch/movie-db-vue"
      >Source Code</b-button
    >
    <img :src="movieSVG" alt="movie-night" class="greeting-photo" />
  </b-jumbotron>
</template>

<script>
import "@/styles/greeting.scss";

export default {
  name: "greeting",
  data() {
    return {
      movieSVG: require("@/assets/movie.svg"),
    };
  },
};
</script>
