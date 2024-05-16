import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
import counterModule from "./modules/counter/index.js";

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations /* asenkron bir şey kullanılamaz */,
  actions: rootActions /* asenkron bir şey kullanılabilir */,
  getters: rootGetters,
});

export default store;
