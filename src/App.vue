<template>
  <div id="app" class="d-flex flex-row vw-100 vh-100">
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
    <notivuecation />
  </div>
</template>

<script>
import common from "./api/common/CommonApi";
import Lnb from "./components/common/Lnb";
import Head from "./components/common/Header";
import Mdi from "./components/common/Mdi";
import { mapGetters } from "vuex";
// import msg from "./components/common/MessageDialog";
// import message from './api/common/Message'
export default {
  name: "App",
  components: {
    Lnb,
    Head,
    Mdi,
    // msg
  },
  mounted() {
    this.$root.$on("openDialog", () => {
      this.openDialog();
    });
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "showTagsView",
      "getCachedViewNames",
      "i18nlocale"
    ]),
    key() {
      return this.$route.name;
    }
  },
  methods: {
    // openDialog() {
    //   this.$refs.dig
    //     .open()
    //     .then(res => {
    //       message.initMessage();
    //     })
    //     .catch(res => {
    //       message.initMessage();
    //     });
    // },
    changeLocale: function(locale) {
      if (locale == "ko") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "ko";
      }
    }
  }
};
</script>
<style src="./css/bootstrap.css"></style>
