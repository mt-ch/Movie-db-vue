<template>
  <div class="mt-4 mb-4">
    <b-button-group>
      <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.active"
        v-on:click="btn.onClick"
        variant="secondary"
        :disabled="btn.active"
      >
        {{ btn.option }}
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: "listToggle",
  props: {
    popularActive: { type: Boolean },
    upcomingActive: { type: Boolean },
    topRatedActive: { type: Boolean },
    handlePopular: { type: Function },
    handleUpcoming: { type: Function },
    handleTopRated: { type: Function },
  },
  data() {
    return {
      buttons: [
        {
          option: "Popular",
          active: this.popularActive,
          onClick: this.handlePopular,
        },
        {
          option: "Upcoming",
          active: this.upcomingActive,
          onClick: this.handleUpcoming,
        },
        {
          option: "Top Rated",
          active: this.topRatedActive,
          onClick: this.handleTopRated,
        },
      ],
    };
  },
  computed: {
    btnStates() {
      return this.buttons.map((btn) => btn.active);
    },
  },
};
</script>
