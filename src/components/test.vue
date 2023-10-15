<script setup lang="ts">
import { inject } from "vue";
const AllTeamData: AdminAPI.Data | undefined = inject("allTeamData");//通过键名拿数据，拿不到则为null     正常： ( " teamdata",null)
const headerCellStyle = { background: "#4c4c49" };//头部单元格颜色
</script>

<template>
  <div>
     <div class="title">
     <h2>未提交团队信息</h2>
     </div>
   <el-table class="table2" :data="AllTeamData?.uncommitted_team_list" border stripe max-height="100vh" style="width: 100%;"   :header-cell-style="headerCellStyle">
        <el-table-column type="selection" width="100">
        </el-table-column>
        <el-table-column prop="team_id" label="团队id" width="300" :show-overflow-tooltip="true" editable sortable>
        </el-table-column>
        <el-table-column prop="team_name" label="团队名" width="800" sortable :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="captain_id" label="队长id" width="300" sortable>
        </el-table-column>
        <el-table-column prop="total" label="团队人数" sortable width="200" :show-overflow-tooltip="true"></el-table-column>
   </el-table>
  </div>
</template>

<style>
.table2 {
    top: 120px;
}
.title{
    position: fixed;
    left:650px;
}
.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>