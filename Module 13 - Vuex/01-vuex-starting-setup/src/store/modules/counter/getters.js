export default {
  testAuth(state, getters, rootState, rootGetters) {
    /* artık state.isLoggedIn'e erişemem */
    return state.isLoggedIn;
    /* ama rootState ile erişirim */
  },
  finalCounter(state, getters) {
    return state.counter * 3;
  },
  normalizedCounter(state, getters) {
    /* const finalCounter = state.counter * 3; */
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
