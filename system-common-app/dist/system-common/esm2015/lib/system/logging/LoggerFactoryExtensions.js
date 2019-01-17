/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DefaultLoggerFactory } from './DefaultLoggerFactory';
import { DebugLoggerProvider } from './debug/DebugLoggerProvider';
import { Log4JsLoggerProvider } from './log4js/Log4JsLoggerProvider';
/**
 * Extension methods for LoggerFactory
 */
export class LoggerFactoryExtensions {
    /**
     * Add Debugger to logger
     * @this {?}
     * @return {?}
     */
    static AddDebug() {
        /** @type {?} */
        let provider = new DebugLoggerProvider();
        this.AddProvider(provider);
        return this;
    }
    /**
     * @this {?}
     * @param {?=} initializer
     * @param {?=} logFileName
     * @return {?}
     */
    static AddLog4Js(initializer, logFileName = 'log.txt') {
        /** @type {?} */
        let provider = new Log4JsLoggerProvider(initializer, logFileName);
        this.AddProvider(provider);
        return this;
    }
}
/** hook defination to the implementation */
DefaultLoggerFactory.prototype.AddLogJs = LoggerFactoryExtensions.AddLog4Js;
DefaultLoggerFactory.prototype.AddDebug = LoggerFactoryExtensions.AddDebug;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyRmFjdG9yeUV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vbG9nZ2luZy9Mb2dnZXJGYWN0b3J5RXh0ZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFXckUsTUFBTTs7Ozs7O0lBS0YsTUFBTSxDQUFDLFFBQVE7O1FBQ1gsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxTQUFTLENBQXVCLFdBQXdCLEVBQUUsV0FBVyxHQUFHLFNBQVM7O1FBQ3BGLElBQUksUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDZjtDQUNKOztBQW1CRCxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztBQUM1RSxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2dnZXJGYWN0b3J5IH0gZnJvbSAnLi9JTG9nZ2VyRmFjdG9yeSc7XHJcbmltcG9ydCB7IERlZmF1bHRMb2dnZXJGYWN0b3J5IH0gZnJvbSAnLi9EZWZhdWx0TG9nZ2VyRmFjdG9yeSc7XHJcbmltcG9ydCB7IERlYnVnTG9nZ2VyUHJvdmlkZXIgfSBmcm9tICcuL2RlYnVnL0RlYnVnTG9nZ2VyUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBMb2c0SnNMb2dnZXJQcm92aWRlciB9IGZyb20gJy4vbG9nNGpzL0xvZzRKc0xvZ2dlclByb3ZpZGVyJztcclxuXHJcbi8qKiBFeHRlbnNpb24gbWV0aG9kIGltcGxlbWVudGF0aW9uIGluIFR5cGVTY3JpcHRcclxuICogMS4gY3JlYXRlIGV4dGVuc2lvbiBtZXRob2RzIGNsYXNzLCBtZXRob2QgZGVjbGFyZWQgYXMgc3RhdGljXHJcbiAqIDIuIGRlY2xhcmUgbW9kdWxlIGZvciB0aGUgdHlwZSB0byBiZSBleHRlbnRlZFxyXG4gKiAzLiBob29rIHRoZSBtZXRob2QgZGVsY2FyYXRpb24gdG8gaW1wbGVtZW50YXRpb25cclxuICovXHJcblxyXG4vKipcclxuICogRXh0ZW5zaW9uIG1ldGhvZHMgZm9yIExvZ2dlckZhY3RvcnlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJGYWN0b3J5RXh0ZW5zaW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBEZWJ1Z2dlciB0byBsb2dnZXJcclxuICAgICAqIEBwYXJhbSB0aGlzIElMb2dnZXJGYWN0b3J5IGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBBZGREZWJ1Zyh0aGlzOiBJTG9nZ2VyRmFjdG9yeSk6IElMb2dnZXJGYWN0b3J5IHtcclxuICAgICAgICBsZXQgcHJvdmlkZXIgPSBuZXcgRGVidWdMb2dnZXJQcm92aWRlcigpO1xyXG4gICAgICAgIHRoaXMuQWRkUHJvdmlkZXIocHJvdmlkZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAqIEFkZCBMb2c0SlMgdG8gbG9nZ2luZyBcclxuICAgICogQHBhcmFtIHRoaXMgSUxvZ2dlckZhY3RvcnkgaW5zdGFuY2VcclxuICAgICovXHJcbiAgICBzdGF0aWMgQWRkTG9nNEpzKHRoaXM6IElMb2dnZXJGYWN0b3J5KTogSUxvZ2dlckZhY3Rvcnk7XHJcbiAgICBzdGF0aWMgQWRkTG9nNEpzKHRoaXM6IElMb2dnZXJGYWN0b3J5LCBpbml0aWFsaXplcj86ICgpID0+IHZvaWQsIGxvZ0ZpbGVOYW1lID0gJ2xvZy50eHQnKTogSUxvZ2dlckZhY3Rvcnkge1xyXG4gICAgICAgIGxldCBwcm92aWRlciA9IG5ldyBMb2c0SnNMb2dnZXJQcm92aWRlcihpbml0aWFsaXplciwgbG9nRmlsZU5hbWUpO1xyXG4gICAgICAgIHRoaXMuQWRkUHJvdmlkZXIocHJvdmlkZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogRXh0ZW4gdHlwZSBvZiB0aGUgaW1wbGVtZW50YXRpb24gKi9cclxuZGVjbGFyZSBtb2R1bGUgJy4vRGVmYXVsdExvZ2dlckZhY3RvcnknIHtcclxuICAgIGludGVyZmFjZSBEZWZhdWx0TG9nZ2VyRmFjdG9yeSB7XHJcbiAgICAgICAgQWRkRGVidWc6ICgpID0+IElMb2dnZXJGYWN0b3J5O1xyXG4gICAgICAgIEFkZExvZ0pzOiAoaW5pdGlhbGl6ZXI/OiAoKSA9PiB2b2lkLCBsb2dGaWxlTmFtZT86IHN0cmluZykgPT4gSUxvZ2dlckZhY3Rvcnk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBFeHRlbmQgdHlwZSBvZiB0aGUgaW50ZXJmYWNlICovXHJcbmRlY2xhcmUgbW9kdWxlICcuL0lMb2dnZXJGYWN0b3J5JyB7XHJcbiAgICBpbnRlcmZhY2UgSUxvZ2dlckZhY3Rvcnkge1xyXG4gICAgICAgIEFkZERlYnVnOiAoKSA9PiBJTG9nZ2VyRmFjdG9yeTtcclxuICAgICAgICBBZGRMb2dKczogKGluaXRpYWxpemVyPzogKCkgPT4gdm9pZCwgbG9nRmlsZU5hbWU/OiBzdHJpbmcpID0+IElMb2dnZXJGYWN0b3J5O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogaG9vayBkZWZpbmF0aW9uIHRvIHRoZSBpbXBsZW1lbnRhdGlvbiAqL1xyXG5EZWZhdWx0TG9nZ2VyRmFjdG9yeS5wcm90b3R5cGUuQWRkTG9nSnMgPSBMb2dnZXJGYWN0b3J5RXh0ZW5zaW9ucy5BZGRMb2c0SnM7XHJcbkRlZmF1bHRMb2dnZXJGYWN0b3J5LnByb3RvdHlwZS5BZGREZWJ1ZyA9IExvZ2dlckZhY3RvcnlFeHRlbnNpb25zLkFkZERlYnVnO1xyXG4iXX0=