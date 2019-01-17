/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LogLevel } from './LogLevel';
import * as Collections from '../collections/index';
export class Logger {
    /**
     * @param {?} loggerFactory
     * @param {?} name
     */
    constructor(loggerFactory, name) {
        this.loggerFactory = loggerFactory;
        this.name = name;
        this.loggers = new Collections.List();
        this.formatter = this.MessageFormatter;
        /** @type {?} */
        let providers = loggerFactory.GetProviders();
        if (providers.Count > 0) {
            providers.ForEach(x => {
                this.loggers.Add(x.CreateLogger(name));
            });
        }
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
        let errors = new Collections.List();
        this.loggers.ForEach(logger => {
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
    }
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    IsEnabled(level) {
        for (let logger of this.loggers.Items) {
            if (logger.IsEnabled(level))
                return true;
        }
        return false;
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
     * Add a logger provider
     * \@provider
     * @param {?} provider
     * @return {?}
     */
    AddProvider(provider) {
        /** @type {?} */
        let logger = provider.CreateLogger(this.name);
        this.loggers.Add(logger);
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
            return state.toString();
        return `${state}\n${error}`;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2xvZ2dpbmcvTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsTUFBTTs7Ozs7SUFJRixZQUFvQixhQUFtQyxFQUFVLElBQVk7UUFBekQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTt1QkFIM0QsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFXO3lCQUNMLElBQUksQ0FBQyxnQkFBZ0I7O1FBSTdELElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMxQyxDQUFDLENBQUM7U0FDTjtLQUNKOzs7Ozs7Ozs7O0lBR0QsR0FBRyxDQUFDLEtBQWUsRUFBRSxPQUFlLEVBQUUsS0FBVSxFQUFFLEtBQVksRUFBRSxTQUFpQzs7UUFFN0YsSUFBSSxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFTLENBQUM7UUFFM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUIsSUFBSTtnQkFDQSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN2RDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUNyQjtLQUNKOzs7Ozs7SUFLRCxTQUFTLENBQUMsS0FBZTtRQUNyQixLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ25DLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDaEI7Ozs7OztJQUdELEtBQUssQ0FBQyxPQUFZO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBWTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0lBRUQsSUFBSSxDQUFDLE9BQVk7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7OztJQUVELElBQUksQ0FBQyxPQUFZO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBWTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0lBRUQsS0FBSyxDQUFDLE9BQVk7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7SUFNRCxXQUFXLENBQUMsUUFBeUI7O1FBQ2pDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVCOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFVLEVBQUUsS0FBWTtRQUM3QyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSzs7WUFFaEIsT0FBTyxFQUFFLENBQUM7UUFFZCxJQUFJLENBQUMsS0FBSztZQUNOLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSztZQUNOLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLE9BQU8sR0FBRyxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUM7O0NBRW5DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJy4vSUxvZ2dlcic7XHJcbmltcG9ydCB7IERlZmF1bHRMb2dnZXJGYWN0b3J5IH0gZnJvbSAnLi9EZWZhdWx0TG9nZ2VyRmFjdG9yeSc7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSAnLi9Mb2dMZXZlbCc7XHJcbmltcG9ydCAqIGFzIENvbGxlY3Rpb25zIGZyb20gJy4uL2NvbGxlY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IHsgSUxvZ2dlclByb3ZpZGVyIH0gZnJvbSAnLi9JTG9nZ2VyUHJvdmlkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xyXG4gICAgcHJpdmF0ZSBsb2dnZXJzID0gbmV3IENvbGxlY3Rpb25zLkxpc3Q8SUxvZ2dlcj4oKTtcclxuICAgIHByaXZhdGUgZm9ybWF0dGVyOiAoYW55LCBFcnJvcikgPT4gc3RyaW5nID0gdGhpcy5NZXNzYWdlRm9ybWF0dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyRmFjdG9yeTogRGVmYXVsdExvZ2dlckZhY3RvcnksIHByaXZhdGUgbmFtZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGxldCBwcm92aWRlcnMgPSBsb2dnZXJGYWN0b3J5LkdldFByb3ZpZGVycygpO1xyXG4gICAgICAgIGlmIChwcm92aWRlcnMuQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVycy5Gb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXJzLkFkZCh4LkNyZWF0ZUxvZ2dlcihuYW1lKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQWdncmVnYXRlcyBtb3N0IGxvZ2dpbmcgcGF0dGVybnMgdG8gYSBzaW5nbGUgbWV0aG9kLiAqL1xyXG4gICAgTG9nKGxldmVsOiBMb2dMZXZlbCwgZXZlbnRJZDogbnVtYmVyLCBzdGF0ZTogYW55LCBlcnJvcjogRXJyb3IsIGZvcm1hdHRlcjogKGFueSwgRXJyb3IpID0+IHN0cmluZykge1xyXG5cclxuICAgICAgICBsZXQgZXJyb3JzID0gbmV3IENvbGxlY3Rpb25zLkxpc3Q8RXJyb3I+KCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2Vycy5Gb3JFYWNoKGxvZ2dlciA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZXIuTG9nKGxldmVsLCBldmVudElkLCBzdGF0ZSwgZXJyb3IsIGZvcm1hdHRlcik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMuQWRkKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZXJyb3JzLkNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTsgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBMb2dMZXZlbCBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBJc0VuYWJsZWQobGV2ZWw6IExvZ0xldmVsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgbG9nZ2VyIG9mIHRoaXMubG9nZ2Vycy5JdGVtcykge1xyXG4gICAgICAgICAgICBpZiAobG9nZ2VyLklzRW5hYmxlZChsZXZlbCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogTG9nIHRvIERlYnVnIGxldmVsICovXHJcbiAgICBEZWJ1ZyhtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5EZWJ1ZywgMCwgbWVzc2FnZSwgbnVsbCwgdGhpcy5mb3JtYXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIExvZyB0byBUcmFjZSBsZXZlbCAqL1xyXG4gICAgVHJhY2UobWVzc2FnZTogYW55KTogSUxvZ2dlciB7XHJcbiAgICAgICAgdGhpcy5Mb2coTG9nTGV2ZWwuVHJhY2UsIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBMb2cgdG8gSW5mbyBsZXZlbCAqL1xyXG4gICAgSW5mbyhtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgMCwgbWVzc2FnZSwgbnVsbCwgdGhpcy5mb3JtYXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIExvZyB0byBXYXJuIGxldmVsICovXHJcbiAgICBXYXJuKG1lc3NhZ2U6IGFueSk6IElMb2dnZXIge1xyXG4gICAgICAgIHRoaXMuTG9nKExvZ0xldmVsLldhcm5pbmcsIDAsIG1lc3NhZ2UsIG51bGwsIHRoaXMuZm9ybWF0dGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBMb2cgdG8gRXJyb3IgbGV2ZWwgKi9cclxuICAgIEVycm9yKG1lc3NhZ2U6IGFueSk6IElMb2dnZXIge1xyXG4gICAgICAgIHRoaXMuTG9nKExvZ0xldmVsLkVycm9yLCAwLCBtZXNzYWdlLCBudWxsLCB0aGlzLmZvcm1hdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogTG9nIHRvIEZhdGFsIGxldmVsICovXHJcbiAgICBGYXRhbChtZXNzYWdlOiBhbnkpOiBJTG9nZ2VyIHtcclxuICAgICAgICB0aGlzLkxvZyhMb2dMZXZlbC5Dcml0aWNhbCwgMCwgbWVzc2FnZSwgbnVsbCwgdGhpcy5mb3JtYXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbG9nZ2VyIHByb3ZpZGVyXHJcbiAgICAgKiBAcHJvdmlkZXJcclxuICAgICAqL1xyXG4gICAgQWRkUHJvdmlkZXIocHJvdmlkZXI6IElMb2dnZXJQcm92aWRlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBsb2dnZXIgPSBwcm92aWRlci5DcmVhdGVMb2dnZXIodGhpcy5uYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXJzLkFkZChsb2dnZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTWVzc2FnZUZvcm1hdHRlcihzdGF0ZTogYW55LCBlcnJvcjogRXJyb3IpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghc3RhdGUgJiYgIWVycm9yKVxyXG4gICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYE5vIG1lc3NhZ2Ugb3IgZXhjZXB0aW9uIGRldGFpbHMgd2VyIGZvdW5kIHRvIGNyZWF0ZSBhIG1lc3NhZ2UgZm9yIHRoZSBsb2cuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgaWYgKCFzdGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgICAgIGlmICghZXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7c3RhdGV9XFxuJHtlcnJvcn1gO1xyXG4gICAgfVxyXG59Il19