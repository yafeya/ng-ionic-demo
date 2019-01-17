/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
import * as Collections from '../collections/index';
/** @type {?} */
export const OptionRepositoryToken = new InjectionToken('./IOptionRepository');
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
export class OptionRepository {
    constructor() {
        this.descriptors = new Collections.Dictionary();
    }
    /**
     * Register a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    Register(descriptor) {
        if (!descriptor)
            throw new Error(`Argument descriptor is null`);
        if (!this.descriptors.ContainsKey(descriptor.Id)) {
            this.descriptors.Add(descriptor.Id, descriptor);
        }
        return this;
    }
    /**
     * Find descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    Find(expression) {
        return Collections.Enumerable.From(this.descriptors.Values().Where(x => expression(x)));
    }
    /**
     * Find a descriptor by id
     * @param {?} id
     * @return {?}
     */
    FindOne(id) {
        if (this.descriptors.ContainsKey(id)) {
            return this.descriptors.Item(id);
        }
        else {
            return null;
        }
    }
}
OptionRepository.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    OptionRepository.prototype.descriptors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSU9wdGlvblJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vc2V0dGluZ3MvSU9wdGlvblJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUcsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sS0FBSyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7O0FBR3BELGFBQWEscUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQi9FLE1BQU07OzJCQUNvQixJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQTZCOzs7Ozs7O0lBSzdFLFFBQVEsQ0FBQyxVQUE2QjtRQUNsQyxJQUFJLENBQUMsVUFBVTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7SUFJRCxJQUFJLENBQUMsVUFBc0Q7UUFDdkQsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0Y7Ozs7OztJQUlELE9BQU8sQ0FBQyxFQUFVO1FBQ2QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7OztZQS9CSixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElPcHRpb25EZXNjcmlwdG9yIH0gZnJvbSAnLi9JT3B0aW9uRGVzY3JpcHRvcic7XHJcbmltcG9ydCAqIGFzIENvbGxlY3Rpb25zIGZyb20gJy4uL2NvbGxlY3Rpb25zL2luZGV4JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgT3B0aW9uUmVwb3NpdG9yeVRva2VuID0gbmV3IEluamVjdGlvblRva2VuKCcuL0lPcHRpb25SZXBvc2l0b3J5Jyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb25SZXBvc2l0b3J5IHtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBkZXNjcmlwdG9yXHJcbiAgICAgKi9cclxuICAgIFJlZ2lzdGVyKGRlc2NyaXB0b3I6IElPcHRpb25EZXNjcmlwdG9yKTogSU9wdGlvblJlcG9zaXRvcnk7XHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgZGVzY3JpcHRvcnMgYnkgZ2l2ZW4gZXhwcmVzc2lvblxyXG4gICAgICovXHJcbiAgICBGaW5kKGV4cHJlc3Npb246IChkZXNjcmlwdG9yOiBJT3B0aW9uRGVzY3JpcHRvcikgPT4gYm9vbGVhbik6IENvbGxlY3Rpb25zLklFbnVtZXJhYmxlPElPcHRpb25EZXNjcmlwdG9yPjtcclxuICAgIC8qKlxyXG4gICAgICogRmluZCBhIGRlc2NyaXB0b3IgYnkgaWRcclxuICAgICAqL1xyXG4gICAgRmluZE9uZShpZDogc3RyaW5nKTogSU9wdGlvbkRlc2NyaXB0b3I7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9wdGlvblJlcG9zaXRvcnkgaW1wbGVtZW50cyBJT3B0aW9uUmVwb3NpdG9yeSB7XHJcbiAgICBwcml2YXRlIGRlc2NyaXB0b3JzID0gbmV3IENvbGxlY3Rpb25zLkRpY3Rpb25hcnk8c3RyaW5nLCBJT3B0aW9uRGVzY3JpcHRvcj4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgZGVzY3JpcHRvclxyXG4gICAgICovXHJcbiAgICBSZWdpc3RlcihkZXNjcmlwdG9yOiBJT3B0aW9uRGVzY3JpcHRvcik6IElPcHRpb25SZXBvc2l0b3J5IHtcclxuICAgICAgICBpZiAoIWRlc2NyaXB0b3IpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgZGVzY3JpcHRvciBpcyBudWxsYCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kZXNjcmlwdG9ycy5Db250YWluc0tleShkZXNjcmlwdG9yLklkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0b3JzLkFkZChkZXNjcmlwdG9yLklkLCBkZXNjcmlwdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgZGVzY3JpcHRvcnMgYnkgZ2l2ZW4gZXhwcmVzc2lvblxyXG4gICAgICovXHJcbiAgICBGaW5kKGV4cHJlc3Npb246IChkZXNjcmlwdG9yOiBJT3B0aW9uRGVzY3JpcHRvcikgPT4gYm9vbGVhbik6IENvbGxlY3Rpb25zLklFbnVtZXJhYmxlPElPcHRpb25EZXNjcmlwdG9yPiB7XHJcbiAgICAgICAgcmV0dXJuIENvbGxlY3Rpb25zLkVudW1lcmFibGUuRnJvbSh0aGlzLmRlc2NyaXB0b3JzLlZhbHVlcygpLldoZXJlKHggPT4gZXhwcmVzc2lvbih4KSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIGEgZGVzY3JpcHRvciBieSBpZFxyXG4gICAgICovXHJcbiAgICBGaW5kT25lKGlkOiBzdHJpbmcpOiBJT3B0aW9uRGVzY3JpcHRvciB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRvcnMuQ29udGFpbnNLZXkoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0b3JzLkl0ZW0oaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19