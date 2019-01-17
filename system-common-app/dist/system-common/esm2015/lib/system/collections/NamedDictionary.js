/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class NamedDictionary {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    ContainsKey(key) {
        return this.items.hasOwnProperty(key);
    }
    /**
     * @return {?}
     */
    Count() {
        return this.count;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Add(key, value) {
        this.items[key] = value;
        this.count++;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Remove(key) {
        /** @type {?} */
        let value = this.items[key];
        delete this.items[key];
        this.count--;
        return value;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Item(key) {
        return this.items[key];
    }
    /**
     * @return {?}
     */
    Keys() {
        /** @type {?} */
        let keySet = [];
        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    }
    /**
     * @return {?}
     */
    Values() {
        /** @type {?} */
        let values = [];
        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    }
}
if (false) {
    /** @type {?} */
    NamedDictionary.prototype.items;
    /** @type {?} */
    NamedDictionary.prototype.count;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFtZWREaWN0aW9uYXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbGxlY3Rpb25zL05hbWVkRGljdGlvbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsTUFBTTs7cUJBQ3NDLEVBQUU7cUJBRTFCLENBQUM7Ozs7OztJQUVWLFdBQVcsQ0FBQyxHQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7O0lBR25DLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7SUFHZixHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVE7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7SUFHVixNQUFNLENBQUMsR0FBVzs7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsT0FBTyxLQUFLLENBQUM7Ozs7OztJQUdWLElBQUksQ0FBQyxHQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFHcEIsSUFBSTs7UUFDUCxJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFFMUIsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDOzs7OztJQUdYLE1BQU07O1FBQ1QsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXJCLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNqQztTQUNKO1FBRUQsT0FBTyxNQUFNLENBQUM7O0NBRXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5hbWVkRGljdGlvbmFyeSB9IGZyb20gJy4vSU5hbWVkRGljdGlvbmFyeSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5hbWVkRGljdGlvbmFyeTxUPiBpbXBsZW1lbnRzIElOYW1lZERpY3Rpb25hcnk8VD4ge1xyXG4gICAgcHJpdmF0ZSBpdGVtczogeyBbaW5kZXg6IHN0cmluZ106IFQgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgY291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBDb250YWluc0tleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZChrZXk6IHN0cmluZywgdmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLml0ZW1zW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZShrZXk6IHN0cmluZyk6IFQge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuaXRlbXNba2V5XTtcclxuICAgICAgICBkZWxldGUgdGhpcy5pdGVtc1trZXldO1xyXG4gICAgICAgIHRoaXMuY291bnQtLTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEl0ZW0oa2V5OiBzdHJpbmcpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBLZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQga2V5U2V0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIGtleVNldC5wdXNoKHByb3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga2V5U2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBWYWx1ZXMoKTogVFtdIHtcclxuICAgICAgICBsZXQgdmFsdWVzOiBUW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLml0ZW1zW3Byb3BdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxufSJdfQ==