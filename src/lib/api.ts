import axios from "axios";
import {getCookie} from "@/lib/cookies";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use((config) => {
    const token = getCookie("token");

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;