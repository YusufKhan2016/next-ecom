import { apiClient } from "@/lib/apiClient";

export const AuthService = {
    
    login(data: any) {
        return apiClient.post("/login", data);
    },

    getUser() {
        return apiClient.get("/auth/get-user");
    },

    Logout() {
        return apiClient.get("/auth/logout");
    },

    changePassword(data: any) {
        return apiClient.post("auth/change-password", data);
    }
    
}