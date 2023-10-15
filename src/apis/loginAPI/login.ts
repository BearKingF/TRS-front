import request from "../request";


type LoginResult = Common.IResponse<UserAPI.UserData>;

const loginAPI = (data: UserAPI.loginInfo| null) => {
  if (data === null) return false;
  return request<LoginResult>({
    method: "post",
    url: "/api/user/login",
    data: data,
    //withCredentials: true,
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default loginAPI;
