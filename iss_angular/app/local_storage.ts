import {provide} from 'angular2/core';

export class LocalStorage {
    public _localStorage:any;

    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this._localStorage = localStorage;
    }

    public set(key:string, value:string):void {
        this._localStorage[key] = value;
    }

    public get(key:string):string {
        return this._localStorage[key] || false;
    }

    public setObject(key:string, value:any):void {
        this._localStorage[key] = JSON.stringify(value);
    }

    public getObject(key:string):any {
        return JSON.parse(this._localStorage[key] || '{}');
    }

    public remove(key:string):any {
        this._localStorage.removeItem(key);
    }
}

export const LOCAL_STORAGE_PROVIDERS:any[] = [
    provide(LocalStorage, {useClass: LocalStorage})
];