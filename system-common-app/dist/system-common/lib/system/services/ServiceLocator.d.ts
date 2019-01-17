import { Injector, Type, InjectionToken } from '@angular/core';
export declare class ServiceLocator {
    private static currentProvider;
    static SetLocatorProvider(provider: () => Injector): void;
    static GetService<T>(token: Type<T> | InjectionToken<T>): T;
}
