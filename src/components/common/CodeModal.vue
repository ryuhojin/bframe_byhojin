<template>
  <div :style="{display:displayModal}"  style="background-color: rgba(0, 0, 0, .5); left:0 !important; top:0 !important; position:fixed !important; z-index:999" class="d-flex flex-row justify-content-center align-items-center vw-100 vh-100">
    <div class="d-flex flex-column vw-30 vh-64 bg-white align-items-center">
      <div class="d-flex flex-row vw-30 vh-6 align-items-center justify-content-between bg-deepdark">
        <span class="h5 text-white font-weight-bold ml-5" >{{title}}</span>
        <button class="btn btn-deepdark font-weight-bold mr-5" @click="$emit('close')">X</button>
      </div>
      <div class="d-flex vh-60 flex-column justify-content-around  vw-20 mt-0">
         <div class="d-flex flex-row vw-20 vh-3 mt-0 justify-content-between">
          <label for="ID">ID*</label>
          <input v-model="form.ID" type="text" class="vw-10 vh-3 form form-control  bg-deeplight" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 mt-0 justify-content-between">
          <label for="appId">날짜FST_RG*</label>
           <input v-model="form.FST_RG_DTTI" type="text" class="vw-10 vh-3 form form-control  bg-deeplight" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">날짜LT_CH*</label>
          <input v-model="form.LT_CH_DTTI" type="text" class="vw-10 vh-3 form form-control bg-deeplight" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">버전*</label>
          <input v-model="form.VERSION" type="text" class="vw-10 vh-3 form form-control bg-deeplight" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">코드</label>
          <input v-model="form.CODE" type="text" class="vw-10 vh-3 form form-control" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">설명*</label>
          <input v-model="form.DESCRIPTION" type="text" class="vw-10 vh-3 form form-control" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">코드이름</label>
          <input v-model="form.CODE_NAME" type="text" class="vw-10 vh-3 form form-control" />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">코드내용 </label>
          <input v-model="form.CODE_TEXT" type="text" class="vw-10 vh-3 form form-control " />
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">사용 여부*</label>
         <select style="padding:0 !important;" id="userId" v-model="form.USE_YN" class="vw-10 vh-3 form form-control  bg-deeplight">
            <option  v-for="option in selectUseYn" :key="option.SORT">{{option.CODE_TEXT}}</option>
          </select>
        </div>
        <div class="d-flex flex-row vw-20 vh-3 justify-content-between">
          <label for="userId">코드 값</label>
          <input v-model="form.CODE_VALUE" type="text" class="vw-10 vh-3 form form-control" />
        </div>
        <input type="hidden" v-model="form.FST_RGPR_ID"/>
        <input type="hidden" v-model="form.LT_CHPR_ID"/>
        <input type="hidden" v-model="form.APP_UID"/>
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