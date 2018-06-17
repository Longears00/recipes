import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({

  state: {
    test: [],
  },
  mutations: {
      init(state,payload){
          state.test = payload;
      }
  },
});

export default store;
