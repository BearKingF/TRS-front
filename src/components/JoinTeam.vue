<script setup lang="ts">
//导入资源
import image from "@/assets/006.png";
//导入接口
import joinTeamAPI from "../apis/joinTeamAPI/jointeam";
//其他
import { reactive, h } from "vue";
import { ElNotification } from "element-plus";
//声明表单
const form = reactive({
    password: "",
    team_id: "",
});
//提交方法
const onSubmit = async () => {
    //提交表单
    if ( form.team_id!==""&& form.password !== "") {
        try {
            //调试，发请求，获取后端数据,报错
            const result = await joinTeamAPI(form);
            const { code, msg } = result;
            if (code === 200 && msg === "ok") {
                ElNotification({ title: "加入团队成功!" });
            }
            else throw new Error(msg);
        }
        //处理错误信息
        catch (e: any) {
            console.log(e);
            ElNotification(
                {
                    title: "抱歉",
                    message: h("i", { style: "color:teal" }, `加入失败, ${e.message || "未知错误"}`)
                }
            );
        }
    }
    else {
        ElNotification({
            title: "失败",
            message: h("i", { style: "color: teal" }, "加入失败，请将必填内容输入完整!"),
        });
    };
};
const clear = () => {
    form.team_id = "";
    form.password = "";
};
</script>





<template>
    <div class="div">
        <div style="text-align: center ; margin-left: 120px" class="title">
            <h3>加入团队</h3>
        </div>
        <div>
            <el-image class="img" :src="image">
            </el-image>
        </div>
        <el-container class="container">
            <el-form :model="form" label-width="120px">
                <el-form-item label="*团队id">
                    <el-input v-model="form.team_id" />
                </el-form-item>
                <el-form-item label="*团队密码">
                    <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" class="button">加入</el-button>
                    <el-button class="button" @click="clear">清空</el-button>
                </el-form-item>
            </el-form>
        </el-container>
    </div>
</template>




<style scoped>
.div {
    width: 400px;
    height: 600px;
    margin: 40px 130px 0 auto;
}
.title{
    position:fixed;
    top:260px;
    left:1200px;
}

.button {
    margin: 20px;
    width: 100px;
}

.container {
    position:fixed;
    display: flex;
    /* 使用 Flexbox 布局 */
    top:400px;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}

.img {
    /* 使用 position: relative; 属性来相对定位元素 */
    /* position:relative;*/
    left: 450px;
    /*用于将元素向右移动 700 像素 */
    /* 使用 position: absolute; 将元素设置为绝对定位，以便手动定位 */
    position: absolute;

    /* 使用 left: 100px; 将元素的左边界定位到页面的水平位置 100px 处 */
    /* left: 700px;*/

    /* 使用 top: 200px; 将元素的上边界定位到页面的垂直位置 200px 处 */
    top: 70px;

    /* 使用 width: 300px; 设置元素的宽度为 300px */
    width: 600px;

    /* 使用 height: 200px; 设置元素的高度为 200px */
    height: 700px;
}</style>