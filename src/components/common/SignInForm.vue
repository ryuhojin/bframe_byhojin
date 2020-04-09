<template>
  <div
    class="row vh-100 vw-100 m-0 justify-content-end align-items-center bg-light"
    :style="{
      'background-image': 'url(' + require('@/image/wall2.jpg') + ')',
      'background-size': 'cover'
    }"
  >
    <div
      class="row vh-60 col-xl-3 col-md-5 col-xs-12 bg-light shadow justify-content-center align-items-center rounded mr-5"
    >
      <div class="row col-12 justify-content-center">
        <div class="row col-12 justify-content-center mt-5">
          <span class="font-weight-bold h2 text-bnkred">B.</span>
          <span class="font-weight-bold h2 text-center">FRAME</span>
        </div>
        <div class="row col-12 p-0">
          <input
            type="text"
            v-on:keyup.13="Login"
            v-model="userId"
            class="col-12 form-control form-control-lg mt-5"
            placeholder="로그인 아이디"
            autofocus
          />
          <input
            type="password"
            v-on:keyup.13="Login"
            v-model="userPw"
            class="col-12 form-control form-control-lg mt-3"
            placeholder="당신의 비밀번호"
          />
        </div>
        <button
          class="col-12 btn btn-lg bg-bnkred text-white mt-3"
          @click="Login"
        >
          로그인
        </button>
        <div class="col-12 justify-content-start p-0 mt-3 border-bottom">
          <input type="checkbox" id="userRemember" />
          <label for="userRemember" class="text-bnkdarkgray"
            >로그인 아이디 저장</label
          >
        </div>
      </div>
      <div class="row col-12 justify-content-around">
        <button class="btn btn-light vw-7 text-bnksilver">아이디 찾기</button>
        <button class="btn vw-8 btn-light text-bnksilver">비밀번호 찾기</button>
        <button class="btn vw-6 btn-light text-bnksilver">회원 가입</button>
      </div>
    </div>
  </div>
</template>
<script>
import Config from "@/config";
import Auth from "@/api/common/Auth";
import { validatePassword } from "@/utils/validation";
import messagebox from "@/api/common/MessageBox";
export default {
  name: "SignIn",
  data: function() {
    return {
      userId: "admin",
      userPw: "Ghwk5268!!",
      comgrp: "08",
      error: {
        title: "에러",
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
                this.$router.push("main");
              }
            }
          },
          error => {
            alert("로그인실패");
          }
        );
      } else {
        messagebox.openMessageBox(this.error);
        this.error.content = [];
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
      } else if (!validatePassword(this.userPw)) {
        this.error.content.push("비밀번호가 8자 이상입니다.");
        i++;
      }
      if (i > 0) {
        return false;
      }
      return true;
    }
  }
};
</script>
