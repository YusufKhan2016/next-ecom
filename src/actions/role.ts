"use server";

import { serverApi } from "@/lib/server-api";
import {
    getRolesList,
    saveUpdateRole,
    getRoleById,
    deleteRoleById
} from "@/actions/api";

export async function getRolesListAction() {
    const api = await serverApi();
    try {
        const response = await api.get(getRolesList);

        return response?.data;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}

export async function saveUpdateRoleAction(data: any) {
    const api = await serverApi();
    try {
        const response = await api.post(saveUpdateRole, data);

        return response?.data;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}

export async function getRoleByIdAction(id:number) {
    const api = await serverApi();
    try {
        const response = await api.post(getRoleById(id));

        return response?.data;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}

export async function deleteRoleByIdAction(id:number) {
    const api = await serverApi();
    try {
        const response = await api.post(deleteRoleById(id));

        return response?.data;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}

