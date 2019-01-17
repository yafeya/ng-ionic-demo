/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class Guid {
    /**
     * @param {?} value
     */
    constructor(value) {
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
    /**
     * @return {?}
     */
    get Value() {
        return this.value;
    }
    /**
     * @return {?}
     */
    IsEmpty() {
        return this.value === Guid.Empty;
    }
    /**
     * @return {?}
     */
    ToString() {
        return this.value;
    }
    /**
     * @return {?}
     */
    ToJson() {
        return this.value;
    }
    /**
     * @param {?} count
     * @return {?}
     */
    static Generate(count) {
        /** @type {?} */
        let out = '';
        for (let i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    }
    /**
     * @return {?}
     */
    static New() {
        return new Guid([Guid.Generate(2), Guid.Generate(1), Guid.Generate(1), Guid.Generate(1), Guid.Generate(3)].join('-'));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static IsGuid(value) {
        return value && (value instanceof Guid || Guid.Validator.test(value.toString()));
    }
}
Guid.Empty = '00000000-0000-0000-0000-000000000000';
Guid.Validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
if (false) {
    /** @type {?} */
    Guid.Empty;
    /** @type {?} */
    Guid.Validator;
    /** @type {?} */
    Guid.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb21tb24vR3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTTs7OztJQUtGLFlBQVksS0FBVTtRQUNsQixJQUFJLENBQUMsS0FBSztZQUNOLE1BQU0sSUFBSSxTQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEIsSUFBSSxLQUFLLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFDLEtBQWEsRUFBQyxDQUFDLEtBQUssQ0FBQztTQUN0QzthQUFNLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25HLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0tBQ0o7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDckI7Ozs7SUFDRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDcEM7Ozs7SUFDRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBQ0QsTUFBTTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNyQjs7Ozs7SUFFTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUs7O1FBQ3pCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxHQUFHLENBQUM7Ozs7O0lBRWYsTUFBTSxDQUFDLEdBQUc7UUFDTixPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDekg7Ozs7O0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFVO1FBQ3BCLE9BQU8sS0FBSyxJQUFJLENBQUMsS0FBSyxZQUFZLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3BGOzthQTFDYyxzQ0FBc0M7aUJBQ2xDLElBQUksTUFBTSxDQUFDLGdFQUFnRSxFQUFFLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgR3VpZCB7XHJcbiAgICBzdGF0aWMgRW1wdHkgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcclxuICAgIHN0YXRpYyBWYWxpZGF0b3IgPSBuZXcgUmVnRXhwKCdeW2EtejAtOV17OH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17MTJ9JCcsICdpJyk7XHJcbiAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICghdmFsdWUpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQ7IGB2YWx1ZWAgaGFzIG5vIHZhbHVlLicpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gR3VpZC5FbXB0eTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgR3VpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gKHZhbHVlIGFzIEd1aWQpLlZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScgJiYgR3VpZC5Jc0d1aWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICBJc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBHdWlkLkVtcHR5O1xyXG4gICAgfVxyXG4gICAgVG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuICAgIFRvSnNvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEdlbmVyYXRlKGNvdW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgb3V0ID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG91dCArPSAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgTmV3KCk6IEd1aWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3VpZChbR3VpZC5HZW5lcmF0ZSgyKSwgR3VpZC5HZW5lcmF0ZSgxKSwgR3VpZC5HZW5lcmF0ZSgxKSwgR3VpZC5HZW5lcmF0ZSgxKSwgR3VpZC5HZW5lcmF0ZSgzKV0uam9pbignLScpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBJc0d1aWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUgaW5zdGFuY2VvZiBHdWlkIHx8IEd1aWQuVmFsaWRhdG9yLnRlc3QodmFsdWUudG9TdHJpbmcoKSkpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==