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
var /**
 * Extension methods for LoggerFactory
 */
LoggerFactoryExtensions = /** @class */ (function () {
    function LoggerFactoryExtensions() {
    }
    /**
     * Add Debugger to logger
     * @param this ILoggerFactory instance
     */
    /**
     * Add Debugger to logger
     * @this {?}
     * @return {?}
     */
    LoggerFactoryExtensions.AddDebug = /**
     * Add Debugger to logger
     * @this {?}
     * @return {?}
     */
    function () {
        /** @type {?} */
        var provider = new DebugLoggerProvider();
        this.AddProvider(provider);
        return this;
    };
    /**
     * @this {?}
     * @param {?=} initializer
     * @param {?=} logFileName
     * @return {?}
     */
    LoggerFactoryExtensions.AddLog4Js = /**
     * @this {?}
     * @param {?=} initializer
     * @param {?=} logFileName
     * @return {?}
     */
    function (initializer, logFileName) {
        if (logFileName === void 0) { logFileName = 'log.txt'; }
        /** @type {?} */
        var provider = new Log4JsLoggerProvider(initializer, logFileName);
        this.AddProvider(provider);
        return this;
    };
    return LoggerFactoryExtensions;
}());
/**
 * Extension methods for LoggerFactory
 */
export { LoggerFactoryExtensions };
/** hook defination to the implementation */
DefaultLoggerFactory.prototype.AddLogJs = LoggerFactoryExtensions.AddLog4Js;
DefaultLoggerFactory.prototype.AddDebug = LoggerFactoryExtensions.AddDebug;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyRmFjdG9yeUV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vbG9nZ2luZy9Mb2dnZXJGYWN0b3J5RXh0ZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFXckU7OztBQUFBOzs7SUFDSTs7O09BR0c7Ozs7OztJQUNJLGdDQUFROzs7OztJQUFmOztRQUNJLElBQUksUUFBUSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7SUFNTSxpQ0FBUzs7Ozs7O0lBQWhCLFVBQXVDLFdBQXdCLEVBQUUsV0FBdUI7UUFBdkIsNEJBQUEsRUFBQSx1QkFBdUI7O1FBQ3BGLElBQUksUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDZjtrQ0FqQ0w7SUFrQ0MsQ0FBQTs7OztBQXBCRCxtQ0FvQkM7O0FBbUJELG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQzVFLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxvZ2dlckZhY3RvcnkgfSBmcm9tICcuL0lMb2dnZXJGYWN0b3J5JztcclxuaW1wb3J0IHsgRGVmYXVsdExvZ2dlckZhY3RvcnkgfSBmcm9tICcuL0RlZmF1bHRMb2dnZXJGYWN0b3J5JztcclxuaW1wb3J0IHsgRGVidWdMb2dnZXJQcm92aWRlciB9IGZyb20gJy4vZGVidWcvRGVidWdMb2dnZXJQcm92aWRlcic7XHJcbmltcG9ydCB7IExvZzRKc0xvZ2dlclByb3ZpZGVyIH0gZnJvbSAnLi9sb2c0anMvTG9nNEpzTG9nZ2VyUHJvdmlkZXInO1xyXG5cclxuLyoqIEV4dGVuc2lvbiBtZXRob2QgaW1wbGVtZW50YXRpb24gaW4gVHlwZVNjcmlwdFxyXG4gKiAxLiBjcmVhdGUgZXh0ZW5zaW9uIG1ldGhvZHMgY2xhc3MsIG1ldGhvZCBkZWNsYXJlZCBhcyBzdGF0aWNcclxuICogMi4gZGVjbGFyZSBtb2R1bGUgZm9yIHRoZSB0eXBlIHRvIGJlIGV4dGVudGVkXHJcbiAqIDMuIGhvb2sgdGhlIG1ldGhvZCBkZWxjYXJhdGlvbiB0byBpbXBsZW1lbnRhdGlvblxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBFeHRlbnNpb24gbWV0aG9kcyBmb3IgTG9nZ2VyRmFjdG9yeVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExvZ2dlckZhY3RvcnlFeHRlbnNpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogQWRkIERlYnVnZ2VyIHRvIGxvZ2dlclxyXG4gICAgICogQHBhcmFtIHRoaXMgSUxvZ2dlckZhY3RvcnkgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEFkZERlYnVnKHRoaXM6IElMb2dnZXJGYWN0b3J5KTogSUxvZ2dlckZhY3Rvcnkge1xyXG4gICAgICAgIGxldCBwcm92aWRlciA9IG5ldyBEZWJ1Z0xvZ2dlclByb3ZpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5BZGRQcm92aWRlcihwcm92aWRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogQWRkIExvZzRKUyB0byBsb2dnaW5nIFxyXG4gICAgKiBAcGFyYW0gdGhpcyBJTG9nZ2VyRmFjdG9yeSBpbnN0YW5jZVxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBBZGRMb2c0SnModGhpczogSUxvZ2dlckZhY3RvcnkpOiBJTG9nZ2VyRmFjdG9yeTtcclxuICAgIHN0YXRpYyBBZGRMb2c0SnModGhpczogSUxvZ2dlckZhY3RvcnksIGluaXRpYWxpemVyPzogKCkgPT4gdm9pZCwgbG9nRmlsZU5hbWUgPSAnbG9nLnR4dCcpOiBJTG9nZ2VyRmFjdG9yeSB7XHJcbiAgICAgICAgbGV0IHByb3ZpZGVyID0gbmV3IExvZzRKc0xvZ2dlclByb3ZpZGVyKGluaXRpYWxpemVyLCBsb2dGaWxlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5BZGRQcm92aWRlcihwcm92aWRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBFeHRlbiB0eXBlIG9mIHRoZSBpbXBsZW1lbnRhdGlvbiAqL1xyXG5kZWNsYXJlIG1vZHVsZSAnLi9EZWZhdWx0TG9nZ2VyRmFjdG9yeScge1xyXG4gICAgaW50ZXJmYWNlIERlZmF1bHRMb2dnZXJGYWN0b3J5IHtcclxuICAgICAgICBBZGREZWJ1ZzogKCkgPT4gSUxvZ2dlckZhY3Rvcnk7XHJcbiAgICAgICAgQWRkTG9nSnM6IChpbml0aWFsaXplcj86ICgpID0+IHZvaWQsIGxvZ0ZpbGVOYW1lPzogc3RyaW5nKSA9PiBJTG9nZ2VyRmFjdG9yeTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEV4dGVuZCB0eXBlIG9mIHRoZSBpbnRlcmZhY2UgKi9cclxuZGVjbGFyZSBtb2R1bGUgJy4vSUxvZ2dlckZhY3RvcnknIHtcclxuICAgIGludGVyZmFjZSBJTG9nZ2VyRmFjdG9yeSB7XHJcbiAgICAgICAgQWRkRGVidWc6ICgpID0+IElMb2dnZXJGYWN0b3J5O1xyXG4gICAgICAgIEFkZExvZ0pzOiAoaW5pdGlhbGl6ZXI/OiAoKSA9PiB2b2lkLCBsb2dGaWxlTmFtZT86IHN0cmluZykgPT4gSUxvZ2dlckZhY3Rvcnk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBob29rIGRlZmluYXRpb24gdG8gdGhlIGltcGxlbWVudGF0aW9uICovXHJcbkRlZmF1bHRMb2dnZXJGYWN0b3J5LnByb3RvdHlwZS5BZGRMb2dKcyA9IExvZ2dlckZhY3RvcnlFeHRlbnNpb25zLkFkZExvZzRKcztcclxuRGVmYXVsdExvZ2dlckZhY3RvcnkucHJvdG90eXBlLkFkZERlYnVnID0gTG9nZ2VyRmFjdG9yeUV4dGVuc2lvbnMuQWRkRGVidWc7XHJcbiJdfQ==