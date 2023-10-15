<script setup lang="ts">
const types: { [key: number]: string } = { 1: "普通用户", 2: "管理员" };
import {inject ,ref} from "vue";
const TeamData: GetItemAPI.getitemData|undefined= inject("teamData");//通过键名拿数据，拿不到则为null     正常： ( " teamdata",null)
const headerCellStyle = { background: "#4c4c49" };//头部单元格颜色
const sexFilters=[
  { text: "男", value: "男" },
  { text: "女", value: "女" },
];//筛选规则text：用户看到的，value：实际值
const filtersex = (value, row) => {
  return row.sex === value;
};//进行筛选
const typeFormatter = (row) => {
  return `${types[row.type]}`;
};//自定义显示数据格式
const team_name = ref("");
const captain = ref("");
const team_num = ref(0);
const team_status = ref(0);
const showTeamData = ref(true); // 初始化时不显示
if (TeamData !== undefined) {
  team_name.value = TeamData.team_name;
  captain.value = TeamData.captain;
  team_num.value = TeamData.team_num;
  team_status.value = TeamData.team_status;;
}

</script>


<template>
      <div class="showdata" v-if="showTeamData">
        <h5 style="margin-right: 240px;">团队名称: {{ team_name }}</h5>
        <h5 style="margin-right: 250px;">队长: {{ captain }}</h5>
       <h5 style="margin-right: 430px;">团队人数: {{ team_num }}</h5>
          <h5 style="margin-right: 20px;">团队状态: {{ team_status}}</h5>
          </div>
  <div>
    <el-table class="table" :data="TeamData" border stripe max-height="100vh" style="width: 100%;" :header-cell-style="headerCellStyle">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="ID" width="120" :show-overflow-tooltip="true" editable></el-table-column>
      <el-table-column prop="username" label="用户名" width="100" sortable   :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="sex" label="性别" width="80" :filters="sexFilters" :filter-method="filtersex">
          </el-table-column>
            <el-table-column prop="phone_num" label="手机号码" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="email" label="Email" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="major" label="专业" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="type" label="账户类型" :formatter="typeFormatter" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="team_id" label="团队编号" :formatter="typeFormatter" :show-overflow-tooltip="true"></el-table-column>
    </el-table>
  </div>
</template>
<style>
.table{
  top:23px;
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.showdata{
  display: flex;
  flex-direction: row;
}
</style>