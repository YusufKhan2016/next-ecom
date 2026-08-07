import { AuthService } from "@/services/auth.service";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

function useLogin() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: AuthService.login,

        onSuccess: function () {
            queryClient.refetchQueries({
                queryKey: ["auth"]
            })
        }
    })
}

function useLogout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: AuthService.logout,

        onSuccess: function () {
            queryClient.removeQueries({
                queryKey: ["auth"]
            })
        }
    })
}

function useAuth() {
    return useQuery({
        queryKey: ["auth"],
        queryFn: async function()
        {
            const response = await AuthService.getUser();
            return response.data;
        },
        staleTime: 1000 * 60 * 10
    })
}
export { useLogin, useLogout, useAuth };