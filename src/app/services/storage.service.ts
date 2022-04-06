import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    localStorage = localStorage;
    setItem<T>(key: string, item: T): void {
        this.localStorage.setItem(key, JSON.stringify(item));
    }

    getItem<T>(key: string): T {
        let item = this.localStorage.getItem(key);
        return item
            ? JSON.parse(item)
            : item;
    }
}
