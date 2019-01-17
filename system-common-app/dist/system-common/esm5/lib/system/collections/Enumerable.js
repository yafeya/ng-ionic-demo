/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EnumerableIterator } from './EnumerableIterator';
/**
 * @template T
 */
var /**
 * @template T
 */
Enumerable = /** @class */ (function () {
    function Enumerable() {
        this.items = [];
    }
    Object.defineProperty(Enumerable.prototype, "Count", {
        /** Get counts of collection */
        get: /**
         * Get counts of collection
         * @return {?}
         */
        function () {
            return this.Items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Enumerable.prototype, "Items", {
        /** Get all items */
        get: /**
         * Get all items
         * @return {?}
         */
        function () {
            return this.items;
        },
        /** Set items value */
        set: /**
         * Set items value
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.items = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Enumerable.prototype[Symbol.iterator] = /**
     * @return {?}
     */
    function () {
        return new EnumerableIterator(this);
    };
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    Enumerable.From = /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var list = new Enumerable();
        if (array) {
            list.Items = array;
        }
        return list;
    };
    return Enumerable;
}());
/**
 * @template T
 */
export { Enumerable };
if (false) {
    /** @type {?} */
    Enumerable.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bWVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb2xsZWN0aW9ucy9FbnVtZXJhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUUxRDs7O0FBQUE7O3FCQUN5QixFQUFFOztJQUd2QixzQkFBSSw2QkFBSztRQURULCtCQUErQjs7Ozs7UUFDL0I7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzVCOzs7T0FBQTtJQUVELHNCQUFJLDZCQUFLO1FBRFQsb0JBQW9COzs7OztRQUNwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjtRQUNELHNCQUFzQjs7Ozs7O1FBQ3RCLFVBQVUsS0FBVTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0Qjs7O09BSkE7Ozs7SUFNRCxxQkFBQyxNQUFNLENBQUMsUUFBUSxDQUFDOzs7SUFBakI7UUFDSSxPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7Ozs7OztJQUVNLGVBQUk7Ozs7O0lBQVgsVUFBZSxLQUFlOztRQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBSyxDQUFDO1FBQy9CLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDdEI7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO3FCQTdCTDtJQThCQyxDQUFBOzs7O0FBM0JELHNCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElFbnVtZXJhYmxlIH0gZnJvbSAnLi9JRW51bWVyYWJsZSc7XHJcbmltcG9ydCB7IEVudW1lcmFibGVJdGVyYXRvciB9IGZyb20gJy4vRW51bWVyYWJsZUl0ZXJhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnVtZXJhYmxlPFQ+IGltcGxlbWVudHMgSUVudW1lcmFibGU8VD4ge1xyXG4gICAgcHJpdmF0ZSBpdGVtczogVFtdID0gW107XHJcblxyXG4gICAgLyoqIEdldCBjb3VudHMgb2YgY29sbGVjdGlvbiAqL1xyXG4gICAgZ2V0IENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuSXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqIEdldCBhbGwgaXRlbXMgKi9cclxuICAgIGdldCBJdGVtcygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG4gICAgLyoqIFNldCBpdGVtcyB2YWx1ZSAqL1xyXG4gICAgc2V0IEl0ZW1zKHZhbHVlOiBUW10pIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlSXRlcmF0b3IodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEZyb208VD4oYXJyYXk6IEFycmF5PFQ+KTogSUVudW1lcmFibGU8VD4ge1xyXG4gICAgICAgIGxldCBsaXN0ID0gbmV3IEVudW1lcmFibGU8VD4oKTtcclxuICAgICAgICBpZiAoYXJyYXkpIHtcclxuICAgICAgICAgICAgbGlzdC5JdGVtcyA9IGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuIl19