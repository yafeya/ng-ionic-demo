/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Enumerable } from './Enumerable';
/**
 * @template T
 */
var /**
 * @template T
 */
Collection = /** @class */ (function (_super) {
    tslib_1.__extends(Collection, _super);
    function Collection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Collection.prototype, "IsReadOnly", {
        /** Get whether collection is readonly */
        get: /**
         * Get whether collection is readonly
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /** Add item to collection */
    /**
     * Add item to collection
     * @param {?} item
     * @return {?}
     */
    Collection.prototype.Add = /**
     * Add item to collection
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        this.Items.push(item);
    };
    /** Add items to collection */
    /**
     * Add items to collection
     * @param {?} items
     * @return {?}
     */
    Collection.prototype.AddRange = /**
     * Add items to collection
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var e_1, _a;
        if (!items)
            throw new Error("Argument 'items' is null.");
        try {
            for (var items_1 = tslib_1.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                this.Add(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Clear collection */
    /**
     * Clear collection
     * @return {?}
     */
    Collection.prototype.Clear = /**
     * Clear collection
     * @return {?}
     */
    function () {
        this.Items = [];
    };
    /** Determines whether collection contains a specific item */
    /**
     * Determines whether collection contains a specific item
     * @param {?} item
     * @return {?}
     */
    Collection.prototype.Contains = /**
     * Determines whether collection contains a specific item
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        return this.Items.indexOf(item) > -1;
    };
    /** Remove item from collection */
    /**
     * Remove item from collection
     * @param {?} item
     * @return {?}
     */
    Collection.prototype.Remove = /**
     * Remove item from collection
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        /** @type {?} */
        var index = this.Items.indexOf(item);
        if (index > -1) {
            this.Items.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    };
    /** Copy elements to an array starting at a particular index
     * @array
     * @arrayIndex The zero-based index in array at which copying begins.
     */
    /**
     * Copy elements to an array starting at a particular index
     * \@array
     * \@arrayIndex The zero-based index in array at which copying begins.
     * @param {?} array
     * @param {?} arrayIndex
     * @return {?}
     */
    Collection.prototype.CopyTo = /**
     * Copy elements to an array starting at a particular index
     * \@array
     * \@arrayIndex The zero-based index in array at which copying begins.
     * @param {?} array
     * @param {?} arrayIndex
     * @return {?}
     */
    function (array, arrayIndex) {
        var e_2, _a;
        if (!array)
            throw new Error("Argument 'array' is null.");
        if (arrayIndex < 0 || arrayIndex > array.length)
            throw new Error("Argument 'arrayIndex' is out of range.");
        /** @type {?} */
        var index = arrayIndex;
        try {
            for (var _b = tslib_1.__values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                array.splice(index++, 0, item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return Collection;
}(Enumerable));
/**
 * @template T
 */
export { Collection };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb2xsZWN0aW9ucy9Db2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUcxQzs7O0FBQUE7SUFBbUMsc0NBQWE7Ozs7SUFHNUMsc0JBQUksa0NBQVU7UUFEZCx5Q0FBeUM7Ozs7O1FBQ3pDO1lBQ0ksT0FBTyxLQUFLLENBQUM7U0FDaEI7OztPQUFBO0lBRUQsNkJBQTZCOzs7Ozs7SUFDN0Isd0JBQUc7Ozs7O0lBQUgsVUFBSSxJQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUk7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7SUFDRCw4QkFBOEI7Ozs7OztJQUM5Qiw2QkFBUTs7Ozs7SUFBUixVQUFTLEtBQVU7O1FBQ2YsSUFBSSxDQUFDLEtBQUs7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7O1lBRWpELEtBQWlCLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQW5CLElBQUksSUFBSSxrQkFBQTtnQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xCOzs7Ozs7Ozs7S0FDSjtJQUNELHVCQUF1Qjs7Ozs7SUFDdkIsMEJBQUs7Ozs7SUFBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ25CO0lBQ0QsNkRBQTZEOzs7Ozs7SUFDN0QsNkJBQVE7Ozs7O0lBQVIsVUFBUyxJQUFPO1FBQ1osSUFBSSxDQUFDLElBQUk7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFaEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN4QztJQUNELGtDQUFrQzs7Ozs7O0lBQ2xDLDJCQUFNOzs7OztJQUFOLFVBQU8sSUFBTztRQUNWLElBQUksQ0FBQyxJQUFJO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztRQUVoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBQ0Q7OztPQUdHOzs7Ozs7Ozs7SUFDSCwyQkFBTTs7Ozs7Ozs7SUFBTixVQUFPLEtBQVUsRUFBRSxVQUFrQjs7UUFDakMsSUFBSSxDQUFDLEtBQUs7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDakQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTTtZQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7O1FBRTlELElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQzs7WUFDdkIsS0FBaUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXhCLElBQUksSUFBSSxXQUFBO2dCQUNULEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xDOzs7Ozs7Ozs7S0FFSjtxQkFqRUw7RUFHbUMsVUFBVSxFQStENUMsQ0FBQTs7OztBQS9ERCxzQkErREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtZXJhYmxlIH0gZnJvbSAnLi9FbnVtZXJhYmxlJztcclxuaW1wb3J0IHsgSUNvbGxlY3Rpb24gfSBmcm9tICcuL0lDb2xsZWN0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uPFQ+IGV4dGVuZHMgRW51bWVyYWJsZTxUPiBpbXBsZW1lbnRzIElDb2xsZWN0aW9uPFQ+IHsgIFxyXG5cclxuICAgIC8qKiBHZXQgd2hldGhlciBjb2xsZWN0aW9uIGlzIHJlYWRvbmx5ICovXHJcbiAgICBnZXQgSXNSZWFkT25seSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFkZCBpdGVtIHRvIGNvbGxlY3Rpb24gKi9cclxuICAgIEFkZChpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50ICdpdGVtJyBpcyBudWxsLmApO1xyXG5cclxuICAgICAgICB0aGlzLkl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICAvKiogQWRkIGl0ZW1zIHRvIGNvbGxlY3Rpb24gKi9cclxuICAgIEFkZFJhbmdlKGl0ZW1zOiBUW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWl0ZW1zKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50ICdpdGVtcycgaXMgbnVsbC5gKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLkFkZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogQ2xlYXIgY29sbGVjdGlvbiAqL1xyXG4gICAgQ2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5JdGVtcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqIERldGVybWluZXMgd2hldGhlciBjb2xsZWN0aW9uIGNvbnRhaW5zIGEgc3BlY2lmaWMgaXRlbSAqL1xyXG4gICAgQ29udGFpbnMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCAnaXRlbScgaXMgbnVsbC5gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuSXRlbXMuaW5kZXhPZihpdGVtKSA+IC0xO1xyXG4gICAgfVxyXG4gICAgLyoqIFJlbW92ZSBpdGVtIGZyb20gY29sbGVjdGlvbiAqL1xyXG4gICAgUmVtb3ZlKGl0ZW06IFQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgJ2l0ZW0nIGlzIG51bGwuYCk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuSXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogQ29weSBlbGVtZW50cyB0byBhbiBhcnJheSBzdGFydGluZyBhdCBhIHBhcnRpY3VsYXIgaW5kZXhcclxuICAgICAqIEBhcnJheVxyXG4gICAgICogQGFycmF5SW5kZXggVGhlIHplcm8tYmFzZWQgaW5kZXggaW4gYXJyYXkgYXQgd2hpY2ggY29weWluZyBiZWdpbnMuXHJcbiAgICAgKi9cclxuICAgIENvcHlUbyhhcnJheTogVFtdLCBhcnJheUluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIWFycmF5KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50ICdhcnJheScgaXMgbnVsbC5gKTtcclxuICAgICAgICBpZiAoYXJyYXlJbmRleCA8IDAgfHwgYXJyYXlJbmRleCA+IGFycmF5Lmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCAnYXJyYXlJbmRleCcgaXMgb3V0IG9mIHJhbmdlLmApO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSBhcnJheUluZGV4O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5JdGVtcykge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgrKywgMCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ==