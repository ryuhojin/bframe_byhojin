<template>
  <div class="d-flex flex-column vw-87 vh-88 align-items-center">
    <div class="d-flex flex-row vw-86 vh-5 bg-white align-items-start">
      <span class="px-2 py-2 font-weight-bold h5">하프레이아웃</span>
    </div>
    <div class="d-flex flex-column vw-86 vh-83 mt-2 vh-82">
      <div class="d-flex flex-row vw-86 vh-63">
        <splitpanes vertical>
          <pane
            class="d-flex flex-column bg-white rounded"
            style="min-width:1vw;"
          >
            <Table />
            <div class="justify-content-around d-flex flex-row">
              <select v-model="pageview" class="form-control vw-5 vh-4 p-0">
                <option>
                  5
                </option>
                <option>
                  10
                </option>
                <option>
                  16
                </option>
                <option>
                  20
                </option>
              </select>
              <span class="font-weight-bold text-deepdark"
                ><span
                  v-for="item in totalUserPage"
                  :key="item"
                  @click="paging(item)"
                  style="cursor:pointer;"
                  >&nbsp;&nbsp;{{ item }}&nbsp;&nbsp;&nbsp;</span
                ></span
              >
              <span class="font-weight-bold">총 : {{ getUserNum }}</span>
            </div>
          </pane>
          <pane class="d-flex bg-white rounded" style="min-width:1vw;">
            <span>3</span>
          </pane>
        </splitpanes>
      </div>
      <div class="d-flex flex-row vw-86 vh-20 bg-white mt-2 rounded"></div>
    </div>
  </div>
</template>
<style scoped>
.splitpanes {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
}
.splitpanes--vertical {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.splitpanes--horizontal {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.splitpanes--dragging * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.splitpanes__pane {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.splitpanes--vertical .splitpanes__pane {
  -webkit-transition: width 0.2s ease-out;
  transition: width 0.2s ease-out;
}
.splitpanes--horizontal .splitpanes__pane {
  -webkit-transition: height 0.2s ease-out;
  transition: height 0.2s ease-out;
}
.splitpanes--dragging .splitpanes__pane {
  -webkit-transition: none;
  transition: none;
}
.splitpanes__splitter {
  -ms-touch-action: none;
  touch-action: none;
}
.splitpanes--vertical > .splitpanes__splitter {
  min-width: 10px;
  cursor: col-resize;
}
.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 1px;
  cursor: row-resize;
}
.splitpanes.default-theme .splitpanes__pane {
  background-color: #f2f2f2;
}
.splitpanes.default-theme .splitpanes__splitter {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.splitpanes.default-theme .splitpanes__splitter:after,
.splitpanes.default-theme .splitpanes__splitter:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
</style>
<script>
import { Splitpanes, Pane } from "splitpanes";
import { mapGetters } from "vuex";
import Table from "@/components/common/Table";
export default {
  name: "LayoutHalf",
  components: {
    Table,
    Splitpanes,
    Pane
  },
  computed: {
    ...mapGetters(["totalUserPage", "getUserNum"])
  }
};
</script>
