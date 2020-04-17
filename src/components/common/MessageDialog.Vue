<template>
  <div
    v-show="dialog"
    style="position:fixed; z-index:999; width:100vw; height:100vh; display:flex; justify-content:center; align-items:center; background:rgba(0,0,0,0.5)"
  >
    <div
      class="flex-column"
      style="display:flex; background-color:#fff; width:auto; height:auto; align-items:center;"
    >
      <div>
        {{ $t("lang.common.message." + getErrors.title) }}
      </div>
      <div class="ml-2 mr-2 bg-light d-flex flex-column justify-content-center align-items-center">
          <span v-for="(error,i) in getErrors.content" :key="i">{{ $t("lang.common.message."+error) }}<br></span>
      </div>
      <div class=" d-flex p-1 flex-row justify-content-around align-items-center">
        <button class="btn btn-sm btn-success mr-2" @click="accept('success')">
          {{ $t("lang.common.message.button.confirm") }}
        </button>
        <button class="btn btn-sm btn-outline ml-2 text-danger" @click="cancel('cancel')">
          {{ $t("lang.common.message.button.cancel") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      dialog: false,
      resolve: null,
      reject: null
    };
  },
  computed: {
    ...mapGetters(["getMessage"])
  },
  methods: {
    open() {
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;

        this.dialog = true;
      });
    },
    accept(str) {
      this.dialog = false;
      this.resolve(str);
    },
    cancel(str) {
      this.dialog = false;
      this.reject(str);
    }
  }
};
</script>
