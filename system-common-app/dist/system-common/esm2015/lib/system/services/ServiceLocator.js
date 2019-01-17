/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ServiceLocator {
    /**
     * @param {?} provider
     * @return {?}
     */
    static SetLocatorProvider(provider) {
        ServiceLocator.currentProvider = provider();
    }
    /**
     * @template T
     * @param {?} token
     * @return {?}
     */
    static GetService(token) {
        return ServiceLocator.currentProvider.get(token);
    }
}
ServiceLocator.currentProvider = undefined;
ServiceLocator.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ServiceLocator.currentProvider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUxvY2F0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vc2VydmljZXMvU2VydmljZUxvY2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBa0MsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNFLE1BQU07Ozs7O0lBSUYsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQXdCO1FBQzlDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsUUFBUSxFQUFFLENBQUM7S0FDL0M7Ozs7OztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUksS0FBa0M7UUFDbkQsT0FBTyxjQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwRDs7aUNBUjBDLFNBQVM7O1lBSHZELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgVHlwZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlcnZpY2VMb2NhdG9yIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VycmVudFByb3ZpZGVyOiBJbmplY3RvciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBzdGF0aWMgU2V0TG9jYXRvclByb3ZpZGVyKHByb3ZpZGVyOiAoKSA9PiBJbmplY3Rvcik6IHZvaWQge1xyXG4gICAgICAgIFNlcnZpY2VMb2NhdG9yLmN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEdldFNlcnZpY2U8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPik6IFQge1xyXG4gICAgICAgIHJldHVybiBTZXJ2aWNlTG9jYXRvci5jdXJyZW50UHJvdmlkZXIuZ2V0KHRva2VuKTtcclxuICAgIH1cclxuXHJcbn0iXX0=