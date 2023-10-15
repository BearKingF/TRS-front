import request from "../request";
import { DeleteTeamInfo } from "./typing";
type DeleteTeamResult = Common.IResponse<null>;
const deleteTeamAPI = (data:DeleteTeamInfo) => {
  return request<DeleteTeamResult>({
    method: "delete",
    url: "/api/client/captain/remove",
    data:data,
    //withCredentials: true,
    "headers": {
				"Content-Type": "application/json",
			},
  });
};

export default deleteTeamAPI;
