import Vue from "vue";
import VueI18n from "vue-i18n";
//import Language

import ko from "./i18n/ko.json";
import en from "./i18n/en.json";
//Config

Vue.use(VueI18n);

//Export

export default new VueI18n({
  locale: "ko",
  fallbackLocale: "ko",
  messages: {
    ko: {
      lang: ko
    },
    en: {
      lang: en
    }
  }
});
