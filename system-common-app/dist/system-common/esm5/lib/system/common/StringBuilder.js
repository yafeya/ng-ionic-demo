/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StringBuilder = /** @class */ (function () {
    function StringBuilder() {
        this.content = [];
        this.latest = null;
    }
    Object.defineProperty(StringBuilder.prototype, "IsEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.content.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    StringBuilder.prototype.Append = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.AppendSingle(item);
        return this;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StringBuilder.prototype.AppendLine = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.AppendSingle(item);
        this.content.push('\r\n');
        return this;
    };
    /**
     * @param {?} items
     * @return {?}
     */
    StringBuilder.prototype.AppendLines = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        items.forEach(function (x) {
            if (x != null) {
                _this.AppendLine(x);
            }
        });
        return this;
    };
    /**
     * @return {?}
     */
    StringBuilder.prototype.Build = /**
     * @return {?}
     */
    function () {
        if (this.latest != null)
            return this.latest;
        this.latest = this.Join('');
        return this.latest;
    };
    /**
     * @param {?} delimiter
     * @return {?}
     */
    StringBuilder.prototype.Join = /**
     * @param {?} delimiter
     * @return {?}
     */
    function (delimiter) {
        return this.content.join(delimiter);
    };
    /**
     * @return {?}
     */
    StringBuilder.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.Build();
    };
    /**
     * @return {?}
     */
    StringBuilder.prototype.Dispose = /**
     * @return {?}
     */
    function () {
        this.latest = null;
        this.content = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StringBuilder.prototype.AppendSingle = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item != null) {
            this.latest = null;
            if (typeof item !== 'string') {
                this.content.push(item.toString());
            }
            else {
                this.content.push(item);
            }
        }
    };
    return StringBuilder;
}());
export { StringBuilder };
if (false) {
    /** @type {?} */
    StringBuilder.prototype.content;
    /** @type {?} */
    StringBuilder.prototype.latest;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb21tb24vU3RyaW5nQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsSUFBQTs7dUJBQ3NCLEVBQUU7c0JBQ1ksSUFBSTs7SUFFcEMsc0JBQUksa0NBQU87Ozs7UUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7T0FBQTs7Ozs7SUFDRCw4QkFBTTs7OztJQUFOLFVBQU8sSUFBUztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7SUFDRCxrQ0FBVTs7OztJQUFWLFVBQVcsSUFBUztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7O0lBQ0QsbUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVk7UUFBeEIsaUJBT0M7UUFORyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7S0FDZjs7OztJQUVELDZCQUFLOzs7SUFBTDtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJO1lBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3RCOzs7OztJQUNELDRCQUFJOzs7O0lBQUosVUFBSyxTQUFpQjtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFDRCwrQkFBTzs7O0lBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFDTyxvQ0FBWTs7OztjQUFDLElBQVM7UUFDMUIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO1NBQ0o7O3dCQXBEVDtJQXNEQyxDQUFBO0FBcERELHlCQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEaXNwb3NhYmxlIH0gZnJvbSAnLi9JRGlzcG9zYWJsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nQnVpbGRlciBpbXBsZW1lbnRzIElEaXNwb3NhYmxlIHtcclxuICAgIHByaXZhdGUgY29udGVudCA9IFtdO1xyXG4gICAgcHJpdmF0ZSBsYXRlc3Q6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGdldCBJc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgQXBwZW5kKGl0ZW06IGFueSk6IFN0cmluZ0J1aWxkZXIge1xyXG4gICAgICAgIHRoaXMuQXBwZW5kU2luZ2xlKGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgQXBwZW5kTGluZShpdGVtOiBhbnkpOiBTdHJpbmdCdWlsZGVyIHtcclxuICAgICAgICB0aGlzLkFwcGVuZFNpbmdsZShpdGVtKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQucHVzaCgnXFxyXFxuJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBBcHBlbmRMaW5lcyhpdGVtczogYW55W10pOiBTdHJpbmdCdWlsZGVyIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICBpZiAoeCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFwcGVuZExpbmUoeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBCdWlsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmxhdGVzdCAhPSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXRlc3Q7XHJcbiAgICAgICAgdGhpcy5sYXRlc3QgPSB0aGlzLkpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhdGVzdDtcclxuICAgIH1cclxuICAgIEpvaW4oZGVsaW1pdGVyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50LmpvaW4oZGVsaW1pdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5CdWlsZCgpO1xyXG4gICAgfVxyXG4gICAgRGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxhdGVzdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gW107XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEFwcGVuZFNpbmdsZShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF0ZXN0ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnB1c2goaXRlbS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19