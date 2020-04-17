<template>
  <div
    v-show="dialog"
    style="position:fixed; z-index:999; width:100vw; height:100vh; display:flex; justify-content:center; align-items:center; background:rgba(0,0,0,0.5)"
  >
    <div
      class="flex-column"
      style="display:flex; background-color:#fff; width:15vw; height:20vh; align-items:center;"
    >
      <div class="vh-4">
        {{ $t("lang.common.message." + getErrors.title) }}
      </div>
      <div class="vh-10 vw-15 bg-light d-flex flex-column justify-content-center align-items-center">
          <span v-for="(error,i) in getErrors.content" :key="i">{{ $t("lang.common.message."+error) }}<br></span>
      </div>
      <div class="vh-6 vw-15 d-flex flex-row justify-content-around align-items-center">
        <button class="btn btn-success" @click="accept('success')">
          {{ $t("lang.common.message.button.confirm") }}
        </button>
        <button class="btn btn-outline text-danger" @click="cancel('cancel')">
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
    ...mapGetters(["getErrors"])
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
