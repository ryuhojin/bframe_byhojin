<template>
  <div id="app" class="d-flex flex-row vw-100 vh-100">
    <messagebox/>
    <Lnb v-if="isLoggedIn" />
    <div class="d-flex flex-column vw-87 vh-100 bg-deeplight align-items-center">
      <Head v-if="isLoggedIn" />
      <Mdi v-if="isLoggedIn" />
      <keep-alive :include="getCachedViewNames" exclude="Login">
        <router-view :key="key" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import users from "./api/admin/User"
import codes from "./api/admin/Code"
import common from "./api/common/CommonApi"
import Lnb from "./components/common/Lnb"
import Head from "./components/common/Header"
import Mdi from "./components/common/Mdi"
import messagebox from "./components/common/MessageBox"
import { mapGetters } from "vuex"

export default {
  name: "App",
  components: {
    Lnb,
    Head,
    Mdi,
    messagebox
  },
  mounted() {
    this.searchAll()
    this.loadCode()
  },
  methods: {
    searchAll() {
      users.findAll().then(
        response => {
          users.setUser(response.data);
        },
        error => {
          alert("데이터를 들고오지 못햇습니다");
        }
      );
    },
    loadCode() {
      codes.findAll().then(
        response => {
          codes.setCodes(response.data);
        },
        error => {
          alert("코드를가져오지 못했습니다.");
        }
      );
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn", "showTagsView", "getCachedViewNames"]),
    key() {
      return this.$route.name;
    }
  }
};
</script>
<style src="./css/bootstrap.css">
</style>
