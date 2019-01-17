/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LogLevel } from './LogLevel';
/**
 * @abstract
 */
export class LoggerBase {
    constructor() {
        this.formatter = this.MessageFormatter;
    }
    /**
     * @return {?}
     */
    get Name() {
        return this.name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Name(value) {
        this.name = value;
    }
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    IsEnabled(level) {
        return true;
    }
    /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    Debug(message) {
        this.Log(LogLevel.Debug, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    Trace(message) {
        this.Log(LogLevel.Trace, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    Info(message) {
        this.Log(LogLevel.Information, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    Warn(message) {
        this.Log(LogLevel.Warning, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    Error(message) {
        this.Log(LogLevel.Error, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    Fatal(message) {
        this.Log(LogLevel.Critical, 0, message, null, this.formatter);
        return this;
    }
    /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    MessageFormatter(state, error) {
        if (!state && !error)
            // throw new Error(`No message or exception details wer found to create a message for the log.`);
            return '';
        if (!state)
            return error.message;
        if (!error)
            return JSON.stringify(state); // state.toString();
        return `${state}\n${error}`;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyQmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9sb2dnaW5nL0xvZ2dlckJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFFdEMsTUFBTTtJQUlGO3lCQUY4QyxJQUFJLENBQUMsZ0JBQWdCO0tBSWxFOzs7O0lBS0QsSUFBYyxJQUFJO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBRXBCOzs7OztJQUNELElBQWMsSUFBSSxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7OztJQUlELFNBQVMsQ0FBQyxLQUFlO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7OztJQUdELEtBQUssQ0FBQyxPQUFZO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBWTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0lBRUQsSUFBSSxDQUFDLE9BQVk7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7OztJQUVELElBQUksQ0FBQyxPQUFZO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBWTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0lBRUQsS0FBSyxDQUFDLE9BQVk7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7OztJQUVTLGdCQUFnQixDQUFDLEtBQVUsRUFBRSxLQUFZO1FBQy9DLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLOztZQUVoQixPQUFPLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQyxLQUFLO1lBQ04sT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBRXpCLElBQUksQ0FBQyxLQUFLO1lBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLE9BQU8sR0FBRyxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUM7S0FDL0I7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuL0lMb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gJy4vTG9nTGV2ZWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ2dlckJhc2UgaW1wbGVtZW50cyBJTG9nZ2VyIHtcclxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGZvcm1hdHRlcjogKGFueSwgRXJyb3IpID0+IHN0cmluZyA9IHRoaXMuTWVzc2FnZUZvcm1hdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFnZ3JlZ2F0ZXMgbW9zdCBsb2dnaW5nIHBhdHRlcm5zIHRvIGEgc2luZ2xlIG1ldGhvZC4gKi9cclxuICAgIGFic3RyYWN0IExvZyhsZXZlbDogTG9nTGV2ZWwsIGV2ZW50SWQ6IG51bWJlciwgc3RhdGU6IGFueSwgZXJyb3I6IEVycm9yLCBmb3JtYXR0ZXI6IChhbnksIEVycm9yKSA9PiBzdHJpbmcpO1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHNldCBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBMb2dMZXZlbCBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBJc0VuYWJsZWQobGV2ZWw6IExvZ0xldmVsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIExvZyB0byBEZWJ1ZyBsZXZlbCAqL1xyXG4gICAgRGVidWcobWVzc2FnZTogYW55KTogSUxvZ2dlciB7XHJcbiAgICAgICAgdGhpcy5Mb2coTG9nTGV2ZWwuRGVidWcsIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBMb2cgdG8gVHJhY2UgbGV2ZWwgKi9cclxuICAgIFRyYWNlKG1lc3NhZ2U6IGFueSk6IElMb2dnZXIge1xyXG4gICAgICAgIHRoaXMuTG9nKExvZ0xldmVsLlRyYWNlLCAwLCBtZXNzYWdlLCBudWxsLCB0aGlzLmZvcm1hdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogTG9nIHRvIEluZm8gbGV2ZWwgKi9cclxuICAgIEluZm8obWVzc2FnZTogYW55KTogSUxvZ2dlciB7XHJcbiAgICAgICAgdGhpcy5Mb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBMb2cgdG8gV2FybiBsZXZlbCAqL1xyXG4gICAgV2FybihtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5XYXJuaW5nLCAwLCBtZXNzYWdlLCBudWxsLCB0aGlzLmZvcm1hdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogTG9nIHRvIEVycm9yIGxldmVsICovXHJcbiAgICBFcnJvcihtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5FcnJvciwgMCwgbWVzc2FnZSwgbnVsbCwgdGhpcy5mb3JtYXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIExvZyB0byBGYXRhbCBsZXZlbCAqL1xyXG4gICAgRmF0YWwobWVzc2FnZTogYW55KTogSUxvZ2dlciB7XHJcbiAgICAgICAgdGhpcy5Mb2coTG9nTGV2ZWwuQ3JpdGljYWwsIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgTWVzc2FnZUZvcm1hdHRlcihzdGF0ZTogYW55LCBlcnJvcjogRXJyb3IpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghc3RhdGUgJiYgIWVycm9yKVxyXG4gICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYE5vIG1lc3NhZ2Ugb3IgZXhjZXB0aW9uIGRldGFpbHMgd2VyIGZvdW5kIHRvIGNyZWF0ZSBhIG1lc3NhZ2UgZm9yIHRoZSBsb2cuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgaWYgKCFzdGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgICAgIGlmICghZXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdGF0ZSk7IC8vIHN0YXRlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBgJHtzdGF0ZX1cXG4ke2Vycm9yfWA7XHJcbiAgICB9XHJcbn0iXX0=