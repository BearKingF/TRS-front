import request from "../request";
type DisbandTeamResult = Common.IResponse<null>;
const disbandTeamAPI = (data: DisbandTeamAPI.disbandInfo) => {
    return request<DisbandTeamResult>(
        {
            method: "delete",
            url: "/api/client/captain/delete",
            data: data,
            "headers": {
                "Content-Type": "application/json",
            }
        }
    );
};
export default disbandTeamAPI;