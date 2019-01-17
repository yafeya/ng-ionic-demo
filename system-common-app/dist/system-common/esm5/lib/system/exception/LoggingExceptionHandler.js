/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import * as Logging from '../logging/index';
import { LoggerFactoryToken } from '../Tokens';
var LoggingExceptionHandler = /** @class */ (function () {
    function LoggingExceptionHandler(loggerFactory) {
        this.loggerFactory = loggerFactory;
        this.logger = loggerFactory.CreateLogger('ExceptionHandler');
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    LoggingExceptionHandler.prototype.Handle = /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) {
        this.logger.Error(exception);
    };
    LoggingExceptionHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoggingExceptionHandler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LoggerFactoryToken,] }] }
    ]; };
    return LoggingExceptionHandler;
}());
export { LoggingExceptionHandler };
if (false) {
    /** @type {?} */
    LoggingExceptionHandler.prototype.logger;
    /** @type {?} */
    LoggingExceptionHandler.prototype.loggerFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2luZ0V4Y2VwdGlvbkhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vZXhjZXB0aW9uL0xvZ2dpbmdFeGNlcHRpb25IYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7SUFNM0MsaUNBQWdELGFBQXFDO1FBQXJDLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtRQUNqRixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNoRTs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sU0FBZ0I7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDaEM7O2dCQVZKLFVBQVU7Ozs7Z0RBSU0sTUFBTSxTQUFDLGtCQUFrQjs7a0NBVDFDOztTQU1hLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBMb2dnaW5nIGZyb20gJy4uL2xvZ2dpbmcvaW5kZXgnO1xyXG5pbXBvcnQgeyBJRXhjZXB0aW9uSGFuZGxlciB9IGZyb20gJy4vSUV4Y2VwdGlvbkhhbmRsZXInO1xyXG5pbXBvcnQgeyBMb2dnZXJGYWN0b3J5VG9rZW4gfSBmcm9tICcuLi9Ub2tlbnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9nZ2luZ0V4Y2VwdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXhjZXB0aW9uSGFuZGxlciB7XHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2luZy5JTG9nZ2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTG9nZ2VyRmFjdG9yeVRva2VuKSBwcml2YXRlIGxvZ2dlckZhY3Rvcnk6IExvZ2dpbmcuSUxvZ2dlckZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlckZhY3RvcnkuQ3JlYXRlTG9nZ2VyKCdFeGNlcHRpb25IYW5kbGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgSGFuZGxlKGV4Y2VwdGlvbjogRXJyb3IpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5FcnJvcihleGNlcHRpb24pO1xyXG4gICAgfVxyXG59Il19