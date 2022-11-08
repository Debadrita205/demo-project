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
