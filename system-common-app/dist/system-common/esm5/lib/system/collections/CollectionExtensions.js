/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Enumerable } from './Enumerable';
import { List } from './List';
import { ObservableCollection } from './ObservableCollection';
import { Grouping } from './IGrouping';
import { Dictionary } from './Dictionary';
/**
 * Do ForEach on items
 * @template T
 * @this {?}
 * @param {?} action
 * @return {?}
 */
export function ForEach(action) {
    var e_1, _a;
    if (!action) {
        throw new Error("Argument 'item' is null.");
    }
    try {
        for (var _b = tslib_1.__values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            action(item);
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
/**
 * Sort items by given comparer
 * @template T
 * @this {?}
 * @param {?} comparer
 * @return {?}
 */
export function Sort(comparer) {
    if (!comparer)
        throw new Error("Argument 'comparer' is null.");
    this.Items = this.Items.sort(comparer);
}
/**
 * Find items by given predicate
 * @template T
 * @this {?}
 * @param {?} predicate
 * @return {?}
 */
export function FindAll(predicate) {
    var e_2, _a;
    if (!predicate)
        throw new Error("Argument 'predicate' is null.");
    /** @type {?} */
    var result = new List();
    try {
        for (var _b = tslib_1.__values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            if (predicate(item))
                result.Add(item);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return Enumerable.From(result.Items);
}
/**
 * Find first item in the list
 * @template T
 * @this {?}
 * @param {?=} predicate
 * @return {?}
 */
export function FirstOrDefault(predicate) {
    /** @type {?} */
    var result;
    result = this.Items.FirstOrDefault(predicate);
    return result;
}
/**
 * @template T
 * @this {?}
 * @return {?}
 */
export function IsEmpty() {
    return !(this.Items && this.Items.length > 0);
}
/**
 * @template T
 * @this {?}
 * @param {?=} predicate
 * @return {?}
 */
export function Any(predicate) {
    var e_3, _a;
    if (predicate) {
        try {
            for (var _b = tslib_1.__values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (predicate(item))
                    return true;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    }
    else {
        if (this.Items.length === 0) {
            return false;
        }
        return true;
    }
}
/**
 * @template T
 * @this {?}
 * @param {?} selector
 * @return {?}
 */
export function Max(selector) {
    /** @type {?} */
    var max = this.Select(selector).Items.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return max;
}
/**
 * @template T
 * @this {?}
 * @param {?} selector
 * @return {?}
 */
export function Min(selector) {
    /** @type {?} */
    var min = this.Select(selector).Items.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return min;
}
/**
 * @template T
 * @this {?}
 * @param {?} keySelector
 * @return {?}
 */
export function OrderBy(keySelector) {
    /** @type {?} */
    var values = this.Items.sort(function (a, b) {
        return keySelector(a) - keySelector(b);
    });
    return Enumerable.From(values);
}
/**
 * @template T
 * @this {?}
 * @param {?} keySelector
 * @return {?}
 */
export function OrderByDescending(keySelector) {
    /** @type {?} */
    var values = this.Items.sort(function (a, b) {
        return keySelector(b) - keySelector(a);
    });
    return Enumerable.From(values);
}
/**
 * @template T
 * @this {?}
 * @param {?} predicate
 * @return {?}
 */
export function Where(predicate) {
    /** @type {?} */
    var values = this.Items.filter(function (x) {
        return predicate(x);
    });
    return Enumerable.From(values);
}
/**
 * @template TSource, TResult
 * @this {?}
 * @param {?} selector
 * @return {?}
 */
export function Select(selector) {
    var e_4, _a;
    /** @type {?} */
    var result = [];
    try {
        for (var _b = tslib_1.__values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            result.push(selector(item));
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return Enumerable.From(result);
}
/**
 * @template T
 * @this {?}
 * @param {?} index
 * @return {?}
 */
export function ElementAt(index) {
    /** @type {?} */
    var values = this.Items;
    return values[index];
}
/**
 * @template T, TKey, TElement
 * @this {?}
 * @param {?} keySelector
 * @param {?=} valueSelector
 * @return {?}
 */
export function GroupBy(keySelector, valueSelector) {
    if (!this)
        throw new Error("Parameter is null");
    if (!keySelector)
        throw new Error("Parameter 'keySelelctor'is null");
    if (!valueSelector)
        valueSelector = function (x) { return x; };
    /** @type {?} */
    var dictionary = new Dictionary();
    this.ForEach(function (x) {
        /** @type {?} */
        var key = keySelector(x);
        /** @type {?} */
        var value = valueSelector ? valueSelector(x) : x;
        /** @type {?} */
        var values;
        if (dictionary.ContainsKey(key)) {
            /** @type {?} */
            var item = dictionary.Item(key);
            values = item ? item : new List();
        }
        else {
            values = new List();
            dictionary.Add(key, values);
        }
        values.Add(value);
    });
    /** @type {?} */
    var groups = new List();
    dictionary.ForEach(function (x) {
        groups.Add(new Grouping(x.Key, x.Value));
    });
    return groups;
}
Enumerable.prototype.ForEach = ForEach;
Enumerable.prototype.Sort = Sort;
Enumerable.prototype.FindAll = FindAll;
Enumerable.prototype.FirstOrDefault = FirstOrDefault;
Enumerable.prototype.IsEmpty = IsEmpty;
Enumerable.prototype.Any = Any;
Enumerable.prototype.Max = Max;
Enumerable.prototype.Min = Min;
Enumerable.prototype.OrderBy = OrderBy;
Enumerable.prototype.OrderByDescending = OrderByDescending;
Enumerable.prototype.Where = Where;
Enumerable.prototype.Select = Select;
Enumerable.prototype.ElementAt = ElementAt;
Enumerable.prototype.GroupBy = GroupBy;
ObservableCollection.prototype.ForEach = ForEach;
ObservableCollection.prototype.Sort = Sort;
ObservableCollection.prototype.FindAll = FindAll;
ObservableCollection.prototype.FirstOrDefault = FirstOrDefault;
ObservableCollection.prototype.IsEmpty = IsEmpty;
ObservableCollection.prototype.Any = Any;
ObservableCollection.prototype.Max = Max;
ObservableCollection.prototype.Min = Min;
ObservableCollection.prototype.OrderBy = OrderBy;
ObservableCollection.prototype.OrderByDescending = OrderByDescending;
ObservableCollection.prototype.Where = Where;
ObservableCollection.prototype.Select = Select;
ObservableCollection.prototype.ElementAt = ElementAt;
ObservableCollection.prototype.GroupBy = GroupBy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbkV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vY29sbGVjdGlvbnMvQ29sbGVjdGlvbkV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFOUIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFhLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7OztBQUsxQyxNQUFNLGtCQUEyQyxNQUF5Qjs7SUFDdEUsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztLQUMvQzs7UUFFRCxLQUFpQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQSxnQkFBQSw0QkFBRTtZQUF4QixJQUFJLElBQUksV0FBQTtZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjs7Ozs7Ozs7O0NBQ0o7Ozs7Ozs7O0FBRUQsTUFBTSxlQUF3QyxRQUFnQztJQUMxRSxJQUFJLENBQUMsUUFBUTtRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUVwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7OztBQUVELE1BQU0sa0JBQTJDLFNBQStCOztJQUM1RSxJQUFJLENBQUMsU0FBUztRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7SUFFckQsSUFBSSxNQUFN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QUFHLEtBQUssQ0FBQztBQUM3QyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMvQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNyRCxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElFbnVtZXJhYmxlIH0gZnJvbSAnLi9JRW51bWVyYWJsZSc7XHJcbmltcG9ydCB7IEVudW1lcmFibGUgfSBmcm9tICcuL0VudW1lcmFibGUnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9MaXN0JztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGVDb2xsZWN0aW9uIH0gZnJvbSAnLi9PYnNlcnZhYmxlQ29sbGVjdGlvbic7XHJcbmltcG9ydCB7IElHcm91cGluZywgR3JvdXBpbmcgfSBmcm9tICcuL0lHcm91cGluZyc7XHJcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICcuL0RpY3Rpb25hcnknO1xyXG5pbXBvcnQgeyBJTGlzdCB9IGZyb20gJy4vSUxpc3QnO1xyXG5pbXBvcnQgeyBJRGljdGlvbmFyeSB9IGZyb20gJy4vSURpY3Rpb25hcnknO1xyXG5cclxuLyoqIERvIEZvckVhY2ggb24gaXRlbXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEZvckVhY2g8VD4odGhpczogSUVudW1lcmFibGU8VD4sIGFjdGlvbjogKGl0ZW06IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmICghYWN0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCAnaXRlbScgaXMgbnVsbC5gKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuSXRlbXMpIHtcclxuICAgICAgICBhY3Rpb24oaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuLyoqIFNvcnQgaXRlbXMgYnkgZ2l2ZW4gY29tcGFyZXIgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnQ8VD4odGhpczogSUVudW1lcmFibGU8VD4sIGNvbXBhcmVyOiAoeDogVCwgeTogVCkgPT4gbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIWNvbXBhcmVyKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgJ2NvbXBhcmVyJyBpcyBudWxsLmApO1xyXG5cclxuICAgIHRoaXMuSXRlbXMgPSB0aGlzLkl0ZW1zLnNvcnQoY29tcGFyZXIpO1xyXG59XHJcbi8qKiBGaW5kIGl0ZW1zIGJ5IGdpdmVuIHByZWRpY2F0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRmluZEFsbDxUPih0aGlzOiBJRW51bWVyYWJsZTxUPiwgcHJlZGljYXRlOiAoaXRlbTogVCkgPT4gYm9vbGVhbik6IElFbnVtZXJhYmxlPFQ+IHtcclxuICAgIGlmICghcHJlZGljYXRlKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgJ3ByZWRpY2F0ZScgaXMgbnVsbC5gKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gbmV3IExpc3Q8VD4oKTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5JdGVtcykge1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpXHJcbiAgICAgICAgICAgIHJlc3VsdC5BZGQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEVudW1lcmFibGUuRnJvbShyZXN1bHQuSXRlbXMpO1xyXG59XHJcbi8qKiBGaW5kIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEZpcnN0T3JEZWZhdWx0PFQ+KHRoaXM6IElFbnVtZXJhYmxlPFQ+LCBwcmVkaWNhdGU/OiAoaXRlbTogVCkgPT4gYm9vbGVhbik6IFQge1xyXG5cclxuICAgIGxldCByZXN1bHQ6IFQ7XHJcblxyXG4gICAgcmVzdWx0ID0gdGhpcy5JdGVtcy5GaXJzdE9yRGVmYXVsdChwcmVkaWNhdGUpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIElzRW1wdHk8VD4odGhpczogSUVudW1lcmFibGU8VD4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMuSXRlbXMgJiYgdGhpcy5JdGVtcy5sZW5ndGggPiAwKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQW55PFQ+KHRoaXM6IElFbnVtZXJhYmxlPFQ+LCBwcmVkaWNhdGU/OiAoc291cmNlOiBhbnkpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmIChwcmVkaWNhdGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuSXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShpdGVtKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLkl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBNYXg8VD4odGhpczogSUVudW1lcmFibGU8VD4sIHNlbGVjdG9yOiAoc291cmNlOiBUKSA9PiBudW1iZXIpOiBudW1iZXIge1xyXG5cclxuICAgIGxldCBtYXggPSB0aGlzLlNlbGVjdChzZWxlY3RvcikuSXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1heDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTWluPFQ+KHRoaXM6IElFbnVtZXJhYmxlPFQ+LCBzZWxlY3RvcjogKHNvdXJjZTogVCkgPT4gYW55KTogbnVtYmVyIHtcclxuICAgIGxldCBtaW4gPSB0aGlzLlNlbGVjdChzZWxlY3RvcikuSXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1pbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gT3JkZXJCeTxUPih0aGlzOiBJRW51bWVyYWJsZTxUPiwga2V5U2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IGFueSk6IElFbnVtZXJhYmxlPFQ+IHtcclxuICAgIC8vIHJldHVybiBFbnVtZXJhYmxlLkZyb20odGhpcy5JdGVtcy5PcmRlckJ5KGtleVNlbGVjdG9yKSk7XHJcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5JdGVtcy5zb3J0KGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBrZXlTZWxlY3RvcihhKSAtIGtleVNlbGVjdG9yKGIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIEVudW1lcmFibGUuRnJvbSh2YWx1ZXMpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBPcmRlckJ5RGVzY2VuZGluZzxUPih0aGlzOiBJRW51bWVyYWJsZTxUPiwga2V5U2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IGFueSk6IElFbnVtZXJhYmxlPFQ+IHtcclxuICAgIC8vIHJldHVybiBFbnVtZXJhYmxlLkZyb20odGhpcy5JdGVtcy5PcmRlckJ5RGVzY2VuZGluZyhrZXlTZWxlY3RvcikpO1xyXG5cclxuICAgIGxldCB2YWx1ZXMgPSB0aGlzLkl0ZW1zLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVNlbGVjdG9yKGIpIC0ga2V5U2VsZWN0b3IoYSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gRW51bWVyYWJsZS5Gcm9tKHZhbHVlcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFdoZXJlPFQ+KHRoaXM6IElFbnVtZXJhYmxlPFQ+LCBwcmVkaWNhdGU6IChzb3VyY2U6IFQpID0+IGJvb2xlYW4pOiBJRW51bWVyYWJsZTxUPiB7XHJcbiAgICAvL3JldHVybiBFbnVtZXJhYmxlLkZyb20odGhpcy5JdGVtcy5XaGVyZShwcmVkaWNhdGUpKTtcclxuXHJcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5JdGVtcy5maWx0ZXIoKHg6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmVkaWNhdGUoeCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAgRW51bWVyYWJsZS5Gcm9tKHZhbHVlcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDxUU291cmNlLCBUUmVzdWx0Pih0aGlzOiBJRW51bWVyYWJsZTxUU291cmNlPiwgc2VsZWN0b3I6IChzb3VyY2U6IFRTb3VyY2UpID0+IFRSZXN1bHQpOiBJRW51bWVyYWJsZTxUUmVzdWx0PiB7XHJcbiAgICAvL3JldHVybiBFbnVtZXJhYmxlLkZyb208VFJlc3VsdD4odGhpcy5JdGVtcy5TZWxlY3Qoc2VsZWN0b3IpKTtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5JdGVtcykge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHNlbGVjdG9yKGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBFbnVtZXJhYmxlLkZyb20ocmVzdWx0KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRWxlbWVudEF0PFQ+KHRoaXM6IElFbnVtZXJhYmxlPFQ+LCBpbmRleDogbnVtYmVyKTogVCB7XHJcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5JdGVtcztcclxuICAgIHJldHVybiB2YWx1ZXNbaW5kZXhdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBHcm91cEJ5PFQsIFRLZXksIFRFbGVtZW50Pih0aGlzOiBJRW51bWVyYWJsZTxUPiwga2V5U2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IFRLZXksIHZhbHVlU2VsZWN0b3I/OiAoc291cmNlOiBUKSA9PiBhbnkpOiBJRW51bWVyYWJsZTxJR3JvdXBpbmc8VEtleSwgVEVsZW1lbnQ+PiB7XHJcbiAgICBpZiAoIXRoaXMpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgaXMgbnVsbGApO1xyXG4gICAgaWYgKCFrZXlTZWxlY3RvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciAna2V5U2VsZWxjdG9yJ2lzIG51bGxgKTtcclxuICAgIGlmICghdmFsdWVTZWxlY3RvcilcclxuICAgICAgICB2YWx1ZVNlbGVjdG9yID0geCA9PiB4O1xyXG5cclxuICAgIGxldCBkaWN0aW9uYXJ5ID0gbmV3IERpY3Rpb25hcnk8VEtleSwgSUxpc3Q8VEVsZW1lbnQ+PigpO1xyXG5cclxuICAgIHRoaXMuRm9yRWFjaCh4ID0+IHtcclxuICAgICAgICBsZXQga2V5ID0ga2V5U2VsZWN0b3IoeCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IoeCkgOiB4O1xyXG5cclxuICAgICAgICBsZXQgdmFsdWVzOiBJTGlzdDxURWxlbWVudD47XHJcbiAgICAgICAgaWYgKGRpY3Rpb25hcnkuQ29udGFpbnNLZXkoa2V5KSkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGRpY3Rpb25hcnkuSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB2YWx1ZXMgPSBpdGVtID8gaXRlbSA6IG5ldyBMaXN0PFRFbGVtZW50PigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBMaXN0PFRFbGVtZW50PigpO1xyXG4gICAgICAgICAgICBkaWN0aW9uYXJ5LkFkZChrZXksIHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbHVlcy5BZGQodmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGdyb3VwcyA9IG5ldyBMaXN0PElHcm91cGluZzxUS2V5LCBURWxlbWVudD4+KCk7XHJcblxyXG4gICAgZGljdGlvbmFyeS5Gb3JFYWNoKHggPT4ge1xyXG4gICAgICAgIGdyb3Vwcy5BZGQobmV3IEdyb3VwaW5nKHguS2V5LCB4LlZhbHVlKSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGdyb3VwcztcclxufVxyXG5cclxuZGVjbGFyZSBtb2R1bGUgJy4vRW51bWVyYWJsZScge1xyXG4gICAgaW50ZXJmYWNlIEVudW1lcmFibGU8VD4ge1xyXG4gICAgICAgIEZvckVhY2g6IChhY3Rpb246IChpdGVtOiBUKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgICAgIFNvcnQ6IChjb21wYXJlcjogKHg6IFQsIHk6IFQpID0+IG51bWJlcikgPT4gdm9pZDtcclxuICAgICAgICBGaW5kQWxsOiAocHJlZGljYXRlOiAoaXRlbTogVCkgPT4gYm9vbGVhbikgPT4gSUVudW1lcmFibGU8VD47XHJcbiAgICAgICAgRmlyc3RPckRlZmF1bHQ6IChwcmVkaWNhdGU/OiAoaXRlbTogVCkgPT4gYm9vbGVhbikgPT4gVDtcclxuICAgICAgICBJc0VtcHR5OiAoKSA9PiBib29sZWFuO1xyXG4gICAgICAgIEFueTogKHByZWRpY2F0ZT86IChzb3VyY2U6IGFueSkgPT4gYm9vbGVhbikgPT4gYm9vbGVhbjtcclxuICAgICAgICBNYXg6IChzZWxlY3RvcjogKHNvdXJjZTogVCkgPT4gYW55KSA9PiBudW1iZXI7XHJcbiAgICAgICAgTWluOiAoc2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IGFueSkgPT4gbnVtYmVyO1xyXG4gICAgICAgIE9yZGVyQnk6IChrZXlTZWxlY3RvcjogKHNvdXJjZTogVCkgPT4gYW55KSA9PiBJRW51bWVyYWJsZTxUPjtcclxuICAgICAgICBPcmRlckJ5RGVzY2VuZGluZzogKGtleVNlbGVjdG9yOiAoc291cmNlOiBUKSA9PiBhbnkpID0+IElFbnVtZXJhYmxlPFQ+O1xyXG4gICAgICAgIFdoZXJlOiAocHJlZGljYXRlOiAoc291cmNlOiBUKSA9PiBib29sZWFuKSA9PiBJRW51bWVyYWJsZTxUPjtcclxuICAgICAgICBTZWxlY3Q6IDxULCBUUmVzdWx0PihzZWxlY3RvcjogKHNvdXJjZTogVCkgPT4gVFJlc3VsdCkgPT4gSUVudW1lcmFibGU8VFJlc3VsdD47XHJcbiAgICAgICAgRWxlbWVudEF0OiAoaW5kZXg6IG51bWJlcikgPT4gVDtcclxuICAgICAgICBHcm91cEJ5OiA8VEtleSwgVEVsZW1lbnQ+ICAoa2V5U2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IFRLZXksIHZhbHVlU2VsZWN0b3I/OiAoc291cmNlOiBUKSA9PiBURWxlbWVudCkgPT4gSUVudW1lcmFibGU8SUdyb3VwaW5nPFRLZXksIFRFbGVtZW50Pj47XHJcbiAgICB9XHJcbn1cclxuZGVjbGFyZSBtb2R1bGUgJy4vSUVudW1lcmFibGUnIHtcclxuICAgIGludGVyZmFjZSBJRW51bWVyYWJsZTxUPiB7XHJcbiAgICAgICAgRm9yRWFjaDogKGFjdGlvbjogKGl0ZW06IFQpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICAgICAgU29ydDogKGNvbXBhcmVyOiAoeDogVCwgeTogVCkgPT4gbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgICAgIEZpbmRBbGw6IChwcmVkaWNhdGU6IChpdGVtOiBUKSA9PiBib29sZWFuKSA9PiBJRW51bWVyYWJsZTxUPjtcclxuICAgICAgICBGaXJzdE9yRGVmYXVsdDogKHByZWRpY2F0ZT86IChpdGVtOiBUKSA9PiBib29sZWFuKSA9PiBUO1xyXG4gICAgICAgIElzRW1wdHk6ICgpID0+IGJvb2xlYW47XHJcbiAgICAgICAgQW55OiAocHJlZGljYXRlPzogKHNvdXJjZTogYW55KSA9PiBib29sZWFuKSA9PiBib29sZWFuO1xyXG4gICAgICAgIE1heDogKHNlbGVjdG9yOiAoc291cmNlOiBUKSA9PiBhbnkpID0+IG51bWJlcjtcclxuICAgICAgICBNaW46IChzZWxlY3RvcjogKHNvdXJjZTogVCkgPT4gYW55KSA9PiBudW1iZXI7XHJcbiAgICAgICAgT3JkZXJCeTogKGtleVNlbGVjdG9yOiAoc291cmNlOiBUKSA9PiBhbnkpID0+IElFbnVtZXJhYmxlPFQ+O1xyXG4gICAgICAgIE9yZGVyQnlEZXNjZW5kaW5nOiAoa2V5U2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IGFueSkgPT4gSUVudW1lcmFibGU8VD47XHJcbiAgICAgICAgV2hlcmU6IChwcmVkaWNhdGU6IChzb3VyY2U6IFQpID0+IGJvb2xlYW4pID0+IElFbnVtZXJhYmxlPFQ+O1xyXG4gICAgICAgIFNlbGVjdDogPFQsIFRSZXN1bHQ+KHNlbGVjdG9yOiAoc291cmNlOiBUKSA9PiBUUmVzdWx0KSA9PiBJRW51bWVyYWJsZTxUUmVzdWx0PjtcclxuICAgICAgICBFbGVtZW50QXQ6IChpbmRleDogbnVtYmVyKSA9PiBUO1xyXG4gICAgICAgIEdyb3VwQnk6IDxUS2V5LCBURWxlbWVudD4gIChrZXlTZWxlY3RvcjogKHNvdXJjZTogVCkgPT4gVEtleSwgdmFsdWVTZWxlY3Rvcj86IChzb3VyY2U6IFQpID0+IFRFbGVtZW50KSA9PiBJRW51bWVyYWJsZTxJR3JvdXBpbmc8VEtleSwgVEVsZW1lbnQ+PjtcclxuICAgIH1cclxufVxyXG5kZWNsYXJlIG1vZHVsZSAnLi9PYnNlcnZhYmxlQ29sbGVjdGlvbicge1xyXG4gICAgaW50ZXJmYWNlIE9ic2VydmFibGVDb2xsZWN0aW9uPFQ+IHtcclxuICAgICAgICBGb3JFYWNoOiAoYWN0aW9uOiAoaXRlbTogVCkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgICAgICBTb3J0OiAoY29tcGFyZXI6ICh4OiBULCB5OiBUKSA9PiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICAgICAgRmluZEFsbDogKHByZWRpY2F0ZTogKGl0ZW06IFQpID0+IGJvb2xlYW4pID0+IElFbnVtZXJhYmxlPFQ+O1xyXG4gICAgICAgIEZpcnN0T3JEZWZhdWx0OiAocHJlZGljYXRlPzogKGl0ZW06IFQpID0+IGJvb2xlYW4pID0+IFQ7XHJcbiAgICAgICAgSXNFbXB0eTogKCkgPT4gYm9vbGVhbjtcclxuICAgICAgICBBbnk6IChwcmVkaWNhdGU/OiAoc291cmNlOiBhbnkpID0+IGJvb2xlYW4pID0+IGJvb2xlYW47XHJcbiAgICAgICAgTWF4OiAoc2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IGFueSkgPT4gbnVtYmVyO1xyXG4gICAgICAgIE1pbjogKHNlbGVjdG9yOiAoc291cmNlOiBUKSA9PiBhbnkpID0+IG51bWJlcjtcclxuICAgICAgICBPcmRlckJ5OiAoa2V5U2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IGFueSkgPT4gSUVudW1lcmFibGU8VD47XHJcbiAgICAgICAgT3JkZXJCeURlc2NlbmRpbmc6IChrZXlTZWxlY3RvcjogKHNvdXJjZTogVCkgPT4gYW55KSA9PiBJRW51bWVyYWJsZTxUPjtcclxuICAgICAgICBXaGVyZTogKHByZWRpY2F0ZTogKHNvdXJjZTogVCkgPT4gYm9vbGVhbikgPT4gSUVudW1lcmFibGU8VD47XHJcbiAgICAgICAgU2VsZWN0OiA8VCwgVFJlc3VsdD4oc2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IFRSZXN1bHQpID0+IElFbnVtZXJhYmxlPFRSZXN1bHQ+O1xyXG4gICAgICAgIEVsZW1lbnRBdDogKGluZGV4OiBudW1iZXIpID0+IFQ7XHJcbiAgICAgICAgR3JvdXBCeTogPFRLZXksIFRFbGVtZW50PiAgKGtleVNlbGVjdG9yOiAoc291cmNlOiBUKSA9PiBUS2V5LCB2YWx1ZVNlbGVjdG9yPzogKHNvdXJjZTogVCkgPT4gVEVsZW1lbnQpID0+IElFbnVtZXJhYmxlPElHcm91cGluZzxUS2V5LCBURWxlbWVudD4+O1xyXG4gICAgfVxyXG59XHJcblxyXG5FbnVtZXJhYmxlLnByb3RvdHlwZS5Gb3JFYWNoID0gRm9yRWFjaDtcclxuRW51bWVyYWJsZS5wcm90b3R5cGUuU29ydCA9IFNvcnQ7XHJcbkVudW1lcmFibGUucHJvdG90eXBlLkZpbmRBbGwgPSBGaW5kQWxsO1xyXG5FbnVtZXJhYmxlLnByb3RvdHlwZS5GaXJzdE9yRGVmYXVsdCA9IEZpcnN0T3JEZWZhdWx0O1xyXG5FbnVtZXJhYmxlLnByb3RvdHlwZS5Jc0VtcHR5ID0gSXNFbXB0eTtcclxuRW51bWVyYWJsZS5wcm90b3R5cGUuQW55ID0gQW55O1xyXG5FbnVtZXJhYmxlLnByb3RvdHlwZS5NYXggPSBNYXg7XHJcbkVudW1lcmFibGUucHJvdG90eXBlLk1pbiA9IE1pbjtcclxuRW51bWVyYWJsZS5wcm90b3R5cGUuT3JkZXJCeSA9IE9yZGVyQnk7XHJcbkVudW1lcmFibGUucHJvdG90eXBlLk9yZGVyQnlEZXNjZW5kaW5nID0gT3JkZXJCeURlc2NlbmRpbmc7XHJcbkVudW1lcmFibGUucHJvdG90eXBlLldoZXJlID0gV2hlcmU7XHJcbkVudW1lcmFibGUucHJvdG90eXBlLlNlbGVjdCA9IFNlbGVjdDtcclxuRW51bWVyYWJsZS5wcm90b3R5cGUuRWxlbWVudEF0ID0gRWxlbWVudEF0O1xyXG5FbnVtZXJhYmxlLnByb3RvdHlwZS5Hcm91cEJ5ID0gR3JvdXBCeTtcclxuXHJcbk9ic2VydmFibGVDb2xsZWN0aW9uLnByb3RvdHlwZS5Gb3JFYWNoID0gRm9yRWFjaDtcclxuT2JzZXJ2YWJsZUNvbGxlY3Rpb24ucHJvdG90eXBlLlNvcnQgPSBTb3J0O1xyXG5PYnNlcnZhYmxlQ29sbGVjdGlvbi5wcm90b3R5cGUuRmluZEFsbCA9IEZpbmRBbGw7XHJcbk9ic2VydmFibGVDb2xsZWN0aW9uLnByb3RvdHlwZS5GaXJzdE9yRGVmYXVsdCA9IEZpcnN0T3JEZWZhdWx0O1xyXG5PYnNlcnZhYmxlQ29sbGVjdGlvbi5wcm90b3R5cGUuSXNFbXB0eSA9IElzRW1wdHk7XHJcbk9ic2VydmFibGVDb2xsZWN0aW9uLnByb3RvdHlwZS5BbnkgPSBBbnk7XHJcbk9ic2VydmFibGVDb2xsZWN0aW9uLnByb3RvdHlwZS5NYXggPSBNYXg7XHJcbk9ic2VydmFibGVDb2xsZWN0aW9uLnByb3RvdHlwZS5NaW4gPSBNaW47XHJcbk9ic2VydmFibGVDb2xsZWN0aW9uLnByb3RvdHlwZS5PcmRlckJ5ID0gT3JkZXJCeTtcclxuT2JzZXJ2YWJsZUNvbGxlY3Rpb24ucHJvdG90eXBlLk9yZGVyQnlEZXNjZW5kaW5nID0gT3JkZXJCeURlc2NlbmRpbmc7XHJcbk9ic2VydmFibGVDb2xsZWN0aW9uLnByb3RvdHlwZS5XaGVyZSA9IFdoZXJlO1xyXG5PYnNlcnZhYmxlQ29sbGVjdGlvbi5wcm90b3R5cGUuU2VsZWN0ID0gU2VsZWN0O1xyXG5PYnNlcnZhYmxlQ29sbGVjdGlvbi5wcm90b3R5cGUuRWxlbWVudEF0ID0gRWxlbWVudEF0O1xyXG5PYnNlcnZhYmxlQ29sbGVjdGlvbi5wcm90b3R5cGUuR3JvdXBCeSA9IEdyb3VwQnk7Il19