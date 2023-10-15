
<script setup lang="ts">
import { ref } from "vue";
import router from "../routers";
import userStore from "../stores/userStore";
import { storeToRefs } from "pinia";
import image from "../assets/20.png";
import audioFile from "../assets/audio.mp3"; // 导入音频文件
const newUserStore = userStore();
const { userInfo } =storeToRefs(newUserStore);
const isName = userInfo.value?.username;
const activeIndex = ref("1");
const audio = new Audio(audioFile); // 创建音频对象
// 添加当前播放歌曲的索引
/*const currentSongIndex = ref(0);
const songs = ref([
  {
    src: "../assets/audio.mp3",
  },
  {
    src: "../assets/8.mp3",
  },
  // 添加更多歌曲
]);*/
const playAudio = () => {
  audio.play(); // 播放音频
};
const stopAudio = () => {
  audio.pause(); // 暂停音频
};
/*const playNext = () => {
  // 增加当前播放歌曲索引
  currentSongIndex.value = (currentSongIndex.value + 1) % songs.value.length;
  // 切换到下一首歌曲
  audio.src = songs.value[currentSongIndex.value].src;
  audio.play();
};*/

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const pushToLogin = () => {
    router.push("/login");
};

const pushToSign = () => {
    router.push("/sign");
};
const pushToOut = () => {
    localStorage.clear();
    userInfo.value = undefined;
    router.push("/login");
};

const pushToUser= () => {
    router.push("/user");
};

const pushToCaptain = () => {
    router.push("/captain");
};
const pushToAdmin = () => {
  router.push("/admin");
};
</script>



<template>
      <el-menu  :default-active="activeIndex"  class="el-menu-demo menu" mode="horizontal" :ellipsis="false"
          @select="handleSelect"
      >
       <el-menu-item index="0">
        <div class="flex items-center">
          <span class="text-large font-600 mr-3"> 团队管理系统 </span>
          &ensp;&ensp;&ensp;
          <el-tag>霜冻鸭子</el-tag>
        </div>
    </el-menu-item>
    <div class="ss">
      <el-image :src="image"></el-image>
      <el-button class="cs" @click="playAudio">Music</el-button>
       <el-button class="js" @click="stopAudio">stop</el-button>
    </div>
        <div class="flex-grow" />
        <el-sub-menu index="2">
          <template #title>个人中心</template>
          <el-menu-item index="2-1" @click="pushToUser">普通用户界面</el-menu-item>
          <el-menu-item index="2-2" @click="pushToCaptain">队长界面</el-menu-item>
           <el-menu-item index="2-3" @click="pushToAdmin">管理员界面</el-menu-item>
        </el-sub-menu>
        <div class="button_div">
          <div class="button" v-show="!userInfo" :key="1">
            <el-button type="primary" @click="pushToLogin" >登录</el-button>
            <el-button class="ml-2" @click="pushToSign" >注册</el-button>
          </div>
           <div v-show="userInfo" :key="2">
            <div style="display: flex ; flex-direction:row">
              <p>亲爱的{{ isName }},欢迎回来&ensp;&ensp;</p>
              <el-button class="ml-2 button" @click="pushToOut" >退出</el-button>
            </div>
          </div>
        </div>
      </el-menu>
</template>


<style scoped>
/* 给具有 .flex-grow 类的元素应用 flex-grow 属性，使其可以在父容器中自动分配剩余空间 */
.flex-grow {
    flex-grow: 1;
}
.ss{
  position:relative;
  left:800px;
  top:12px;
  width:55px;
  height: 75px;
}
.cs{
  position:relative;
  left:80px;
  top:-60px;
  width:70px;
  height:40px;
  background-color: rgb(69, 250, 253);
}
.js{
   position:relative;
  left:140px;
  top:-111px;
  width:70px;
  height:40px;
  background-color: rgb(69, 250, 253);
}
/* 给 .menu 类的元素应用以下样式： */
.menu {
    /* 使用固定定位，将菜单元素固定在页面上 */
    position: fixed;

    /* 距离页面左边界的距离为2% */
    left: 2%;

    /* 距离页面右边界的距离为2% */
    right: 2%;

    /* 距离页面顶部的距离为2% */
    top: 2%;
}

/* 给具有 .button_div 类的元素应用以下样式： */
.button_div {
    /* 使用相对定位，使按钮元素相对于其普通流位置进行定位 */
    position: relative;
}

/* 给 .button 类的元素应用以下样式： */
.button {
    /* 设置按钮上外边距为12像素，增加按钮与其他内容之间的垂直间距 */
    margin-top: 12px;
}
</style>

