import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    boxVisible: "none",
    title: null,
    content: null,
  },
  mutations: {
    OPEN_MESSAGEBOX: (state, payload) => {
      state.boxVisible = "flex";
      state.title = payload.title;
      state.content = payload.content;
    },
    CLOSE_MESSAGEBOX: state => {
      (state.boxVisible = "none"), (state.title = null);
      state.content = null;
    }
  },
  actions: {
    OPEN_MESSAGEBOX: (state, payload) => {
      state.commit("OPEN_MESSAGEBOX", payload);
    },
    CLOSE_MESSAGEBOX: state => {
      state.commit("CLOSE_MESSAGEBOX");
    }
  },
  getters: {
    getMessageBoxTitle: state => {
      return state.title;
    },
    getMessageBoxVisible: state => {
      return state.boxVisible;
    },
    getMessageBoxContent: state => {
      var message ="";
      if(state.content!==null)
      {
        for(var i=0; i<state.content.length;i++)
        {
          message += state.content[i]
        }
        return message;
      }
      return state.content
      
    }
  }
};
