import { create } from "zustand";

interface UserStore {
    isUserActive: boolean,

    setUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
    isUserActive: false,
        
    setUser: () => set((state) => ({ isUserActive: !state.isUserActive }))
}))