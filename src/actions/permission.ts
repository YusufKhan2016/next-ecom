"use server";

import { serverApi } from "@/lib/server-api";
import {
    getPermissionsList,
} from "@/actions/api";

export async function getPermissionsListAction() {
    const api = await serverApi();
    try {
        const response = await api.get(getPermissionsList);

        return response?.data;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}
