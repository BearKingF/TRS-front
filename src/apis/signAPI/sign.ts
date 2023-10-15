import request from "../request";
type SignResult = Common.IResponse<null>;
const signAPI = (data: SignAPI.signInfo) => {
  return request<SignResult>({
    method: "post",
    url: "/api/user/register",
    data: data,
    //withCredentials: true,
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default signAPI;
