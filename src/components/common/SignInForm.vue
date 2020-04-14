<template>
  <div
    class="row vh-100 vw-100 m-0 justify-content-between align-items-center bg-light"
    :style="{
      'background-image': 'url(' + require('@/image/wall2.jpg') + ')',
      'background-size': 'cover'
    }"
  >
    <div class="row vh-60 col-xl-8 ml-5">
      <div class="d-flex flex-column vh-40 col-xl-12">
              
      </div>
      <div class="row vh-20 col-xl-12 justify-content-around">
      </div>
    </div>
    <div
      class="row vh-60 col-xl-3 bg-light shadow justify-content-center align-items-center rounded mr-5"
    >
      <div class="row col-12 justify-content-center">
        <div class="row col-12 justify-content-center mt-5">
          <span class="font-weight-bold h2 text-bnkred">{{$t('lang.common.title.first')}}</span>
          <span class="font-weight-bold h2 text-center">{{$t('lang.common.title.second')}}</span>
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
        >{{$t('lang.common.signin.button.login')}}
        </button>
        <div class="col-12 justify-content-start p-0 mt-3 border-bottom">
          <input type="checkbox" id="userRemember" />
          <label for="userRemember" class="text-bnkdarkgray"
            >{{$t('lang.common.signin.label.saving')}}</label
          >
        </div>
      </div>
      <div class="row col-12 justify-content-around">
        <button class="btn btn-light vw-7 text-bnksilver">{{$t('lang.common.signin.button.findid')}}</button>
        <button class="btn vw-8 btn-light text-bnksilver">{{$t('lang.common.signin.button.findpw')}}</button>
        <button class="btn vw-6 btn-light text-bnksilver">{{$t('lang.common.signin.button.signup')}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import Config from "@/config";
import codes from "@/api/admin/Code"
import Auth from "@/api/common/Auth";
import { validationPasswordSpecial } from "@/utils/validation";
import messagebox from "@/api/common/MessageBox";
import {mapGetters} from 'vuex'
export default {
  name: "SignIn",
  data: function() {
    return {
      userId: "admin",
      userPw: "Ghwk5268!!",
      comgrp: "08",
      error: {
        title: "error",
        content: []
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
            for (var i = 0; i < response.data.length; i++) {
              if (
                response.data[i].userId == params.userId &&
                response.data[i].userPw == params.userPw
              ) {
                Auth.saveUser(params);
                this.loadCode()
                this.$router.push("main");
              }
            }
          },
          error => {
            alert("로그인실패");
          }
        )
      } else {
         messagebox.openMessageBox(this.error);

        this.error.content = [];
        console.log("하위");
      }
    },
    checkForm() {
      var i = 0;
      if (!this.userId) {
        this.error.content.push("아이디가 비어있습니다.");
        i++;
      }
      if (!this.userPw) {
        this.error.content.push("비밀번호가 비어있습니다.");
        i++;
      } else if (!validationPasswordSpecial(this.userPw)) {
        this.error.content.push("비밀번호가 잘못되었습니다.");
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
    }
  }
};
</script>
