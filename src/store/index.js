import Vue from 'vue';
import Vuex from 'vuex';
import  ROUTER from './modules/ROUTER.js'
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    ROUTER,
  }
});
