export enum apiStatus {
    idle,
    loading,
    success,
    failed,
}

export interface LoginState {
    status: apiStatus;
    userDetails: {
        [key: string]: string | number;
    };
}

export type LoginProps = {
    username: string;
    password: string;
};

export interface DashboardState {
    status: apiStatus;
    page: number;
    userDetails: {
        [key: string]: string | {[key: string]: string};
    }[];
}

export interface FavoriteState {
    favoriteUserDetails: {
        [key: string]: string | {[key: string]: string};
    }[];
}
