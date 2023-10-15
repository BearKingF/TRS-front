declare namespace SignAPI {
    export interface signInfo{
    /**
     * 确认密码，与第一次密码输入相同
     */
    confirm_password: string;
    /**
     * 邮箱，作为账号登陆，不能重复
     */
    email: string;
    /**
     * 专业
     */
    major: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 手机号，作为账号登陆，不能重复
     */
    phone_num: string;
    /**
     * 性别
     */
    sex: string;
    /**
     * 账户类型，1为普通用户，2为管理员用户
     */
    type: number;
    /**
     * 用户名
     */
    username: string;
    }
    export interface UserData {
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
        phoneNum: string;
        /**
         * 性别
         */
        sex: string;
        /**
         * 加入的团队编号
         */
        teamid: number;
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
