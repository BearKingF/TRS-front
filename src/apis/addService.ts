/*import request from "./request";

import {contacterInfo} from "../types/personalInfo";

//增加一条联系人信息，传给后端
export default class addService {
	static async add (data: contacterInfo) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"/api/contact",
			method: "post",
			data: data
		});
	}
        //根据id查找信息服务，向后端发请求，拿到数据
	static async show (
		owner_id: number
	) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"/api/contact",
			method: "get",
			params: {
				owner_id: owner_id
			}
		});
	}
}*/