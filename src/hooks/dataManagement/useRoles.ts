import { RoleService } from "@/services/role.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useGetRolesList() {
    return useQuery({
        queryKey: ["rolesList"],

        queryFn: async function() {
            const response = await RoleService.getRolesList();
            return response.data;
        },
    });
}

function useSaveUpdateRole() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: RoleService.saveUpdateRole,

        onSuccess: function() {
            queryClient.invalidateQueries({
                queryKey: ["rolesList"]
            })
        }
    })
}

function useGetRoleById(id: number) {
    return useQuery({
        queryKey: ["roleById", id],
        queryFn: async () => {
            const { data } = await RoleService.getRoleById(id);
            return data;
        },
        enabled: !!id,
    });
}

function useDeleteRole() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: RoleService.deleteRole,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["rolesList"],
            });
        },
    });
}

export {
    useGetRolesList,
    useSaveUpdateRole,
    useGetRoleById,
    useDeleteRole
};