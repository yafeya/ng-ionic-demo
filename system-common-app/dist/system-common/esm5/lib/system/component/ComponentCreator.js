/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
/** @type {?} */
export var ComponentCreatorToken = new InjectionToken('./ICommponentCreator');
var ComponentCreator = /** @class */ (function () {
    function ComponentCreator() {
    }
    Object.defineProperty(ComponentCreator.prototype, "ViewContainer", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mViewContainer;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mViewContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentCreator.prototype, "ComponentFactoryResolver", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mComponentFactoryResolver;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mComponentFactoryResolver = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Initialize
    */
    /**
     * Initialize
     * @param {?} viewContainer
     * @param {?} resolver
     * @return {?}
     */
    ComponentCreator.prototype.Initialize = /**
     * Initialize
     * @param {?} viewContainer
     * @param {?} resolver
     * @return {?}
     */
    function (viewContainer, resolver) {
        this.mViewContainer = viewContainer;
        this.mComponentFactoryResolver = resolver;
    };
    /**
     * @param {?} componentType
     * @param {?=} viewContainer
     * @return {?}
     */
    ComponentCreator.prototype.CreateComponent = /**
     * @param {?} componentType
     * @param {?=} viewContainer
     * @return {?}
     */
    function (componentType, viewContainer) {
        try {
            /** @type {?} */
            var factory = this.ComponentFactoryResolver.resolveComponentFactory(componentType);
            /** @type {?} */
            var component = viewContainer ?
                viewContainer.createComponent(factory) :
                this.ViewContainer.createComponent(factory);
            return component;
        }
        catch (error) {
            return null;
        }
    };
    ComponentCreator.decorators = [
        { type: Injectable }
    ];
    return ComponentCreator;
}());
export { ComponentCreator };
if (false) {
    /** @type {?} */
    ComponentCreator.prototype.mViewContainer;
    /** @type {?} */
    ComponentCreator.prototype.mComponentFactoryResolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50Q3JlYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb21wb25lbnQvQ29tcG9uZW50Q3JlYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0UsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczSCxXQUFhLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Ozs7SUFRNUUsc0JBQUksMkNBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDOUI7Ozs7O1FBQ0QsVUFBa0IsS0FBdUI7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDL0I7OztPQUhBO0lBS0Qsc0JBQUksc0RBQXdCOzs7O1FBQTVCO1lBQ0ksT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7U0FDekM7Ozs7O1FBQ0QsVUFBNkIsS0FBK0I7WUFDeEQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztTQUMxQzs7O09BSEE7SUFLRDs7TUFFRTs7Ozs7OztJQUNGLHFDQUFVOzs7Ozs7SUFBVixVQUFXLGFBQStCLEVBQUUsUUFBa0M7UUFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFFBQVEsQ0FBQztLQUM3Qzs7Ozs7O0lBR0QsMENBQWU7Ozs7O0lBQWYsVUFBZ0IsYUFBdUIsRUFBRSxhQUFnQztRQUNyRSxJQUFJOztZQUNBLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7WUFFbkYsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLGFBQWEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFaEQsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7S0FDSjs7Z0JBekNKLFVBQVU7OzJCQUxYOztTQU1hLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBUeXBlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50Q3JlYXRvciB9IGZyb20gJy4vSUNvbXBvbmVudENyZWF0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbXBvbmVudENyZWF0b3JUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbignLi9JQ29tbXBvbmVudENyZWF0b3InKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENyZWF0b3IgaW1wbGVtZW50cyBJQ29tcG9uZW50Q3JlYXRvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBtVmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgbUNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG5cclxuICAgIGdldCBWaWV3Q29udGFpbmVyKCk6IFZpZXdDb250YWluZXJSZWYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1WaWV3Q29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgc2V0IFZpZXdDb250YWluZXIodmFsdWU6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICB0aGlzLm1WaWV3Q29udGFpbmVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcigpOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKHZhbHVlOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICAgICAgICB0aGlzLm1Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogSW5pdGlhbGl6ZVxyXG4gICAgKi9cclxuICAgIEluaXRpYWxpemUodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubVZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMubUNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciA9IHJlc29sdmVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBDcmVhdGVDb21wb25lbnQoY29tcG9uZW50VHlwZTogVHlwZTx7fT4sIHZpZXdDb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmKTogQ29tcG9uZW50UmVmPHt9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZhY3RvcnkgPSB0aGlzLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRUeXBlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB2aWV3Q29udGFpbmVyID9cclxuICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=