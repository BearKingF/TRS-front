<script setup lang="ts">
import { reactive, h } from "vue";
import { ElNotification } from "element-plus";
import capUpdateAPI from "../apis/capUpdateAPI/capupdate";
import image from "@/assets/003.png";
const form = reactive({
    team_name:"",
    old_password:"",
    new_password:"",
    confirm_password:"",

});

const onSubmit = async () => {
    if (form.team_name!==""&&form.confirm_password !== "" && form.old_password!==""&&form.new_password!=="") {
        if (form.new_password!== form.confirm_password) {
            ElNotification({
                title: "失败",
                message: h("i", { style: "color: teal" }, "两次输入的密码不一致,请重新输入！"),
            });
            return;
        };
        try {
            const result = await capUpdateAPI(form);
            const {  code, msg } = result;
            if (code === 200 && msg === "ok") {
                    ElNotification({ title: "编辑成功!"});
                }
                else throw new Error(msg);
        }
        catch (e: any) {
            console.log(e);
            ElNotification(
                {
                    title: "抱歉",
                    message: h("i", { style: "color:teal" }, `编辑失败, ${e.message || "未知错误"}`)
                }
            );
        }
    }
    else {
        ElNotification({
            title: "失败",
            message: h("i", { style: "color: teal" }, "编辑失败，请将必填内容输入完整!"),
        });
    };
};
const clear = () => {
    form.new_password = "";
    form.old_password = "";
    form.team_name = "";
    form.confirm_password = "";

};
</script>

<template>
    <div class="div">
        <div style="text-align: center ; margin-left: 120px">
            <h3>编辑团队信息</h3>
        </div>
        <div>
            <el-image class="img" :src="image">
                </el-image>
        </div>
        <el-form :model="form" label-width="120px">
            <el-form-item label="团队名">
                <el-input v-model="form.team_name" />
            </el-form-item>
            <el-form-item label="*原密码">
                <el-input v-model="form.old_password">
                </el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="form.new_password" />
            </el-form-item>
             <el-form-item label="确认密码">
                    <el-input v-model="form.confirm_password" />
                </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="button">编辑</el-button>
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
  top: 90px;

  /* 使用 width: 300px; 设置元素的宽度为 300px */
  width: 600px;

  /* 使用 height: 200px; 设置元素的高度为 200px */
  height:600px;
}
</style>