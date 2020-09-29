import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  //   getters are like computed for the store
  getters: rootGetters
});

export default store;
