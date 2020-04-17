import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    title: "",
    content:null,
  },
  mutations: {
    ADD_MESSAGE: (state, view) => {
      state.content=view.content;
      state.title = view.title;
    },
    INIT_MESSAGE: state => {
      state.content=null;
      state.title="";
    }
  },
  actions: {
    ADD_MESSAGE: (state, view) => {
      state.commit("ADD_MESSAGE", view);
    },
    INIT_MESSAGE: state => {
      state.commit("INIT_MESSAGE");
    }
  },
  getters: {
    getMessage: state => {
      return state;
    }
  }
};
