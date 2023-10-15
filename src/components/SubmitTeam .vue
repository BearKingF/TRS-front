
<script setup lang="ts">
import { h } from "vue";
import { ElNotification } from "element-plus";
import submitTeamAPI from "../apis/submitTeamAPI/submit";
import router from "../routers";
import image from "@/assets/18.png";
//const form = reactive({
   // object : {},

//});
const onSubmit = async () => {
    try {
        const result = await submitTeamAPI();
        const { code, msg } = result;
        if (code === 200 && msg === "ok") {
            ElNotification({ title: "提交成功!" });
            router.push("/user");
        }
        else throw new Error(msg);
    }
    catch (e: any) {
        console.log(e);
        ElNotification(
            {
                title: "抱歉",
                message: h("i", { style: "color:teal" }, `提交失败, ${e.message || "未知错误"}`)
            }
        );
    }
};
</script>

<template>
    <div class="div">
        <div style="text-align: center ; margin-left: 120px">
            <h3>提交报名</h3>
        </div>
        <div>
            <el-image class="img" :src="image">
            </el-image>
        </div>
        <el-button type="primary" @click="onSubmit" class="button">提交</el-button>
    </div>

</template>




<style scoped>
.div {
    width: 400px;
    height: 600px;
    margin: 40px 130px 0 auto;
}

.button {
    margin: 20px;
    width: 100px;
}

.container {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.img {
   /* 使用 position: relative; 属性来相对定位元素 */
   /* position:relative;*/
    left: 450px; /*用于将元素向右移动 700 像素 */
  /* 使用 position: absolute; 将元素设置为绝对定位，以便手动定位 */
    position: absolute;

  /* 使用 left: 100px; 将元素的左边界定位到页面的水平位置 100px 处 */
 /* left: 700px;*/

  /* 使用 top: 200px; 将元素的上边界定位到页面的垂直位置 200px 处 */
  top: 140px;

  /* 使用 width: 300px; 设置元素的宽度为 300px */
  width: 600px;

  /* 使用 height: 200px; 设置元素的高度为 200px */
  height: 600px;
}
</style>