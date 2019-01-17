/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs/Observable';
import { EnumerableIterator } from './EnumerableIterator';
/**
 * @template T
 */
export class ObservableCollection extends Observable {
    /**
     * @param {?} array
     * @param {?=} scheduler
     */
    constructor(array, scheduler) {
        super();
        this.array = array;
        this.scheduler = scheduler;
        // console.log(array);
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.values = /** @type {?} */ (array[0]);
        }
        else {
            this._isScalar = true;
            this.values = array;
        }
    }
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    static Create(array) {
        return new ObservableCollection(/** @type {?} */ ([array]));
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static dispatch(state) {
        const { array, index, count, subscriber } = state;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        (/** @type {?} */ (this)).schedule(state);
    }
    /**
     * @return {?}
     */
    get Count() {
        return this.values.length;
    }
    /**
     * @return {?}
     */
    get Values() {
        return this.values;
    }
    /**
     * @return {?}
     */
    get Items() {
        return this.values;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Items(value) {
        this.values = value;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Add(item) {
        if (this.values) {
            this.values.push(item);
        }
    }
    /**
     * @param {?} items
     * @return {?}
     */
    AddRange(items) {
        if (items) {
            for (let item of items) {
                this.Add(item);
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Remove(item) {
        /** @type {?} */
        let index = this.values.indexOf(item);
        if (index > -1) {
            this.values.splice(index, 1);
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        return new EnumerableIterator(this);
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    _subscribe(subscriber) {
        /** @type {?} */
        let index = 0;
        /** @type {?} */
        const array = this.array;
        /** @type {?} */
        const count = array.length;
        /** @type {?} */
        const scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ObservableCollection.dispatch, 0, {
                array, index, count, subscriber
            });
        }
        else {
            //console.log(this.values);
            for (let i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[0]);
            }
            subscriber.complete();
        }
    }
}
if (false) {
    /** @type {?} */
    ObservableCollection.prototype.values;
    /** @type {?} */
    ObservableCollection.prototype.array;
    /** @type {?} */
    ObservableCollection.prototype.scheduler;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vY29sbGVjdGlvbnMvT2JzZXJ2YWJsZUNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU83QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUUxRCxNQUFNLDJCQUErQixTQUFRLFVBQWE7Ozs7O0lBK0J0RCxZQUFvQixLQUFZLEVBQVUsU0FBc0I7UUFDNUQsS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTs7UUFHNUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxxQkFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztTQUMvQjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7S0FDSjs7Ozs7O0lBdENELE1BQU0sQ0FBQyxNQUFNLENBQUksS0FBZTtRQUM1QixPQUFPLElBQUksb0JBQW9CLG1CQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztLQUNwRDs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVU7UUFFdEIsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUVsRCxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7WUFDaEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFOUIsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUV4QixtQkFBTSxJQUFJLEVBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7Ozs7SUFrQkQsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUM3Qjs7OztJQUNELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUN0Qjs7OztJQUNELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUN0Qjs7Ozs7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCOzs7OztJQUVNLEdBQUcsQ0FBQyxJQUFPO1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7Ozs7OztJQUVFLFFBQVEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksS0FBSyxFQUFFO1lBQ1AsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEI7U0FDSjs7Ozs7O0lBRUUsTUFBTSxDQUFDLElBQU87O1FBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjs7Ozs7SUFLTCxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDYixPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7Ozs7O0lBRUQsVUFBVSxDQUFDLFVBQXlCOztRQUNoQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7O1FBQ2QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7UUFDekIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7UUFDM0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVqQyxJQUFJLFNBQVMsRUFBRTtZQUNYLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO2dCQUN4RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVO2FBQ2xDLENBQUMsQ0FBQztTQUNOO2FBQU07O1lBRUgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xELFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekI7S0FDSjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IE9wZXJhdG9yIH0gZnJvbSAncnhqcy9PcGVyYXRvcic7XHJcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICdyeGpzL1N1YnNjcmliZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFRlYXJkb3duTG9naWMgfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IElTY2hlZHVsZXIsIFNjaGVkdWxlciB9IGZyb20gJ3J4anMvU2NoZWR1bGVyJztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCB7IElFbnVtZXJhYmxlIH0gZnJvbSAnLi9JRW51bWVyYWJsZSc7XHJcbmltcG9ydCB7IEVudW1lcmFibGVJdGVyYXRvciB9IGZyb20gJy4vRW51bWVyYWJsZUl0ZXJhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlQ29sbGVjdGlvbjxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBJRW51bWVyYWJsZTxUPiAge1xyXG5cclxuXHJcbiAgICBzdGF0aWMgQ3JlYXRlPFQ+KGFycmF5OiBBcnJheTxUPik6IE9ic2VydmFibGVDb2xsZWN0aW9uPFQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVDb2xsZWN0aW9uPFQ+KDxhbnk+W2FycmF5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3BhdGNoKHN0YXRlOiBhbnkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBhcnJheSwgaW5kZXgsIGNvdW50LCBzdWJzY3JpYmVyIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID49IGNvdW50KSB7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2luZGV4XSk7XHJcblxyXG4gICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5pbmRleCA9IGluZGV4ICsgMTtcclxuXHJcbiAgICAgICAgKDxhbnk+dGhpcykuc2NoZWR1bGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZhbHVlIHVzZWQgaWYgQXJyYXkgaGFzIG9uZSB2YWx1ZSBhbmQgX2lzU2NhbGFyXHJcbiAgICBwcml2YXRlIHZhbHVlczogVFtdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFycmF5OiBhbnlbXSwgcHJpdmF0ZSBzY2hlZHVsZXI/OiBJU2NoZWR1bGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgICAgICAgaWYgKCFzY2hlZHVsZXIgJiYgYXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU2NhbGFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSA8VFtdPmFycmF5WzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU2NhbGFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGdldCBWYWx1ZXMoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgSXRlbXMoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XHJcbiAgICB9XHJcbiAgICBzZXQgSXRlbXModmFsdWU6IFRbXSkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZChpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIEFkZFJhbmdlKGl0ZW1zOiBUW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXRlbXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVtb3ZlKGl0ZW06IFQpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVJdGVyYXRvcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5hcnJheTtcclxuICAgICAgICBjb25zdCBjb3VudCA9IGFycmF5Lmxlbmd0aDtcclxuICAgICAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcclxuXHJcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKE9ic2VydmFibGVDb2xsZWN0aW9uLmRpc3BhdGNoLCAwLCB7XHJcbiAgICAgICAgICAgICAgICBhcnJheSwgaW5kZXgsIGNvdW50LCBzdWJzY3JpYmVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy52YWx1ZXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=