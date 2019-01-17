/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Guid = /** @class */ (function () {
    function Guid(value) {
        if (!value)
            throw new TypeError('Invalid argument; `value` has no value.');
        this.value = Guid.Empty;
        if (value && value instanceof Guid) {
            this.value = (/** @type {?} */ (value)).Value;
        }
        else if (value && Object.prototype.toString.call(value) === '[object String]' && Guid.IsGuid(value)) {
            this.value = value;
        }
    }
    Object.defineProperty(Guid.prototype, "Value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Guid.prototype.IsEmpty = /**
     * @return {?}
     */
    function () {
        return this.value === Guid.Empty;
    };
    /**
     * @return {?}
     */
    Guid.prototype.ToString = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @return {?}
     */
    Guid.prototype.ToJson = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @param {?} count
     * @return {?}
     */
    Guid.Generate = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        /** @type {?} */
        var out = '';
        for (var i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    };
    /**
     * @return {?}
     */
    Guid.New = /**
     * @return {?}
     */
    function () {
        return new Guid([Guid.Generate(2), Guid.Generate(1), Guid.Generate(1), Guid.Generate(1), Guid.Generate(3)].join('-'));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Guid.IsGuid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value && (value instanceof Guid || Guid.Validator.test(value.toString()));
    };
    Guid.Empty = '00000000-0000-0000-0000-000000000000';
    Guid.Validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
    return Guid;
}());
export { Guid };
if (false) {
    /** @type {?} */
    Guid.Empty;
    /** @type {?} */
    Guid.Validator;
    /** @type {?} */
    Guid.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb21tb24vR3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztJQU1JLGNBQVksS0FBVTtRQUNsQixJQUFJLENBQUMsS0FBSztZQUNOLE1BQU0sSUFBSSxTQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEIsSUFBSSxLQUFLLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFDLEtBQWEsRUFBQyxDQUFDLEtBQUssQ0FBQztTQUN0QzthQUFNLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25HLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0tBQ0o7SUFFRCxzQkFBSSx1QkFBSzs7OztRQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JCOzs7T0FBQTs7OztJQUNELHNCQUFPOzs7SUFBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3BDOzs7O0lBQ0QsdUJBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBQ0QscUJBQU07OztJQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCOzs7OztJQUVjLGFBQVE7Ozs7Y0FBQyxLQUFLOztRQUN6QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUNELE9BQU8sR0FBRyxDQUFDOzs7OztJQUVSLFFBQUc7OztJQUFWO1FBQ0ksT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3pIOzs7OztJQUNNLFdBQU07Ozs7SUFBYixVQUFjLEtBQVU7UUFDcEIsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLFlBQVksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDcEY7aUJBMUNjLHNDQUFzQztxQkFDbEMsSUFBSSxNQUFNLENBQUMsZ0VBQWdFLEVBQUUsR0FBRyxDQUFDO2VBSHhHOztTQUNhLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIEd1aWQge1xyXG4gICAgc3RhdGljIEVtcHR5ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XHJcbiAgICBzdGF0aWMgVmFsaWRhdG9yID0gbmV3IFJlZ0V4cCgnXlthLXowLTldezh9LVthLXowLTldezR9LVthLXowLTldezR9LVthLXowLTldezR9LVthLXowLTldezEyfSQnLCAnaScpO1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGFyZ3VtZW50OyBgdmFsdWVgIGhhcyBubyB2YWx1ZS4nKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IEd1aWQuRW1wdHk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEd1aWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICh2YWx1ZSBhcyBHdWlkKS5WYWx1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nICYmIEd1aWQuSXNHdWlkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgSXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gR3VpZC5FbXB0eTtcclxuICAgIH1cclxuICAgIFRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICBUb0pzb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZW5lcmF0ZShjb3VudCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG91dCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBvdXQgKz0gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIE5ldygpOiBHdWlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEd1aWQoW0d1aWQuR2VuZXJhdGUoMiksIEd1aWQuR2VuZXJhdGUoMSksIEd1aWQuR2VuZXJhdGUoMSksIEd1aWQuR2VuZXJhdGUoMSksIEd1aWQuR2VuZXJhdGUoMyldLmpvaW4oJy0nKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgSXNHdWlkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlIGluc3RhbmNlb2YgR3VpZCB8fCBHdWlkLlZhbGlkYXRvci50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpKTtcclxuICAgIH1cclxuXHJcbn0iXX0=