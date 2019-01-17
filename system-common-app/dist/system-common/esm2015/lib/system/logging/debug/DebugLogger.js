/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LoggerBase } from '../LoggerBase';
export class DebugLogger extends LoggerBase {
    /**
     * @param {?} name
     * @param {?} filter
     */
    constructor(name, filter) {
        super();
        this.filter = filter;
        this.Name = name;
    }
    /**
     * Peform log output to console
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    Log(level, eventId, state, error, formatter) {
        console.log(`[${new Date().toLocaleTimeString()}] ${this.Name}: ${level}, ${this.formatter(state, error)}`);
    }
}
if (false) {
    /** @type {?} */
    DebugLogger.prototype.filter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdMb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vbG9nZ2luZy9kZWJ1Zy9EZWJ1Z0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLGtCQUFtQixTQUFRLFVBQVU7Ozs7O0lBRXZDLFlBQVksSUFBWSxFQUFVLE1BQXFEO1FBQ25GLEtBQUssRUFBRSxDQUFDO1FBRHNCLFdBQU0sR0FBTixNQUFNLENBQStDO1FBRW5GLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7Ozs7Ozs7O0lBVUQsR0FBRyxDQUFDLEtBQWUsRUFBRSxPQUFlLEVBQUUsS0FBVSxFQUFFLEtBQVksRUFBRSxTQUFpQztRQUM3RixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMvRztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IExvZ2dlckJhc2UgfSBmcm9tICcuLi9Mb2dnZXJCYXNlJztcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICcuLi9Mb2dMZXZlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdMb2dnZXIgZXh0ZW5kcyBMb2dnZXJCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaXZhdGUgZmlsdGVyOiAobWVzc2FnZTogc3RyaW5nLCBsZXZsZTogTG9nTGV2ZWwpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuTmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZWZvcm0gbG9nIG91dHB1dCB0byBjb25zb2xlXHJcbiAgICAgKiBAcGFyYW0gbGV2ZWwgXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZCBcclxuICAgICAqIEBwYXJhbSBzdGF0ZSBcclxuICAgICAqIEBwYXJhbSBlcnJvciBcclxuICAgICAqIEBwYXJhbSBmb3JtYXR0ZXIgXHJcbiAgICAgKi9cclxuICAgIExvZyhsZXZlbDogTG9nTGV2ZWwsIGV2ZW50SWQ6IG51bWJlciwgc3RhdGU6IGFueSwgZXJyb3I6IEVycm9yLCBmb3JtYXR0ZXI6IChhbnksIEVycm9yKSA9PiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgWyR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX1dICR7dGhpcy5OYW1lfTogJHtsZXZlbH0sICR7dGhpcy5mb3JtYXR0ZXIoc3RhdGUsIGVycm9yKX1gKTtcclxuICAgIH1cclxufSJdfQ==