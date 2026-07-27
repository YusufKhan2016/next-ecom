import { UserService } from "@/services/user.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useGetUsersList() {
    return useQuery({
        queryKey: ["usersList"],

        queryFn: async function() {
            const response = await UserService.getUsersList();
            return response.data;
        },
    });
}

function useSaveUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: UserService.saveUpdateUser,

        onSuccess: function() {
            queryClient.invalidateQueries({
                queryKey: ["usersList"]
            })
        }
    })
}

function useGetUserById(id: number) {
    return useQuery({
        queryKey: ["userById", id],
        queryFn: async () => {
            const { data } = await UserService.getUserById(id);
            return data;
        },
        enabled: !!id,
    });
}

function useDeleteUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: UserService.deleteUser,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["usersList"],
            });
        },
    });
}

export {
    useGetUsersList,
    useSaveUpdateUser,
    useGetUserById,
    useDeleteUser
};