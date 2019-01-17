/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LogLevel } from './LogLevel';
import * as Collections from '../collections/index';
var Logger = /** @class */ (function () {
    function Logger(loggerFactory, name) {
        var _this = this;
        this.loggerFactory = loggerFactory;
        this.name = name;
        this.loggers = new Collections.List();
        this.formatter = this.MessageFormatter;
        /** @type {?} */
        var providers = loggerFactory.GetProviders();
        if (providers.Count > 0) {
            providers.ForEach(function (x) {
                _this.loggers.Add(x.CreateLogger(name));
            });
        }
    }
    /** Aggregates most logging patterns to a single method. */
    /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    Logger.prototype.Log = /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    function (level, eventId, state, error, formatter) {
        /** @type {?} */
        var errors = new Collections.List();
        this.loggers.ForEach(function (logger) {
            try {
                logger.Log(level, eventId, state, error, formatter);
            }
            catch (error) {
                errors.Add(error);
            }
        });
        if (errors.Count > 0) {
            throw new Error();
        }
    };
    /**
     * Checks if the given LogLevel is enabled.
     */
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    Logger.prototype.IsEnabled = /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.loggers.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                if (logger.IsEnabled(level))
                    return true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    /** Log to Debug level */
    /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.Debug = /**
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
    Logger.prototype.Trace = /**
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
    Logger.prototype.Info = /**
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
    Logger.prototype.Warn = /**
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
    Logger.prototype.Error = /**
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
    Logger.prototype.Fatal = /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Critical, 0, message, null, this.formatter);
        return this;
    };
    /**
     * Add a logger provider
     * @provider
     */
    /**
     * Add a logger provider
     * \@provider
     * @param {?} provider
     * @return {?}
     */
    Logger.prototype.AddProvider = /**
     * Add a logger provider
     * \@provider
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        /** @type {?} */
        var logger = provider.CreateLogger(this.name);
        this.loggers.Add(logger);
    };
    /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    Logger.prototype.MessageFormatter = /**
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
            return state.toString();
        return state + "\n" + error;
    };
    return Logger;
}());
export { Logger };
if (false) {
    /** @type {?} */
    Logger.prototype.loggers;
    /** @type {?} */
    Logger.prototype.formatter;
    /** @type {?} */
    Logger.prototype.loggerFactory;
    /** @type {?} */
    Logger.prototype.name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2xvZ2dpbmcvTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEtBQUssV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBR3BELElBQUE7SUFJSSxnQkFBb0IsYUFBbUMsRUFBVSxJQUFZO1FBQTdFLGlCQVFDO1FBUm1CLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7dUJBSDNELElBQUksV0FBVyxDQUFDLElBQUksRUFBVzt5QkFDTCxJQUFJLENBQUMsZ0JBQWdCOztRQUk3RCxJQUFJLFNBQVMsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsSUFBSSxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNyQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDZixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDMUMsQ0FBQyxDQUFDO1NBQ047S0FDSjtJQUVELDJEQUEyRDs7Ozs7Ozs7OztJQUMzRCxvQkFBRzs7Ozs7Ozs7O0lBQUgsVUFBSSxLQUFlLEVBQUUsT0FBZSxFQUFFLEtBQVUsRUFBRSxLQUFZLEVBQUUsU0FBaUM7O1FBRTdGLElBQUksTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBUyxDQUFDO1FBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUN2QixJQUFJO2dCQUNBLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3ZE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LE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLE9BQVUsS0FBSyxVQUFLLEtBQU8sQ0FBQzs7aUJBdEdwQztJQXdHQyxDQUFBO0FBbEdELGtCQWtHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuL0lMb2dnZXInO1xyXG5pbXBvcnQgeyBEZWZhdWx0TG9nZ2VyRmFjdG9yeSB9IGZyb20gJy4vRGVmYXVsdExvZ2dlckZhY3RvcnknO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gJy4vTG9nTGV2ZWwnO1xyXG5pbXBvcnQgKiBhcyBDb2xsZWN0aW9ucyBmcm9tICcuLi9jb2xsZWN0aW9ucy9pbmRleCc7XHJcbmltcG9ydCB7IElMb2dnZXJQcm92aWRlciB9IGZyb20gJy4vSUxvZ2dlclByb3ZpZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcclxuICAgIHByaXZhdGUgbG9nZ2VycyA9IG5ldyBDb2xsZWN0aW9ucy5MaXN0PElMb2dnZXI+KCk7XHJcbiAgICBwcml2YXRlIGZvcm1hdHRlcjogKGFueSwgRXJyb3IpID0+IHN0cmluZyA9IHRoaXMuTWVzc2FnZUZvcm1hdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlckZhY3Rvcnk6IERlZmF1bHRMb2dnZXJGYWN0b3J5LCBwcml2YXRlIG5hbWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICBsZXQgcHJvdmlkZXJzID0gbG9nZ2VyRmFjdG9yeS5HZXRQcm92aWRlcnMoKTtcclxuICAgICAgICBpZiAocHJvdmlkZXJzLkNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBwcm92aWRlcnMuRm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2Vycy5BZGQoeC5DcmVhdGVMb2dnZXIobmFtZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFnZ3JlZ2F0ZXMgbW9zdCBsb2dnaW5nIHBhdHRlcm5zIHRvIGEgc2luZ2xlIG1ldGhvZC4gKi9cclxuICAgIExvZyhsZXZlbDogTG9nTGV2ZWwsIGV2ZW50SWQ6IG51bWJlciwgc3RhdGU6IGFueSwgZXJyb3I6IEVycm9yLCBmb3JtYXR0ZXI6IChhbnksIEVycm9yKSA9PiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgbGV0IGVycm9ycyA9IG5ldyBDb2xsZWN0aW9ucy5MaXN0PEVycm9yPigpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlcnMuRm9yRWFjaChsb2dnZXIgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLkxvZyhsZXZlbCwgZXZlbnRJZCwgc3RhdGUsIGVycm9yLCBmb3JtYXR0ZXIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzLkFkZChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGVycm9ycy5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gTG9nTGV2ZWwgaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgSXNFbmFibGVkKGxldmVsOiBMb2dMZXZlbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlcnMuSXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2dlci5Jc0VuYWJsZWQobGV2ZWwpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIExvZyB0byBEZWJ1ZyBsZXZlbCAqL1xyXG4gICAgRGVidWcobWVzc2FnZTogYW55KTogSUxvZ2dlciB7XHJcbiAgICAgICAgdGhpcy5Mb2coTG9nTGV2ZWwuRGVidWcsIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBMb2cgdG8gVHJhY2UgbGV2ZWwgKi9cclxuICAgIFRyYWNlKG1lc3NhZ2U6IGFueSk6IElMb2dnZXIge1xyXG4gICAgICAgIHRoaXMuTG9nKExvZ0xldmVsLlRyYWNlLCAwLCBtZXNzYWdlLCBudWxsLCB0aGlzLmZvcm1hdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogTG9nIHRvIEluZm8gbGV2ZWwgKi9cclxuICAgIEluZm8obWVzc2FnZTogYW55KTogSUxvZ2dlciB7XHJcbiAgICAgICAgdGhpcy5Mb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBMb2cgdG8gV2FybiBsZXZlbCAqL1xyXG4gICAgV2FybihtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5XYXJuaW5nLCAwLCBtZXNzYWdlLCBudWxsLCB0aGlzLmZvcm1hdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogTG9nIHRvIEVycm9yIGxldmVsICovXHJcbiAgICBFcnJvcihtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5FcnJvciwgMCwgbWVzc2FnZSwgbnVsbCwgdGhpcy5mb3JtYXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIExvZyB0byBGYXRhbCBsZXZlbCAqL1xyXG4gICAgRmF0YWwobWVzc2FnZTogYW55KTogSUxvZ2dlciB7XHJcbiAgICAgICAgdGhpcy5Mb2coTG9nTGV2ZWwuQ3JpdGljYWwsIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGxvZ2dlciBwcm92aWRlclxyXG4gICAgICogQHByb3ZpZGVyXHJcbiAgICAgKi9cclxuICAgIEFkZFByb3ZpZGVyKHByb3ZpZGVyOiBJTG9nZ2VyUHJvdmlkZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbG9nZ2VyID0gcHJvdmlkZXIuQ3JlYXRlTG9nZ2VyKHRoaXMubmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2Vycy5BZGQobG9nZ2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE1lc3NhZ2VGb3JtYXR0ZXIoc3RhdGU6IGFueSwgZXJyb3I6IEVycm9yKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXN0YXRlICYmICFlcnJvcilcclxuICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGBObyBtZXNzYWdlIG9yIGV4Y2VwdGlvbiBkZXRhaWxzIHdlciBmb3VuZCB0byBjcmVhdGUgYSBtZXNzYWdlIGZvciB0aGUgbG9nLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgICAgICBpZiAoIWVycm9yKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGAke3N0YXRlfVxcbiR7ZXJyb3J9YDtcclxuICAgIH1cclxufSJdfQ==