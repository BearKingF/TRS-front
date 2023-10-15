<script setup lang="ts">
import { RouterView } from "vue-router";
import myHeader from "./components/header.vue";
import myFooter from "./components/footer.vue";
</script>

<template>
     <el-header>
        <my-header></my-header>
      </el-header>
      <router-view />
      <el-footer>
        <my-footer ></my-footer>
      </el-footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
