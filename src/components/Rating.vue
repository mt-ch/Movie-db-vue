<template>
  <b-badge variant="dark" class="rating-badge">
    Rating
    <b-badge variant="light">{{ movieRating | ratingPercentage }}</b-badge>
  </b-badge>
</template>

<script>
import "../styles/rating.scss";

export default {
  name: "Rating",
  props: {
    movieRating: {
      type: Number,
    },
  },
  filters: {
    ratingPercentage: function (rating) {
      return rating * 10 + "%";
    },
  },
};
</script>
