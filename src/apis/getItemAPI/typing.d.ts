declare namespace GetItemAPI {
    export interface getitemInfo {
        team_id: number;
    }
    export interface getitemData{
       /**
     * 队长名
     */
    captain: string;
    /**
     * 团队成员列表
     */
    team_member_list: TeamMemberList[];
    /**
     * 团队名
     */
    team_name: string;
    /**
     * 团队人数
     */
    team_num: number;
    /**
     * 团队状态，1表示已提交报名，2表示未提交
     */
    team_status: number;
    }
    export interface TeamMemberList{
         /**
     * 邮箱
     */
    email: string;
    /**
     * 用户id
     */
    id: number;
    /**
     * 专业
     */
    major: string;
    /**
     * 手机号
     */
    phone_num: string;
    /**
     * 性别
     */
    sex: string;
    /**
     * 团队id
     */
    team_id: number;
    /**
     * 账户类型
     */
    type: number;
    /**
     * 用户名
     */
    username: string;
    }
}