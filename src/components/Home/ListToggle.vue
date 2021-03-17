<template>
  <div class="mt-2 mb-2">
    <b-button-group>
      <b-button v-on:click="handlePopular" variant="primary">
        Popular
      </b-button>
      <b-button v-on:click="handleUpcoming" variant="primary">
        Upcoming
      </b-button>
      <b-button v-on:click="handleTopRated" variant="primary">
        Top Rated
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: "listToggle",
  props: {
    handlePopular: { type: Function },
    handleUpcoming: { type: Function },
    handleTopRated: { type: Function },
  },
};
</script>
