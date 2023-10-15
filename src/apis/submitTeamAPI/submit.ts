import request from "../request";
type SubmitTeamResult = Common.IResponse<null>;
const submitTeamAPI = () => {
  return request<SubmitTeamResult>({
    method: "put",
    url: "/api/client/captain/apply",
   // withCredentials: true,
  });
};

export default submitTeamAPI;
