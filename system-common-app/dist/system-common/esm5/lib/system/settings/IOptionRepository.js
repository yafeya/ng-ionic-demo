/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
import * as Collections from '../collections/index';
/** @type {?} */
export var OptionRepositoryToken = new InjectionToken('./IOptionRepository');
/**
 * @record
 */
export function IOptionRepository() { }
/**
 * Register a descriptor
 * @type {?}
 */
IOptionRepository.prototype.Register;
/**
 * Find descriptors by given expression
 * @type {?}
 */
IOptionRepository.prototype.Find;
/**
 * Find a descriptor by id
 * @type {?}
 */
IOptionRepository.prototype.FindOne;
var OptionRepository = /** @class */ (function () {
    function OptionRepository() {
        this.descriptors = new Collections.Dictionary();
    }
    /**
     * Register a descriptor
     */
    /**
     * Register a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    OptionRepository.prototype.Register = /**
     * Register a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    function (descriptor) {
        if (!descriptor)
            throw new Error("Argument descriptor is null");
        if (!this.descriptors.ContainsKey(descriptor.Id)) {
            this.descriptors.Add(descriptor.Id, descriptor);
        }
        return this;
    };
    /**
     * Find descriptors by given expression
     */
    /**
     * Find descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    OptionRepository.prototype.Find = /**
     * Find descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        return Collections.Enumerable.From(this.descriptors.Values().Where(function (x) { return expression(x); }));
    };
    /**
     * Find a descriptor by id
     */
    /**
     * Find a descriptor by id
     * @param {?} id
     * @return {?}
     */
    OptionRepository.prototype.FindOne = /**
     * Find a descriptor by id
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.descriptors.ContainsKey(id)) {
            return this.descriptors.Item(id);
        }
        else {
            return null;
        }
    };
    OptionRepository.decorators = [
        { type: Injectable }
    ];
    return OptionRepository;
}());
export { OptionRepository };
if (false) {
    /** @type {?} */
    OptionRepository.prototype.descriptors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSU9wdGlvblJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vc2V0dGluZ3MvSU9wdGlvblJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUcsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sS0FBSyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7O0FBR3BELFdBQWEscUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFtQnJELElBQUksV0FBVyxDQUFDLFVBQVUsRUFBNkI7O0lBRTdFOztPQUVHOzs7Ozs7SUFDSCxtQ0FBUTs7Ozs7SUFBUixVQUFTLFVBQTZCO1FBQ2xDLElBQUksQ0FBQyxVQUFVO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRDs7T0FFRzs7Ozs7O0lBQ0gsK0JBQUk7Ozs7O0lBQUosVUFBSyxVQUFzRDtRQUN2RCxPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDLENBQUM7S0FDM0Y7SUFDRDs7T0FFRzs7Ozs7O0lBQ0gsa0NBQU87Ozs7O0lBQVAsVUFBUSxFQUFVO1FBQ2QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7O2dCQS9CSixVQUFVOzsyQkF0Qlg7O1NBdUJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsICBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJT3B0aW9uRGVzY3JpcHRvciB9IGZyb20gJy4vSU9wdGlvbkRlc2NyaXB0b3InO1xyXG5pbXBvcnQgKiBhcyBDb2xsZWN0aW9ucyBmcm9tICcuLi9jb2xsZWN0aW9ucy9pbmRleCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE9wdGlvblJlcG9zaXRvcnlUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbignLi9JT3B0aW9uUmVwb3NpdG9yeScpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uUmVwb3NpdG9yeSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgZGVzY3JpcHRvclxyXG4gICAgICovXHJcbiAgICBSZWdpc3RlcihkZXNjcmlwdG9yOiBJT3B0aW9uRGVzY3JpcHRvcik6IElPcHRpb25SZXBvc2l0b3J5O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIGRlc2NyaXB0b3JzIGJ5IGdpdmVuIGV4cHJlc3Npb25cclxuICAgICAqL1xyXG4gICAgRmluZChleHByZXNzaW9uOiAoZGVzY3JpcHRvcjogSU9wdGlvbkRlc2NyaXB0b3IpID0+IGJvb2xlYW4pOiBDb2xsZWN0aW9ucy5JRW51bWVyYWJsZTxJT3B0aW9uRGVzY3JpcHRvcj47XHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgYSBkZXNjcmlwdG9yIGJ5IGlkXHJcbiAgICAgKi9cclxuICAgIEZpbmRPbmUoaWQ6IHN0cmluZyk6IElPcHRpb25EZXNjcmlwdG9yO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25SZXBvc2l0b3J5IGltcGxlbWVudHMgSU9wdGlvblJlcG9zaXRvcnkge1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdG9ycyA9IG5ldyBDb2xsZWN0aW9ucy5EaWN0aW9uYXJ5PHN0cmluZywgSU9wdGlvbkRlc2NyaXB0b3I+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGRlc2NyaXB0b3JcclxuICAgICAqL1xyXG4gICAgUmVnaXN0ZXIoZGVzY3JpcHRvcjogSU9wdGlvbkRlc2NyaXB0b3IpOiBJT3B0aW9uUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgaWYgKCFkZXNjcmlwdG9yKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50IGRlc2NyaXB0b3IgaXMgbnVsbGApO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGVzY3JpcHRvcnMuQ29udGFpbnNLZXkoZGVzY3JpcHRvci5JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdG9ycy5BZGQoZGVzY3JpcHRvci5JZCwgZGVzY3JpcHRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIGRlc2NyaXB0b3JzIGJ5IGdpdmVuIGV4cHJlc3Npb25cclxuICAgICAqL1xyXG4gICAgRmluZChleHByZXNzaW9uOiAoZGVzY3JpcHRvcjogSU9wdGlvbkRlc2NyaXB0b3IpID0+IGJvb2xlYW4pOiBDb2xsZWN0aW9ucy5JRW51bWVyYWJsZTxJT3B0aW9uRGVzY3JpcHRvcj4ge1xyXG4gICAgICAgIHJldHVybiBDb2xsZWN0aW9ucy5FbnVtZXJhYmxlLkZyb20odGhpcy5kZXNjcmlwdG9ycy5WYWx1ZXMoKS5XaGVyZSh4ID0+IGV4cHJlc3Npb24oeCkpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRmluZCBhIGRlc2NyaXB0b3IgYnkgaWRcclxuICAgICAqL1xyXG4gICAgRmluZE9uZShpZDogc3RyaW5nKTogSU9wdGlvbkRlc2NyaXB0b3Ige1xyXG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0b3JzLkNvbnRhaW5zS2V5KGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdG9ycy5JdGVtKGlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==