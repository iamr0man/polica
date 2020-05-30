import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import ArrowBack from './components/ArrowBack.vue';
import './utils/utils.js'

Vue.component('arrow-back', ArrowBack)

require("dotenv").config();

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyDqWF9Um9RT5DD3xcloy7_5W3Nw3UuASWM' }
});

Vue.config.productionTip = false;

(async () => {
  await store.dispatch('user/getUser')
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
  
})();