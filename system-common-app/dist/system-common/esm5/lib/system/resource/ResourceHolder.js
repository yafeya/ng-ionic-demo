/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as Collections from '../collections/index';
var ResourceHolder = /** @class */ (function () {
    function ResourceHolder() {
        this.DefaultLocal = 'en-US';
        this.mInnerDictionary = new Collections.NamedDictionary();
    }
    /** Get resource dictionary by local name */
    /**
     * Get resource dictionary by local name
     * @param {?} local
     * @return {?}
     */
    ResourceHolder.prototype.GetResources = /**
     * Get resource dictionary by local name
     * @param {?} local
     * @return {?}
     */
    function (local) {
        return this.mInnerDictionary.Item(local);
    };
    /** Add resource for specific local */
    /**
     * Add resource for specific local
     * @param {?} local
     * @param {?} resource
     * @return {?}
     */
    ResourceHolder.prototype.AddResources = /**
     * Add resource for specific local
     * @param {?} local
     * @param {?} resource
     * @return {?}
     */
    function (local, resource) {
        if (local) {
            this.mInnerDictionary.Add(local, resource);
        }
        return this;
    };
    /** Get resource string */
    /**
     * Get resource string
     * @param {?} name
     * @param {?=} local
     * @return {?}
     */
    ResourceHolder.prototype.GetString = /**
     * Get resource string
     * @param {?} name
     * @param {?=} local
     * @return {?}
     */
    function (name, local) {
        /** @type {?} */
        var culture = local ? local : this.DefaultLocal;
        /** @type {?} */
        var resources = this.GetResources(culture);
        if (resources) {
            return resources.Get(name);
        }
        return '';
    };
    return ResourceHolder;
}());
export { ResourceHolder };
if (false) {
    /** @type {?} */
    ResourceHolder.prototype.DefaultLocal;
    /** @type {?} */
    ResourceHolder.prototype.mInnerDictionary;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VIb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vcmVzb3VyY2UvUmVzb3VyY2VIb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsSUFBQTtJQUlJOzRCQUhlLE9BQU87Z0NBQ0ssSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFzQjtLQUkvRTtJQUVELDRDQUE0Qzs7Ozs7O0lBQzVDLHFDQUFZOzs7OztJQUFaLFVBQWEsS0FBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUM7SUFDRCxzQ0FBc0M7Ozs7Ozs7SUFDdEMscUNBQVk7Ozs7OztJQUFaLFVBQWEsS0FBYSxFQUFFLFFBQTRCO1FBQ3BELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsMEJBQTBCOzs7Ozs7O0lBQzFCLGtDQUFTOzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxLQUFjOztRQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7UUFDaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLFNBQVMsRUFBRTtZQUNYLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ2I7eUJBaENMO0lBaUNDLENBQUE7QUE3QkQsMEJBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XHJcbmltcG9ydCAqIGFzIENvbGxlY3Rpb25zIGZyb20gJy4uL2NvbGxlY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IHsgUmVzb3VyY2VEaWN0aW9uYXJ5IH0gZnJvbSAnLi9SZXNvdXJjZURpY3Rpb25hcnknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc291cmNlSG9sZGVyIHtcclxuICAgIERlZmF1bHRMb2NhbCA9ICdlbi1VUyc7XHJcbiAgICBwcml2YXRlIG1Jbm5lckRpY3Rpb25hcnkgPSBuZXcgQ29sbGVjdGlvbnMuTmFtZWREaWN0aW9uYXJ5PFJlc291cmNlRGljdGlvbmFyeT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IHJlc291cmNlIGRpY3Rpb25hcnkgYnkgbG9jYWwgbmFtZSAqL1xyXG4gICAgR2V0UmVzb3VyY2VzKGxvY2FsOiBzdHJpbmcpOiBSZXNvdXJjZURpY3Rpb25hcnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1Jbm5lckRpY3Rpb25hcnkuSXRlbShsb2NhbCk7XHJcbiAgICB9XHJcbiAgICAvKiogQWRkIHJlc291cmNlIGZvciBzcGVjaWZpYyBsb2NhbCAqL1xyXG4gICAgQWRkUmVzb3VyY2VzKGxvY2FsOiBzdHJpbmcsIHJlc291cmNlOiBSZXNvdXJjZURpY3Rpb25hcnkpOiBSZXNvdXJjZUhvbGRlciB7XHJcbiAgICAgICAgaWYgKGxvY2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubUlubmVyRGljdGlvbmFyeS5BZGQobG9jYWwsIHJlc291cmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCByZXNvdXJjZSBzdHJpbmcgKi9cclxuICAgIEdldFN0cmluZyhuYW1lOiBzdHJpbmcsIGxvY2FsPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY3VsdHVyZSA9IGxvY2FsID8gbG9jYWwgOiB0aGlzLkRlZmF1bHRMb2NhbDtcclxuICAgICAgICBsZXQgcmVzb3VyY2VzID0gdGhpcy5HZXRSZXNvdXJjZXMoY3VsdHVyZSk7XHJcbiAgICAgICAgaWYgKHJlc291cmNlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VzLkdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG59Il19