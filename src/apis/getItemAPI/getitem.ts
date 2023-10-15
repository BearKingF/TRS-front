import request from "../request";
type GetItemResult = Common.IResponse<GetItemAPI.getitemData|null>;
const getItemAPI = (data:GetItemAPI.getitemInfo) => {
  return request<GetItemResult>({
    method: "get",
    url: "/api/cilent/get",
    data: data,
    //?withCredentials: true,
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default getItemAPI;
