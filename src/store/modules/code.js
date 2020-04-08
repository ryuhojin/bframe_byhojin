import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    codes: []
  },
  mutations: {
    SAVE_COMMONCODE: (state, payload) => {
      state.codes = payload;
    },
    INSERT_CODE: (state, payload) => {
      state.codes.push(payload.data);
    },
    SELECT_CODE: (state, payload) => {
      console.log(state);
      console.log(payload);
    },
    DELETE_CODE: (state, payload) => {
      const idx = state.codes.findIndex(function(item) {
        return item.ID == payload;
      });
      if (idx > -1) state.codes.splice(idx, 1);
    },
    UPDATE_CODE: (state, payload) => {
      const idx = state.codes.findIndex(function(item) {
        return item.ID == payload.ID;
      });
      state.codes[idx] = payload;
    }
  },
  actions: {
    SAVE_COMMONCODE: (state, payload) => {
      state.commit("SAVE_COMMONCODE", payload);
    },
    INSERT_CODE: (state, payload) => {
      state.commit("INSERT_CODE", payload);
    },
    SELECT_CODE: (state, payload) => {
      state.commit("SELECT_CODE", payload);
    },
    DELETE_CODE: (state, payload) => {
      state.commit("DELETE_CODE", payload);
    },
    UPDATE_CODE: (state, payload) => {
      state.commit("UPDATE_CODE", payload);
    }
  },
  getters: {
    codes: state => (num, page) => {
      var n = page;
      var arr = state.codes.slice();
      var len = arr.length;
      let cnt = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
      var temp = [];
      for (var i = 0; i < cnt; i++) {
        temp.push(arr.splice(0, n));
      }
      return temp[num - 1];
    },
    totalCodePage: state => page => {
      var count = [];
      var n = state.codes.length / page;
      for (var i = 1; i < n + 1; i++) {
        count.push(i);
      }
      return count;
    },
    getCodeList: state => code => {
      let tempcodes = [];
      for (let key in state.codes) {
        if (state.codes[key].CODE == code) {
          tempcodes.push(state.codes[key]);
        }
      }
      return tempcodes;
    },
    getCode: state => {
      let tempcodes = [];
      for (let key in state.codes) {
        if (!tempcodes.includes(state.codes[key].CODE)) {
          tempcodes.push(state.codes[key].CODE);
        }
      }
      return tempcodes;
    },
    getCodeNum: state => {
      return state.codes.length;
    },
    getCodeName: state => {
      let tempcodes = [];
      for (let key in state.codes) {
        if (!tempcodes.includes(state.codes[key].CODE_NAME)) {
          tempcodes.push(state.codes[key].CODE_NAME);
        }
      }
      return tempcodes;
    },
    getCodeID: state => codetext => {
      let tempcodes = [];
      for (let key in state.codes) {
        if (state.codes[key].CODE == "COM005") {
          tempcodes.push(state.codes[key]);
        }
      }
      for (let key in tempcodes) {
        if (tempcodes[key].CODE_TEXT == codetext) {
          return tempcodes[key];
        }
      }
    }
  }
};
