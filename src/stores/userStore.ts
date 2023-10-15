import { defineStore } from "pinia";
import { ref } from "vue";
//存储用户信息和SetUserInfo方法
const userStore = defineStore(
    "user",
    () => {
        const userInfo = ref<UserAPI.UserData>();
        const setUserInfo= (info: UserAPI.UserData)  => {
            userInfo.value = info;
            localStorage.setItem("passTime", new Date().getTime().toString());
        };
      function saveToLocalStorage(data:UserAPI.loginInfo) {
      const jsonData = JSON.stringify(data);
      localStorage.setItem("loginData", jsonData);
        };
        //本地库加载数据
        function loadFromLocalStorage(): UserAPI.loginInfo | null{
            const jsonData = localStorage.getItem("loginData");
            if (jsonData) {
                return JSON.parse(jsonData);
            }
            return null;
        }
     const logout = () => {
       userInfo.value = undefined;
       localStorage.removeItem("passTime");
       };
        return {
			userInfo,
            setUserInfo,
            saveToLocalStorage,
            loadFromLocalStorage,
            logout,
        };
    },
);

export default userStore;