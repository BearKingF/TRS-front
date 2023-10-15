declare namespace UserAPI {
    export interface loginInfo{
            /**
     * 账号
     */
    account: string;
    /**
     * 密码
     */
    password: string;
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
