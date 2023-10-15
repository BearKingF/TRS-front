<template>
    <el-row>
        <el-col :span="8">
            <div>
                <el-image class="img1" src="src/assets/JHcartoon.png">
                </el-image>
            </div>
        </el-col>
         <el-col :span="8">
                <div>
                    <el-image class="img2" src="src/assets/005.jpg">
                    </el-image>
                </div>
            </el-col>
        <el-col :span="8">
            <sign />
        </el-col>
    </el-row>
</template>



//注册页面
<script setup lang="ts">
import sign from "../components/sign.vue";
</script>

<style scoped>
.img1 {
    position: relative;
    left: 70px;
    top: -30px;
}
.img2{
      position: relative;
    left: 30px;
    top: 80px;
}
@media (max-width: 1010px) {
    .img {
        display: none;
    }
}
</style>