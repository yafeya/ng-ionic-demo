var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
Array.prototype.Add = function (item) {
    this.push(item);
};
Array.prototype.Empty = function () {
    return this.splice(0, this.length);
};
Array.prototype.IsEmpty = function () {
    if (this.length === 0) {
        return true;
    }
    return false;
};
Array.prototype.ElementAt = function (index) {
    return this[index];
};
Array.prototype.FirstOrDefault = function (predicate) {
    var e_1, _a;
    /** @type {?} */
    var result = null;
    if (predicate) {
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (predicate(item)) {
                    result = item;
                    break;
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
    else {
        result = this[0];
    }
    return result;
};
Array.prototype.Max = function () {
    /** @type {?} */
    var max = this.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return max;
};
Array.prototype.Min = function () {
    /** @type {?} */
    var min = this.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return min;
};
Array.prototype.Count = function () {
    return this.length;
};
Array.prototype.Any = function (predicate) {
    var e_2, _a;
    if (predicate) {
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (predicate(item))
                    return true;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    }
    else {
        if (this.length === 0) {
            return false;
        }
        return true;
    }
};
Array.prototype.Where = function (predicate) {
    return this.filter(function (x) {
        return predicate(x);
    });
};
Array.prototype.Select = function (selector) {
    var e_3, _a;
    /** @type {?} */
    var result = [];
    try {
        for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            result.push(selector(item));
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
};
Array.prototype.OrderBy = function (keySelector) {
    return this.sort(function (a, b) {
        return keySelector(a) > keySelector(b);
    });
};
Array.prototype.OrderByDescending = function (keySelector) {
    return this.sort(function (a, b) {
        return keySelector(b) - keySelector(a);
    });
};
Array.prototype.ForEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(i, this[i]);
    }
};
Array.prototype.Remove = function (item) {
    /** @type {?} */
    var index = this.indexOf(item);
    if (index !== -1) {
        return this.splice(index, 1);
    }
    return null;
};
Array.prototype.Contains = function (partial, strict) {
    for (var i = 0; i < this.length; i++) {
        if (!strict && this[i].contains(partial)) {
            return true;
        }
        if (strict && this[i] === partial) {
            return true;
        }
    }
    return false;
};
Array.prototype.IndexOfPartial = function (partial) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].contains(partial)) {
            return i;
        }
    }
    return -1;
};
/*
 * There are frameworks that auto-generate JSON based on data schemas, but sometimes they
 * return data in inconsistent ways. For example, an array of strings might be returned
 * instead of an array of objects containing strings, etc. because the underlying data at the time
 * only cotains the string value, but when other data is present (in the database, etc.),
 * it will return the object array. Certain convenience methods are necessary to force proper formatting.
 */
Array.prototype.ToObjectArray = function (objName) {
    if (objName === undefined || objName === null) {
        throw new Error('Error: Property name must be provided for conversion.');
    }
    /** @type {?} */
    var items = this;
    if (typeof (items[0]) === 'string' || typeof (items[0]) === 'number' || typeof (items[0]) === 'boolean') {
        for (var i = 0; i < items.length; i++) {
            /** @type {?} */
            var val = items[i];
            items[i] = {};
            items[i][objName] = val;
        }
        return items;
    }
    else {
        return this;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlFeHRlbnNpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2V4dGVuc2lvbnMvQXJyYXlFeHRlbnNpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsSUFBUztJQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ25CLENBQUM7QUFDRixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRztJQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUN0QyxDQUFDO0FBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUc7SUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7Q0FDaEIsQ0FBQztBQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsS0FBYTtJQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN0QixDQUFDO0FBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBVSxTQUFvQzs7O0lBQzNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztJQUVsQixJQUFJLFNBQVMsRUFBRTs7WUFDWCxLQUFpQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQWxCLElBQUksSUFBSSxXQUFBO2dCQUNULElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNkLE1BQU07aUJBQ1Q7YUFDSjs7Ozs7Ozs7O0tBQ0o7U0FBTTtRQUNILE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEI7SUFFRCxPQUFPLE1BQU0sQ0FBQztDQUNqQixDQUFDO0FBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUc7O0lBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pCLENBQUMsQ0FBQztJQUNILE9BQU8sR0FBRyxDQUFDO0NBQ2QsQ0FBQztBQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHOztJQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6QixDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsQ0FBQztDQUNkLENBQUM7QUFDRixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRztJQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7Q0FDdEIsQ0FBQztBQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsU0FBb0M7O0lBQ2hFLElBQUksU0FBUyxFQUFFOztZQUNYLEtBQWlCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEIsSUFBSSxJQUFJLFdBQUE7Z0JBQ1QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ25COzs7Ozs7Ozs7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNoQjtTQUFNO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Q0FFSixDQUFDO0FBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxTQUFtQztJQUNqRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO1FBQ2hCLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztDQUNOLENBQUM7QUFDRixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFvQixRQUFrQzs7O0lBQzNFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7UUFDaEIsS0FBaUIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFBLGdCQUFBLDRCQUFFO1lBQWxCLElBQUksSUFBSSxXQUFBO1lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvQjs7Ozs7Ozs7O0lBQ0QsT0FBTyxNQUFNLENBQUM7Q0FDakIsQ0FBQztBQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVUsV0FBaUM7SUFDakUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDM0IsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFDLENBQUMsQ0FBQztDQUNOLENBQUM7QUFDRixLQUFLLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsV0FBaUM7SUFDM0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDM0IsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFDLENBQUMsQ0FBQztDQUNOLENBQUM7QUFDRixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFVLFFBQWtCO0lBQ2xELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEI7Q0FDSixDQUFDO0FBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxJQUFTOztJQUN4QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoQztJQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2YsQ0FBQztBQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsT0FBZSxFQUFFLE1BQWU7SUFDakUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0NBQ2hCLENBQUM7QUFDRixLQUFLLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFVLE9BQWU7SUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7S0FDSjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7Q0FDYixDQUFDOzs7Ozs7OztBQVNGLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsT0FBZTtJQUNyRCxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtRQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7S0FDNUU7O0lBQ0QsSUFBSSxLQUFLLEdBQVEsSUFBSSxDQUFDO0lBQ3RCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDckcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ25DLElBQUksR0FBRyxHQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUMzQjtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2hCO1NBQU07UUFDSCxPQUFPLElBQUksQ0FBQztLQUNmO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW50ZXJmYWNlIEFycmF5PFQ+IHtcclxuICAgIEFkZDogKGl0ZW06IFQpID0+IHZvaWQ7XHJcbiAgICBFbXB0eTogKCkgPT4gQXJyYXk8YW55PjtcclxuICAgIElzRW1wdHk6ICgpID0+IGJvb2xlYW47XHJcbiAgICBBbnk6IChwcmVkaWNhdGU/OiAoc291cmNlOiBUKSA9PiBib29sZWFuKSA9PiBib29sZWFuO1xyXG4gICAgQ291bnQ6ICgpID0+IG51bWJlcjtcclxuICAgIE1heDogKCkgPT4gbnVtYmVyO1xyXG4gICAgTWluOiAoKSA9PiBudW1iZXI7XHJcbiAgICBPcmRlckJ5OiAoa2V5U2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IGFueSkgPT4gQXJyYXk8VD47XHJcbiAgICBPcmRlckJ5RGVzY2VuZGluZzogKGtleVNlbGVjdG9yOiAoc291cmNlOiBUKSA9PiBhbnkpID0+IEFycmF5PFQ+O1xyXG4gICAgV2hlcmU6IChwcmVkaWNhdGU6IChzb3VyY2U6IFQpID0+IGJvb2xlYW4pID0+IEFycmF5PFQ+O1xyXG4gICAgU2VsZWN0OiA8VFJlc3VsdD4oc2VsZWN0b3I6IChzb3VyY2U6IFQpID0+IFRSZXN1bHQpID0+IEFycmF5PFRSZXN1bHQ+O1xyXG4gICAgRWxlbWVudEF0OiAoaW5kZXg6IG51bWJlcikgPT4gYW55O1xyXG4gICAgRmlyc3RPckRlZmF1bHQ6IChwcmVkaWNhdGU/OiAoc291cmNlOiBUKSA9PiBib29sZWFuKSA9PiBUO1xyXG4gICAgRm9yRWFjaDogKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4gdm9pZDtcclxuICAgIFJlbW92ZTogKGl0ZW06IGFueSkgPT4gYW55O1xyXG4gICAgQ29udGFpbnM6IChwYXJ0aWFsOiBzdHJpbmcsIHN0cmljdDogYm9vbGVhbikgPT4gYm9vbGVhbjtcclxuICAgIEluZGV4T2ZQYXJ0aWFsOiAocGFydGlhbDogc3RyaW5nKSA9PiBudW1iZXI7XHJcbiAgICBUb09iamVjdEFycmF5OiAob2JqTmFtZTogc3RyaW5nKSA9PiBBcnJheTxhbnk+O1xyXG59XHJcblxyXG5cclxuQXJyYXkucHJvdG90eXBlLkFkZCA9IGZ1bmN0aW9uIChpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucHVzaChpdGVtKTtcclxufTtcclxuQXJyYXkucHJvdG90eXBlLkVtcHR5ID0gZnVuY3Rpb24gKCk6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKDAsIHRoaXMubGVuZ3RoKTtcclxufTtcclxuQXJyYXkucHJvdG90eXBlLklzRW1wdHkgPSBmdW5jdGlvbiAoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuQXJyYXkucHJvdG90eXBlLkVsZW1lbnRBdCA9IGZ1bmN0aW9uIChpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzW2luZGV4XTtcclxufTtcclxuQXJyYXkucHJvdG90eXBlLkZpcnN0T3JEZWZhdWx0ID0gZnVuY3Rpb24gKHByZWRpY2F0ZT86IChzb3VyY2U6IGFueSkgPT4gYm9vbGVhbik6IGFueSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICBpZiAocHJlZGljYXRlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpc1swXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5BcnJheS5wcm90b3R5cGUuTWF4ID0gZnVuY3Rpb24gKCk6IG51bWJlciB7XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoYSwgYik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYXg7XHJcbn07XHJcbkFycmF5LnByb3RvdHlwZS5NaW4gPSBmdW5jdGlvbiAoKTogbnVtYmVyIHtcclxuICAgIGxldCBtaW4gPSB0aGlzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1pbjtcclxufTtcclxuQXJyYXkucHJvdG90eXBlLkNvdW50ID0gZnVuY3Rpb24gKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbn07XHJcbkFycmF5LnByb3RvdHlwZS5BbnkgPSBmdW5jdGlvbiAocHJlZGljYXRlPzogKHNvdXJjZTogYW55KSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAocHJlZGljYXRlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn07XHJcbkFycmF5LnByb3RvdHlwZS5XaGVyZSA9IGZ1bmN0aW9uIChwcmVkaWNhdGU6IChzb3VyY2U6IGFueSkgPT4gYm9vbGVhbik6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKHggPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmVkaWNhdGUoeCk7XHJcbiAgICB9KTtcclxufTtcclxuQXJyYXkucHJvdG90eXBlLlNlbGVjdCA9IGZ1bmN0aW9uIDxUUmVzdWx0PiAoc2VsZWN0b3I6IChzb3VyY2U6IGFueSkgPT4gVFJlc3VsdCk6IEFycmF5PFRSZXN1bHQ+IHtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcykge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHNlbGVjdG9yKGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbkFycmF5LnByb3RvdHlwZS5PcmRlckJ5ID0gZnVuY3Rpb24gKGtleVNlbGVjdG9yOiAoc291cmNlOiBhbnkpID0+IGFueSk6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBrZXlTZWxlY3RvcihhKSA+IGtleVNlbGVjdG9yKGIpO1xyXG4gICAgfSk7XHJcbn07XHJcbkFycmF5LnByb3RvdHlwZS5PcmRlckJ5RGVzY2VuZGluZyA9IGZ1bmN0aW9uIChrZXlTZWxlY3RvcjogKHNvdXJjZTogYW55KSA9PiBhbnkpOiBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4ga2V5U2VsZWN0b3IoYikgLSBrZXlTZWxlY3RvcihhKTtcclxuICAgIH0pO1xyXG59O1xyXG5BcnJheS5wcm90b3R5cGUuRm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNhbGxiYWNrKGksIHRoaXNbaV0pO1xyXG4gICAgfVxyXG59O1xyXG5BcnJheS5wcm90b3R5cGUuUmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW06IGFueSk6IGFueSB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLmluZGV4T2YoaXRlbSk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5BcnJheS5wcm90b3R5cGUuQ29udGFpbnMgPSBmdW5jdGlvbiAocGFydGlhbDogc3RyaW5nLCBzdHJpY3Q6IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghc3RyaWN0ICYmIHRoaXNbaV0uY29udGFpbnMocGFydGlhbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHJpY3QgJiYgdGhpc1tpXSA9PT0gcGFydGlhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbkFycmF5LnByb3RvdHlwZS5JbmRleE9mUGFydGlhbCA9IGZ1bmN0aW9uIChwYXJ0aWFsOiBzdHJpbmcpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzW2ldLmNvbnRhaW5zKHBhcnRpYWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxufTtcclxuLypcclxuICogVGhlcmUgYXJlIGZyYW1ld29ya3MgdGhhdCBhdXRvLWdlbmVyYXRlIEpTT04gYmFzZWQgb24gZGF0YSBzY2hlbWFzLCBidXQgc29tZXRpbWVzIHRoZXlcclxuICogcmV0dXJuIGRhdGEgaW4gaW5jb25zaXN0ZW50IHdheXMuIEZvciBleGFtcGxlLCBhbiBhcnJheSBvZiBzdHJpbmdzIG1pZ2h0IGJlIHJldHVybmVkXHJcbiAqIGluc3RlYWQgb2YgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluaW5nIHN0cmluZ3MsIGV0Yy4gYmVjYXVzZSB0aGUgdW5kZXJseWluZyBkYXRhIGF0IHRoZSB0aW1lXHJcbiAqIG9ubHkgY290YWlucyB0aGUgc3RyaW5nIHZhbHVlLCBidXQgd2hlbiBvdGhlciBkYXRhIGlzIHByZXNlbnQgKGluIHRoZSBkYXRhYmFzZSwgZXRjLiksXHJcbiAqIGl0IHdpbGwgcmV0dXJuIHRoZSBvYmplY3QgYXJyYXkuIENlcnRhaW4gY29udmVuaWVuY2UgbWV0aG9kcyBhcmUgbmVjZXNzYXJ5IHRvIGZvcmNlIHByb3BlciBmb3JtYXR0aW5nLlxyXG4gKi9cclxuXHJcbkFycmF5LnByb3RvdHlwZS5Ub09iamVjdEFycmF5ID0gZnVuY3Rpb24gKG9iak5hbWU6IHN0cmluZyk6IEFycmF5PGFueT4ge1xyXG4gICAgaWYgKG9iak5hbWUgPT09IHVuZGVmaW5lZCB8fCBvYmpOYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogUHJvcGVydHkgbmFtZSBtdXN0IGJlIHByb3ZpZGVkIGZvciBjb252ZXJzaW9uLicpO1xyXG4gICAgfVxyXG4gICAgbGV0IGl0ZW1zOiBhbnkgPSB0aGlzO1xyXG4gICAgaWYgKHR5cGVvZiAoaXRlbXNbMF0pID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgKGl0ZW1zWzBdKSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIChpdGVtc1swXSkgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHZhbDogYW55ID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGl0ZW1zW2ldID0ge307XHJcbiAgICAgICAgICAgIGl0ZW1zW2ldW29iak5hbWVdID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59O1xyXG4iXX0=