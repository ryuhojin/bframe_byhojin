<template>
  <div class="d-flex flex-column vw-87 vh-89 align-items-center">
    <div class="d-flex flex-row vw-86 vh-5 bg-white align-items-center">
      <span class="px-2 font-weight-bold h5">{{
        $t("lang.Code.label.title")
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
          <label for="CODE" class="font-weight-bold">{{
            $t("lang.Code.label.code")
          }}</label>
          <select
            v-model="searchForm.CODE"
            id="CODE"
            class="form-control vw-11"
          >
            <option v-for="item in getCode" :key="item">{{ item }} </option>
          </select>
        </div>
        <div
          class="d-flex flex-row vw-21 vh-5 justify-content-between align-items-center px-5"
        >
          <label for="CODE_NAME" class="font-weight-bold">{{
            $t("lang.Code.label.codename")
          }}</label>
          <select
            v-model="searchForm.CODE_NAME"
            id="CODE_NAME"
            class="form-control vw-11"
          >
            <option v-for="item in getCodeName" :key="item">{{ item }} </option>
          </select>
        </div>
        <div
          class="d-flex flex-row vw-22 vh-5 justify-content-between align-items-center px-5"
        >
          <label for="USE_YN" class="font-weight-bold">{{
            $t("lang.Code.label.useyn")
          }}</label>
          <select
            v-model="searchForm.USE_YN"
            id="USE_YN"
            class="form-control vw-11"
          >
            <option v-for="item in selectUseYn" :key="item.SORT"
              >{{ item.CODE_TEXT }}
            </option>
          </select>
        </div>
        <div
          class="d-flex flex-row vw-22 vh-5 justify-content-between align-items-center px-5"
        >
          <label for="CODE_VALUE" class="font-weight-bold">{{
            $t("lang.Code.label.codevalue")
          }}</label>
          <input
            type="text"
            v-model="searchForm.CODE_VALUE"
            id="CODE_VALUE"
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
        {{ $t("lang.Code.button.search") }}
      </button>
      <button
        class="btn btn-deepdark vw-5 vh-4 font-weight-bold mr-2 p-0"
        @click="showForm('INSERT')"
      >
        {{ $t("lang.Code.button.create") }}
      </button>
      <button
        class="btn btn-deepdark vw-5 vh-4 font-weight-bold mr-2 p-0"
        @click="showForm('UPDATE')"
      >
        {{ $t("lang.Code.button.update") }}
      </button>
      <button
        class="btn btn-deepdark vw-5 vh-4 font-weight-bold mr-2 p-0"
        @click="remove"
      >
        {{ $t("lang.Code.button.delete") }}
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
              class="p-0 m-0"
            >
              #
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.fst") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.lt") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.version") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.code") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.description") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.codename") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.codetext") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.useyn") }}
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              {{ $t("lang.Code.table.codevalue") }}
            </th>
          </tr>
        </thead>
        <tbody class="vw-86">
          <tr
            v-for="code in codes"
            :key="code.ID"
            @click="selectRow(code)"
            class="vh-4 p-0 m-0"
            :class="{ 'bg-bnkred text-white': code.ID == selectedRow.ID }"
          >
            <th
              scope="row"
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.ID }}
            </th>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.FST_RG_DTTI }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.LT_CH_DTTI }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.VERSION }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.CODE }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.DESCRIPTION }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.CODE_NAME }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.CODE_TEXT }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.USE_YN }}
            </td>
            <td
              class="p-0 m-0"
              style="text-align:center; vertical-align: middle;"
            >
              {{ code.CODE_VALUE }}
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
          v-for="item in getTotalCodePage"
          :key="item"
          @click="paging(item)"
          style="cursor:pointer;"
          >&nbsp;&nbsp;{{ item }}&nbsp;&nbsp;&nbsp;</span
        ></span
      >
      <span class="font-weight-bold"
        >{{ $t("lang.Code.table.amount") }} : {{ getCodeNum }}</span
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
import Modal from "@/components/common/CodeModal";
import { mapGetters } from "vuex";
import users from "@/api/admin/User";
import codes from "@/api/admin/Code";

export default {
  name: "Code",
  data: function() {
    return {
      form: {},
      show:false,
      modalClass:"",
      form2:[],
      searchForm: {
        CODE: null,
        CODE_NAME: null,
        USE_YN: null,
        CODE_VALUE: null
      },
      defaultForm: {
        ID: null,
        FST_RG_DTTI: null,
        LT_CH_DTTI: null,
        VERSION: null,
        CODE: null,
        DESCRIPTION: null,
        CODE_NAME: null,
        CODE_TEXT: null,
        USE_YN: null,
        CODE_VALUE: null,
        FST_RGPR_ID: 1,
        LT_CHPR_ID: 1,
        APP_UID: 1
      },
      defaultForm2:[
        {name:"ID",value:"",type:"text"},
        {name:"FST_RG_DTTI",value:"",type:"date"},
        {name:"LT_CH_DTTI",value:"",type:"date"},
        {name:"VERSION",value:"",type:"text"},
        {name:"CODE",value:"",type:"text"},
        {name:"DESCRIPTION",value:"",type:"text"},
        {name:"CODE_NAME",value:"",type:"text"},
        {name:"CODE_TEXT",value:"",type:"text"},
        {name:"USE_YN",value:"",type:"select"},
        {name:"CODE_VALUE",value:"",type:"text"},
        {name:"FST_RGPR_ID",value:"",type:"text"},
        {name:"LT_CHPR_ID",value:"",type:"text"},
        {name:"APP_UID",value:"",type:"text"},
      ],
      displayModal: "none",
      formType: null,
      selectedRow: { id: null },
      selectedRow2:[],
      pagenum: 1,
      pageview: 16
    };
  },
  components: {
    Modal,
    StackModal
  },

  computed: {
    ...mapGetters([
      "codes",
      "getCode",
      "getCodeName",
      "getCodeList",
      "getCodeNum",
      "totalCodePage"
    ]),
    selectUseYn: function() {
      return this.getCodeList("COM002");
    },
    getTotalCodePage: function() {
      return this.totalCodePage(this.pageview);
    },
    getcodeslist: function() {
      // return this.codes(this.pagenum, this.pageview);
    },
    orderBySort: function() {
      //아이디랑 CODE SORT기준으로 정렬 하는 함수
      return _.orderBy(
        this.codes,
        ["ID", "CODE", "SORT"],
        ["asc", "asc", "asc"]
      );
    }
  },
  methods: {
    selectRow(row) {
            var len = Object.keys(row).length;
      this.selectedRow2=[];
      for(var i = 0; i<len;i++)
      {
        if(Object.keys(row)[i]=='FST_RG_DTTI')
        {
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"date"})
        }
        else if(Object.keys(row)[i]=='LT_CH_DTTI')
        {
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"date"})
        }
        else if(Object.keys(row)[i]=='USE_YN')
        {
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"select"})
        }
        else{
          this.selectedRow2.push({"name":Object.keys(row)[i],"value":Object.values(row)[i],"type":"text"})
        }
      }
      this.selectedRow = row;
      
    },
    paging(item) {
      this.pagenum = item;
    },
    // showForm(formType) {
    //   this.formType = formType;
    //   this.displayModal = "block";
    //   this.form =
    //     formType === "INSERT"
    //       ? this._.cloneDeep(this.defaultForm)
    //       : this.selectedRow.id === null
    //       ? this.$alert({title:" ",message:'수정할 테이블을 선택하시오',
    //       confirm:"네"}).then(this.displayModal = "false")
    //       : this._.cloneDeep(this.selectedRow);
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
        codes.insert(data);
        this.show=false;
      } else if ("UPDATE" === command) {
        codes.update(data);
        this.selectedRow = { id: null };
        this.show = false;
        
      }
    },
    close(){
      this.show = false
      this.selectedRow ={ id:null}
    },
    remove() {
      this.$confirm({
        message: "정말 삭제하시겠습니까?",
        confirm: "네",
        cancel: "아니오"
      }).then(result => {
        if (result === true) {
          codes.delete(this.selectedRow.ID)
        this.selectedRow = { id: null }
        } else {
         this.selectedRow = { id: null }
        }
      });
    }
  }
};
</script>
