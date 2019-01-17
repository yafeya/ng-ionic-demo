/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
/** @type {?} */
export const ComponentCreatorToken = new InjectionToken('./ICommponentCreator');
export class ComponentCreator {
    /**
     * @return {?}
     */
    get ViewContainer() {
        return this.mViewContainer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ViewContainer(value) {
        this.mViewContainer = value;
    }
    /**
     * @return {?}
     */
    get ComponentFactoryResolver() {
        return this.mComponentFactoryResolver;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ComponentFactoryResolver(value) {
        this.mComponentFactoryResolver = value;
    }
    /**
     * Initialize
     * @param {?} viewContainer
     * @param {?} resolver
     * @return {?}
     */
    Initialize(viewContainer, resolver) {
        this.mViewContainer = viewContainer;
        this.mComponentFactoryResolver = resolver;
    }
    /**
     * @param {?} componentType
     * @param {?=} viewContainer
     * @return {?}
     */
    CreateComponent(componentType, viewContainer) {
        try {
            /** @type {?} */
            let factory = this.ComponentFactoryResolver.resolveComponentFactory(componentType);
            /** @type {?} */
            let component = viewContainer ?
                viewContainer.createComponent(factory) :
                this.ViewContainer.createComponent(factory);
            return component;
        }
        catch (error) {
            return null;
        }
    }
}
ComponentCreator.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ComponentCreator.prototype.mViewContainer;
    /** @type {?} */
    ComponentCreator.prototype.mComponentFactoryResolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50Q3JlYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb21wb25lbnQvQ29tcG9uZW50Q3JlYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0UsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczSCxhQUFhLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFHaEYsTUFBTTs7OztJQUtGLElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUM5Qjs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUF1QjtRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztLQUMvQjs7OztJQUVELElBQUksd0JBQXdCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0tBQ3pDOzs7OztJQUNELElBQUksd0JBQXdCLENBQUMsS0FBK0I7UUFDeEQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztLQUMxQzs7Ozs7OztJQUtELFVBQVUsQ0FBQyxhQUErQixFQUFFLFFBQWtDO1FBQzFFLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxRQUFRLENBQUM7S0FDN0M7Ozs7OztJQUdELGVBQWUsQ0FBQyxhQUF1QixFQUFFLGFBQWdDO1FBQ3JFLElBQUk7O1lBQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDOztZQUVuRixJQUFJLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsYUFBYSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVoRCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKOzs7WUF6Q0osVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBUeXBlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50Q3JlYXRvciB9IGZyb20gJy4vSUNvbXBvbmVudENyZWF0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbXBvbmVudENyZWF0b3JUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbignLi9JQ29tbXBvbmVudENyZWF0b3InKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENyZWF0b3IgaW1wbGVtZW50cyBJQ29tcG9uZW50Q3JlYXRvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBtVmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgbUNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG5cclxuICAgIGdldCBWaWV3Q29udGFpbmVyKCk6IFZpZXdDb250YWluZXJSZWYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1WaWV3Q29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgc2V0IFZpZXdDb250YWluZXIodmFsdWU6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICB0aGlzLm1WaWV3Q29udGFpbmVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcigpOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKHZhbHVlOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICAgICAgICB0aGlzLm1Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogSW5pdGlhbGl6ZVxyXG4gICAgKi9cclxuICAgIEluaXRpYWxpemUodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubVZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMubUNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciA9IHJlc29sdmVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBDcmVhdGVDb21wb25lbnQoY29tcG9uZW50VHlwZTogVHlwZTx7fT4sIHZpZXdDb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmKTogQ29tcG9uZW50UmVmPHt9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZhY3RvcnkgPSB0aGlzLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRUeXBlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB2aWV3Q29udGFpbmVyID9cclxuICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=