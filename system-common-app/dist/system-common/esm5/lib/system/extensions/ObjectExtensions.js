/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} value
 * @return {?}
 */
export function IsDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
export function IsObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
export function MergeDeep(target, source) {
    target = JSON.parse(JSON.stringify(target));
    source = JSON.parse(JSON.stringify(source));
    /** @type {?} */
    var output = Object.assign({}, target);
    if (IsObject(target) && IsObject(source)) {
        Object.keys(source).forEach(function (key) {
            var _a, _b;
            if (IsObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = MergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
        });
    }
    return output;
}
/**
 * Clone given object
 * @param {?} source
 * @return {?}
 */
export function Clone(source) {
    if (!source) {
        return source;
    }
    return JSON.parse(JSON.stringify(source));
}
/**
 *
 * @param {?} source
 * @param {?} target
 * @return {?}
 */
export function CompareProperties(source, target) {
    var e_1, _a;
    if (source === undefined && target === undefined) {
        return true;
    }
    if (Object.prototype.toString.call(source) === '[object Array]') {
        /** @type {?} */
        var arrayX = /** @type {?} */ (source);
        /** @type {?} */
        var arrayY = /** @type {?} */ (target);
        if (arrayX.length !== arrayY.length) {
            return false;
        }
        for (var index = 0; index < arrayX.length; index++) {
            console.log(arrayX[index]);
            console.log(arrayY[index]);
            if (CompareProperties(arrayX[index], arrayY[index] === false)) {
                return false;
            }
        }
    }
    else {
        /** @type {?} */
        var names = Object.getOwnPropertyNames(source);
        try {
            // console.log(names);
            for (var names_1 = tslib_1.__values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
                var name_1 = names_1_1.value;
                /** @type {?} */
                var property = Object.getOwnPropertyDescriptor(target, name_1);
                if (!property) {
                    return false;
                }
                else {
                    if (Object.prototype.toString.call(source) === '[object Array]') {
                        if (CompareProperties(property.value, source[name_1] === false)) {
                            return false;
                        }
                    }
                    else if (property.value !== source[name_1] && property.value.toString() !== source[name_1].toString()) {
                        // console.log(`Property ${name} ${typeof property.value}: '${property.value}', '${source[name]}'`);
                        return false;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return true;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0RXh0ZW5zaW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9leHRlbnNpb25zL09iamVjdEV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsTUFBTSxvQkFBb0IsS0FBVTtJQUNoQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0NBQ3pEOzs7OztBQUVELE1BQU0sbUJBQW1CLElBQVM7SUFDOUIsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDckU7Ozs7OztBQUVELE1BQU0sb0JBQW9CLE1BQVcsRUFBRSxNQUFXO0lBQzlDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0lBQzVDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVE7O1lBQ2pDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUU7b0JBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFJLEdB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ZiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZnVuY3Rpb24gSXNEZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXNPYmplY3QoaXRlbTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lcmdlRGVlcCh0YXJnZXQ6IGFueSwgc291cmNlOiBhbnkpOiBhbnkge1xyXG4gICAgdGFyZ2V0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0YXJnZXQpKTtcclxuICAgIHNvdXJjZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XHJcbiAgICBsZXQgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcclxuICAgIGlmIChJc09iamVjdCh0YXJnZXQpICYmIElzT2JqZWN0KHNvdXJjZSkpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChJc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IE1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbi8qKlxyXG4gKiBDbG9uZSBnaXZlbiBvYmplY3RcclxuICogQHBhcmFtIHNvdXJjZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDbG9uZShzb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcclxufVxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEBwYXJhbSB0YXJnZXQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29tcGFyZVByb3BlcnRpZXMoc291cmNlOiBhbnksIHRhcmdldDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQgJiYgdGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc291cmNlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xyXG4gICAgICAgIGxldCBhcnJheVggPSBzb3VyY2UgYXMgQXJyYXk8YW55PjtcclxuICAgICAgICBsZXQgYXJyYXlZID0gdGFyZ2V0IGFzIEFycmF5PGFueT47XHJcbiAgICAgICAgaWYgKGFycmF5WC5sZW5ndGggIT09IGFycmF5WS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5WC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlYW2luZGV4XSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5WVtpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKENvbXBhcmVQcm9wZXJ0aWVzKGFycmF5WFtpbmRleF0sIGFycmF5WVtpbmRleF0gPT09IGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lcyk7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc291cmNlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDb21wYXJlUHJvcGVydGllcyhwcm9wZXJ0eS52YWx1ZSwgc291cmNlW25hbWVdID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkudmFsdWUgIT09IHNvdXJjZVtuYW1lXSAmJiBwcm9wZXJ0eS52YWx1ZS50b1N0cmluZygpICE9PSBzb3VyY2VbbmFtZV0udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQcm9wZXJ0eSAke25hbWV9ICR7dHlwZW9mIHByb3BlcnR5LnZhbHVlfTogJyR7cHJvcGVydHkudmFsdWV9JywgJyR7c291cmNlW25hbWVdfSdgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSJdfQ==