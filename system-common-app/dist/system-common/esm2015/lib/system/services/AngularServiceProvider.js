/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
export class AngularServiceProvider {
    /**
     *
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * Gets the service object of the specified type.
     * @param {?} type
     * @return {?}
     */
    GetService(type) {
        return this.injector.get(type);
    }
}
AngularServiceProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AngularServiceProvider.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /** @type {?} */
    AngularServiceProvider.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhclNlcnZpY2VQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9zZXJ2aWNlcy9Bbmd1bGFyU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdyRCxNQUFNOzs7OztJQUtGLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7S0FFckM7Ozs7OztJQUlELFVBQVUsQ0FBQyxJQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEM7OztZQWRKLFVBQVU7Ozs7WUFGVSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuL0lTZXJ2aWNlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhclNlcnZpY2VQcm92aWRlciBpbXBsZW1lbnRzIElTZXJ2aWNlUHJvdmlkZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHNlcnZpY2Ugb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgR2V0U2VydmljZSh0eXBlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldCh0eXBlKTtcclxuICAgIH1cclxuXHJcbn0iXX0=