import { createRouter, createWebHistory } from "vue-router";
//所有API接口
import loginAPI from "../apis/loginAPI/login";
//所有页面组件导入
import Login from "../pages/Login.vue";
import User from "../pages/User.vue";
import Captain from "../pages/Captain.vue";
import Sign from "../pages/Sign.vue";
import Admin from "../pages/Admin.vue";
//普通用户界面四个小组件导入
import UserUpdate from "../components/UserUpdate.vue";
import CreateTeam from "../components/CreateTeam.vue";
import JoinTeam from "../components/JoinTeam.vue";
import GetItem from "../components/GetItem.vue";
//展示组件导入
import ItemShow from "../components/ItemShow.vue";
import AllTeamShow from "../components/AllTeamShow.vue";
import Test from "../components/test.vue";
//队长界面所需七个小组件导入
import CapUpdate from "../components/CapUpdate.vue";
import DeleteTeam from "../components/DeleteTeam.vue";
import AddTeam from "../components/AddTeam.vue";
import DisbandTeam from "../components/DisbandTeam.vue";
import ChangeCap from "../components/ChangeCap.vue";
import SubmitTeam from "../components/SubmitTeam .vue";
import PushTeam from "../components/PushTeam.vue";
//管理员页面组件导入
import { userStore } from "../stores";
import { ElNotification } from "element-plus";
import { h } from "vue";
//路由命名用小写单词,组件用大驼峰，API用小驼峰,name与路由一样
const routes = [
	{
		path: "/login",
		name: "login",
		meta: {
			title: "登陆",
			requestAuth: false,
		},
		component: Login,
	},
	{
		path: "/test",
		name: "test",
		meta: {
			title: "未提交表格",
			requestAuth: false,
		},
		component: Test,
	},
	{
		path: "/itemshow",
		name: "itemshow",
		meta: {
			title: "团队信息展示",
			requestAuth: false,
		},
		component: ItemShow,
	},
	{
		path: "/allitemshow",
		name: "allitemshow",
		meta: {
			title: "所有团队信息展示",
			requestAuth: false,
		},
		component: AllTeamShow,
	},
	{
		path: "/sign",
		name: "sign",
		meta: {
			title: "注册",
			requestAuth: false,
		},
		component: Sign,
	},
	{
		path: "/captain",
		name: "captain",
		meta: {
			title: "队长",
			requestAuth:false,//测试改为false
		},
		component: Captain,
		children: [
			{
				path: "capupdate",
				name: "capupdate",
				meta: {
					title:"编辑团队信息",
				},
				component:CapUpdate
			},
			{
				path: "deleteteam",
				name: "deleteteam",
				meta: {
					title:"移除团队成员",
				},
				component:DeleteTeam,
			},
			{
				path: "addteam",
				name: "addteam",
				meta: {
					title:"添加团队成员",
				},
				component:AddTeam,
			},
			{
				path: "disbandteam",
				name: "diabandteam",
				meta: {
					title:"解散团队",
				},
				component:DisbandTeam,
			},
			{
				path: "changecap",
				name: "changecap",
				meta: {
					title:"转移队长职务",
				},
				component:ChangeCap,
			},
			{
				path: "submitteam",
				name: "submitteam",
				meta: {
					title:"提交报名",
				},
				component:SubmitTeam,
			},
			{
				path: "pushteam",
				name: "pushteam",
				meta: {
					title:"撤销报名",
				},
				component:PushTeam,
			},
		]
	},
	{
		path: "/admin",
		name: "admin",
		meta: {
			title: "管理员",
			requestAuth:false,
		},
		component:Admin,
	},
	{
		path: "/user",
		name: "user",
		meta: {
			title: "普通用户",
			requestAuth:false,//应为true，测试用false
		},
		component: User,
		children: [
			{
				path: "userupdate",
				name: "userupdate",
				meta: {
					title: "编辑个人信息",
				},
				component:UserUpdate,
			},
		{
				path: "createteam",
				name: "createteam",
				meta: {
					title: "创建团队",
				},
				component: CreateTeam,
			},
			{
				path: "jointeam",
				name: "jointeam",
				meta: {
					title: "加入团队",
				},
				component: JoinTeam,
			},
			{
				path: "getitem",
				name: "getitem",
				meta: {
					title: "获取团队信息",
				},
				component: GetItem,
			}
		],
	},
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
//to.matched判断路由requestAuth,some方法返回第一个true值
router.beforeEach(async (to) => {
	if (to.matched.some(record => record.meta.requestAuth)) {
	  //创建库实例useUserStore
	  const useUserStore = userStore();
	  //如果没有用户信息
    if (!useUserStore.userInfo) {
		try {
		  //本地库没有登录时间,返回登录界面
        if (!localStorage.getItem("passTime")) return "/login";
        // 先检查是否超过7日未登陆
        const lastLoginTime = Number.parseInt(localStorage.getItem("passTime") || "0");
        if (new Date().getTime() - lastLoginTime > 1000 * 60 * 60 * 24 * 7) {
          throw new Error("登陆过期");
        }

		  // 使用账号密码请求并写入用户信息
		  const result = await loginAPI(useUserStore.loadFromLocalStorage());
		  if (result !== false) {
			  const { data, code, msg } = result;
			  if (msg === "OK" && code === 200) {
				  useUserStore.setUserInfo(data);
                  const message = "亲爱的" + data.username + ",欢迎回来！";
                  ElNotification({
                  title: "自动登陆成功！",
                  message: h("i", { style: "color: teal" }, message),
                 });
			 } else throw new Error(msg);
		  }
		  else throw new Error("无账户密码信息");
		}
		//处理错误信息
         catch (e:any) {
             console.log(`自动登陆状态失败, ${e.message || "未知错误"}`);
             useUserStore.logout();
             return "/login";
      }
    }
	}
	//设置网页标题：路由元数据标题|WeJH-CMS
document.title = [to.meta.title, "WeJH-CMS"]
    .filter(item => !!item)
    .join(" | ");
});
export default router;
