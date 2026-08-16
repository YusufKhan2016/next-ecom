export type LoginDataType = {
    email: string;
    password: string;
}

export type ChangePasswordDataType =  {
    current_password: string;
    password: string;
    password_confirmation: string;
}