import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isCollapse: false,
    count: 1,
    isLogin: false
  },
  getters: {
    getState: function (state) {
      // return state.count + 1;
    }
  },
  mutations: {
    change(state) {
      state.isCollapse = !state.isCollapse
    },
    add(state) {
      state.count += 1
    },
    reduction(state) {
      state.count -= 1
    },
    changeLogin(state) {
      state.isLogin = !state.isLogin
    }
  },
});

export default store;
