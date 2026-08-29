"use server";

import { cookies } from "next/headers";
import { LoginDataType } from "@/types";
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import axios from "axios";
import {serverApi} from "@/lib/server-api";

export async function loginAction(data: LoginDataType) {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
            data,
            {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        const loggedData = response?.data?.data;
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

        return response?.data;

    } catch (error: any) {
        throw new Error(error?.response?.data || "Something went wrong.");
    }
}

export async function logoutAction() {
    const api = await serverApi();
    try {
        const response = await api.post("/auth/logout");
        const cookieStore: ReadonlyRequestCookies = await cookies();

        cookieStore.delete("token");

        return response?.data;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}

export async function getUserAction() {
    const api = await serverApi();
    try {
        const response = await api.post("/auth/get-user");;

        return response?.data;
    } catch (error:any) {
        throw new Error(error?.response?.data?.message || "Something went wrong.");
    }
}