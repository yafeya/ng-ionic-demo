/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as Collections from '../collections/index';
export class ResourceHolder {
    constructor() {
        this.DefaultLocal = 'en-US';
        this.mInnerDictionary = new Collections.NamedDictionary();
    }
    /**
     * Get resource dictionary by local name
     * @param {?} local
     * @return {?}
     */
    GetResources(local) {
        return this.mInnerDictionary.Item(local);
    }
    /**
     * Add resource for specific local
     * @param {?} local
     * @param {?} resource
     * @return {?}
     */
    AddResources(local, resource) {
        if (local) {
            this.mInnerDictionary.Add(local, resource);
        }
        return this;
    }
    /**
     * Get resource string
     * @param {?} name
     * @param {?=} local
     * @return {?}
     */
    GetString(name, local) {
        /** @type {?} */
        let culture = local ? local : this.DefaultLocal;
        /** @type {?} */
        let resources = this.GetResources(culture);
        if (resources) {
            return resources.Get(name);
        }
        return '';
    }
}
if (false) {
    /** @type {?} */
    ResourceHolder.prototype.DefaultLocal;
    /** @type {?} */
    ResourceHolder.prototype.mInnerDictionary;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VIb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vcmVzb3VyY2UvUmVzb3VyY2VIb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsTUFBTTtJQUlGOzRCQUhlLE9BQU87Z0NBQ0ssSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFzQjtLQUkvRTs7Ozs7O0lBR0QsWUFBWSxDQUFDLEtBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVDOzs7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRSxRQUE0QjtRQUNwRCxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztJQUdELFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBYzs7UUFDbEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7O1FBQ2hELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsSUFBSSxTQUFTLEVBQUU7WUFDWCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLEVBQUUsQ0FBQztLQUNiO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZURpY3Rpb25hcnkgfSBmcm9tICcuL1Jlc291cmNlRGljdGlvbmFyeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VIb2xkZXIge1xyXG4gICAgRGVmYXVsdExvY2FsID0gJ2VuLVVTJztcclxuICAgIHByaXZhdGUgbUlubmVyRGljdGlvbmFyeSA9IG5ldyBDb2xsZWN0aW9ucy5OYW1lZERpY3Rpb25hcnk8UmVzb3VyY2VEaWN0aW9uYXJ5PigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgcmVzb3VyY2UgZGljdGlvbmFyeSBieSBsb2NhbCBuYW1lICovXHJcbiAgICBHZXRSZXNvdXJjZXMobG9jYWw6IHN0cmluZyk6IFJlc291cmNlRGljdGlvbmFyeSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubUlubmVyRGljdGlvbmFyeS5JdGVtKGxvY2FsKTtcclxuICAgIH1cclxuICAgIC8qKiBBZGQgcmVzb3VyY2UgZm9yIHNwZWNpZmljIGxvY2FsICovXHJcbiAgICBBZGRSZXNvdXJjZXMobG9jYWw6IHN0cmluZywgcmVzb3VyY2U6IFJlc291cmNlRGljdGlvbmFyeSk6IFJlc291cmNlSG9sZGVyIHtcclxuICAgICAgICBpZiAobG9jYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5tSW5uZXJEaWN0aW9uYXJ5LkFkZChsb2NhbCwgcmVzb3VyY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IHJlc291cmNlIHN0cmluZyAqL1xyXG4gICAgR2V0U3RyaW5nKG5hbWU6IHN0cmluZywgbG9jYWw/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjdWx0dXJlID0gbG9jYWwgPyBsb2NhbCA6IHRoaXMuRGVmYXVsdExvY2FsO1xyXG4gICAgICAgIGxldCByZXNvdXJjZXMgPSB0aGlzLkdldFJlc291cmNlcyhjdWx0dXJlKTtcclxuICAgICAgICBpZiAocmVzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZXMuR2V0KG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn0iXX0=