<template>
  <div id="app" class="d-flex flex-row vw-100 vh-100">
    <messagebox />
    <div style="position:fixed; right:0; bottom:0; z-index:999;">
      <button
        type="button"
        style="border-radius:35px !important; margin-right:1vw; margin-bottom:2vh;"
        class="btn btn-circle btn-danger"
        @click="changeLocale($i18n.locale)"
      >
      한/EN
      </button>
    </div>
    <Lnb v-if="isLoggedIn" />
    <div
      class="d-flex flex-column vw-87 vh-100 bg-deeplight align-items-center"
    >
      <Head v-if="isLoggedIn" />
      <Mdi v-if="isLoggedIn" />
      <keep-alive :include="getCachedViewNames" exclude="Login">
        <router-view :key="key" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import common from "./api/common/CommonApi";
import Lnb from "./components/common/Lnb";
import Head from "./components/common/Header";
import Mdi from "./components/common/Mdi";
import messagebox from "./components/common/MessageBox";
import messageboxs from "@/api/common/MessageBox";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Lnb,
    Head,
    Mdi,
    messagebox
  },
  computed: {
    ...mapGetters(["isLoggedIn", "showTagsView", "getCachedViewNames","i18nlocale"]),
    key() {
      return this.$route.name;
    }
  },
  methods:{
    changeLocale:function(locale){
      if(locale=="ko"){
        this.$i18n.locale='en'
      }
      else{
        this.$i18n.locale="ko"
      }
    }
  }
};
</script>
<style src="./css/bootstrap.css"></style>
