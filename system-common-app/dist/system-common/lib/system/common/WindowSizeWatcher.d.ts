import { InjectionToken } from '@angular/core';
export interface ISize {
    Width: number;
    Height: number;
}
export interface ISizChangeHandler {
    Handle(size: ISize): void;
}
export interface IWindowSizeWatcher {
    Start(): void;
    Add(name: string, handler: ISizChangeHandler): any;
    Remove(name: string): any;
}
export declare const WindowSizeWatcherToken: InjectionToken<{}>;
export declare class WindowSizeWatcher implements IWindowSizeWatcher {
    private handlers;
    constructor();
    Start(): void;
    Add(name: string, handler: ISizChangeHandler): void;
    Remove(name: string): void;
    private OnSizeChanged;
}
