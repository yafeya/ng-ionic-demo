/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class StringBuilder {
    constructor() {
        this.content = [];
        this.latest = null;
    }
    /**
     * @return {?}
     */
    get IsEmpty() {
        return this.content.length === 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Append(item) {
        this.AppendSingle(item);
        return this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    AppendLine(item) {
        this.AppendSingle(item);
        this.content.push('\r\n');
        return this;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    AppendLines(items) {
        items.forEach(x => {
            if (x != null) {
                this.AppendLine(x);
            }
        });
        return this;
    }
    /**
     * @return {?}
     */
    Build() {
        if (this.latest != null)
            return this.latest;
        this.latest = this.Join('');
        return this.latest;
    }
    /**
     * @param {?} delimiter
     * @return {?}
     */
    Join(delimiter) {
        return this.content.join(delimiter);
    }
    /**
     * @return {?}
     */
    toString() {
        return this.Build();
    }
    /**
     * @return {?}
     */
    Dispose() {
        this.latest = null;
        this.content = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    AppendSingle(item) {
        if (item != null) {
            this.latest = null;
            if (typeof item !== 'string') {
                this.content.push(item.toString());
            }
            else {
                this.content.push(item);
            }
        }
    }
}
if (false) {
    /** @type {?} */
    StringBuilder.prototype.content;
    /** @type {?} */
    StringBuilder.prototype.latest;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb21tb24vU3RyaW5nQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7dUJBQ2dCLEVBQUU7c0JBQ1ksSUFBSTs7Ozs7SUFFcEMsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBQ0QsTUFBTSxDQUFDLElBQVM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7O0lBQ0QsVUFBVSxDQUFDLElBQVM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQztLQUNmOzs7OztJQUNELFdBQVcsQ0FBQyxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtTQUNKLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7WUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDdEI7Ozs7O0lBQ0QsSUFBSSxDQUFDLFNBQWlCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDdkM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFDRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBQ08sWUFBWSxDQUFDLElBQVM7UUFDMUIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO1NBQ0o7O0NBRVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGlzcG9zYWJsZSB9IGZyb20gJy4vSURpc3Bvc2FibGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0J1aWxkZXIgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XHJcbiAgICBwcml2YXRlIGNvbnRlbnQgPSBbXTtcclxuICAgIHByaXZhdGUgbGF0ZXN0OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBnZXQgSXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIEFwcGVuZChpdGVtOiBhbnkpOiBTdHJpbmdCdWlsZGVyIHtcclxuICAgICAgICB0aGlzLkFwcGVuZFNpbmdsZShpdGVtKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIEFwcGVuZExpbmUoaXRlbTogYW55KTogU3RyaW5nQnVpbGRlciB7XHJcbiAgICAgICAgdGhpcy5BcHBlbmRTaW5nbGUoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LnB1c2goJ1xcclxcbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgQXBwZW5kTGluZXMoaXRlbXM6IGFueVtdKTogU3RyaW5nQnVpbGRlciB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgaWYgKHggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BcHBlbmRMaW5lKHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgQnVpbGQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5sYXRlc3QgIT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF0ZXN0O1xyXG4gICAgICAgIHRoaXMubGF0ZXN0ID0gdGhpcy5Kb2luKCcnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXRlc3Q7XHJcbiAgICB9XHJcbiAgICBKb2luKGRlbGltaXRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudC5qb2luKGRlbGltaXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQnVpbGQoKTtcclxuICAgIH1cclxuICAgIERpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYXRlc3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IFtdO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBBcHBlbmRTaW5nbGUoaXRlbTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhdGVzdCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5wdXNoKGl0ZW0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==