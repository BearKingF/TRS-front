import request from "../request";
type JoinTeamResult = Common.IResponse<null>;
const joinTeamAPI = (data:JoinTeamAPI.jointeamInfo) => {
  return request<JoinTeamResult>({
    method: "post",
    url: "/api/cilent/join",
    data: data,
    withCredentials: true,
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default joinTeamAPI;
