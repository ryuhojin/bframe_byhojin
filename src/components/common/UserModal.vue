<template>
  <div :style="{display:displayModal}"  style="background-color: rgba(0, 0, 0, .5); left:0 !important; top:0 !important; position:fixed !important; z-index:200" class="d-flex flex-row justify-content-center align-items-center vw-100 vh-100">
    <div class="d-flex flex-column vw-30 vh-64 bg-white align-items-center">
      <div class="d-flex flex-row vw-30 vh-6 align-items-center justify-content-between bg-deepdark">
        <span class="h5 text-white font-weight-bold ml-5" >{{title}}</span>
        <button class="btn btn-deepdark font-weight-bold mr-5" @click="$emit('close')">X</button>
      </div>
      <div class="d-flex vh-60 flex-column justify-content-around  vw-20 mt-0">
         <div class="d-flex flex-row vw-20 vh-3 mt-0 justify-content-between">
          <label for="appId">ID*</label>
          <input v-model="form.id" type="text" class="vw-10 vh-3 form form-control  bg-deeplight" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 mt-0 justify-content-between">
          <label for="appId">APPUID*</label>
          <select style="padding:0 !important;" id="appId" v-model="form.appUId" class="vw-10 vh-3 form form-control  bg-deeplight">
            <option  v-for="option in selectApp" :key="option.SORT">{{option.CODE_TEXT}}</option>
          </select>
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">USERID*</label>
          <input v-model="form.userId" type="text" class="vw-10 vh-3 form form-control bg-deeplight" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">USERPW*</label>
          <input v-model="form.userPw" type="text" class="vw-10 vh-3 form form-control bg-deeplight" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">NAME</label>
          <input v-model="form.name" type="text" class="vw-10 vh-3 form form-control" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">GROUPID*</label>
          <select style="padding:0 !important;" id="userId" v-model="form.groupid" class="vw-10 vh-3 form form-control  bg-deeplight">
            <option  v-for="option in selectGroup" :key="option.SORT">{{option.CODE_VALUE}}</option>
          </select>
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">GROUPNAME</label>
          <select style="padding:0 !important;" id="userId" v-model="form.groupName" class="vw-10 vh-3 form form-control  bg-deeplight">
            <option  v-for="option in selectGroup" :key="option.SORT">{{option.CODE_TEXT}}</option>
          </select>
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">DEPARTMENT ID</label>
          <input v-model="form.departmentId" type="text" class="vw-10 vh-3 form form-control " />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">DEPARTMENT NAME</label>
          <input v-model="form.departmentName" type="text" class="vw-10 vh-3 form form-control" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">USEYN*</label>
         <select style="padding:0 !important;" id="userId" v-model="form.useYN" class="vw-10 vh-3 form form-control  bg-deeplight">
            <option  v-for="option in selectUseYn" :key="option.SORT">{{option.CODE_TEXT}}</option>
          </select>
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">ROLE*</label>
          <input v-model="form.role" type="text" class="vw-10 vh-3 form form-control" />
        </div>
      </div>
      <div class="d-flex flex-row vw-20 vh-6 justify-content-between align-items-center">
        <button class="btn btn-deepdark mr-2 vw-6" @click="onSubmit">확인</button>
        <button class="btn btn-light text-danger vw-6" @click="$emit('close')" >취소</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props:['title','display-modal','form'],
  data: function() {
   return{

   }
  },
  computed:{
 ...mapGetters([ "getCodeList","getCodeID"]),
     selectApp() {
      return this.getCodeList("COM001");
    },
    selectUseYn() {
      return this.getCodeList("COM002");
    },
    selectGroup(){
      return this.getCodeList("COM005");
    },
  },
  methods:{
    onSubmit(){
      this.$emit('submit',{
        command:this.title,
        data:this.form
      })
    }
  }

};
</script>