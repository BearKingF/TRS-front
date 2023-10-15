import request from "../request";
import { AddTeamInfo } from "./typing";
type AddTeamResult = Common.IResponse<null>;
const addTeamAPI = (data:AddTeamInfo) => {
  return request<AddTeamResult>({
    method: "put",
    url: "/api/client/captain/add",
    data:data,
    //withCredentials: true,
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default addTeamAPI;
