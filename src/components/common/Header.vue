<template>
  <div
    class="d-flex flex-row vw-87 border-bottom border-gray vh-6 justify-content-end align-items-center bg-white"
  >
    <button
      class="btn btn-white pr-3 text-deepdark font-weight-bold"
      @click="Logout"
    >
      {{ $t("lang.common.header.logout") }}
    </button>
  </div>
</template>
<script>
import router from "@/router";
import store from "@/store";
export default {
  methods: {
    Logout() {
      this.$confirm({
        title: " ",
        message: "정말 로그아웃 하시겠습니까?",
        confirm: "네",
        cancel:"아니오"
      }).then(result => {
        if (result == true) {
          store.dispatch("LOGOUT"); //로그아웃
          router.push("/login");
        } else {
        }
      });
    }
  }
};
</script>
