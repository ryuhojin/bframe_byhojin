<template>
  <div
    :style="{ display: getMessageBoxVisible }"
    style="background-color: rgba(0, 0, 0, .5); left:0 !important; top:0 !important; position:fixed !important; z-index:999"
    class="flex flex-row justify-content-center align-items-center vw-100 vh-100"
  >
    <div class="vw-15 vh-20 d-flex flex-column bg-light">
      <div
        class="vw-15 h3 font-weight-bold vh-5 d-flex flex-row justify-content-center align-items-center"
      >
        <span>{{$t('lang.common.message.'+getMessageBoxTitle)}}</span>
      </div>
      <div
        class="vw-15 vh-9 d-flex flex-row justify-content-center align-items-center"
      >
        <span>
          {{ getMessageBoxContent }}
        </span>
      </div>
      <div
        class="vw-15 vh-5 d-flex flex-row justify-content-center align-items-center"
      >
        <button class=" vw-8 btn btn-danger" @click="onConfirm">{{$t('lang.common.message.confirm')}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import messagebox from "@/api/common/MessageBox";
export default {
  computed: {
    ...mapGetters([
      "getMessageBoxTitle",
      "getMessageBoxVisible",
      "getMessageBoxContent"
    ])
  },
  methods: {
    onConfirm() {
      messagebox.closeMessageBox();
    },
    onClose() {
      messagebox.closeMessageBox();
    }
  }
};
</script>
