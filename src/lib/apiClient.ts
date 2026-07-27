import api from "@/lib/api";

export const apiClient = {

    get(url: string) {
        return api.get(url);
    },

    post(url: string, data: any) {
        return api.post(url, data);
    },

    put(url: string, id: number, data: any) {
        return api.put(url, id, data)
    },

    delete(url:string){
        return api.delete(url);
    }

}