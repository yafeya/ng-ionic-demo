/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
NamedDictionary = /** @class */ (function () {
    function NamedDictionary() {
        this.items = {};
        this.count = 0;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    NamedDictionary.prototype.ContainsKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.items.hasOwnProperty(key);
    };
    /**
     * @return {?}
     */
    NamedDictionary.prototype.Count = /**
     * @return {?}
     */
    function () {
        return this.count;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NamedDictionary.prototype.Add = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.items[key] = value;
        this.count++;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    NamedDictionary.prototype.Remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = this.items[key];
        delete this.items[key];
        this.count--;
        return value;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    NamedDictionary.prototype.Item = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.items[key];
    };
    /**
     * @return {?}
     */
    NamedDictionary.prototype.Keys = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    /**
     * @return {?}
     */
    NamedDictionary.prototype.Values = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return NamedDictionary;
}());
/**
 * @template T
 */
export { NamedDictionary };
if (false) {
    /** @type {?} */
    NamedDictionary.prototype.items;
    /** @type {?} */
    NamedDictionary.prototype.count;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFtZWREaWN0aW9uYXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbGxlY3Rpb25zL05hbWVkRGljdGlvbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7OztBQUFBOztxQkFDNEMsRUFBRTtxQkFFMUIsQ0FBQzs7Ozs7O0lBRVYscUNBQVc7Ozs7Y0FBQyxHQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7O0lBR25DLCtCQUFLOzs7O1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDOzs7Ozs7O0lBR2YsNkJBQUc7Ozs7O2NBQUMsR0FBVyxFQUFFLEtBQVE7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7SUFHVixnQ0FBTTs7OztjQUFDLEdBQVc7O1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLE9BQU8sS0FBSyxDQUFDOzs7Ozs7SUFHViw4QkFBSTs7OztjQUFDLEdBQVc7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUdwQiw4QkFBSTs7Ozs7UUFDUCxJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFFMUIsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDOzs7OztJQUdYLGdDQUFNOzs7OztRQUNULElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUVyQixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDakM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDOzswQkFyRHRCO0lBdURDLENBQUE7Ozs7QUFwREQsMkJBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5hbWVkRGljdGlvbmFyeSB9IGZyb20gJy4vSU5hbWVkRGljdGlvbmFyeSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5hbWVkRGljdGlvbmFyeTxUPiBpbXBsZW1lbnRzIElOYW1lZERpY3Rpb25hcnk8VD4ge1xyXG4gICAgcHJpdmF0ZSBpdGVtczogeyBbaW5kZXg6IHN0cmluZ106IFQgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgY291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBDb250YWluc0tleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZChrZXk6IHN0cmluZywgdmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLml0ZW1zW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZShrZXk6IHN0cmluZyk6IFQge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuaXRlbXNba2V5XTtcclxuICAgICAgICBkZWxldGUgdGhpcy5pdGVtc1trZXldO1xyXG4gICAgICAgIHRoaXMuY291bnQtLTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEl0ZW0oa2V5OiBzdHJpbmcpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBLZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQga2V5U2V0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIGtleVNldC5wdXNoKHByb3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga2V5U2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBWYWx1ZXMoKTogVFtdIHtcclxuICAgICAgICBsZXQgdmFsdWVzOiBUW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLml0ZW1zW3Byb3BdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxufSJdfQ==