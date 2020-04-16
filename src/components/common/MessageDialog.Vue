<template>
  <div v-show="dialog" style="position:fixed; z-index:999; width:100vw; height:100vh; display:flex; justify-content:center; align-items:center; background:rgba(255,255,255,0.5)">
    <div style="display:flex; background-color:#fff; height:10vh; align-items:flex-end;">
      <button @click="accept('success')">
        확인
      </button>
      <button @click="cancel('cancel')">
        취소
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      dialog: false,
      resolve: null,
      reject: null
    };
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
