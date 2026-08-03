"use client"
import { GuardPropTypes } from "@/types";

export default function PermissionGuard({ permission, children }: GuardPropTypes) {
    const permissions = localStorage.getItem("permissions");

    if (!permissions?.includes(permission)) {
        return null;
    }

    return children
}
