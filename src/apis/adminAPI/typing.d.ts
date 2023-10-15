
declare namespace AdminAPI {
    export interface Data {
        /**
         * 团队总数
         */
        all_team_count: number;
        /**
         * 已提交报名的团队数
         */
        committed_team_count: number;
        /**
         * 已提交报名的团队列表
         */
        committed_team_list: committed_team_list[];
        /**
         * 未提交报名的团队数
         */
        uncommitted_team_count: number;
        /**
         * 未提交报名的团队列表
         */
        uncommitted_team_list: uncommitted_team_list[];
    }

    export interface committed_team_list {
        /**
         * 队长id
         */
        captain_id: number;
        /**
         * 团队id
         */
        team_id: number;
        /**
         * 团队名
         */
        team_name: string;
        /**
         * 团队人数
         */
        total: number;
    }

    export interface Uncommitted_team_list {
        /**
         * 队长id
         */
        captain_id: number;
        /**
         * 团队id
         */
        team_id: number;
        /**
         * 团队名
         */
        team_name: string;
        /**
         * 团队人数
         */
        total: number;
    }
}