<template>
  <div class="d-flex flex-row vw-86 vh-4 align-items-end">
    <div
      class="d-flex vh-3"
      v-for="(tag, i) in getVisitedView"
      :key="tag.path"
      @dragstart="dragStart(i)"
      @dragover.prevent
      @dragend="dragEnd"
      @drop="dragFinish(i)"
    >
      <div
        class="d-flex justify-content-around flex-row badge bg-white vh-3 align-items-center mr-1"
        v-if="tag.name === $route.name"
      >
        <router-link
          :to="tag.path"
          class="d-flex px-2 text-danger text-decoration-none align-items-center"
          >{{ tag.title }}</router-link
        >
        <span
          v-if="!isAttached(tag)"
          @click="closeSelectedTag(tag)"
          class="px-2 text-danger"
          style="cursor:pointer;"
          >X</span
        >
      </div>
      <div
        class="d-flex justify-content-around flex-row badge bg-light vh-3 align-items-center mr-1"
        v-else
      >
        <router-link
          :to="tag.path"
          class="px-2 text-dark text-decoration-none align-items-center"
          >{{ tag.title }}</router-link
        >
        <span
          v-if="!isAttached(tag)"
          @click="closeSelectedTag(tag)"
          class="px-2"
          style="cursor:pointer;"
          >X</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import common from "@/api/common/CommonApi";
import {mapGetters} from 'vuex'
export default {
  data: function() {
    return { dragging: -1 };
  },
  mounted() {
    this.initTags();
  },
  computed: {
    ...mapGetters(["getVisitedView"]),
    isDragging() {
      return this.dragging > -1;
    }
  },
  methods: {
    initTags() {
      const attachedTags = (this.attachedTags = this.filterAttachedTags(
        this.$router.options.routes
      ));
      for (const tag of attachedTags) {
        if (tag.name) {
          this.$store.dispatch("ADD_VISITED_VIEW", tag);
        }
      }
    },
    filterAttachedTags(routes) {
      let tags = [];
      routes.forEach(route => {
        if (route.meta && route.meta.attached) {
          const tagPath = route.path;
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          });
        }
      });
      return tags;
    },
    isAttached(tag) {
      return tag.meta && tag.meta.attached;
    },
    closeSelectedTag(view) {
      this.$store
        .dispatch("DEL_VISITED_VIEW", view)
        .then(({ visitedViews }) => {
          //if (this.isActive(view)) {
          this.toLastView(visitedViews, view);
          //}
        });
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        // NavigationDuplicated 오류 무시를 위한 코드
        // this.$router.push(latestView.fullPath);
        this.$router.push({ name: latestView.name }).catch(error => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === "Dashboard") {
          // to reload home page
          this.$router.replace({ path: view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    },
    dragStart(from) {
        this.dragging = from; 
    },
    dragEnd() {
      this.dragging = -1;
    },
    dragFinish(to) {
        this.moveItem(this.dragging, to);
    },
    moveItem(from, to) {
      if(from!==0&&to!==0)
      {
        var moving = { from: from, to: to };
        common.movingItem(moving);
        }
    }
  }
};
</script>
