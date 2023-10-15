<script setup lang="ts">
import router from "../routers/index";
const capupdate = () => {
    router.push("/captain/capupdate");
};
const deleteteam = () => {
    router.push("/captain/deleteteam");
};
const addteam = () => {
    router.push("/captain/addteam");
};
const disbandteam = () => {
    router.push("/captain/disbandteam");
};
const changecap = () => {
    router.push("/captain/changecap");
};
const submitteam = () => {
    router.push("/captain/submitteam");
};
const puashteam = () => {
    router.push("/captain/pushteam");
};



</script>


<template>
    <div class="captain">
      <div class="button-container">
        <button class="button" @click="capupdate">编辑团队信息</button>
        <button class="button" @click="deleteteam">移除团队成员</button>
        <button class="button" @click="addteam">添加团队成员</button>
        <button class="button" @click="disbandteam">解散团队</button>
        <button class="button" @click="changecap">转移队长职位</button>
        <button class="button" @click="submitteam">提交报名</button>
        <button class="button" @click="puashteam">撤销报名</button>
      </div>
      <router-view />
    </div>

</template>

<style scoped>
.captain {
  display: flex;
  align-items: center; /* 垂直居中 */
  /* 设置 user 组件的高度，这里假设 user 的高度为400px */
  height: 100%;
  width: 100%;
}

.button-container {
  /* 让按钮容器占据 user 组件宽度的1/10 */
  height:80%;

  display: flex;
  flex-direction: column;
  /* 使按钮容器的背景颜色可见 */
  background-color: lightgray;
}

.button {
  /* 让按钮占据按钮容器的高度的1/4，即平均分布 */
  flex: 1;
  /* 按钮样式 */
  background-color: blue;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}

</style>