<script setup lang="ts">
import router from "../routers/index";
const userupdate = () => {
  router.push({ name: "userupdate" });
  //等价于/user/userupdate
};
const createteam = () => {
  router.push({ name: "createteam" });
};
const jointeam = () => {
  router.push({ name: "jointeam" });
};
const getitem = () => {
  router.push({ name: "getitem" });
};
</script>


<template>
    <div class="user">
      <!--跳转按钮区-->
      <div class="button-container">
        <button class="button" @click="userupdate">编辑个人信息</button>
        <button class="button" @click="createteam">创建团队</button>
        <button class="button" @click="jointeam">加入团队</button>
        <button class="button" @click="getitem">获取团队信息</button>
      </div>
      <router-view /><!--对应小组件-->
    </div>

</template>

<style scoped>
.user {
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
 /* background-color: ;*/
}

.button {
  /* 让按钮占据按钮容器的高度的1/4，即平均分布 */
  flex: 1;
  /* 按钮样式 */
  color:#b9cd6f; /* 使用十六进制颜色代码来表示亮金色 */
  border: none;
  outline: 2px solid blue;
  cursor: pointer;
  background-color: rgb(44, 72, 231);
}
</style>