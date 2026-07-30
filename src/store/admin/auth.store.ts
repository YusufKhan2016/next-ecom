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

    login: (data: {
        token: string;
        user: User;
        role: string;
        permissions: string[];
    }) => void;

    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,
    role: null,
    permissions: [],

    login: ({ token, user, role, permissions }) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', role);
        localStorage.setItem('permissions', JSON.stringify(permissions));
        
        document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
        
        set({
            token,
            user,
            role,
            permissions
        })
    },

    logout: () => {
        set({
            token: null,
            user: null,
            role: null,
            permissions: []
        })
    }
    
}))