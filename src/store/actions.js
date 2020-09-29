export default {
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
};
