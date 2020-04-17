import Vue from "vue";
import Vuex from "vuex";

// modules
import common from "./modules/common";
import user from "./modules/user";
import code from "./modules/code";
import mdi from "./modules/mdi";
import message from "./modules/message";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: { common, user, code, mdi, message }
});
