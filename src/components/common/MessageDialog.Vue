<template>
  <div v-show="dialog">
    <button @click="accept('success')">
      확인
    </button>
    <button @click="cancel('cancel')">
      취소
    </button>
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
