
<template>
    <div class="foot_div">
        <div>
            <el-divider content-position="center">@霜冻鸭子·2023</el-divider>
        </div>
        <div class="content">
            <el-descriptions :column="4" size="small">
                <el-descriptions-item label="QQ group">123456789&ensp;&ensp;&ensp;</el-descriptions-item>
                <el-descriptions-item label="Github">
                  //  <el-link href="https://github.com/123sssdd/TeamSystem">
                        https://github.com/123sssdd/TeamSystem&ensp;&ensp;&ensp;
                    </el-link>
                </el-descriptions-item>
               // <el-descriptions-item label="Official website"><el-link
                     href="http://www.jh.zjut.edu.cn/index">http://www.jh.zjut.edu.cn&ensp;&ensp;&ensp;</el-link>
                </el-descriptions-item><el-descriptions-item label="Designed by">世间修行者</el-descriptions-item>

            </el-descriptions>
        </div>
    </div>
</template>



<script setup lang="ts">

</script>



<style scoped>
.foot_div {
/* 使用绝对定位，将元素从文档流中脱离，并相对于其最近的定位祖先进行定位 */
  position: absolute;

  /* 设置元素左边距离其最近的定位祖先的左边界为2% */
  left: 2%;

  /* 设置元素右边距离其最近的定位祖先的右边界为2% */
  right: 2%;
  /* 设置元素底边距离其最近的定位祖先的底部边界为2% */
  bottom: 2%;
}
</style>






