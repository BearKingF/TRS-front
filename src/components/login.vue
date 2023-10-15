
<template>
    <div class="div">
        <el-container>
            <label class="label">Account&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="account" placeholder="请输入您的账号,务必为手机号或邮箱" class="input" />
        </el-container>
        <br />
        <el-container>
            <label class="label">Password</label>
            <el-input v-model="password" type="password" placeholder="请输入您的密码" show-password class="input" />
        </el-container>
        <br />
        <el-button type="primary" @click="handleLogin" class="button">登录</el-button>
        <el-button @click="handleReset" class="button">清空</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref, h } from "vue";
import loginAPI from "../apis/loginAPI/login";
import { userStore } from "../stores";
import { useRouter } from "vue-router";
const useUserStore = userStore();
const router = useRouter();
import { ElNotification } from "element-plus";
const account = ref("");
const password = ref("");
const types: { [key: number]: string } = { 1: "user", 2: "admin" };
const handleLogin = async () => {
    if (account.value === "" || password.value === "") {
        ElNotification({
            title: "登陆失败！",
            message: h("i", { style: "color: teal" }, "您的账号或密码为空"),
        });
        return;
    }
    try {
        const result = await loginAPI({
            account: account.value,
            password: password.value
        });
       if (result !== false) {
           const { data, code, msg } = result;
           if (code === 200 && msg==="ok") {
               useUserStore.setUserInfo(data);
               useUserStore.saveToLocalStorage({account:account.value,password:password.value});
                const message = "亲爱的" + data.username + ",欢迎回来！";
                ElNotification({
                    title: "登陆成功！",
                    message: h("i", { style: "color: teal" }, message),
                });
               const index = data.type;
               // router.push(`/${types[index]}`);//
               router.push("/"+types[index]);
           }
           else throw new Error(msg);
       }
       else throw new Error("无账户密码信息");
    }
    catch (e: any) {
       console.log(e);
       ElNotification(
           {
               title: "抱歉",
               message: h("i", { style: "color:teal" }, `登陆失败, ${e.message || "未知错误"}`)
           }
       );
    }
};
const handleReset = () => {
    account.value = "";
    password.value = "";
};
</script>




<style scoped>
.div {
 /* 使用 position: absolute; 将元素设置为绝对定位，以便手动定位 */
  position: absolute;

  /* 使用 left: 100px; 将元素的左边界定位到页面的水平位置 100px 处 */
  left: 700px;

  /* 使用 top: 200px; 将元素的上边界定位到页面的垂直位置 200px 处 */
  top: 200px;

  /* 使用 width: 300px; 设置元素的宽度为 300px */
  width: 600px;

  /* 使用 height: 200px; 设置元素的高度为 200px */
  height: 300px;

}
.label {
  /* 使用 margin-right 属性设置右外边距，这里设置为 10px */
  margin-right: 10px;
 /* 使用 font-weight 属性设置文本的粗细，这里设置为 bolder（更粗的字体） */
  font-weight: bolder;
}
.button {
    margin: 20px;
    width: 100px;
}
</style>