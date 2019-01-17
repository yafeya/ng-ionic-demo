/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Enumerable } from './Enumerable';
/**
 * @record
 * @template TKey, TElement
 */
export function IGrouping() { }
/** @type {?} */
IGrouping.prototype.Key;
/**
 * @template TKey, TElement
 */
var /**
 * @template TKey, TElement
 */
Grouping = /** @class */ (function (_super) {
    tslib_1.__extends(Grouping, _super);
    function Grouping(key, elements) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.Items = elements.Items;
        return _this;
    }
    Object.defineProperty(Grouping.prototype, "Key", {
        get: /**
         * @return {?}
         */
        function () {
            return this.key;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.key = value;
        },
        enumerable: true,
        configurable: true
    });
    return Grouping;
}(Enumerable));
/**
 * @template TKey, TElement
 */
export { Grouping };
if (false) {
    /** @type {?} */
    Grouping.prototype.key;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUdyb3VwaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbGxlY3Rpb25zL0lHcm91cGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7O0FBUTFDOzs7QUFBQTtJQUE4QyxvQ0FBb0I7SUFJOUQsa0JBQVksR0FBVSxFQUFFLFFBQWdDO1FBQXhELFlBQ0ksaUJBQU8sU0FHVjtRQUZHLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDOztLQUMvQjtJQUVELHNCQUFJLHlCQUFHOzs7O1FBQVA7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbkI7Ozs7O1FBQ0QsVUFBUSxLQUFXO1lBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7U0FDcEI7OztPQUhBO21CQXJCTDtFQVM4QyxVQUFVLEVBaUJ2RCxDQUFBOzs7O0FBakJELG9CQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElFbnVtZXJhYmxlIH0gZnJvbSAnLi9JRW51bWVyYWJsZSc7XHJcbmltcG9ydCB7IEVudW1lcmFibGUgfSBmcm9tICcuL0VudW1lcmFibGUnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwaW5nPFRLZXksIFRFbGVtZW50PiBleHRlbmRzIElFbnVtZXJhYmxlPFRFbGVtZW50PiB7XHJcbiAgICByZWFkb25seSBLZXk6IFRLZXk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JvdXBpbmc8VEtleSwgVEVsZW1lbnQ+IGV4dGVuZHMgRW51bWVyYWJsZTxURWxlbWVudD4gaW1wbGVtZW50cyBJR3JvdXBpbmc8VEtleSwgVEVsZW1lbnQ+IHtcclxuICAgIHByaXZhdGUga2V5OiBUS2V5O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk/OiBUS2V5LCBlbGVtZW50cz86IElFbnVtZXJhYmxlPFRFbGVtZW50Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5JdGVtcyA9IGVsZW1lbnRzLkl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBLZXkoKTogVEtleSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgfVxyXG4gICAgc2V0IEtleSh2YWx1ZTogVEtleSkge1xyXG4gICAgICAgIHRoaXMua2V5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59Il19