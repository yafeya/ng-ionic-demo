/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as Collections from '../collections/index';
import { Injectable } from '@angular/core';
export class MessageMediator {
    constructor() {
        this.mediators = new Collections.Dictionary();
    }
    /**
     * @return {?}
     */
    get Mediators() {
        return this.mediators;
    }
    /**
     * Register an event
     * @param {?} topic
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    RegisterHandler(topic, id, action) {
        /** @type {?} */
        let values = this.mediators.Item(topic);
        if (values == null) {
            values = new Collections.Dictionary();
            this.mediators.Add(topic, values);
        }
        values.Add(id, action);
        return this;
    }
    /**
     * Unregister an event
     * @param {?} topic
     * @param {?} id
     * @return {?}
     */
    UnregisterHandler(topic, id) {
        /** @type {?} */
        let values = this.mediators.Item(topic);
        if (values != null) {
            values.Remove(id);
            if (values.Count === 0) {
                this.mediators.Remove(topic);
            }
        }
        return this;
    }
    /**
     * @template T
     * @param {?} topic
     * @param {?=} message
     * @return {?}
     */
    SendMessage(topic, message) {
        /** @type {?} */
        let result = true;
        /** @type {?} */
        let values = this.mediators.Item(topic);
        if (values != null) {
            for (let item of values.Values()) {
                try {
                    item.Invoke(message);
                }
                catch (error) {
                    result = false;
                }
            }
        }
        return result;
    }
}
MessageMediator.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    MessageMediator.prototype.mediators;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZU1lZGlhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL21lc3NhZ2UtbWVkaWF0b3IvTWVzc2FnZU1lZGlhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEtBQUssV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTTs7eUJBQ2tCLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBMkQ7Ozs7O0lBRXpHLElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN6Qjs7Ozs7Ozs7SUFLRCxlQUFlLENBQUMsS0FBYSxFQUFFLEVBQVUsRUFBRSxNQUF1Qjs7UUFDOUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQTJCLENBQUM7WUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkIsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztJQUlELGlCQUFpQixDQUFDLEtBQWEsRUFBRSxFQUFVOztRQUN2QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztJQUtELFdBQVcsQ0FBSSxLQUFhLEVBQUUsT0FBVzs7UUFFckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDOztRQUNsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDaEIsS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzlCLElBQUk7b0JBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDeEI7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ1osTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDbEI7YUFDSjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDakI7OztZQXJESixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1lc3NhZ2VNZWRpYXRvciB9IGZyb20gJy4vSU1lc3NhZ2VNZWRpYXRvcic7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9uL2luZGV4JztcclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTWVkaWF0b3IgaW1wbGVtZW50cyBJTWVzc2FnZU1lZGlhdG9yIHtcclxuICAgIHByaXZhdGUgbWVkaWF0b3JzID0gbmV3IENvbGxlY3Rpb25zLkRpY3Rpb25hcnk8c3RyaW5nLCBDb2xsZWN0aW9ucy5EaWN0aW9uYXJ5PHN0cmluZywgQWN0aW9ucy5JQWN0aW9uPj4oKTtcclxuXHJcbiAgICBnZXQgTWVkaWF0b3JzKCk6IENvbGxlY3Rpb25zLkRpY3Rpb25hcnk8c3RyaW5nLCBDb2xsZWN0aW9ucy5EaWN0aW9uYXJ5PHN0cmluZywgQWN0aW9ucy5JQWN0aW9uPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhdG9ycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIFJlZ2lzdGVySGFuZGxlcih0b3BpYzogc3RyaW5nLCBpZDogc3RyaW5nLCBhY3Rpb246IEFjdGlvbnMuSUFjdGlvbik6IElNZXNzYWdlTWVkaWF0b3Ige1xyXG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLm1lZGlhdG9ycy5JdGVtKHRvcGljKTtcclxuICAgICAgICBpZiAodmFsdWVzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IENvbGxlY3Rpb25zLkRpY3Rpb25hcnk8c3RyaW5nLCBBY3Rpb25zLklBY3Rpb24+KCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVkaWF0b3JzLkFkZCh0b3BpYywgdmFsdWVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlcy5BZGQoaWQsIGFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIGFuIGV2ZW50IFxyXG4gICAgICovXHJcbiAgICBVbnJlZ2lzdGVySGFuZGxlcih0b3BpYzogc3RyaW5nLCBpZDogc3RyaW5nKTogSU1lc3NhZ2VNZWRpYXRvciB7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMubWVkaWF0b3JzLkl0ZW0odG9waWMpO1xyXG4gICAgICAgIGlmICh2YWx1ZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YWx1ZXMuUmVtb3ZlKGlkKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlcy5Db3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYXRvcnMuUmVtb3ZlKHRvcGljKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciBhbiBldmVudCB3aXRoIGdpdmVuIHBhcmFtZXRlclxyXG4gICAgICovXHJcbiAgICBTZW5kTWVzc2FnZSh0b3BpYzogc3RyaW5nLCBwYXJhbT86IGFueSk6IGJvb2xlYW47XHJcbiAgICBTZW5kTWVzc2FnZTxUPih0b3BpYzogc3RyaW5nLCBtZXNzYWdlPzogVCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5tZWRpYXRvcnMuSXRlbSh0b3BpYyk7XHJcbiAgICAgICAgaWYgKHZhbHVlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdmFsdWVzLlZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uSW52b2tlKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59Il19