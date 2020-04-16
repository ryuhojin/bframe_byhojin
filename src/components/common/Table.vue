<template>
  <table class="table table-bordered table-striped table-light">
    <thead>
      <tr class="bg-dark text-white text-align-center">
        <th scope="col">#</th>
        <th scope="col">아이디</th>
        <th scope="col">이름</th>
        <th scope="col">비밀번호</th>
        <th scope="col">권한</th>
        <th scope="col">그룹명</th>
        <th scope="col">부서명</th>
        <th scope="col">사용여부</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in getuserlist" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.userId }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.userPw }}</td>
        <td>{{ user.role }}</td>
        <td>{{ user.groupName }}</td>
        <td>{{ user.departmentName }}</td>
        <td>{{ user.useYN }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      pagenum: 1,
      pageview: 16
    };
  },
  computed: {
    ...mapGetters(["userdata"]),
    getuserlist() {
      return this.userdata(this.pagenum, this.pageview);
    }
  }
};
</script>
<style scoped>
table {
  margin: 0;
}
tr {
  width: 100%;
  display: inline-table;
  table-layout: fixed;
}
tbody {
  overflow-y: scroll;
  height: 49vh;
  width: 100%;
  display: block;
  scrollbar-width: none;
}
tbody::-webkit-scrollbar {
  display: none;
}
</style>
