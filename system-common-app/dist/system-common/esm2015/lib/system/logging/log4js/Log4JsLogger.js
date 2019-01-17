/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LogLevel } from '../LogLevel';
import { LoggerBase } from '../LoggerBase';
export class Log4JsLogger extends LoggerBase {
    /**
     * @param {?} name
     * @param {?} log4JsLogger
     */
    constructor(name, log4JsLogger) {
        super();
        this.log4JsLogger = log4JsLogger;
        this.Name = name;
    }
    /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    Log(level, eventId, state, error, formatter) {
        /** @type {?} */
        let message = this.formatter(state, error);
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
    }
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    IsEnabled(level) {
        /** @type {?} */
        let rawLevel;
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
    }
}
if (false) {
    /** @type {?} */
    Log4JsLogger.prototype.log4JsLogger;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nNEpzTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2xvZ2dpbmcvbG9nNGpzL0xvZzRKc0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sbUJBQW9CLFNBQVEsVUFBVTs7Ozs7SUFFeEMsWUFBWSxJQUFZLEVBQVUsWUFBaUI7UUFDL0MsS0FBSyxFQUFFLENBQUM7UUFEc0IsaUJBQVksR0FBWixZQUFZLENBQUs7UUFFL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDcEI7Ozs7Ozs7Ozs7SUFHRCxHQUFHLENBQUMsS0FBZSxFQUFFLE9BQWUsRUFBRSxLQUFVLEVBQUUsS0FBWSxFQUFFLFNBQWlDOztRQUM3RixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUzQyxRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxRQUFRLENBQUMsV0FBVztnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWO2dCQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1NBQ2I7S0FFSjs7Ozs7O0lBSUQsU0FBUyxDQUFDLEtBQWU7O1FBQ3JCLElBQUksUUFBUSxDQUFNO1FBQ2xCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDZixRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDOUMsTUFBTTtZQUNWLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2YsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQy9DLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxXQUFXO2dCQUNyQixRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDOUMsTUFBTTtZQUNWLEtBQUssUUFBUSxDQUFDLE9BQU87Z0JBQ2pCLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUM5QyxNQUFNO1lBQ1YsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDZixRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDL0MsTUFBTTtZQUNWLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ2xCLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUMvQyxNQUFNO1lBQ1Y7Z0JBQ0ksUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQy9DLE1BQU07U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDckQ7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuLi9JTG9nZ2VyJztcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICcuLi9Mb2dMZXZlbCc7XHJcbmltcG9ydCAqIGFzIENvbGxlY3Rpb25zIGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IHsgSUxvZ2dlclByb3ZpZGVyIH0gZnJvbSAnLi4vSUxvZ2dlclByb3ZpZGVyJztcclxuaW1wb3J0IHsgTG9nZ2VyQmFzZSB9IGZyb20gJy4uL0xvZ2dlckJhc2UnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2c0SnNMb2dnZXIgZXh0ZW5kcyBMb2dnZXJCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaXZhdGUgbG9nNEpzTG9nZ2VyOiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuTmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFnZ3JlZ2F0ZXMgbW9zdCBsb2dnaW5nIHBhdHRlcm5zIHRvIGEgc2luZ2xlIG1ldGhvZC4gKi9cclxuICAgIExvZyhsZXZlbDogTG9nTGV2ZWwsIGV2ZW50SWQ6IG51bWJlciwgc3RhdGU6IGFueSwgZXJyb3I6IEVycm9yLCBmb3JtYXR0ZXI6IChhbnksIEVycm9yKSA9PiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZm9ybWF0dGVyKHN0YXRlLCBlcnJvcik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5EZWJ1ZzpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nNEpzTG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuVHJhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZzRKc0xvZ2dlci50cmFjZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkluZm9ybWF0aW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2c0SnNMb2dnZXIuaW5mbyhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLldhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZzRKc0xvZ2dlci53YXJuKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZzRKc0xvZ2dlci5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkNyaXRpY2FsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2c0SnNMb2dnZXIuZmF0YWwobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nNEpzTG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIExvZ0xldmVsIGlzIGVuYWJsZWQuXHJcbiAgICAqL1xyXG4gICAgSXNFbmFibGVkKGxldmVsOiBMb2dMZXZlbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByYXdMZXZlbDogYW55O1xyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5EZWJ1ZzpcclxuICAgICAgICAgICAgICAgIHJhd0xldmVsID0geyBsZXZlbDogNTAwMCwgbGV2ZWxTdHI6ICdUUkFDRScgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLlRyYWNlOlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiAxMDAwMCwgbGV2ZWxTdHI6ICdERUJVRycgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkluZm9ybWF0aW9uOlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiAyMDAwMCwgbGV2ZWxTdHI6ICdJTkZPJyB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuV2FybmluZzpcclxuICAgICAgICAgICAgICAgIHJhd0xldmVsID0geyBsZXZlbDogMzAwMDAsIGxldmVsU3RyOiAnV0FSTicgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiA0MDAwMCwgbGV2ZWxTdHI6ICdFUlJPUicgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkNyaXRpY2FsOlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiA1MDAwMCwgbGV2ZWxTdHI6ICdGQVRBTCcgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmF3TGV2ZWwgPSB7IGxldmVsOiAxMDAwMCwgbGV2ZWxTdHI6ICdERUJVRycgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2c0SnNMb2dnZXIuaXNMZXZlbEVuYWJsZWQocmF3TGV2ZWwpO1xyXG4gICAgfVxyXG59Il19