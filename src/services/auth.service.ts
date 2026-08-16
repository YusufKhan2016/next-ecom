import axios from "axios";
import { serverApi } from "@/lib/server-api";
import {ChangePasswordDataType, LoginDataType} from "@/types";

export const AuthService = {

    async login(data: LoginDataType) {

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
                data,
                {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );

            return response.data;
        } catch (error: any) {
            throw error?.response?.data;
        }
    },

    async logout() {
        const api = await serverApi();
        const response = await api.post("/auth/logout");

        return response?.data;
    },

    async changePassword(data:ChangePasswordDataType) {
        const api = await serverApi();
        const response = await api.post("/auth/change-password", data);

        return response?.data;
    },

    async getUser() {
        const api = await serverApi();
        const response = await api.post("/auth/get-user");

        return response?.data;
    },

};