/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Enumerable } from './Enumerable';
import { KeyValuePair } from './KeyValuePair';
/**
 * @template TKey, TValue
 */
var /**
 * @template TKey, TValue
 */
Dictionary = /** @class */ (function (_super) {
    tslib_1.__extends(Dictionary, _super);
    function Dictionary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map = new Map();
        return _this;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Dictionary.prototype.Add = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.map.set(key, value);
        this.Items.Add(new KeyValuePair(key, value));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Dictionary.prototype.ContainsKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.map.has(key);
    };
    // Count(): number {
    //     return this.items.size;
    // }
    /**
     * @param {?} key
     * @return {?}
     */
    Dictionary.prototype.Item = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.map.get(key);
    };
    /**
     * @return {?}
     */
    Dictionary.prototype.Keys = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = [];
        this.map.forEach(function (value, key) {
            keys.push(key);
        });
        return keys;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Dictionary.prototype.Remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var item = this.Items.FirstOrDefault(function (x) { return x.Key === key; });
        if (item)
            this.Items.Remove(item);
        return this.map.delete(key);
    };
    /**
     * @return {?}
     */
    Dictionary.prototype.Values = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var values = [];
        this.map.forEach(function (value, key) {
            values.push(value);
        });
        return values;
    };
    return Dictionary;
}(Enumerable));
/**
 * @template TKey, TValue
 */
export { Dictionary };
if (false) {
    /** @type {?} */
    Dictionary.prototype.map;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb2xsZWN0aW9ucy9EaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFOUM7OztBQUFBO0lBQThDLHNDQUFzQzs7O29CQUNsRSxJQUFJLEdBQUcsRUFBZ0I7Ozs7Ozs7O0lBRXJDLHdCQUFHOzs7OztJQUFILFVBQUksR0FBUyxFQUFFLEtBQWE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2hEOzs7OztJQUNELGdDQUFXOzs7O0lBQVgsVUFBWSxHQUFTO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7SUFDRCxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLElBQUk7Ozs7O0lBQ0oseUJBQUk7Ozs7SUFBSixVQUFLLEdBQVM7UUFDVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7O0lBQ0QseUJBQUk7OztJQUFKOztRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQztLQUNmOzs7OztJQUNELDJCQUFNOzs7O0lBQU4sVUFBTyxHQUFTOztRQUVaLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJO1lBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMvQjs7OztJQUNELDJCQUFNOzs7SUFBTjs7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO3FCQXpDTDtFQUk4QyxVQUFVLEVBc0N2RCxDQUFBOzs7O0FBdENELHNCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEaWN0aW9uYXJ5IH0gZnJvbSAnLi9JRGljdGlvbmFyeSc7XHJcbmltcG9ydCB7IEVudW1lcmFibGUgfSBmcm9tICcuL0VudW1lcmFibGUnO1xyXG5pbXBvcnQgeyBLZXlWYWx1ZVBhaXIgfSBmcm9tICcuL0tleVZhbHVlUGFpcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeTxUS2V5LCBUVmFsdWU+IGV4dGVuZHMgRW51bWVyYWJsZTxLZXlWYWx1ZVBhaXI8VEtleSwgVFZhbHVlPj4gaW1wbGVtZW50cyBJRGljdGlvbmFyeTxUS2V5LCBUVmFsdWU+IHtcclxuICAgIHByaXZhdGUgbWFwID0gbmV3IE1hcDxUS2V5LCBUVmFsdWU+KCk7XHJcblxyXG4gICAgQWRkKGtleTogVEtleSwgdmFsdWU6IFRWYWx1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFwLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB0aGlzLkl0ZW1zLkFkZChuZXcgS2V5VmFsdWVQYWlyKGtleSwgdmFsdWUpKTtcclxuICAgIH1cclxuICAgIENvbnRhaW5zS2V5KGtleTogVEtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcclxuICAgIH1cclxuICAgIC8vIENvdW50KCk6IG51bWJlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaXRlbXMuc2l6ZTtcclxuICAgIC8vIH1cclxuICAgIEl0ZW0oa2V5OiBUS2V5KTogVFZhbHVlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICBLZXlzKCk6IFRLZXlbXSB7XHJcbiAgICAgICAgbGV0IGtleXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG4gICAgUmVtb3ZlKGtleTogVEtleSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuSXRlbXMuRmlyc3RPckRlZmF1bHQoeCA9PiB4LktleSA9PT0ga2V5KTtcclxuICAgICAgICBpZiAoaXRlbSlcclxuICAgICAgICAgICAgdGhpcy5JdGVtcy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG4gICAgVmFsdWVzKCk6IFRWYWx1ZVtdIHtcclxuICAgICAgICBsZXQgdmFsdWVzID0gW107XHJcbiAgICAgICAgdGhpcy5tYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfVxyXG59Il19