<template>
  <div class="d-flex flex-column vw-87 vh-89 align-items-center">
    <div class="d-flex flex-row vw-86 vh-5 bg-white align-items-center">
      <span class="px-2 font-weight-bold h5">{{
        $t("lang.User.label.title")
      }}</span>
    </div>
    <div
      class="d-flex flex-row vw-86 vh-6 bg-white mt-1 align-items-center p-0"
    >
      <div
        class="d-flex flex-row vw-86 vh-6 align-items-center justify-content-center p-0 m-0"
      >
        <div
          class="d-flex flex-row vw-21 vh-5 justify-content-between align-items-center px-5"
        >
          <label for="appId" class="font-weight-bold">{{
            $t("lang.User.label.app")
          }}</label>
          <select
            id="appId"
            v-model="searchForm.appUId"
            class="form-control vw-11"
          >
            <option v-for="option in selectApp" :key="option.SORT">{{
              option.CODE_TEXT
            }}</option>
          </select>
        </div>
        <div
          class="d-flex flex-row vw-21 vh-5 justify-content-between align-items-center px-5"
        >
          <label for="useYn" class="font-weight-bold">{{
            $t("lang.User.label.groupname")
          }}</label>
          <select
            v-model="searchForm.groupName"
            id="useYn"
            class="form-control vw-11"
          >
            <option v-for="option in selectGroup" :key="option.SORT">{{
              option.CODE_TEXT
            }}</option>
          </select>
        </div>
        <div
          class="d-flex flex-row vw-22 vh-5 justify-content-between align-items-center px-5"
        >
          <label for="useYn" class="font-weight-bold">{{
            $t("lang.User.label.useyn")
          }}</label>
          <select
            v-model="searchForm.useYN"
            id="useYn"
            class="form-control vw-11"
          >
            <option v-for="option in selectUseYn" :key="option.SORT">{{
              option.CODE_TEXT
            }}</option>
          </select>
        </div>
        <div
          class="d-flex flex-row vw-22 vh-5 justify-content-between align-items-center px-5"
        >
          <label for="useYn" class="font-weight-bold">{{
            $t("lang.User.label.role")
          }}</label>
          <input
            type="text"
            v-model="searchForm.role"
            id="useYn"
            class="form-control vw-11"
          />
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-row vw-86 vh-5 p-0 m-0 justify-content-center align-items-center bg-white mt-1"
    >
      <button
        class="btn btn-deepdark vw-5 vh-4 font-weight-bold mr-2 p-0"
        @click="search(searchForm)"
      >
        {{ $t("lang.User.button.search") }}
      </button>
      <button
        class="btn btn-deepdark vw-5 vh-4 font-weight-bold mr-2 p-0"
        @click="showForm('INSERT')"
      >
        {{ $t("lang.User.button.create") }}
      </button>
      <button
        class="btn btn-deepdark vw-5 vh-4 font-weight-bold mr-2 p-0"
        @click="showForm('UPDATE')"
      >
        {{ $t("lang.User.button.update") }}
      </button>
      <button
        class="btn btn-deepdark vw-5 vh-4 font-weight-bold mr-2 p-0"
        @click="remove"
      >
        {{ $t("lang.User.button.delete") }}
      </button>
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
            >
              #
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >
              {{ $t("lang.User.table.id") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >
              {{ $t("lang.User.table.name") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >
              {{ $t("lang.User.table.password") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >
              {{ $t("lang.User.table.role") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >
              {{ $t("lang.User.table.groupname") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-11 p-0 m-0"
            >
              {{ $t("lang.User.table.partname") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="vw-7 p-0 m-0"
            >
              {{ $t("lang.User.table.useyn") }}
            </th>
          </tr>
        </thead>
        <tbody class="vw-86">
          <tr
            v-for="user in userdata"
            :key="user.id"
            @click="selectRow(user)"
            class="vh-4 p-0 m-0"
            :class="{ 'bg-bnkred text-white': user.id == selectedRow.id }"
          >
            <th
              scope="row"
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ user.id }}
            </th>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ user.userId }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ user.name }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ user.userPw }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ user.role }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ user.groupName }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ user.departmentName }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ user.useYN }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="d-flex flex-row justify-content-around align-items-center vw-86 vh-4 mt-1 bg-white"
    >
      <select v-model="pageview" class="form-control vw-5 vh-4 p-0">
        <option>
          5
        </option>
        <option>
          10
        </option>
        <option>
          16
        </option>
        <option>
          20
        </option>
      </select>
      <span class="font-weight-bold text-deepdark"
        ><span
          v-for="item in getTotalUserPage"
          :key="item"
          @click="paging(item)"
          style="cursor:pointer;"
          >&nbsp;&nbsp;{{ item }}&nbsp;&nbsp;&nbsp;</span
        ></span
      >
      <span class="font-weight-bold">
        {{ $t("lang.User.table.amount") }} : {{ getUserNum }}</span
      >
    </div>
    <stack-modal
      :show="show"
      :title="formType"
      :type="formType"
      :form="form2"
      @submit="save"
      @close="close"
      :modal-class="{ [modalClass]: true }"
    >
    </stack-modal>
    <!-- <Modal
      v-if="displayModal == 'block'"
      :title="formType"
      :form="form"
      :type="formType"
      :display-modal="displayModal"
      @close="displayModal = false"
      @submit="save"
    ></Modal> -->
  </div>
</template>
<script>
import StackModal from "../components/common/StackModal";
import { mapGetters } from "vuex";
import users from "@/api/admin/User";

export default {
  name: "User",
  data: function() {
    return {
      show: false,
      modalClass: "",
      // form: {},
      form2:[],
      searchForm: {
        appUId: null,
        groupName: "BNKSYS",
        useYN: null,
        role: "admin"
      },
      // defaultForm: {
      //   id:"",
      //   appUId:"",
      //   userId:"",
      //   userPw:"",
      //   name:"",
      //   groupId:"",
      //   groupName:"",
      //   departmentId:"",
      //   departmentName:"",
      //   useYN:"Y",
      //   role:"admin"
      // },
      defaultForm2:[
        {name:"id",value:"",type:"text"},
        {name:"appUId",value:"",type:"text"},
        {name:"userId",value:"",type:"text"},
        {name:"userPw",value:"",type:"password"},
        {name:"name",value:"",type:"text"},
        {name:"groupId",value:"",type:"select"},
        {name:"groupName",value:"",type:"select"},
        {name:"departmentId",value:"",type:"text"},
        {name:"departmentName",value:"",type:"text"},
        {name:"useYN",value:"Y",type:"select"},
        {name:"role",value:"admin",type:"text"}
      ],
      selectedRow2:[],
      // displayModal: "none",
      formType: null,
      selectedRow: { id: null },
      // pagenum: 1,
      pageview:16,
    };
  },
  components: {
    StackModal
  },

  computed: {
    ...mapGetters(["userdata", "getCodeList", "totalUserPage", "getUserNum"]),
    selectApp() {
      return this.getCodeList("COM001");
    },
    selectUseYn() {
      return this.getCodeList("COM002");
    },
    selectGroup() {
      return this.getCodeList("COM005");
    },
    getTotalUserPage() {
      return this.totalUserPage(this.pageview);
    },
    getuserslist() {
      // console.log(this.userdata)
      // console.log("가나");
      // return this.userdata(this.pagenum, this.pageview||16);
    }
  },
  mounted() {
    this.searchAll();
  },
  methods: {
    searchAll() {
      users.findAll().then(
        response => {
          users.setUser(response.data);
        },
        error => {
          messageboxs.openMessageBox({
            titie: "에러",
            content: "유저데이터를 들고오지 못하였습니다"
          });
        }
      );
    },
    selectRow(row) {
      var len = Object.keys(row).length;
      this.selectedRow2=[];
      for(var i = 0; i<len;i++)
      {
        if(Object.keys(row)[i]=='groupId')
        {
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"select"})
        }
        else if(Object.keys(row)[i]=='groupName')
        {
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"select"})
        }
        else if(Object.keys(row)[i]=='useYN')
        {
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"select"})
        }
        else if(Object.keys(row)[i]=='userPw')
        { 
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"password"})
        }
        else{
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"text"})
        }
      }
      this.selectedRow = row;
    },
    // showForm(formType) {
    //   this.formType = formType;
    //   this.show = true;
    //   this.form =
    //     formType === "INSERT"
    //       ? this._.cloneDeep(this.defaultForm)
    //       : this.selectedRow.id === null
    //       ? this.$alert({
    //           title: " ",
    //           message: "수정할 테이블을 선택하시오",
    //           confirm: "네"
    //         }).then((
    //           this.show = false
    //           ))
    //       : this._.cloneDeep(this.selectedRow) 
    // },
    showForm(formType) {
      this.formType = formType;
      this.show = true;
      this.form2 =
        formType === "INSERT"
          ? this._.cloneDeep(this.defaultForm2) 
          : this.selectedRow.id === null
          ? this.$alert({
              title: " ",
              message: "수정할 테이블을 선택하시오",
              confirm: "네"
            }).then((
              this.show = false
              ))
          : this._.cloneDeep(this.selectedRow2) 
    },
    save(values) {
      let command = values.command,
        data = values.data;
      if ("INSERT" === command) {
        users.insert(data);
        this.show=false;
      } else if ("UPDATE" === command) {
        users.update(data);
        this.selectedRow = { id: null };
        this.show = false;
        
      }
    },
    close(){
      this.show = false
      this.selectedRow ={ id:null}
    },
    remove() {
      this.selectedRow.id ===null ?
      this.$alert({
        title:" ",
        message:"삭제할 행을 선택해주세요",
        confirm:"네"
      })
      :
      this.$confirm({
        message: "정말 삭제하시겠습니까?",
        confirm: "네",
        cancel: "아니오"
      }).then(result => {
        if (result === true) {
          users.delete(this.selectedRow.id);
          this.selectedRow = { id: null };
        } else {
          this.selectedRow = { id: null };
        }
      });
    },
    paging(item) {
      this.pagenum = item;
    }
  }
};
</script>
