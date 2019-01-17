/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs/Observable';
import { EnumerableIterator } from './EnumerableIterator';
/**
 * @template T
 */
var /**
 * @template T
 */
ObservableCollection = /** @class */ (function (_super) {
    tslib_1.__extends(ObservableCollection, _super);
    function ObservableCollection(array, scheduler) {
        var _this = _super.call(this) || this;
        _this.array = array;
        _this.scheduler = scheduler;
        // console.log(array);
        if (!scheduler && array.length === 1) {
            _this._isScalar = true;
            _this.values = /** @type {?} */ (array[0]);
        }
        else {
            _this._isScalar = true;
            _this.values = array;
        }
        return _this;
    }
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    ObservableCollection.Create = /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return new ObservableCollection(/** @type {?} */ ([array]));
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ObservableCollection.dispatch = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        (/** @type {?} */ (this)).schedule(state);
    };
    Object.defineProperty(ObservableCollection.prototype, "Count", {
        get: /**
         * @return {?}
         */
        function () {
            return this.values.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableCollection.prototype, "Values", {
        get: /**
         * @return {?}
         */
        function () {
            return this.values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableCollection.prototype, "Items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.values;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.values = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    ObservableCollection.prototype.Add = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.values) {
            this.values.push(item);
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    ObservableCollection.prototype.AddRange = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var e_1, _a;
        if (items) {
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
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ObservableCollection.prototype.Remove = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var index = this.values.indexOf(item);
        if (index > -1) {
            this.values.splice(index, 1);
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    ObservableCollection.prototype[Symbol.iterator] = /**
     * @return {?}
     */
    function () {
        return new EnumerableIterator(this);
    };
    /**
     * @param {?} subscriber
     * @return {?}
     */
    ObservableCollection.prototype._subscribe = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        /** @type {?} */
        var index = 0;
        /** @type {?} */
        var array = this.array;
        /** @type {?} */
        var count = array.length;
        /** @type {?} */
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ObservableCollection.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            //console.log(this.values);
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[0]);
            }
            subscriber.complete();
        }
    };
    return ObservableCollection;
}(Observable));
/**
 * @template T
 */
export { ObservableCollection };
if (false) {
    /** @type {?} */
    ObservableCollection.prototype.values;
    /** @type {?} */
    ObservableCollection.prototype.array;
    /** @type {?} */
    ObservableCollection.prototype.scheduler;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vY29sbGVjdGlvbnMvT2JzZXJ2YWJsZUNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFMUQ7OztBQUFBO0lBQTZDLGdEQUFhO0lBK0J0RCw4QkFBb0IsS0FBWSxFQUFVLFNBQXNCO1FBQWhFLFlBQ0ksaUJBQU8sU0FTVjtRQVZtQixXQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsZUFBUyxHQUFULFNBQVMsQ0FBYTs7UUFHNUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsTUFBTSxxQkFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztTQUMvQjthQUFNO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7O0tBQ0o7Ozs7OztJQXRDTSwyQkFBTTs7Ozs7SUFBYixVQUFpQixLQUFlO1FBQzVCLE9BQU8sSUFBSSxvQkFBb0IsbUJBQVMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0tBQ3BEOzs7OztJQUVNLDZCQUFROzs7O0lBQWYsVUFBZ0IsS0FBVTtRQUVkLElBQUEsbUJBQUssRUFBRSxtQkFBSyxFQUFFLG1CQUFLLEVBQUUsNkJBQVUsQ0FBVztRQUVsRCxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7WUFDaEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFOUIsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUV4QixtQkFBTSxJQUFJLEVBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7SUFrQkQsc0JBQUksdUNBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDN0I7OztPQUFBO0lBQ0Qsc0JBQUksd0NBQU07Ozs7UUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0Qjs7O09BQUE7SUFDRCxzQkFBSSx1Q0FBSzs7OztRQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCOzs7OztRQUNELFVBQVUsS0FBVTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2Qjs7O09BSEE7Ozs7O0lBS00sa0NBQUc7Ozs7Y0FBQyxJQUFPO1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7Ozs7OztJQUVFLHVDQUFROzs7O2NBQUMsS0FBVTs7UUFDdEIsSUFBSSxLQUFLLEVBQUU7O2dCQUNQLEtBQWlCLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7b0JBQW5CLElBQUksSUFBSSxrQkFBQTtvQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsQjs7Ozs7Ozs7O1NBQ0o7Ozs7OztJQUVFLHFDQUFNOzs7O2NBQUMsSUFBTzs7UUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2hCOzs7OztJQUtMLCtCQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7OztJQUFqQjtRQUNJLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2Qzs7Ozs7SUFFRCx5Q0FBVTs7OztJQUFWLFVBQVcsVUFBeUI7O1FBQ2hDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFDZCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztRQUN6QixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOztRQUMzQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWpDLElBQUksU0FBUyxFQUFFO1lBQ1gsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7Z0JBQ3hELEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFVBQVUsWUFBQTthQUNsQyxDQUFDLENBQUM7U0FDTjthQUFNOztZQUVILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsRCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pCO0tBQ0o7K0JBN0dMO0VBUzZDLFVBQVUsRUFxR3RELENBQUE7Ozs7QUFyR0QsZ0NBcUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IE9wZXJhdG9yIH0gZnJvbSAncnhqcy9PcGVyYXRvcic7XHJcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICdyeGpzL1N1YnNjcmliZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFRlYXJkb3duTG9naWMgfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElTY2hlZHVsZXIsIFNjaGVkdWxlciB9IGZyb20gJ3J4anMvU2NoZWR1bGVyJztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCB7IElFbnVtZXJhYmxlIH0gZnJvbSAnLi9JRW51bWVyYWJsZSc7XHJcbmltcG9ydCB7IEVudW1lcmFibGVJdGVyYXRvciB9IGZyb20gJy4vRW51bWVyYWJsZUl0ZXJhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlQ29sbGVjdGlvbjxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBJRW51bWVyYWJsZTxUPiAge1xyXG5cclxuXHJcbiAgICBzdGF0aWMgQ3JlYXRlPFQ+KGFycmF5OiBBcnJheTxUPik6IE9ic2VydmFibGVDb2xsZWN0aW9uPFQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVDb2xsZWN0aW9uPFQ+KDxhbnk+W2FycmF5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3BhdGNoKHN0YXRlOiBhbnkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBhcnJheSwgaW5kZXgsIGNvdW50LCBzdWJzY3JpYmVyIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID49IGNvdW50KSB7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2luZGV4XSk7XHJcblxyXG4gICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5pbmRleCA9IGluZGV4ICsgMTtcclxuXHJcbiAgICAgICAgKDxhbnk+dGhpcykuc2NoZWR1bGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZhbHVlIHVzZWQgaWYgQXJyYXkgaGFzIG9uZSB2YWx1ZSBhbmQgX2lzU2NhbGFyXHJcbiAgICBwcml2YXRlIHZhbHVlczogVFtdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFycmF5OiBhbnlbXSwgcHJpdmF0ZSBzY2hlZHVsZXI/OiBJU2NoZWR1bGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgICAgICAgaWYgKCFzY2hlZHVsZXIgJiYgYXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU2NhbGFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSA8VFtdPmFycmF5WzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU2NhbGFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGdldCBWYWx1ZXMoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgSXRlbXMoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XHJcbiAgICB9XHJcbiAgICBzZXQgSXRlbXModmFsdWU6IFRbXSkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZChpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIEFkZFJhbmdlKGl0ZW1zOiBUW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXRlbXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVtb3ZlKGl0ZW06IFQpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVJdGVyYXRvcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5hcnJheTtcclxuICAgICAgICBjb25zdCBjb3VudCA9IGFycmF5Lmxlbmd0aDtcclxuICAgICAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcclxuXHJcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKE9ic2VydmFibGVDb2xsZWN0aW9uLmRpc3BhdGNoLCAwLCB7XHJcbiAgICAgICAgICAgICAgICBhcnJheSwgaW5kZXgsIGNvdW50LCBzdWJzY3JpYmVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy52YWx1ZXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=