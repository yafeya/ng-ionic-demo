/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LogLevel } from './LogLevel';
/**
 * @abstract
 */
var /**
 * @abstract
 */
LoggerBase = /** @class */ (function () {
    function LoggerBase() {
        this.formatter = this.MessageFormatter;
    }
    Object.defineProperty(LoggerBase.prototype, "Name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks if the given LogLevel is enabled.
     */
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    LoggerBase.prototype.IsEnabled = /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    function (level) {
        return true;
    };
    /** Log to Debug level */
    /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Debug = /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Debug, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Trace level */
    /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Trace = /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Trace, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Info level */
    /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Info = /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Information, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Warn level */
    /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Warn = /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Warning, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Error level */
    /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Error = /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Error, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Fatal level */
    /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Fatal = /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Critical, 0, message, null, this.formatter);
        return this;
    };
    /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    LoggerBase.prototype.MessageFormatter = /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    function (state, error) {
        if (!state && !error)
            // throw new Error(`No message or exception details wer found to create a message for the log.`);
            return '';
        if (!state)
            return error.message;
        if (!error)
            return JSON.stringify(state); // state.toString();
        return state + "\n" + error;
    };
    return LoggerBase;
}());
/**
 * @abstract
 */
export { LoggerBase };
if (false) {
    /** @type {?} */
    LoggerBase.prototype.name;
    /** @type {?} */
    LoggerBase.prototype.formatter;
    /**
     * Aggregates most logging patterns to a single method.
     * @abstract
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    LoggerBase.prototype.Log = function (level, eventId, state, error, formatter) { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyQmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9sb2dnaW5nL0xvZ2dlckJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFFdEM7OztBQUFBO0lBSUk7eUJBRjhDLElBQUksQ0FBQyxnQkFBZ0I7S0FJbEU7SUFLRCxzQkFBYyw0QkFBSTs7OztRQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUVwQjs7Ozs7UUFDRCxVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ3JCOzs7T0FIQTtJQUlEOztPQUVHOzs7Ozs7SUFDSCw4QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQWU7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELHlCQUF5Qjs7Ozs7O0lBQ3pCLDBCQUFLOzs7OztJQUFMLFVBQU0sT0FBWTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELHlCQUF5Qjs7Ozs7O0lBQ3pCLDBCQUFLOzs7OztJQUFMLFVBQU0sT0FBWTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELHdCQUF3Qjs7Ozs7O0lBQ3hCLHlCQUFJOzs7OztJQUFKLFVBQUssT0FBWTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELHdCQUF3Qjs7Ozs7O0lBQ3hCLHlCQUFJOzs7OztJQUFKLFVBQUssT0FBWTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELHlCQUF5Qjs7Ozs7O0lBQ3pCLDBCQUFLOzs7OztJQUFMLFVBQU0sT0FBWTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELHlCQUF5Qjs7Ozs7O0lBQ3pCLDBCQUFLOzs7OztJQUFMLFVBQU0sT0FBWTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0lBRVMscUNBQWdCOzs7OztJQUExQixVQUEyQixLQUFVLEVBQUUsS0FBWTtRQUMvQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSzs7WUFFaEIsT0FBTyxFQUFFLENBQUM7UUFFZCxJQUFJLENBQUMsS0FBSztZQUNOLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSztZQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQyxPQUFVLEtBQUssVUFBSyxLQUFPLENBQUM7S0FDL0I7cUJBdkVMO0lBd0VDLENBQUE7Ozs7QUFyRUQsc0JBcUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJy4vSUxvZ2dlcic7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSAnLi9Mb2dMZXZlbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nZ2VyQmFzZSBpbXBsZW1lbnRzIElMb2dnZXIge1xyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyOiAoYW55LCBFcnJvcikgPT4gc3RyaW5nID0gdGhpcy5NZXNzYWdlRm9ybWF0dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogQWdncmVnYXRlcyBtb3N0IGxvZ2dpbmcgcGF0dGVybnMgdG8gYSBzaW5nbGUgbWV0aG9kLiAqL1xyXG4gICAgYWJzdHJhY3QgTG9nKGxldmVsOiBMb2dMZXZlbCwgZXZlbnRJZDogbnVtYmVyLCBzdGF0ZTogYW55LCBlcnJvcjogRXJyb3IsIGZvcm1hdHRlcjogKGFueSwgRXJyb3IpID0+IHN0cmluZyk7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0IE5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIExvZ0xldmVsIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIElzRW5hYmxlZChsZXZlbDogTG9nTGV2ZWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogTG9nIHRvIERlYnVnIGxldmVsICovXHJcbiAgICBEZWJ1ZyhtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5EZWJ1ZywgMCwgbWVzc2FnZSwgbnVsbCwgdGhpcy5mb3JtYXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIExvZyB0byBUcmFjZSBsZXZlbCAqL1xyXG4gICAgVHJhY2UobWVzc2FnZTogYW55KTogSUxvZ2dlciB7XHJcbiAgICAgICAgdGhpcy5Mb2coTG9nTGV2ZWwuVHJhY2UsIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBMb2cgdG8gSW5mbyBsZXZlbCAqL1xyXG4gICAgSW5mbyhtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgMCwgbWVzc2FnZSwgbnVsbCwgdGhpcy5mb3JtYXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIExvZyB0byBXYXJuIGxldmVsICovXHJcbiAgICBXYXJuKG1lc3NhZ2U6IGFueSk6IElMb2dnZXIge1xyXG4gICAgICAgIHRoaXMuTG9nKExvZ0xldmVsLldhcm5pbmcsIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBMb2cgdG8gRXJyb3IgbGV2ZWwgKi9cclxuICAgIEVycm9yKG1lc3NhZ2U6IGFueSk6IElMb2dnZXIge1xyXG4gICAgICAgIHRoaXMuTG9nKExvZ0xldmVsLkVycm9yLCAwLCBtZXNzYWdlLCBudWxsLCB0aGlzLmZvcm1hdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogTG9nIHRvIEZhdGFsIGxldmVsICovXHJcbiAgICBGYXRhbChtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5Dcml0aWNhbCwgMCwgbWVzc2FnZSwgbnVsbCwgdGhpcy5mb3JtYXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBNZXNzYWdlRm9ybWF0dGVyKHN0YXRlOiBhbnksIGVycm9yOiBFcnJvcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZSAmJiAhZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihgTm8gbWVzc2FnZSBvciBleGNlcHRpb24gZGV0YWlscyB3ZXIgZm91bmQgdG8gY3JlYXRlIGEgbWVzc2FnZSBmb3IgdGhlIGxvZy5gKTtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBpZiAoIXN0YXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICAgICAgaWYgKCFlcnJvcilcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN0YXRlKTsgLy8gc3RhdGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGAke3N0YXRlfVxcbiR7ZXJyb3J9YDtcclxuICAgIH1cclxufSJdfQ==