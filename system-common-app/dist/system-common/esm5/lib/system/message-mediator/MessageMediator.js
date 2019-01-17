/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as Collections from '../collections/index';
import { Injectable } from '@angular/core';
var MessageMediator = /** @class */ (function () {
    function MessageMediator() {
        this.mediators = new Collections.Dictionary();
    }
    Object.defineProperty(MessageMediator.prototype, "Mediators", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mediators;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Register an event
     */
    /**
     * Register an event
     * @param {?} topic
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    MessageMediator.prototype.RegisterHandler = /**
     * Register an event
     * @param {?} topic
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    function (topic, id, action) {
        /** @type {?} */
        var values = this.mediators.Item(topic);
        if (values == null) {
            values = new Collections.Dictionary();
            this.mediators.Add(topic, values);
        }
        values.Add(id, action);
        return this;
    };
    /**
     * Unregister an event
     */
    /**
     * Unregister an event
     * @param {?} topic
     * @param {?} id
     * @return {?}
     */
    MessageMediator.prototype.UnregisterHandler = /**
     * Unregister an event
     * @param {?} topic
     * @param {?} id
     * @return {?}
     */
    function (topic, id) {
        /** @type {?} */
        var values = this.mediators.Item(topic);
        if (values != null) {
            values.Remove(id);
            if (values.Count === 0) {
                this.mediators.Remove(topic);
            }
        }
        return this;
    };
    /**
     * @template T
     * @param {?} topic
     * @param {?=} message
     * @return {?}
     */
    MessageMediator.prototype.SendMessage = /**
     * @template T
     * @param {?} topic
     * @param {?=} message
     * @return {?}
     */
    function (topic, message) {
        var e_1, _a;
        /** @type {?} */
        var result = true;
        /** @type {?} */
        var values = this.mediators.Item(topic);
        if (values != null) {
            try {
                for (var _b = tslib_1.__values(values.Values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    try {
                        item.Invoke(message);
                    }
                    catch (error) {
                        result = false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return result;
    };
    MessageMediator.decorators = [
        { type: Injectable }
    ];
    return MessageMediator;
}());
export { MessageMediator };
if (false) {
    /** @type {?} */
    MessageMediator.prototype.mediators;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZU1lZGlhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL21lc3NhZ2UtbWVkaWF0b3IvTWVzc2FnZU1lZGlhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxLQUFLLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7eUJBSW5CLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBMkQ7O0lBRXpHLHNCQUFJLHNDQUFTOzs7O1FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7OztPQUFBO0lBRUQ7O09BRUc7Ozs7Ozs7O0lBQ0gseUNBQWU7Ozs7Ozs7SUFBZixVQUFnQixLQUFhLEVBQUUsRUFBVSxFQUFFLE1BQXVCOztRQUM5RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBMkIsQ0FBQztZQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDckM7UUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0Q7O09BRUc7Ozs7Ozs7SUFDSCwyQ0FBaUI7Ozs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsRUFBVTs7UUFDdkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEIsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7SUFLRCxxQ0FBVzs7Ozs7O0lBQVgsVUFBZSxLQUFhLEVBQUUsT0FBVzs7O1FBRXJDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQzs7UUFDbEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFOztnQkFDaEIsS0FBaUIsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBN0IsSUFBSSxJQUFJLFdBQUE7b0JBQ1QsSUFBSTt3QkFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN4QjtvQkFBQyxPQUFPLEtBQUssRUFBRTt3QkFDWixNQUFNLEdBQUcsS0FBSyxDQUFDO3FCQUNsQjtpQkFDSjs7Ozs7Ozs7O1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztLQUNqQjs7Z0JBckRKLFVBQVU7OzBCQUxYOztTQU1hLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTWVzc2FnZU1lZGlhdG9yIH0gZnJvbSAnLi9JTWVzc2FnZU1lZGlhdG9yJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBDb2xsZWN0aW9ucyBmcm9tICcuLi9jb2xsZWN0aW9ucy9pbmRleCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VNZWRpYXRvciBpbXBsZW1lbnRzIElNZXNzYWdlTWVkaWF0b3Ige1xyXG4gICAgcHJpdmF0ZSBtZWRpYXRvcnMgPSBuZXcgQ29sbGVjdGlvbnMuRGljdGlvbmFyeTxzdHJpbmcsIENvbGxlY3Rpb25zLkRpY3Rpb25hcnk8c3RyaW5nLCBBY3Rpb25zLklBY3Rpb24+PigpO1xyXG5cclxuICAgIGdldCBNZWRpYXRvcnMoKTogQ29sbGVjdGlvbnMuRGljdGlvbmFyeTxzdHJpbmcsIENvbGxlY3Rpb25zLkRpY3Rpb25hcnk8c3RyaW5nLCBBY3Rpb25zLklBY3Rpb24+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWF0b3JzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnRcclxuICAgICAqL1xyXG4gICAgUmVnaXN0ZXJIYW5kbGVyKHRvcGljOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGFjdGlvbjogQWN0aW9ucy5JQWN0aW9uKTogSU1lc3NhZ2VNZWRpYXRvciB7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMubWVkaWF0b3JzLkl0ZW0odG9waWMpO1xyXG4gICAgICAgIGlmICh2YWx1ZXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgQ29sbGVjdGlvbnMuRGljdGlvbmFyeTxzdHJpbmcsIEFjdGlvbnMuSUFjdGlvbj4oKTtcclxuICAgICAgICAgICAgdGhpcy5tZWRpYXRvcnMuQWRkKHRvcGljLCB2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsdWVzLkFkZChpZCwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgYW4gZXZlbnQgXHJcbiAgICAgKi9cclxuICAgIFVucmVnaXN0ZXJIYW5kbGVyKHRvcGljOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBJTWVzc2FnZU1lZGlhdG9yIHtcclxuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5tZWRpYXRvcnMuSXRlbSh0b3BpYyk7XHJcbiAgICAgICAgaWYgKHZhbHVlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5SZW1vdmUoaWQpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWVzLkNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lZGlhdG9ycy5SZW1vdmUodG9waWMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIGFuIGV2ZW50IHdpdGggZ2l2ZW4gcGFyYW1ldGVyXHJcbiAgICAgKi9cclxuICAgIFNlbmRNZXNzYWdlKHRvcGljOiBzdHJpbmcsIHBhcmFtPzogYW55KTogYm9vbGVhbjtcclxuICAgIFNlbmRNZXNzYWdlPFQ+KHRvcGljOiBzdHJpbmcsIG1lc3NhZ2U/OiBUKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLm1lZGlhdG9ycy5JdGVtKHRvcGljKTtcclxuICAgICAgICBpZiAodmFsdWVzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB2YWx1ZXMuVmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5JbnZva2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iXX0=