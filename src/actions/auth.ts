"use server";

import { AuthService } from "@/services/auth.service";
import { cookies } from "next/headers";
import { LoginDataType } from "@/types";
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function loginAction(data: LoginDataType) {
    try {
        const response = await AuthService.login(data);

        const loggedData = response?.data;
        const token = loggedData?.token;

        if (!token) {
            return {
                success: false,
                message: "Login failed. Token was not returned.",
            };
        }

        const cookieStore: ReadonlyRequestCookies = await cookies();

        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;

    } catch (error: any) {
        throw new Error(error?.message || "Something went wrong.");
    }
}

export async function logoutAction() {
    try {
        const response = await AuthService.logout();
        const cookieStore: ReadonlyRequestCookies = await cookies();

        cookieStore.delete("token");

        return response;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}

export async function getUserAction() {
    try {
        const response = await AuthService.getUser();

        return response;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}