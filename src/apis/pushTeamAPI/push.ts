import request from "../request";
type PushTeamResult = Common.IResponse<null>;
const pushTeamAPI = () => {
  return request<PushTeamResult>({
    method: "delete",
    url: "/api/client/captain/dis_apply",
   // withCredentials: true,
  });
};

export default pushTeamAPI;
