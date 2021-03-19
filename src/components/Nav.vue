<template>
  <b-navbar type="dark" class="nav mb-3">
    <router-link class="navbar-brand" to="/">
      <b-navbar-brand><strong>MovieDB</strong></b-navbar-brand>
    </router-link>
    <!-- <div>
      <b-input-group class="nav-search-bar">
        <b-form-input
          placeholder="Search"
          v-model="query"
          @keyup="getResult(query)"
          @keyup.delete="delQuery(query)"
          :state="serachInvalid"
        ></b-form-input>
      </b-input-group>
      <b-list-group class="search-results">
        <b-list-group-item
          v-for="result in results.slice(0, 6)"
          :key="result.id"
        >
          <router-link :to="{ name: 'movie', params: { id: result.id } }">
            <div class="search-result">
              <p>{{ result.title }}</p>
            </div>
          </router-link>
        </b-list-group-item>
      </b-list-group>
    </div> -->
  </b-navbar>
</template>

<script>
import axios from "axios";
import "@/styles/nav.scss";

export default {
  name: "navbar",
  data() {
    return {
      query: "",
      results: "",
      serachInvalid: null,
    };
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=f9c3ae91ea7132ed424564f73bb859e0&query=" +
            query
        )
        .then((response) => {
          this.results = response.data.results;
        });
      if (this.results === false && this.results !== "") {
        this.serachInvalid = false;
      }
      if (this.results) {
        this.serachInvalid = null;
      }
    },
    delQuery(query) {
      if (query === "") {
        this.results = "";
      }
      if (!this.results & this.results !== "") {
        this.serachInvalid = false;
      }
      if (this.results) {
        this.serachInvalid = null;
      }
    },
  },
};
</script>
