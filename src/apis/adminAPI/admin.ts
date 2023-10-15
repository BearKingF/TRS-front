import request from "../request";
type AdminResult = Common.IResponse<AdminAPI.Data>;
const adminAPI = () => {
  return request<AdminResult>({
    method: "get",
    url: "/api/admin/get",
    //withCredentials: true,
  });
};

export default adminAPI;
