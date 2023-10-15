import request from "../request";
type UserUpdateResult = Common.IResponse<null>;
const userUpdateAPI = (data: UserUpdateAPI.userUpdateInfo) => {
  return request<UserUpdateResult>({
    method: "put",
    url: "/api/client/update",
    data: data,
    //withCredentials: true,
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default userUpdateAPI;
