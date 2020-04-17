<template>
  <div
    class="row vh-100 vw-100 m-0 justify-content-between align-items-center bg-light"
    :style="{
      'background-image': 'url(' + require('@/image/wall2.jpg') + ')',
      'background-size': 'cover'
    }"
  >
    <div class="row vh-60 col-xl-8 ml-5">
      <div class="d-flex flex-column vh-40 col-xl-12"></div>
      <div class="row vh-20 col-xl-12 justify-content-around"></div>
    </div>
    <div
      class="row vh-60 col-xl-3 bg-light shadow justify-content-center align-items-center rounded mr-5"
    >
      <div class="row col-12 justify-content-center">
        <div class="row col-12 justify-content-center mt-5">
          <span class="font-weight-bold h2 text-bnkred">{{
            $t("lang.common.title.first")
          }}</span>
          <span class="font-weight-bold h2 text-center">{{
            $t("lang.common.title.second")
          }}</span>
        </div>
        <div class="row col-12 p-0">
          <input
            type="text"
            v-on:keyup.13="Login"
            v-model="userId"
            class="col-12 form-control form-control-lg mt-5"
            :placeholder="$t('lang.common.signin.input.placeholder.userid')"
            autofocus
          />
          <input
            type="password"
            v-on:keyup.13="Login"
            v-model="userPw"
            class="col-12 form-control form-control-lg mt-3"
            :placeholder="$t('lang.common.signin.input.placeholder.userpw')"
          />
        </div>
        <button
          class="col-12 btn btn-lg bg-bnkred text-white mt-3"
          @click="Login"
        >
          {{ $t("lang.common.signin.button.login") }}
        </button>
        <div class="col-12 justify-content-start p-0 mt-3 border-bottom">
          <input type="checkbox" id="userRemember" />
          <label for="userRemember" class="text-bnkdarkgray">{{
            $t("lang.common.signin.label.saving")
          }}</label>
        </div>
      </div>
      <div class="row col-12 justify-content-around">
        <button class="btn btn-light vw-7 text-bnksilver">
          {{ $t("lang.common.signin.button.findid") }}
        </button>
        <button class="btn vw-8 btn-light text-bnksilver">
          {{ $t("lang.common.signin.button.findpw") }}
        </button>
        <button class="btn vw-6 btn-light text-bnksilver">
          {{ $t("lang.common.signin.button.signup") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Config from "@/config";
import codes from "@/api/admin/Code";
import Auth from "@/api/common/Auth";
import { validationPasswordSpecial } from "@/utils/validation";
import { mapGetters } from "vuex";
import EventBus from "@/utils/EventBus";
import message from "@/api/common/Message";
export default {
  name: "SignIn",
  data: function() {
    return {
      userId: "",
      userPw: "",
      comgrp: "08",
      error: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    Login() {
      if (this.checkForm()) {
        const params = { userId: this.userId, userPw: this.userPw }; //params객체에 아이디와 비밀번호 정보 입력

        Auth.login().then(
          response => {
            //로그인 API호출
            var tempcount = 0;
            for (var i = 0; i < response.data.length; i++) {
              if (
                response.data[i].userId == params.userId &&
                response.data[i].userPw == params.userPw
              ) {
                Auth.saveUser(params);
                this.loadCode();
                this.$router.push("main");
                tempcount++;
              }
            }
            if (tempcount == 0) {
              this.$alert({
                title: "error",
                message: "일치하는 아이디혹은 비밀번호가 아닙니다",
                confirm: "네"
              }).then(result => {
                tempcount = 0;
              });
            }
          },
          error => {
            alert("데이터를 불러오지 못했습니다.");
          }
        );
      } else {
        this.$alert({
          title: "error",
          message: this.error.content,
          confirm: "네"
        }).then(result => {
          this.errorinit();
        });
      }
    },

    checkForm() {
      var i = 0;
      if (!this.userId) {
        this.error.content += "아이디가 비어있습니다.\n";
        i++;
      }
      if (!this.userPw) {
        if(this.error.content != "")
        {
             this.error.content += "또한, 비밀번호가 비어있습니다.\n";
        }else{
           this.error.content += "비밀번호가 비어있습니다.\n";
        }
       
        i++;
      } else if (!validationPasswordSpecial(this.userPw)) {
        if(this.error.content != "")
        {
             this.error.content += "또한, 형식과 맞지 않는 비밀번호 입니다.\n";
        }else{
           this.error.content += "형식과 맞지 않는 비밀번호 입니다.\n";
        }
        i++;
      }
      if (i > 0) {
        return false;
      }
      return true;
    },
    loadCode() {
      codes.findAll().then(
        response => {
          codes.setCodes(response.data);
        },
        error => {
          alert("코드를가져오지 못했습니다.");
        }
      );
    },
    errorinit() {
      this.error.content = [];
    }
  }
};
</script>
