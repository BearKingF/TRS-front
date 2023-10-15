import request from "../request";
type CreateTeamResult = Common.IResponse<null>;
const createTeamAPI = (data:CreateAPI.createInfo) => {
  return request<CreateTeamResult>({
    method: "post",
    url: "/api/cilent/create",
    data: data,
    withCredentials: true,
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default createTeamAPI;
