import { IServiceProvider } from './IServiceProvider';
import { Injector } from '@angular/core';
export declare class AngularServiceProvider implements IServiceProvider {
    private injector;
    /**
     *
     */
    constructor(injector: Injector);
    /**
     * Gets the service object of the specified type.
     */
    GetService(type: any): any;
}
