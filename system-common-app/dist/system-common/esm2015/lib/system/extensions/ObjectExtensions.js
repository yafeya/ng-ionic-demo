/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    let output = Object.assign({}, target);
    if (IsObject(target) && IsObject(source)) {
        Object.keys(source).forEach((key) => {
            if (IsObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                }
                else {
                    output[key] = MergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, { [key]: source[key] });
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
    if (source === undefined && target === undefined) {
        return true;
    }
    if (Object.prototype.toString.call(source) === '[object Array]') {
        /** @type {?} */
        let arrayX = /** @type {?} */ (source);
        /** @type {?} */
        let arrayY = /** @type {?} */ (target);
        if (arrayX.length !== arrayY.length) {
            return false;
        }
        for (let index = 0; index < arrayX.length; index++) {
            console.log(arrayX[index]);
            console.log(arrayY[index]);
            if (CompareProperties(arrayX[index], arrayY[index] === false)) {
                return false;
            }
        }
    }
    else {
        /** @type {?} */
        let names = Object.getOwnPropertyNames(source);
        // console.log(names);
        for (let name of names) {
            /** @type {?} */
            let property = Object.getOwnPropertyDescriptor(target, name);
            if (!property) {
                return false;
            }
            else {
                if (Object.prototype.toString.call(source) === '[object Array]') {
                    if (CompareProperties(property.value, source[name] === false)) {
                        return false;
                    }
                }
                else if (property.value !== source[name] && property.value.toString() !== source[name].toString()) {
                    // console.log(`Property ${name} ${typeof property.value}: '${property.value}', '${source[name]}'`);
                    return false;
                }
            }
        }
    }
    return true;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0RXh0ZW5zaW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9leHRlbnNpb25zL09iamVjdEV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxNQUFNLG9CQUFvQixLQUFVO0lBQ2hDLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7Q0FDekQ7Ozs7O0FBRUQsTUFBTSxtQkFBbUIsSUFBUztJQUM5QixPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztDQUNyRTs7Ozs7O0FBRUQsTUFBTSxvQkFBb0IsTUFBVyxFQUFFLE1BQVc7SUFDOUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7SUFDNUMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRTtvQkFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFN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XG5leHBvcnQgZnVuY3Rpb24gSXNEZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXNPYmplY3QoaXRlbTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lcmdlRGVlcCh0YXJnZXQ6IGFueSwgc291cmNlOiBhbnkpOiBhbnkge1xyXG4gICAgdGFyZ2V0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0YXJnZXQpKTtcclxuICAgIHNvdXJjZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XHJcbiAgICBsZXQgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcclxuICAgIGlmIChJc09iamVjdCh0YXJnZXQpICYmIElzT2JqZWN0KHNvdXJjZSkpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChJc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IE1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbi8qKlxyXG4gKiBDbG9uZSBnaXZlbiBvYmplY3RcclxuICogQHBhcmFtIHNvdXJjZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDbG9uZShzb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcclxufVxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEBwYXJhbSB0YXJnZXQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29tcGFyZVByb3BlcnRpZXMoc291cmNlOiBhbnksIHRhcmdldDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQgJiYgdGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc291cmNlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xyXG4gICAgICAgIGxldCBhcnJheVggPSBzb3VyY2UgYXMgQXJyYXk8YW55PjtcclxuICAgICAgICBsZXQgYXJyYXlZID0gdGFyZ2V0IGFzIEFycmF5PGFueT47XHJcbiAgICAgICAgaWYgKGFycmF5WC5sZW5ndGggIT09IGFycmF5WS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5WC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlYW2luZGV4XSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5WVtpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKENvbXBhcmVQcm9wZXJ0aWVzKGFycmF5WFtpbmRleF0sIGFycmF5WVtpbmRleF0gPT09IGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lcyk7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc291cmNlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDb21wYXJlUHJvcGVydGllcyhwcm9wZXJ0eS52YWx1ZSwgc291cmNlW25hbWVdID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkudmFsdWUgIT09IHNvdXJjZVtuYW1lXSAmJiBwcm9wZXJ0eS52YWx1ZS50b1N0cmluZygpICE9PSBzb3VyY2VbbmFtZV0udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQcm9wZXJ0eSAke25hbWV9ICR7dHlwZW9mIHByb3BlcnR5LnZhbHVlfTogJyR7cHJvcGVydHkudmFsdWV9JywgJyR7c291cmNlW25hbWVdfSdgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSJdfQ==