/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoggerBase } from '../LoggerBase';
var DebugLogger = /** @class */ (function (_super) {
    tslib_1.__extends(DebugLogger, _super);
    function DebugLogger(name, filter) {
        var _this = _super.call(this) || this;
        _this.filter = filter;
        _this.Name = name;
        return _this;
    }
    /**
     * Peform log output to console
     * @param level
     * @param eventId
     * @param state
     * @param error
     * @param formatter
     */
    /**
     * Peform log output to console
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    DebugLogger.prototype.Log = /**
     * Peform log output to console
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    function (level, eventId, state, error, formatter) {
        console.log("[" + new Date().toLocaleTimeString() + "] " + this.Name + ": " + level + ", " + this.formatter(state, error));
    };
    return DebugLogger;
}(LoggerBase));
export { DebugLogger };
if (false) {
    /** @type {?} */
    DebugLogger.prototype.filter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdMb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vbG9nZ2luZy9kZWJ1Zy9EZWJ1Z0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsSUFBQTtJQUFpQyx1Q0FBVTtJQUV2QyxxQkFBWSxJQUFZLEVBQVUsTUFBcUQ7UUFBdkYsWUFDSSxpQkFBTyxTQUVWO1FBSGlDLFlBQU0sR0FBTixNQUFNLENBQStDO1FBRW5GLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztLQUNwQjtJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7SUFDSCx5QkFBRzs7Ozs7Ozs7O0lBQUgsVUFBSSxLQUFlLEVBQUUsT0FBZSxFQUFFLEtBQVUsRUFBRSxLQUFZLEVBQUUsU0FBaUM7UUFDN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFJLElBQUksSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBSyxJQUFJLENBQUMsSUFBSSxVQUFLLEtBQUssVUFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUcsQ0FBQyxDQUFDO0tBQy9HO3NCQXJCTDtFQUlpQyxVQUFVLEVBa0IxQyxDQUFBO0FBbEJELHVCQWtCQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBMb2dnZXJCYXNlIH0gZnJvbSAnLi4vTG9nZ2VyQmFzZSc7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSAnLi4vTG9nTGV2ZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlYnVnTG9nZ2VyIGV4dGVuZHMgTG9nZ2VyQmFzZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwcml2YXRlIGZpbHRlcjogKG1lc3NhZ2U6IHN0cmluZywgbGV2bGU6IExvZ0xldmVsKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVmb3JtIGxvZyBvdXRwdXQgdG8gY29uc29sZVxyXG4gICAgICogQHBhcmFtIGxldmVsIFxyXG4gICAgICogQHBhcmFtIGV2ZW50SWQgXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgXHJcbiAgICAgKiBAcGFyYW0gZXJyb3IgXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0dGVyIFxyXG4gICAgICovXHJcbiAgICBMb2cobGV2ZWw6IExvZ0xldmVsLCBldmVudElkOiBudW1iZXIsIHN0YXRlOiBhbnksIGVycm9yOiBFcnJvciwgZm9ybWF0dGVyOiAoYW55LCBFcnJvcikgPT4gc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFske25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XSAke3RoaXMuTmFtZX06ICR7bGV2ZWx9LCAke3RoaXMuZm9ybWF0dGVyKHN0YXRlLCBlcnJvcil9YCk7XHJcbiAgICB9XHJcbn0iXX0=