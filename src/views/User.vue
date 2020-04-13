<template>
  <div class="d-flex flex-column vw-87 vh-89 align-items-center">
    <div class="d-flex flex-row vw-86 vh-5 bg-white align-items-center">
      <span class="px-2 font-weight-bold h5">{{this.$route.meta.title}}</span>
    </div>
    <div class="d-flex flex-row vw-86 vh-6 bg-white mt-1 align-items-center p-0">
      <div class="d-flex flex-row vw-86 vh-6 align-items-center justify-content-center p-0 m-0">
        <div class="d-flex flex-row vw-21 vh-5 justify-content-between align-items-center px-5">
          <label for="appId" class="font-weight-bold">APP</label>
          <select id="appId" v-model="searchForm.appUId" class="form-control vw-11">
            <option v-for="option in selectApp" :key="option.SORT">{{option.CODE_TEXT}}</option>
          </select>
        </div>
        <div class="d-flex flex-row vw-21 vh-5 justify-content-between align-items-center px-5">
          <label for="useYn" class="font-weight-bold">그룹명</label>
          <select v-model="searchForm.groupName" id="useYn" class="form-control vw-11">
            <option v-for="option in selectGroup" :key="option.SORT">{{option.CODE_TEXT}}</option>
          </select>
        </div>
        <div class="d-flex flex-row vw-22 vh-5 justify-content-between align-items-center px-5">
          <label for="useYn" class="font-weight-bold">사용여부</label>
          <select v-model="searchForm.useYN" id="useYn" class="form-control vw-11">
            <option v-for="option in selectUseYn" :key="option.SORT">{{option.CODE_TEXT}}</option>
          </select>
        </div>
        <div class="d-flex flex-row vw-22 vh-5 justify-content-between align-items-center px-5">
          <label for="useYn" class="font-weight-bold">권한</label>
          <input type="text" v-model="searchForm.role" id="useYn" class="form-control vw-11" />
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-row vw-86 vh-5 p-0 m-0 justify-content-center align-items-center bg-white mt-1"
    >
      <button
        class="btn btn-deepdark vw-4 vh-4 font-weight-bold mr-2 p-0"
        @click="search(searchForm)"
      >조회</button>
      <button
        class="btn btn-deepdark vw-4 vh-4 font-weight-bold mr-2 p-0"
        @click="showForm('INSERT')"
      >입력</button>
      <button
        class="btn btn-deepdark vw-4 vh-4 font-weight-bold mr-2 p-0"
        @click="showForm('UPDATE')"
      >수정</button>
      <button class="btn btn-deepdark vw-4 vh-4 font-weight-bold mr-2 p-0" @click="remove">삭제</button>
    </div>
    <div
      class="d-flex flex-row vw-86 vh-71 p-0 m-0 mt-1 bg-white"
      style="overflow:auto; display:block;"
    >
      <table class="table table-light table-striped table-bordered">
        <thead class="thead-dark vw-86">
          <tr class="vh-3 p-0 m-0">
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-10 p-0 m-0"
            >#</th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >아이디</th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >이름</th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >비밀번호</th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >권한</th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >그룹명</th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >부서명</th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-7 p-0 m-0"
            >사용여부</th>
          </tr>
        </thead>
        <tbody class="vw-86">
          <tr
            v-for="user in getuserslist"
            :key="user.id"
            @click="selectRow(user)"
            class="vh-4 p-0 m-0"
            :class="{'bg-bnkred text-white':(user.id==selectedRow.id)}"
          >
            <th
              scope="row"
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >{{user.id}}</th>
            <td class="p-0 m-0" style="text-align:center; vertical-align: middle;">{{user.userId}}</td>
            <td class="p-0 m-0" style="text-align:center; vertical-align: middle;">{{user.name}}</td>
            <td class="p-0 m-0" style="text-align:center; vertical-align: middle;">{{user.userPw}}</td>
            <td class="p-0 m-0" style="text-align:center; vertical-align: middle;">{{user.role}}</td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >{{user.groupName}}</td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >{{user.departmentName}}</td>
            <td class="p-0 m-0" style="text-align:center; vertical-align: middle;">{{user.useYN}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex flex-row justify-content-around align-items-center vw-86 vh-4 mt-1 bg-white">
    
    </div>
    <Modal
      v-if="displayModal=='block'"
      :title="formType"
      :form="form"
      :type="formType"
      :display-modal="displayModal"
      @close="displayModal=false"
      @submit="save"
    ></Modal>

  </div>
</template>
<script>
import Modal from "@/components/common/UserModal";
import { mapGetters } from "vuex";
import users from "@/api/admin/User";

export default {
  name: "User",
  data: function() {
    return {
      form: {},
      searchForm: {
        appUId: null,
        groupName: "BNKSYS",
        useYN: null,
        role: "admin"
      },
      defaultForm: {
        id: null,
        appUId: null,
        userId: null,
        userPw: null,
        name: null,
        groupId: null,
        groupName: null,
        departmentId: null,
        departmentName: null,
        useYN: "Y",
        role: "admin"
      },
      displayModal: "none",
      formType: null,
      selectedRow: { id: null },
      pagenum:1,
      pageview: 16
    };
  },
  components: {
    Modal
  },

  computed: {
    ...mapGetters(["userdata","getCodeList","totalUserPage","getUserNum"]),
    selectApp() {
      return this.getCodeList("COM001");
    },
    selectUseYn() {
      return this.getCodeList("COM002");
    },
    selectGroup() {
      return this.getCodeList("COM005");
    },
    getTotalUserPage(){
      return this.totalUserPage(this.pageview)
    },
    getuserslist(){
      return this.userdata(this.pagenum,this.pageview);
    }
  },
  methods: {
    selectRow(row) {
      this.selectedRow = row;
    },
    showForm(formType) {
      this.formType = formType;
      this.displayModal = "block";
      this.form =
        formType === "INSERT"
          ? this._.cloneDeep(this.defaultForm)
          : this.selectedRow.id === null
          ? (alert("수정할 테이블을 선택하세요"), (this.displayModal = "false"))
          : this._.cloneDeep(this.selectedRow);
    },
    save(values) {
      let command = values.command,
        data = values.data;
      if ("INSERT" === command) {

        users.insert(values);
        this.displayModal = "none";
      } else if ("UPDATE" === command) {
        users.update(data);
        this.displayModal = "none";
        this.selectedRow = { id: null };
      }
    },
    remove() {
      users.delete(this.selectedRow.id);
      this.selectedRow = { id: null };
    },
    paging(item)
    {
      this.pagenum=item;
    },
  }
};
</script>   