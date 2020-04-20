<template>
  <div class="d-flex flex-column vw-87 vh-88 align-items-center">
    <div class="d-flex flex-column vw-86 vh-87 bg-white align-items-start">
      <span class="px-2 py-2 font-weight-bold h5">{{
        $t("lang.Main.title")
      }}</span>
      
      <button class="btn btn-primary" @click="show=true">Open Modal</button>
      <div class="d-flex align-items-center">
                <select v-model="modalClass" class="form-control">
                    <option value="">none</option>
                    <option value="modal-fullscreen">modal-fullscreen</option>
                    <option value="modal-xl">modal-xl</option>
                    <option value="modal-xxl">modal-xxl</option>
                    <option value="modal-border-0">modal-border-0</option>
                </select>
            </div>

       <stack-modal
                :show="show"
                title="Modal #1"
                @close="show=false"
                :modal-class="{ [modalClass]: true }"
        >
            <button class="btn btn-info" @click="show_second=true">Open modal 2</button>
        </stack-modal>

        <stack-modal
                :show="show_second"
                @close="show_second=false"
        >
            <p>I have no title so the modal-header is missing.</p>

            <button class="btn btn-warning" @click="show_third=true">Open modal 3</button>
        </stack-modal>

        <stack-modal
                :show="show_third"
                @close="show_third=false"
                title="Last modal"
                :close-on-escape="false"
        >
            <p>This is the last modal. This modal has closeOnEscape set to false so you cannot close it via ESC key.</p>
        </stack-modal>

    </div>
  </div>
</template>
<script>
import StackModal from '../components/common/StackModal'
export default {
  name: "Main",
  components:{
    StackModal
  },
  data:function(){
    return{
      show:false,
      show_second:false,
      show_third:false,
      modalClass:''
    }
  }
};
</script>


<style lang="scss">
    @import "../css/transition/translate-fade";
    @import "../css/modal";
</style>
