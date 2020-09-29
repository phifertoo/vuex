export default {
  increase(state, payload) {
    state.counter += payload.value;
  },
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
};
