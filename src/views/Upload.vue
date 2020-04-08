<template>
  <div class="d-flex flex-column vw-87 vh-89 align-items-center">
    <div class="d-flex flex-row vw-86 vh-5 bg-white align-items-center">
      <span class="px-2 font-weight-bold h5">{{ this.$route.meta.title }}</span>
    </div>
    <div
      class="d-flexflex-row bg-white vw-86 vh-84 mt-1 justify-contents-center align-items-center"
    >
      <div class="p-2" v-if="!image">
        <span class="h5 font-weight-bold">업로드할 사진을 선택하세요</span>
        <br><br><input type="file" @change="onFileChange" class="btn btn-outline-success " />
      </div>
      <div class="p-2" v-else>
        <img :src="image" style="height:30vh; width:30vw;"/><br>
        <button @click="removeImage" class="btn btn-outline-danger">사진 지우기</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Upload",
  data: function() {
    return {
      image: ""
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    }
  }
};
</script>
