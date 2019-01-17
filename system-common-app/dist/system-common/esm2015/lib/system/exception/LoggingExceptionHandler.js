/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import * as Logging from '../logging/index';
import { LoggerFactoryToken } from '../Tokens';
export class LoggingExceptionHandler {
    /**
     * @param {?} loggerFactory
     */
    constructor(loggerFactory) {
        this.loggerFactory = loggerFactory;
        this.logger = loggerFactory.CreateLogger('ExceptionHandler');
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    Handle(exception) {
        this.logger.Error(exception);
    }
}
LoggingExceptionHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoggingExceptionHandler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LoggerFactoryToken,] }] }
];
if (false) {
    /** @type {?} */
    LoggingExceptionHandler.prototype.logger;
    /** @type {?} */
    LoggingExceptionHandler.prototype.loggerFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2luZ0V4Y2VwdGlvbkhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vZXhjZXB0aW9uL0xvZ2dpbmdFeGNlcHRpb25IYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUcvQyxNQUFNOzs7O0lBR0YsWUFBZ0QsYUFBcUM7UUFBckMsa0JBQWEsR0FBYixhQUFhLENBQXdCO1FBQ2pGLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ2hFOzs7OztJQUVELE1BQU0sQ0FBQyxTQUFnQjtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoQzs7O1lBVkosVUFBVTs7Ozs0Q0FJTSxNQUFNLFNBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIExvZ2dpbmcgZnJvbSAnLi4vbG9nZ2luZy9pbmRleCc7XHJcbmltcG9ydCB7IElFeGNlcHRpb25IYW5kbGVyIH0gZnJvbSAnLi9JRXhjZXB0aW9uSGFuZGxlcic7XHJcbmltcG9ydCB7IExvZ2dlckZhY3RvcnlUb2tlbiB9IGZyb20gJy4uL1Rva2Vucyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnaW5nRXhjZXB0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFeGNlcHRpb25IYW5kbGVyIHtcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnaW5nLklMb2dnZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChMb2dnZXJGYWN0b3J5VG9rZW4pIHByaXZhdGUgbG9nZ2VyRmFjdG9yeTogTG9nZ2luZy5JTG9nZ2VyRmFjdG9yeSkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5DcmVhdGVMb2dnZXIoJ0V4Y2VwdGlvbkhhbmRsZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBIYW5kbGUoZXhjZXB0aW9uOiBFcnJvcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLkVycm9yKGV4Y2VwdGlvbik7XHJcbiAgICB9XHJcbn0iXX0=