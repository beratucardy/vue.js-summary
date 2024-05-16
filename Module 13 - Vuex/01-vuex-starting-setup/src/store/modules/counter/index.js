import counterMutations from "./mutations.js";
import counterActions from "./actions.js";
import counterGetters from "./getters.js";

export default {
  namespaced: true,
  /* namespaced ile main store'dan module ayrılabilir, çok fazla module olur da isimler karışırsa diye ama her yerde modules name ile erişmek lazım */
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
