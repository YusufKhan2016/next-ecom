import React from 'react';
import {LogOutIcon, Trash2Icon} from "lucide-react"
import {
    AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,
    AlertDialogFooter,AlertDialogHeader,AlertDialogMedia,AlertDialogTitle,AlertDialogTrigger,
} from "@/components/ui"
import { Button } from "@/components/ui/button"
import {useAuthStore} from "@/store";
import {useLogout} from "@/hooks/admin";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

type LogoutAlertDialogPropsType = {
    onOpen: () => void
}

function LogoutAlertDialog({ onOpen } : LogoutAlertDialogPropsType)
{
    const logoutMutation = useLogout();
    const router = useRouter();
    const logout = useAuthStore((state) => state.logout);


    function handleLogout()
    {
        const toastId = toast.loading("Logging out...");
        logoutMutation.mutate(undefined, {
            onSuccess: function(response)
            {
                logout();
                toast.success(response?.data?.message, { id: toastId });
                router.push("/admin/login")
            },
            onError: function(error)
            {
                console.log(error);
            },
        })
    }
    return (
        <>
            <AlertDialog >
                <AlertDialogTrigger asChild>
                    <div className={'flex w-full gap-1 items-center'}>
                        <LogOutIcon/>
                        <div>Logout</div>
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent size="sm">
                    <AlertDialogHeader>
                        <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                            <LogOutIcon/>
                        </AlertDialogMedia>
                        <AlertDialogTitle>Logout</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to logout?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={onOpen} variant="outline">No</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleLogout}
                            variant="destructive"
                        >
                            Yes
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default LogoutAlertDialog;