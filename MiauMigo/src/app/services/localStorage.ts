import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StorageService {
    setLocal(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    getLocal(key: string) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    removeLocal(key: string) {
        localStorage.removeItem(key);
    }

    removeTodosLocal() {
        localStorage.clear();
    }


}