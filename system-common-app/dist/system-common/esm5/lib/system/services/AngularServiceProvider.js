/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
var AngularServiceProvider = /** @class */ (function () {
    /**
     *
     */
    function AngularServiceProvider(injector) {
        this.injector = injector;
    }
    /**
     * Gets the service object of the specified type.
     */
    /**
     * Gets the service object of the specified type.
     * @param {?} type
     * @return {?}
     */
    AngularServiceProvider.prototype.GetService = /**
     * Gets the service object of the specified type.
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.injector.get(type);
    };
    AngularServiceProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AngularServiceProvider.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return AngularServiceProvider;
}());
export { AngularServiceProvider };
if (false) {
    /** @type {?} */
    AngularServiceProvider.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhclNlcnZpY2VQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9zZXJ2aWNlcy9Bbmd1bGFyU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFLakQ7O09BRUc7SUFDSCxnQ0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtLQUVyQztJQUNEOztPQUVHOzs7Ozs7SUFDSCwyQ0FBVTs7Ozs7SUFBVixVQUFXLElBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7Z0JBZEosVUFBVTs7OztnQkFGVSxRQUFROztpQ0FGN0I7O1NBS2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuL0lTZXJ2aWNlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhclNlcnZpY2VQcm92aWRlciBpbXBsZW1lbnRzIElTZXJ2aWNlUHJvdmlkZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHNlcnZpY2Ugb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgR2V0U2VydmljZSh0eXBlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldCh0eXBlKTtcclxuICAgIH1cclxuXHJcbn0iXX0=