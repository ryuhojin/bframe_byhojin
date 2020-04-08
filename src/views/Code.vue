<template>
  <div class="d-flex flex-column vw-87 vh-89 align-items-center">
    <div class="d-flex flex-row vw-86 vh-5 bg-white align-items-center">
      <span class="px-2 font-weight-bold h5">{{ this.$route.meta.title }}</span>
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
          <label for="CODE" class="font-weight-bold">코드</label>
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
          <label for="CODE_NAME" class="font-weight-bold">코드명</label>
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
          <label for="USE_YN" class="font-weight-bold">사용여부</label>
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
          <label for="CODE_VALUE" class="font-weight-bold">코드 값</label>
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
        class="btn btn-deepdark vw-4 vh-4 font-weight-bold mr-2 p-0"
        @click="search(searchForm)"
      >
        조회
      </button>
      <button
        class="btn btn-deepdark vw-4 vh-4 font-weight-bold mr-2 p-0"
        @click="showForm('INSERT')"
      >
        입력
      </button>
      <button
        class="btn btn-deepdark vw-4 vh-4 font-weight-bold mr-2 p-0"
        @click="showForm('UPDATE')"
      >
        수정
      </button>
      <button
        class="btn btn-deepdark vw-4 vh-4 font-weight-bold mr-2 p-0"
        @click="remove"
      >
        삭제
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
              FST_RG_DTTI
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              LT_CH_DTTI
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              VERSION
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              CODE
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              DESCRIPTION
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              CODE_NAME
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              CODE_TEXT
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              USE_YN
            </th>
            <th
              scope="col"
              style="text-align:center; vertical-align: middle;"
              class="p-0 m-0"
            >
              CODE_VALUE
            </th>
          </tr>
        </thead>
        <tbody class="vw-86">
          <tr
            v-for="code in getcodeslist"
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
      <span class="font-weight-bold">총 : {{ getCodeNum }}</span>
    </div>
    <Modal
      v-if="displayModal == 'block'"
      :title="formType"
      :form="form"
      :type="formType"
      :display-modal="displayModal"
      @close="displayModal = false"
      @submit="save"
    ></Modal>
  </div>
</template>
<script>
import Modal from "@/components/common/CodeModal";
import { mapGetters } from "vuex";
import users from "@/api/admin/User";
import codes from "@/api/admin/Code";

export default {
  name: "Code",
  data: function() {
    return {
      form: {},
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
      displayModal: "none",
      formType: null,
      selectedRow: { id: null },
      pagenum: 1,
      pageview: 16
    };
  },
  components: {
    Modal
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
    selectUseYn() {
      return this.getCodeList("COM002");
    },
    getTotalCodePage() {
      return this.totalCodePage(this.pageview);
    },
    getcodeslist() {
      return this.codes(this.pagenum, this.pageview);
    }
  },
  methods: {
    selectRow(row) {
      this.selectedRow = row;
    },
    paging(item) {
      this.pagenum = item;
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
        codes.insert(values);
        this.displayModal = "none";
      } else if ("UPDATE" === command) {
        codes.update(data);
        this.displayModal = "none";
        this.selectedRow = { id: null };
      }
    },
    remove() {
      codes.delete(this.selectedRow.ID);
      this.selectedRow = { id: null };
    }
  }
};
</script>
