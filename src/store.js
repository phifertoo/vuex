import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    actionIncrement(context, payload) {
      setTimeout(function() {
        // call the increase mutation
        context.commit('increase', payload);
      }, 2000);
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  //   getters are like computed for the store
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
