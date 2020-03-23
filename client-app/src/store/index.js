import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from './modules/user'
import data from './modules/data'
import forum from './modules/forum'

export default new Vuex.Store({
  modules: {
    user,
    data,
    forum
  }
});
