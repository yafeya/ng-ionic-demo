/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Log4JsLogger } from './Log4JsLogger';
import * as IO from '../../io/index';
var Log4JsLoggerProvider = /** @class */ (function () {
    function Log4JsLoggerProvider(initializer, logFileName) {
        if (logFileName === void 0) { logFileName = 'log.txt'; }
        if (initializer) {
            initializer();
        }
        else {
            try {
                /** @type {?} */
                var directory = new IO.Directory();
                /** @type {?} */
                var folder = directory.GetUserDataFolder();
                directory.EnsureFolderExist(folder);
                /** @type {?} */
                var file = directory.Combine(folder, logFileName);
                log4js.configure({
                    appenders: {
                        file: { type: 'file', filename: file, maxLogSize: 20480, backups: 2 },
                        console: { type: 'console', }
                    },
                    categories: {
                        default: { appenders: ['console', 'file'], level: 'debug' }
                    }
                });
            }
            catch (e) {
                console.log('Not Electron runtime, initialize Log4JS failed.');
            }
        }
    }
    /**
     * Create logger
     * @param name logger name
     */
    /**
     * Create logger
     * @param {?} name logger name
     * @return {?}
     */
    Log4JsLoggerProvider.prototype.CreateLogger = /**
     * Create logger
     * @param {?} name logger name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var loggerName = name ? name : 'Default';
        /** @type {?} */
        var log4Logger = log4js.getLogger(loggerName);
        return new Log4JsLogger(loggerName, log4Logger);
    };
    /**
     * @return {?}
     */
    Log4JsLoggerProvider.prototype.Dispose = /**
     * @return {?}
     */
    function () {
    };
    return Log4JsLoggerProvider;
}());
export { Log4JsLoggerProvider };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nNEpzTG9nZ2VyUHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vbG9nZ2luZy9sb2c0anMvTG9nNEpzTG9nZ2VyUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3JDLElBQUE7SUFFSSw4QkFBWSxXQUF3QixFQUFFLFdBQXVCO1FBQXZCLDRCQUFBLEVBQUEsdUJBQXVCO1FBRXpELElBQUksV0FBVyxFQUFFO1lBQ2IsV0FBVyxFQUFFLENBQUM7U0FDakI7YUFBTTtZQUNILElBQUk7O2dCQUNBLElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOztnQkFDbkMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzNDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBQ3BDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUVsRCxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNiLFNBQVMsRUFBRTt3QkFDUCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO3dCQUNyRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxHQUFHO3FCQUNoQztvQkFDRCxVQUFVLEVBQUU7d0JBQ1IsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7cUJBQzlEO2lCQUNKLENBQUMsQ0FBQzthQUNOO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO2FBQ2xFO1NBRUo7S0FDSjtJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsMkNBQVk7Ozs7O0lBQVosVUFBYSxJQUFZOztRQUNyQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDOztRQUN6QyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ25EOzs7O0lBRUQsc0NBQU87OztJQUFQO0tBRUM7K0JBbkRMO0lBb0RDLENBQUE7QUEzQ0QsZ0NBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxvZ2dlclByb3ZpZGVyIH0gZnJvbSAnLi4vSUxvZ2dlclByb3ZpZGVyJztcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJy4uL0lMb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gJy4uL0xvZ0xldmVsJztcclxuaW1wb3J0IHsgTG9nNEpzTG9nZ2VyIH0gZnJvbSAnLi9Mb2c0SnNMb2dnZXInO1xyXG5pbXBvcnQgKiBhcyBJTyBmcm9tICcuLi8uLi9pby9pbmRleCc7XHJcblxyXG5kZWNsYXJlIHZhciBsb2c0anM6IGFueTtcclxuZGVjbGFyZSB2YXIgZWxlY3Ryb246IGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2c0SnNMb2dnZXJQcm92aWRlciBpbXBsZW1lbnRzIElMb2dnZXJQcm92aWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbGl6ZXI/OiAoKSA9PiB2b2lkLCBsb2dGaWxlTmFtZSA9ICdsb2cudHh0Jykge1xyXG5cclxuICAgICAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdG9yeSA9IG5ldyBJTy5EaXJlY3RvcnkoKTtcclxuICAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBkaXJlY3RvcnkuR2V0VXNlckRhdGFGb2xkZXIoKTtcclxuICAgICAgICAgICAgICAgIGRpcmVjdG9yeS5FbnN1cmVGb2xkZXJFeGlzdChmb2xkZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBkaXJlY3RvcnkuQ29tYmluZShmb2xkZXIsIGxvZ0ZpbGVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2c0anMuY29uZmlndXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBlbmRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogeyB0eXBlOiAnZmlsZScsIGZpbGVuYW1lOiBmaWxlLCBtYXhMb2dTaXplOiAyMDQ4MCwgYmFja3VwczogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlOiB7IHR5cGU6ICdjb25zb2xlJywgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7IGFwcGVuZGVyczogWydjb25zb2xlJywgJ2ZpbGUnXSwgbGV2ZWw6ICdkZWJ1ZycgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IEVsZWN0cm9uIHJ1bnRpbWUsIGluaXRpYWxpemUgTG9nNEpTIGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgbG9nZ2VyIFxyXG4gICAgICogQHBhcmFtIG5hbWUgbG9nZ2VyIG5hbWVcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlTG9nZ2VyKG5hbWU6IHN0cmluZyk6IElMb2dnZXIge1xyXG4gICAgICAgIGxldCBsb2dnZXJOYW1lID0gbmFtZSA/IG5hbWUgOiAnRGVmYXVsdCc7XHJcbiAgICAgICAgbGV0IGxvZzRMb2dnZXIgPSBsb2c0anMuZ2V0TG9nZ2VyKGxvZ2dlck5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IExvZzRKc0xvZ2dlcihsb2dnZXJOYW1lLCBsb2c0TG9nZ2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBEaXNwb3NlKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSJdfQ==