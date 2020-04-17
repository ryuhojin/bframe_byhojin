import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    title: "",
    content:null,
  },
  mutations: {
    ADD_ERR: (state, view) => {
      state.content=view.content;
      state.title = view.title;
    },
    INIT_ERR: state => {
      state.content=null;
      state.title="";
    }
  },
  actions: {
    ADD_ERR: (state, view) => {
      state.commit("ADD_ERR", view);
    },
    INIT_ERR: state => {
      state.commit("INIT_ERR");
    }
  },
  getters: {
    getErrors: state => {
      return state;
    }
  }
};
