import { PermissionService } from "@/services/permission.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useGetPermissionsList() {
    return useQuery({
        queryKey: ["permissionsList"],

        queryFn: async function() {
            const response = await PermissionService.getPermissionsList();
            return response.data;
        },
    });
}

export {
    useGetPermissionsList,
    
};