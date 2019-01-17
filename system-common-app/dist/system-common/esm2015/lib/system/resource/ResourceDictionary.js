/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as Collections from '../collections/index';
export class ResourceDictionary {
    constructor() {
        this.mInnerDictionary = new Collections.NamedDictionary();
    }
    /**
     * Add resource value
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Add(key, value) {
        if (key) {
            this.mInnerDictionary.Add(key, value);
        }
        return this;
    }
    /**
     * Get resource value
     * @param {?} key
     * @return {?}
     */
    Get(key) {
        if (key) {
            return this.mInnerDictionary.Item(key);
        }
        return '';
    }
}
if (false) {
    /** @type {?} */
    ResourceDictionary.prototype.Local;
    /** @type {?} */
    ResourceDictionary.prototype.mInnerDictionary;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VEaWN0aW9uYXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL3Jlc291cmNlL1Jlc291cmNlRGljdGlvbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxNQUFNOztnQ0FFeUIsSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFVOzs7Ozs7OztJQUdwRSxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDMUIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7OztJQUdELEdBQUcsQ0FBQyxHQUFXO1FBQ1gsSUFBSSxHQUFHLEVBQUU7WUFDTCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7UUFFRCxPQUFPLEVBQUUsQ0FBQztLQUNiO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc291cmNlRGljdGlvbmFyeSB7XHJcbiAgICBMb2NhbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtSW5uZXJEaWN0aW9uYXJ5ID0gbmV3IENvbGxlY3Rpb25zLk5hbWVkRGljdGlvbmFyeTxzdHJpbmc+KCk7XHJcblxyXG4gICAgLyoqIEFkZCByZXNvdXJjZSB2YWx1ZSAqL1xyXG4gICAgQWRkKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUmVzb3VyY2VEaWN0aW9uYXJ5IHtcclxuICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubUlubmVyRGljdGlvbmFyeS5BZGQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgcmVzb3VyY2UgdmFsdWUgKi9cclxuICAgIEdldChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tSW5uZXJEaWN0aW9uYXJ5Lkl0ZW0oa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufSJdfQ==