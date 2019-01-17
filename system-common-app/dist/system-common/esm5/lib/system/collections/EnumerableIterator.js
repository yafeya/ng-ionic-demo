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
EnumerableIterator = /** @class */ (function () {
    function EnumerableIterator(enumerable) {
        this.enumerable = enumerable;
        this.pointer = 0;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    EnumerableIterator.prototype.next = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.pointer < this.enumerable.Count) {
            return {
                done: false,
                value: this.enumerable.Items[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    };
    return EnumerableIterator;
}());
/**
 * @template T
 */
export { EnumerableIterator };
if (false) {
    /** @type {?} */
    EnumerableIterator.prototype.pointer;
    /** @type {?} */
    EnumerableIterator.prototype.enumerable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bWVyYWJsZUl0ZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbGxlY3Rpb25zL0VudW1lcmFibGVJdGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7OztBQUFBO0lBR0ksNEJBQW9CLFVBQTBCO1FBQTFCLGVBQVUsR0FBVixVQUFVLENBQWdCO3VCQUY1QixDQUFDO0tBSWxCOzs7OztJQUVELGlDQUFJOzs7O0lBQUosVUFBSyxLQUFXO1FBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQ3RDLE9BQU87Z0JBQ0gsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQyxDQUFDO1NBQ0w7YUFBTTtZQUNILE9BQU87Z0JBQ0gsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0w7S0FDSjs2QkFyQkw7SUFzQkMsQ0FBQTs7OztBQXBCRCw4QkFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRW51bWVyYWJsZSB9IGZyb20gJy4vSUVudW1lcmFibGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudW1lcmFibGVJdGVyYXRvcjxUPiBpbXBsZW1lbnRzIEl0ZXJhdG9yPFQ+e1xyXG4gICAgcHJpdmF0ZSBwb2ludGVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVudW1lcmFibGU6IElFbnVtZXJhYmxlPFQ+KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5leHQodmFsdWU/OiBhbnkpOiBJdGVyYXRvclJlc3VsdDxUPiB7ICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXIgPCB0aGlzLmVudW1lcmFibGUuQ291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZW51bWVyYWJsZS5JdGVtc1t0aGlzLnBvaW50ZXIrK11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19