/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ServiceLocator = /** @class */ (function () {
    function ServiceLocator() {
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    ServiceLocator.SetLocatorProvider = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        ServiceLocator.currentProvider = provider();
    };
    /**
     * @template T
     * @param {?} token
     * @return {?}
     */
    ServiceLocator.GetService = /**
     * @template T
     * @param {?} token
     * @return {?}
     */
    function (token) {
        return ServiceLocator.currentProvider.get(token);
    };
    ServiceLocator.currentProvider = undefined;
    ServiceLocator.decorators = [
        { type: Injectable }
    ];
    return ServiceLocator;
}());
export { ServiceLocator };
if (false) {
    /** @type {?} */
    ServiceLocator.currentProvider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUxvY2F0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vc2VydmljZXMvU2VydmljZUxvY2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBa0MsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQU9oRSxpQ0FBa0I7Ozs7SUFBekIsVUFBMEIsUUFBd0I7UUFDOUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxRQUFRLEVBQUUsQ0FBQztLQUMvQzs7Ozs7O0lBRU0seUJBQVU7Ozs7O0lBQWpCLFVBQXFCLEtBQWtDO1FBQ25ELE9BQU8sY0FBYyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEQ7cUNBUjBDLFNBQVM7O2dCQUh2RCxVQUFVOzt5QkFGWDs7U0FHYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIFR5cGUsIEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTG9jYXRvciB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIGN1cnJlbnRQcm92aWRlcjogSW5qZWN0b3IgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgc3RhdGljIFNldExvY2F0b3JQcm92aWRlcihwcm92aWRlcjogKCkgPT4gSW5qZWN0b3IpOiB2b2lkIHtcclxuICAgICAgICBTZXJ2aWNlTG9jYXRvci5jdXJyZW50UHJvdmlkZXIgPSBwcm92aWRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBHZXRTZXJ2aWNlPFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4pOiBUIHtcclxuICAgICAgICByZXR1cm4gU2VydmljZUxvY2F0b3IuY3VycmVudFByb3ZpZGVyLmdldCh0b2tlbik7XHJcbiAgICB9XHJcblxyXG59Il19