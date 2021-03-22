import Vue from "vue";
import Vuex from "vuex";

import Repository from "./repositories/RepositoryFactory";
const HomeRepository = Repository.get("home");

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    popular: [],
    topRated: [],
    upcoming: [],
    isLoading: true,
    refCount: 0,
  },

  actions: {
    async getPopular({ commit }) {
      commit("loadPopular", await HomeRepository.getPopular());
    },
    async getTopRated({ commit }) {
      commit("loadTopRated", await HomeRepository.getTopRated());
    },
    async getUpcoming({ commit }) {
      commit("loadUpcoming", await HomeRepository.getUpcoming());
    },
  },

  mutations: {
    loadPopular: (state, res) => {
      const { data } = res;
      state.popular = data.results;
    },
    loadTopRated: (state, res) => {
      const { data } = res;
      state.topRated = data.results;
    },
    loadUpcoming: (state, res) => {
      const { data } = res;
      state.upcoming = data.results;
    },
  },
});
export default store;
