<script setup lang="ts">
//导入资源
import image from "@/assets/Add.png";
//导入接口
import adminAPI from "../apis/adminAPI/admin";
//其他
import { reactive, ref, h ,provide} from "vue";
import { ElMessageBox } from "element-plus";
import { ElNotification } from "element-plus";
import router from "../routers";
//利用provide,inject收发数据
//声明团队数据对象
//对话框
const dialogVisible = ref(true);//可见性
const handleClose = (done: () => void) => {
    ElMessageBox.confirm("Are you sure to close this dialog?")
        .then(() => {
           dialogVisible.value = false;
        })
        .catch(() => {
             done();
        });
};//处理关闭按钮逻辑
const handleConfirm = () => {
    router.push("/allitemshow");
    dialogVisible.value=false;
};//处理确认按钮逻辑
const onSubmit = async () => {
    try {
        const result = await adminAPI();
        const { code, msg, data } = result;
        if (code === 200 && msg === "ok" && data !== null) {
            ElNotification({ title: "获取成功!" });
            const allTeamData = reactive(data);//转换为响应式对象
            provide("allTeamData", allTeamData);//发出数据,键名+值
            dialogVisible.value = true;//拿到数据后弹出提示框
        }
        else throw new Error(msg);
    }
    catch (e: any) {
        console.log(e);
        ElNotification(
            {
                title: "抱歉",
                message: h("i", { style: "color:teal" }, `获取失败, ${e.message || "未知错误"}`)
            }
        );
    }
};
</script>


<template>
    <div class="div">
        <div style="text-align: center ; margin-left: 120px" class="title">
            <h3 >获取所有团队信息</h3>
        </div>
        <div>
            <el-image class="img" :src="image">
            </el-image>
        </div>
            <el-button type="primary" @click="onSubmit" class="button">获取</el-button>
    </div>
     <el-dialog   title="提示" width="20%" v-model="dialogVisible">
         <span>是否查看团队信息表格</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="handleClose">Cancel</el-button>
            <el-button type="primary" @click="handleConfirm">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
</template>


<style scoped>


.button {
    position:fixed;
    margin: 20px;
    width: 100px;
    left:1200px;
    top:500px;
}
.title{
    position:absolute;
    left:1000px;
    top:350px;

}
.img {
    /* 使用 position: relative; 属性来相对定位元素 */
    /* position:relative;*/
    left: 300px;
    /*用于将元素向右移动 700 像素 */
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
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
