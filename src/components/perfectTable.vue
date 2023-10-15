<script setup lang="ts">

import {inject } from "vue";
//const TeamData = inject("teamData");//通过键名拿数据，拿不到则为null     正常： ( " teamdata",null)
//const TeamData1 = { team_member_list: [{ "id": 1 }, { id: 1 }] };
interface User {
  id: number,
  name: string,
  age: number,
  gender: string,
  email: string,
}
const tableData:User[]= [
  { id: 1, name: "John", age: 25, gender: "male", email: "john@example.com"},
  { id: 2, name: "Alice", age: 28, gender: "female", email: "alice@example.com" },
  { id: 3, name: "Bob", age: 30, gender: "male", email: "bob@example.com" },
  { id: 4, name: "Eve", age: 22, gender: "female", email: "eve@example.com"},
    { id: 1, name: "John", age: 25, gender: "male", email: "john@example.com" },
  { id: 2, name: "Alice", age: 28, gender: "female", email: "alice@example.com" },
  { id: 3, name: "Bob", age: 30, gender: "male", email: "bob@example.com" },
  { id: 4, name: "Eve", age: 22, gender: "female", email: "eve@example.com"},
  { id: 1, name: "John", age: 25, gender: "male", email: "john@example.com" },
  { id: 2, name: "Alice", age: 28, gender: "female", email: "alice@example.com" },
  { id: 3, name: "Bob", age: 30, gender: "male", email: "bob@example.com" },
  { id: 4, name: "Eve", age: 22, gender: "female", email: "eve@example.com"},
    { id: 1, name: "John", age: 25, gender: "male", email: "john@example.com" },
  { id: 2, name: "Alice", age: 28, gender: "female", email: "alice@example.com" },
  { id: 3, name: "Bob", age: 30, gender: "male", email: "bob@example.com" },
  { id: 4, name: "Eve", age: 22, gender: "female", email: "eve@example.com"},
    { id: 1, name: "John", age: 25, gender: "male", email: "john@example.com" },
  { id: 2, name: "Alice", age: 28, gender: "female", email: "alice@example.com" },
  { id: 3, name: "Bob", age: 30, gender: "male", email: "bob@example.com" },
  { id: 4, name: "Eve", age: 22, gender: "female", email: "eve@example.com"},
   { id: 1, name: "John", age: 25, gender: "male", email: "john@example.com" },
  { id: 2, name: "Alice", age: 28, gender: "female", email: "alice@example.com" },
  { id: 3, name: "Bob", age: 30, gender: "male", email: "bob@example.com" },
  { id: 4, name: "Eve", age: 22, gender: "female", email: "eve@example.com"}
];
const headerCellStyle = { background: "#4c4c49" };//头部单元格颜色
const genderFilters=[
  { text: "Male", value: "male" },
  { text: "Female", value: "female" },
];//筛选规则text：用户看到的，value：实际值
const filterGender = (value, row) => {
  return row.gender === value;
};//进行筛选
const ageFormatter = (row, column) => {
  return `${row.age} years`;
};//自定义显示数据格式

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User,
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};
</script>


<template>
  <div>
    <el-table class="table" :data="tableData" border stripe max-height="708" style="width: 100%;" :header-cell-style="headerCellStyle" :row-class-name="tableRowClassName">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="Name" width="120" :show-overflow-tooltip="true" editable></el-table-column>
      <el-table-column prop="age" label="Age" width="100" sortable :formatter="ageFormatter"></el-table-column>
        <el-table-column prop="gender" label="Gender" width="80" :filters="genderFilters" :filter-method="filterGender">
          </el-table-column>
          <el-table-column prop="email" label="Email" :show-overflow-tooltip="true"></el-table-column>
    </el-table>
  </div>
</template>
<style>
.table{
  top:21px;
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>