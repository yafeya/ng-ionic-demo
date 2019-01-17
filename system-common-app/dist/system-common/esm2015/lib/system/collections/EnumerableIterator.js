/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class EnumerableIterator {
    /**
     * @param {?} enumerable
     */
    constructor(enumerable) {
        this.enumerable = enumerable;
        this.pointer = 0;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    next(value) {
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
    }
}
if (false) {
    /** @type {?} */
    EnumerableIterator.prototype.pointer;
    /** @type {?} */
    EnumerableIterator.prototype.enumerable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bWVyYWJsZUl0ZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbGxlY3Rpb25zL0VudW1lcmFibGVJdGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTTs7OztJQUdGLFlBQW9CLFVBQTBCO1FBQTFCLGVBQVUsR0FBVixVQUFVLENBQWdCO3VCQUY1QixDQUFDO0tBSWxCOzs7OztJQUVELElBQUksQ0FBQyxLQUFXO1FBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQ3RDLE9BQU87Z0JBQ0gsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQyxDQUFDO1NBQ0w7YUFBTTtZQUNILE9BQU87Z0JBQ0gsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0w7S0FDSjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUVudW1lcmFibGUgfSBmcm9tICcuL0lFbnVtZXJhYmxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnVtZXJhYmxlSXRlcmF0b3I8VD4gaW1wbGVtZW50cyBJdGVyYXRvcjxUPntcclxuICAgIHByaXZhdGUgcG9pbnRlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbnVtZXJhYmxlOiBJRW51bWVyYWJsZTxUPikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZXh0KHZhbHVlPzogYW55KTogSXRlcmF0b3JSZXN1bHQ8VD4geyAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wb2ludGVyIDwgdGhpcy5lbnVtZXJhYmxlLkNvdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmVudW1lcmFibGUuSXRlbXNbdGhpcy5wb2ludGVyKytdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==