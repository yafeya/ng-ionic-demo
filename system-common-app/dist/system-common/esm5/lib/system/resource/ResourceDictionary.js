/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as Collections from '../collections/index';
var ResourceDictionary = /** @class */ (function () {
    function ResourceDictionary() {
        this.mInnerDictionary = new Collections.NamedDictionary();
    }
    /** Add resource value */
    /**
     * Add resource value
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ResourceDictionary.prototype.Add = /**
     * Add resource value
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (key) {
            this.mInnerDictionary.Add(key, value);
        }
        return this;
    };
    /** Get resource value */
    /**
     * Get resource value
     * @param {?} key
     * @return {?}
     */
    ResourceDictionary.prototype.Get = /**
     * Get resource value
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (key) {
            return this.mInnerDictionary.Item(key);
        }
        return '';
    };
    return ResourceDictionary;
}());
export { ResourceDictionary };
if (false) {
    /** @type {?} */
    ResourceDictionary.prototype.Local;
    /** @type {?} */
    ResourceDictionary.prototype.mInnerDictionary;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VEaWN0aW9uYXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL3Jlc291cmNlL1Jlc291cmNlRGljdGlvbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxJQUFBOztnQ0FFK0IsSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFVOztJQUVwRSx5QkFBeUI7Ozs7Ozs7SUFDekIsZ0NBQUc7Ozs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQWE7UUFDMUIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCx5QkFBeUI7Ozs7OztJQUN6QixnQ0FBRzs7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDWCxJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQztRQUVELE9BQU8sRUFBRSxDQUFDO0tBQ2I7NkJBdEJMO0lBdUJDLENBQUE7QUFwQkQsOEJBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAqIGFzIENvbGxlY3Rpb25zIGZyb20gJy4uL2NvbGxlY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZURpY3Rpb25hcnkge1xyXG4gICAgTG9jYWw6IHN0cmluZztcclxuICAgIHByaXZhdGUgbUlubmVyRGljdGlvbmFyeSA9IG5ldyBDb2xsZWN0aW9ucy5OYW1lZERpY3Rpb25hcnk8c3RyaW5nPigpO1xyXG5cclxuICAgIC8qKiBBZGQgcmVzb3VyY2UgdmFsdWUgKi9cclxuICAgIEFkZChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFJlc291cmNlRGljdGlvbmFyeSB7XHJcbiAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICB0aGlzLm1Jbm5lckRpY3Rpb25hcnkuQWRkKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IHJlc291cmNlIHZhbHVlICovXHJcbiAgICBHZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubUlubmVyRGljdGlvbmFyeS5JdGVtKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn0iXX0=