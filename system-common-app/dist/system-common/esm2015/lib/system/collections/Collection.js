/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Enumerable } from './Enumerable';
/**
 * @template T
 */
export class Collection extends Enumerable {
    /**
     * Get whether collection is readonly
     * @return {?}
     */
    get IsReadOnly() {
        return false;
    }
    /**
     * Add item to collection
     * @param {?} item
     * @return {?}
     */
    Add(item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        this.Items.push(item);
    }
    /**
     * Add items to collection
     * @param {?} items
     * @return {?}
     */
    AddRange(items) {
        if (!items)
            throw new Error(`Argument 'items' is null.`);
        for (let item of items) {
            this.Add(item);
        }
    }
    /**
     * Clear collection
     * @return {?}
     */
    Clear() {
        this.Items = [];
    }
    /**
     * Determines whether collection contains a specific item
     * @param {?} item
     * @return {?}
     */
    Contains(item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        return this.Items.indexOf(item) > -1;
    }
    /**
     * Remove item from collection
     * @param {?} item
     * @return {?}
     */
    Remove(item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        /** @type {?} */
        let index = this.Items.indexOf(item);
        if (index > -1) {
            this.Items.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Copy elements to an array starting at a particular index
     * \@array
     * \@arrayIndex The zero-based index in array at which copying begins.
     * @param {?} array
     * @param {?} arrayIndex
     * @return {?}
     */
    CopyTo(array, arrayIndex) {
        if (!array)
            throw new Error(`Argument 'array' is null.`);
        if (arrayIndex < 0 || arrayIndex > array.length)
            throw new Error(`Argument 'arrayIndex' is out of range.`);
        /** @type {?} */
        let index = arrayIndex;
        for (let item of this.Items) {
            array.splice(index++, 0, item);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb2xsZWN0aW9ucy9Db2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBRzFDLE1BQU0saUJBQXFCLFNBQVEsVUFBYTs7Ozs7SUFHNUMsSUFBSSxVQUFVO1FBQ1YsT0FBTyxLQUFLLENBQUM7S0FDaEI7Ozs7OztJQUdELEdBQUcsQ0FBQyxJQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUk7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2YsSUFBSSxDQUFDLEtBQUs7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFakQsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtLQUNKOzs7OztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNuQjs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQU87UUFDWixJQUFJLENBQUMsSUFBSTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVoRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3hDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBTztRQUNWLElBQUksQ0FBQyxJQUFJO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztRQUVoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKOzs7Ozs7Ozs7SUFLRCxNQUFNLENBQUMsS0FBVSxFQUFFLFVBQWtCO1FBQ2pDLElBQUksQ0FBQyxLQUFLO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ2pELElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOztRQUU5RCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDdkIsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0tBRUo7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1lcmFibGUgfSBmcm9tICcuL0VudW1lcmFibGUnO1xyXG5pbXBvcnQgeyBJQ29sbGVjdGlvbiB9IGZyb20gJy4vSUNvbGxlY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb248VD4gZXh0ZW5kcyBFbnVtZXJhYmxlPFQ+IGltcGxlbWVudHMgSUNvbGxlY3Rpb248VD4geyAgXHJcblxyXG4gICAgLyoqIEdldCB3aGV0aGVyIGNvbGxlY3Rpb24gaXMgcmVhZG9ubHkgKi9cclxuICAgIGdldCBJc1JlYWRPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQWRkIGl0ZW0gdG8gY29sbGVjdGlvbiAqL1xyXG4gICAgQWRkKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgJ2l0ZW0nIGlzIG51bGwuYCk7XHJcblxyXG4gICAgICAgIHRoaXMuSXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIC8qKiBBZGQgaXRlbXMgdG8gY29sbGVjdGlvbiAqL1xyXG4gICAgQWRkUmFuZ2UoaXRlbXM6IFRbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghaXRlbXMpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgJ2l0ZW1zJyBpcyBudWxsLmApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBDbGVhciBjb2xsZWN0aW9uICovXHJcbiAgICBDbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkl0ZW1zID0gW107XHJcbiAgICB9XHJcbiAgICAvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIGNvbGxlY3Rpb24gY29udGFpbnMgYSBzcGVjaWZpYyBpdGVtICovXHJcbiAgICBDb250YWlucyhpdGVtOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50ICdpdGVtJyBpcyBudWxsLmApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5JdGVtcy5pbmRleE9mKGl0ZW0pID4gLTE7XHJcbiAgICB9XHJcbiAgICAvKiogUmVtb3ZlIGl0ZW0gZnJvbSBjb2xsZWN0aW9uICovXHJcbiAgICBSZW1vdmUoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCAnaXRlbScgaXMgbnVsbC5gKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5JdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBDb3B5IGVsZW1lbnRzIHRvIGFuIGFycmF5IHN0YXJ0aW5nIGF0IGEgcGFydGljdWxhciBpbmRleFxyXG4gICAgICogQGFycmF5XHJcbiAgICAgKiBAYXJyYXlJbmRleCBUaGUgemVyby1iYXNlZCBpbmRleCBpbiBhcnJheSBhdCB3aGljaCBjb3B5aW5nIGJlZ2lucy5cclxuICAgICAqL1xyXG4gICAgQ29weVRvKGFycmF5OiBUW10sIGFycmF5SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghYXJyYXkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgJ2FycmF5JyBpcyBudWxsLmApO1xyXG4gICAgICAgIGlmIChhcnJheUluZGV4IDwgMCB8fCBhcnJheUluZGV4ID4gYXJyYXkubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50ICdhcnJheUluZGV4JyBpcyBvdXQgb2YgcmFuZ2UuYCk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5SW5kZXg7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLkl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCsrLCAwLCBpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il19