import request from "../request";
type ChangeCapResult = Common.IResponse<null>;
const changeCapAPI = (data: ChangeCapAPI.changecapInfo) => {
    return request<ChangeCapResult>(
        {
            method: "put",
            url: "/api/client/captain/transfer",
            data: data,
            "headers": {
                "Content-Type": "application/json",
            }
        }
    );
};
export default changeCapAPI;