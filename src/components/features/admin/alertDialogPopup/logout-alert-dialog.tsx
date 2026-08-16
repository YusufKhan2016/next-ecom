"use client"

import React from "react";
import { LogOutIcon } from "lucide-react";
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,
    AlertDialogFooter,AlertDialogHeader,AlertDialogMedia,AlertDialogTitle,AlertDialogTrigger,
} from "@/components/ui";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import {logoutAction} from "@/actions";
import {toast} from "sonner";

type LogoutAlertDialogPropsType = {
    onOpen: () => void;
};

function LogoutAlertDialog({ onOpen }: LogoutAlertDialogPropsType) {
    const logout = useAuthStore((store) => store.logout)
    const router = useRouter();

    const logoutFunction = async () => {
        const toastId = toast.loading("Logging out...");

        await logoutAction().then((response) => {
            logout()
            toast.success(response?.message, { id: toastId });
            router.push('/admin/login')

        }).catch((error) => {
            toast.success(error?.message, { id: toastId });
        })
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="flex w-full gap-1 items-center cursor-pointer">
                    <LogOutIcon />
                    <div>Logout</div>
                </div>
            </AlertDialogTrigger>

            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <LogOutIcon />
                    </AlertDialogMedia>

                    <AlertDialogTitle>Logout</AlertDialogTitle>

                    <AlertDialogDescription>
                        Are you sure you want to logout?
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel
                        onClick={onOpen}
                        variant="outline"
                    >
                        No
                    </AlertDialogCancel>

                    <AlertDialogAction
                        variant="destructive"
                        onClick={logoutFunction}
                    >
                        Yes
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default LogoutAlertDialog;