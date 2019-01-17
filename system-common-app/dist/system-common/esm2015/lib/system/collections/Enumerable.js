/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EnumerableIterator } from './EnumerableIterator';
/**
 * @template T
 */
export class Enumerable {
    constructor() {
        this.items = [];
    }
    /**
     * Get counts of collection
     * @return {?}
     */
    get Count() {
        return this.Items.length;
    }
    /**
     * Get all items
     * @return {?}
     */
    get Items() {
        return this.items;
    }
    /**
     * Set items value
     * @param {?} value
     * @return {?}
     */
    set Items(value) {
        this.items = value;
    }
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        return new EnumerableIterator(this);
    }
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    static From(array) {
        /** @type {?} */
        let list = new Enumerable();
        if (array) {
            list.Items = array;
        }
        return list;
    }
}
if (false) {
    /** @type {?} */
    Enumerable.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bWVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb2xsZWN0aW9ucy9FbnVtZXJhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUUxRCxNQUFNOztxQkFDbUIsRUFBRTs7Ozs7O0lBR3ZCLElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7S0FDNUI7Ozs7O0lBRUQsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCOzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7O0lBRUQsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2IsT0FBTyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFJLEtBQWU7O1FBQzFCLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxFQUFLLENBQUM7UUFDL0IsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElFbnVtZXJhYmxlIH0gZnJvbSAnLi9JRW51bWVyYWJsZSc7XHJcbmltcG9ydCB7IEVudW1lcmFibGVJdGVyYXRvciB9IGZyb20gJy4vRW51bWVyYWJsZUl0ZXJhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnVtZXJhYmxlPFQ+IGltcGxlbWVudHMgSUVudW1lcmFibGU8VD4ge1xyXG4gICAgcHJpdmF0ZSBpdGVtczogVFtdID0gW107XHJcblxyXG4gICAgLyoqIEdldCBjb3VudHMgb2YgY29sbGVjdGlvbiAqL1xyXG4gICAgZ2V0IENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuSXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqIEdldCBhbGwgaXRlbXMgKi9cclxuICAgIGdldCBJdGVtcygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG4gICAgLyoqIFNldCBpdGVtcyB2YWx1ZSAqL1xyXG4gICAgc2V0IEl0ZW1zKHZhbHVlOiBUW10pIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlSXRlcmF0b3IodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEZyb208VD4oYXJyYXk6IEFycmF5PFQ+KTogSUVudW1lcmFibGU8VD4ge1xyXG4gICAgICAgIGxldCBsaXN0ID0gbmV3IEVudW1lcmFibGU8VD4oKTtcclxuICAgICAgICBpZiAoYXJyYXkpIHtcclxuICAgICAgICAgICAgbGlzdC5JdGVtcyA9IGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuIl19