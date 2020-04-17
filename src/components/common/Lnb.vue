<template>
  <div class="d-flex flex-column vw-13 vh-100 bg-deepdark">
    <div
      class="d-flex flex-row vw-13 vh-6 justify-content-center align-items-center"
    >
      <span class="text-bnkred h3"
        >{{ $t("lang.common.title.first")
        }}{{ $t("lang.common.title.second") }}</span
      >
    </div>
    <div
      class="d-flex flex-column vw-13 bg-deepdark"
      v-for="menu in menus"
      :key="menu.id"
    >
      <div
        class="d-flex flex-row vw-13 vh-4 justify-content-around align-items-center bg-dark"
        v-if="menu.parentUid == 1"
      >
        <span class="text-white">{{ $t("lang.common.lnb." + menu.name) }}</span>
        <span class="text-white">▽</span>
      </div>
      <div
        v-else
        class="d-flex flex-row vw-13 vh-4 justify-content-around align-items-center"
      >
        <router-link :to="menu.path" class="text-decoration-none">
          <span class="text-white" @click="addVisiedView(menu)">{{
            $t("lang.common.lnb." + menu.name)
          }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CommonApi from "@/api/common/CommonApi";
export default {
  name: "Lnb",
  data: function() {
    return {
      menus: []
    };
  },
  created() {
    CommonApi.getMenus().then(response => {
      this.menus = response.data;
      console.log(response.data);
    });
  },
  methods: {
    addVisiedView(menu) {
      let routes = this.$router.options.routes,
        tag = {},
        i,
        route;

      for (i in routes) {
        route = routes[i];
        if (route.name === menu.name) {
          tag = {
            fullPath: route.path,
            path: route.path,
            name: route.name,
            meta: { ...route.meta }
          };
          break;
        }
      }

      this.$store.dispatch("ADD_VISITED_VIEW", tag);
    }
  }
};
</script>
