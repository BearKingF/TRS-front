
<script setup lang="ts">
import { reactive,ref, h } from "vue";
import { ElNotification } from "element-plus";
import signAPI from "../apis/signAPI/sign";
import router from "../routers";
const id = ref("");
const form = reactive({
  username: "",
  sex: "",
  phone_num: "",
  email:"",
  major: "",
  password: "",
  confirm_password: "",
  type:parseInt(id.value),
});

const onSubmit = async () => {
    if (form.username !== "" && form.sex !== "" && form.phone_num !== "" && form.email !== "" && form.major !== "" && form.password !== "" && form.confirm_password !== "" && form.type !== 0) {
        if (form.password !== form.confirm_password) {
            ElNotification({
                title: "失败",
                message: h("i", { style: "color: teal" }, "两次输入的密码不一致,请重新输入！"),
            });
            return;
        };
        try {
            const result = await signAPI(form);
            const {  code, msg } = result;
            if (code === 200 && msg === "ok") {
                    ElNotification({ title: "注册成功!"});
                router.push("/login");
                }
                else throw new Error(msg);
        }
        catch (e: any) {
            console.log(e);
            ElNotification(
                {
                    title: "抱歉",
                    message: h("i", { style: "color:teal" }, `注册失败, ${e.message || "未知错误"}`)
                }
            );
        }
    }
    else {
        ElNotification({
            title: "失败",
            message: h("i", { style: "color: teal" }, "注册失败，请将必填内容输入完整!"),
        });
    };
};
const clear = () => {
      form.username= "";
      form.sex= "";
      form.phone_num= "";
      form.major= "";
      form.password= "";
      form.confirm_password = "";
      form.email = "";
      id.value= "";
};
</script>





<template>
    <div class="div">
        <div style="text-align: center ; margin-left: 120px">
            <h3>注册</h3>
        </div>
        <el-form :model="form" label-width="120px">
            <el-form-item label="*用户名">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="*性别">
                <el-select v-model="form.sex" placeholder="请选择您的性别">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                </el-select>
            </el-form-item>
            <el-form-item label="*电话号码">
                <el-input v-model="form.phone_num" />
            </el-form-item>
             <el-form-item label="*email">
                    <el-input v-model="form.email" />
                </el-form-item>
            <el-form-item label="*专业">
                <el-input v-model="form.major" type="textarea" />
            </el-form-item>
            <el-form-item label="*密码">
                <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item label="*确认密码">
                <el-input v-model="form.confirm_password" />
            </el-form-item>
            <el-form-item label="*账户类型">
                    <el-select  v-model="id" placeholder="请选择用户类型">
                    <el-option label="普通用户" value=1 />
                    <el-option label="管理员用户" value=2 />
                    </el-select>
                </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="button">注册</el-button>
                <el-button class="button" @click="clear">清空</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped>
.div {
    position:fixed;
    width: 400px;
    height: 300px;
    margin: 40px 130px 0 auto;
    top:70px;
}

.button {
    margin: 20px;
    width: 100px;
}
</style>