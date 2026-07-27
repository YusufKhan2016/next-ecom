import { apiClient } from "@/lib/apiClient";

export const RoleService = {

    getRolesList() {
        return apiClient.get("/auth/get-roles-list");
    },

    saveUpdateRole(data: any) {
        return apiClient.post("/auth/save-update-role", data);
    },

    getRoleById(id: number) {
        return apiClient.get(`/auth/get-role-by-id/${id}`);
    },

    deleteRole(id: number) {
        return apiClient.get(`/auth/delete-role/${id}`);
    },
    
}