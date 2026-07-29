import { AuthService } from "@/services/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useLogin() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: AuthService.login,

        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: ["rolesList"]
            })
        }
    })
}

export { useLogin };