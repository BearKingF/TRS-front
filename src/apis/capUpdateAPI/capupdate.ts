import request from "../request";
type CapUpdateResult = Common.IResponse<null>;
const capUpdateAPI = (data:CapUpdateAPI.capUpdateInfo) => {
  return request<CapUpdateResult>({
    method: "put",
    url: "/api/client/captain/update",
    data: data,
   // withCredentials: true,请求携带cookie
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default capUpdateAPI;
