<script setup lang="ts">
//请允许我偷个懒
import { reactive, h } from "vue";
import { ElNotification } from "element-plus";
import image from "@/assets/10.png";
import userUpdateAPI from "../apis/userUpdateAPI/userupdate";
const form = reactive({
    username: "",
    sex: "",
    phone_num: "",
    email: "",
    major: "",
    new_password: "",
    old_password:"",
    confirm_password: "",
});
const onSubmit = async () => {
    if (form.new_password !== form.confirm_password) {
        ElNotification({
            title: "失败",
            message: h("i", { style: "color: teal" }, "两次输入的新密码不一致,请重新输入！"),
        });
        return;
    };
    try {
        const result = await userUpdateAPI(form);
        const { code, msg } = result;
        if (code === 200 && msg === "ok") {
            ElNotification({ title: "编辑成功!" });
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
};
const clear = () => {
    form.username = "";
    form.sex = "";
    form.phone_num = "";
    form.major = "";
    form.old_password = "";
    form.confirm_password = "";
    form.email = "";
    form.new_password = "";
};
</script>

<template>
    <div>
        <el-image class="img" :src="image">
                    </el-image>
    </div>
    <div class="div">
        <div style="text-align: center ; margin-left: 120px">
            <h3>编辑个人信息</h3>
        </div>
        <el-form :model="form" label-width="120px">
            <el-form-item label="用户名">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="form.sex" placeholder="请选择您的性别">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                </el-select>
            </el-form-item>
            <el-form-item label="电话号码">
                <el-input v-model="form.phone_num" />
            </el-form-item>
            <el-form-item label="email">
                <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item label="专业">
                <el-input v-model="form.major" type="textarea" />
            </el-form-item>
            <el-form-item label="原密码">
                <el-input v-model="form.old_password" />
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="form.confirm_password" />
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="form.new_password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="button">提交编辑</el-button>
                <el-button class="button" @click="clear">清空</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped>
.div {
    position:fixed;
    left:1200px;
    top:75px;
    width: 400px;
    height: 300px;
    margin: 40px 130px 0 auto;
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
  top: 170px;

  /* 使用 width: 300px; 设置元素的宽度为 300px */
  width: 600px;

  /* 使用 height: 200px; 设置元素的高度为 200px */
  height: 600px;
}
.button {
    margin: 20px;
    width: 100px;
}
</style>