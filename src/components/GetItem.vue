
<script setup lang="ts">
//导入资源
import image from "@/assets/007.png";
//导入接口
import getItemAPI from "../apis/getItemAPI/getitem";
//其他
import { reactive, h ,ref} from "vue";
import { ElNotification ,ElMessageBox} from "element-plus";
import router from "../routers";
const id = ref("");
const form = reactive({
    team_id:parseInt(id.value),
});
//利用provide,inject收发数据
import { provide } from "vue";
//声明团队数据对象
const dialogVisible = ref(true);//可见性,测试改成true
const handleClose = (done: () => void) => {
    ElMessageBox.confirm("Are you sure to close this dialog?")
        .then(() => {
            dialogVisible.value = false;
        })//点击确认按钮，关闭提示框
        .catch(() => {
            done();
        });
};//处理关闭按钮逻辑
const handleConfirm = () => {
    router.push("/itemshow");
    dialogVisible.value = false;
};//处理确认按钮逻辑
const onSubmit = async () => {
    if (form.team_id!==0) {
        try {
            const result = await getItemAPI(form);
            const {  code, msg ,data} = result;
            if (code === 200 && msg === "ok"&& data!==null) {
                ElNotification({ title: "获取成功!" });
                const teamData = reactive(data);//转换为响应式对象
                provide("teamData", teamData);//发出数据,键名+值
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
    }
    else {
        ElNotification({
            title: "失败",
            message: h("i", { style: "color: teal" }, "获取失败，请将必填内容输入完整!"),
        });
    };
};
const clear = () => {
    id.value="";
};
</script>


<template>
    <div class="div">
    <div style="text-align: center ; margin-left: 120px">
        <h3 class="title">获取</h3>
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
    <div>
        <el-image class="img" :src="image">
            </el-image>
    </div>
            <el-form-item label="*团队id">
                <el-input v-model="id" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="button">获取</el-button>
                <el-button class="button" @click="clear">清空</el-button>
            </el-form-item>
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
  top: 90px;

  /* 使用 width: 300px; 设置元素的宽度为 300px */
  width: 600px;

  /* 使用 height: 200px; 设置元素的高度为 200px */
  height:800px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

</style>
