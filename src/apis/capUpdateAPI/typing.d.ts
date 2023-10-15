declare namespace CapUpdateAPI {
    export interface capUpdateInfo{
    confirm_password?: string;
    /**
     * 新密码
     */
    new_password?: string;
    /**
     * 原密码
     */
    old_password?: string;
    /**
     * 团队名
     */
    team_name?: string;

  }
}