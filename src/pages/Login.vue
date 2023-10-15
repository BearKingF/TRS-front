<template>
    <el-row>
        <el-col :span="8">
            <div>
                <el-image class="img" src="src/assets/JHcartoon.png">
                </el-image>
            </div>
        </el-col>
        <el-col :span="16" class="login">
            <login></login>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import login from "../components/login.vue";
</script>

//登录页面

<style scoped>
.img {
   /* 使用 position: relative; 属性来相对定位元素 */
   /* position:relative;*/
    left: 20px; /*用于将元素向右移动 700 像素 */
  /* 使用 position: absolute; 将元素设置为绝对定位，以便手动定位 */
    position: absolute;

  /* 使用 left: 100px; 将元素的左边界定位到页面的水平位置 100px 处 */
 /* left: 700px;*/

  /* 使用 top: 200px; 将元素的上边界定位到页面的垂直位置 200px 处 */
  top: 100px;

  /* 使用 width: 300px; 设置元素的宽度为 300px */
  width: 600px;

  /* 使用 height: 200px; 设置元素的高度为 200px */
  height: 600px;
}

@media (max-width: 1010px) {
    .img {
        display: none;
    }
}
</style>