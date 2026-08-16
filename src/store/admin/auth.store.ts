import { create } from "zustand";

type User = {
    id: number;
    code: string;
    name: string;
    email: string;
    phone: string;
    status: string;
};

type AuthState = {
    token: string | null;
    user: User | null;
    role: string | null;
    permissions: string[];
    menus: string[];

    login: (data: {
        token: string;
        user: User;
        role: string;
        permissions: string[];
        menus: string[];
    }) => void;

    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,
    role: null,
    permissions: [],
    menus: [],

    login: ({token,  user, role, permissions, menus }) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', role);
        localStorage.setItem('permissions', JSON.stringify(permissions));
        localStorage.setItem('menus', JSON.stringify(menus))
        
        // document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;

        set({
            token,
            user,
            role,
            permissions,
            menus
        })
    },

    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("permissions");
        localStorage.removeItem("menus");

        // document.cookie = "token=; Path=/; Max-Age=0; SameSite=Strict";

        set({
            token: null,
            user: null,
            role: null,
            permissions: [],
            menus: []
        })
    }
    
}))