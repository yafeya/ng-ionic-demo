/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LogLevel } from '../LogLevel';
import { LoggerBase } from '../LoggerBase';
var Log4JsLogger = /** @class */ (function (_super) {
    tslib_1.__extends(Log4JsLogger, _super);
    function Log4JsLogger(name, log4JsLogger) {
        var _this = _super.call(this) || this;
        _this.log4JsLogger = log4JsLogger;
        _this.Name = name;
        return _this;
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
    Log4JsLogger.prototype.Log = /**
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
        var message = this.formatter(state, error);
        switch (level) {
            case LogLevel.Debug:
                this.log4JsLogger.debug(message);
                break;
            case LogLevel.Trace:
                this.log4JsLogger.trace(message);
                break;
            case LogLevel.Information:
                this.log4JsLogger.info(message);
                break;
            case LogLevel.Warning:
                this.log4JsLogger.warn(message);
                break;
            case LogLevel.Error:
                this.log4JsLogger.error(message);
                break;
            case LogLevel.Critical:
                this.log4JsLogger.fatal(message);
                break;
            default:
                this.log4JsLogger.debug(message);
                break;
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
    Log4JsLogger.prototype.IsEnabled = /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var rawLevel;
        switch (level) {
            case LogLevel.Debug:
                rawLevel = { level: 5000, levelStr: 'TRACE' };
                break;
            case LogLevel.Trace:
                rawLevel = { level: 10000, levelStr: 'DEBUG' };
                break;
            case LogLevel.Information:
                rawLevel = { level: 20000, levelStr: 'INFO' };
                break;
            case LogLevel.Warning:
                rawLevel = { level: 30000, levelStr: 'WARN' };
                break;
            case LogLevel.Error:
                rawLevel = { level: 40000, levelStr: 'ERROR' };
                break;
            case LogLevel.Critical:
                rawLevel = { level: 50000, levelStr: 'FATAL' };
                break;
            default:
                rawLevel = { level: 10000, levelStr: 'DEBUG' };
                break;
        }
        return this.log4JsLogger.isLevelEnabled(rawLevel);
    };
    return Log4JsLogger;
}(LoggerBase));
export { Log4JsLogger };
if (false) {
    /** @type {?} */
    Log4JsLogger.prototype.log4JsLogger;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nNEpzTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2xvZ2dpbmcvbG9nNGpzL0xvZzRKc0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxJQUFBO0lBQWtDLHdDQUFVO0lBRXhDLHNCQUFZLElBQVksRUFBVSxZQUFpQjtRQUFuRCxZQUNJLGlCQUFPLFNBRVY7UUFIaUMsa0JBQVksR0FBWixZQUFZLENBQUs7UUFFL0MsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0tBQ3BCO0lBRUQsMkRBQTJEOzs7Ozs7Ozs7O0lBQzNELDBCQUFHOzs7Ozs7Ozs7SUFBSCxVQUFJLEtBQWUsRUFBRSxPQUFlLEVBQUUsS0FBVSxFQUFFLEtBQVksRUFBRSxTQUFpQzs7UUFDN0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFM0MsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssUUFBUSxDQUFDLFdBQVc7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxRQUFRLENBQUMsT0FBTztnQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxRQUFRLENBQUMsUUFBUTtnQkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDVjtnQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsTUFBTTtTQUNiO0tBRUo7SUFDRDs7TUFFRTs7Ozs7O0lBQ0YsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFlOztRQUNyQixJQUFJLFFBQVEsQ0FBTTtRQUNsQixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2YsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzlDLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNmLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUMvQyxNQUFNO1lBQ1YsS0FBSyxRQUFRLENBQUMsV0FBVztnQkFDckIsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQzlDLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNqQixRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDOUMsTUFBTTtZQUNWLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2YsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQy9DLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNsQixRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDL0MsTUFBTTtZQUNWO2dCQUNJLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUMvQyxNQUFNO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3JEO3VCQXhFTDtFQU9rQyxVQUFVLEVBa0UzQyxDQUFBO0FBbEVELHdCQWtFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuLi9JTG9nZ2VyJztcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICcuLi9Mb2dMZXZlbCc7XHJcbmltcG9ydCAqIGFzIENvbGxlY3Rpb25zIGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IHsgSUxvZ2dlclByb3ZpZGVyIH0gZnJvbSAnLi4vSUxvZ2dlclByb3ZpZGVyJztcclxuaW1wb3J0IHsgTG9nZ2VyQmFzZSB9IGZyb20gJy4uL0xvZ2dlckJhc2UnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2c0SnNMb2dnZXIgZXh0ZW5kcyBMb2dnZXJCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaXZhdGUgbG9nNEpzTG9nZ2VyOiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuTmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFnZ3JlZ2F0ZXMgbW9zdCBsb2dnaW5nIHBhdHRlcm5zIHRvIGEgc2luZ2xlIG1ldGhvZC4gKi9cclxuICAgIExvZyhsZXZlbDogTG9nTGV2ZWwsIGV2ZW50SWQ6IG51bWJlciwgc3RhdGU6IGFueSwgZXJyb3I6IEVycm9yLCBmb3JtYXR0ZXI6IChhbnksIEVycm9yKSA9PiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZm9ybWF0dGVyKHN0YXRlLCBlcnJvcik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5EZWJ1ZzpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nNEpzTG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuVHJhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZzRKc0xvZ2dlci50cmFjZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkluZm9ybWF0aW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2c0SnNMb2dnZXIuaW5mbyhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLldhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZzRKc0xvZ2dlci53YXJuKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZzRKc0xvZ2dlci5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkNyaXRpY2FsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2c0SnNMb2dnZXIuZmF0YWwobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nNEpzTG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIExvZ0xldmVsIGlzIGVuYWJsZWQuXHJcbiAgICAqL1xyXG4gICAgSXNFbmFibGVkKGxldmVsOiBMb2dMZXZlbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByYXdMZXZlbDogYW55O1xyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5EZWJ1ZzpcclxuICAgICAgICAgICAgICAgIHJhd0xldmVsID0geyBsZXZlbDogNTAwMCwgbGV2ZWxTdHI6ICdUUkFDRScgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLlRyYWNlOlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiAxMDAwMCwgbGV2ZWxTdHI6ICdERUJVRycgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkluZm9ybWF0aW9uOlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiAyMDAwMCwgbGV2ZWxTdHI6ICdJTkZPJyB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuV2FybmluZzpcclxuICAgICAgICAgICAgICAgIHJhd0xldmVsID0geyBsZXZlbDogMzAwMDAsIGxldmVsU3RyOiAnV0FSTicgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiA0MDAwMCwgbGV2ZWxTdHI6ICdFUlJPUicgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkNyaXRpY2FsOlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiA1MDAwMCwgbGV2ZWxTdHI6ICdGQVRBTCcgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiAxMDAwMCwgbGV2ZWxTdHI6ICdERUJVRycgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2c0SnNMb2dnZXIuaXNMZXZlbEVuYWJsZWQocmF3TGV2ZWwpO1xyXG4gICAgfVxyXG59Il19