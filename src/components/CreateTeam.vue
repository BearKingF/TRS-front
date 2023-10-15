<script setup lang="ts">
//导入资源（图片等）
import image from "@/assets/Add.png";
//导入
import { reactive, h } from "vue";
import { ElNotification } from "element-plus";

import router from "../routers";
//导入API
import createTeamAPI from "../apis/createTeamAPI/createteam";
//定义表单，响应式
const form = reactive({
  password: "",
  team_name: "",
});
//提交表单方法
const onSubmit = async () => {
    if (form.team_name && form.password !== "") {
        //调试发送表单并且获取数据，跳转到队长界面
        try {
          const result = await createTeamAPI(form);
            const {  code, msg } = result;
            if (code === 200 && msg === "ok") {
                    ElNotification({ title: "创建成功!"});
                router.push("/captain");
                }
                else throw new Error(msg);
        }
        //处理错误信息
        catch (e: any) {
            console.log(e);
            ElNotification(
                {
                    title: "抱歉",
                    message: h("i", { style: "color:teal" }, `创建失败, ${e.message || "未知错误"}`)
                }
            );
        }
    }
    else {
        ElNotification({
            title: "失败",
            message: h("i", { style: "color: teal" }, "创建失败，请将必填内容输入完整!"),
        });
    };
};
const clear = () => {
      form.team_name= "";
      form.password= "";
};
</script>
<template>
    <div class="div">
        <div style="text-align: center ; margin-left: 120px">
            <h3>创建</h3>
        </div>
        <div>
            <el-image class="img" :src="image">
                </el-image>
        </div>
        <el-form :model="form" label-width="120px">
            <el-form-item label="*团队名称">
                <el-input v-model="form.team_name" />
            </el-form-item>
            <el-form-item label="*团队密码">
                <el-input v-model="form.password" />
            </el-form-item>
                <el-form-item >
                <el-button type="primary" @click="onSubmit" class="button">创建</el-button>
                <el-button class="button" @click="clear">清空</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>
.div {
    width: 400px;
    height: 300px;
    margin: 40px 130px 0 auto;
}
.container {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.button {
    margin: 20px;
    width: 100px;
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
  top: 100px;

  /* 使用 width: 300px; 设置元素的宽度为 300px */
  width: 600px;

  /* 使用 height: 200px; 设置元素的高度为 200px */
  height: 600px;
}


</style>
