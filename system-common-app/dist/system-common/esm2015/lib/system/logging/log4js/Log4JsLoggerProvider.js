/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Log4JsLogger } from './Log4JsLogger';
import * as IO from '../../io/index';
export class Log4JsLoggerProvider {
    /**
     * @param {?=} initializer
     * @param {?=} logFileName
     */
    constructor(initializer, logFileName = 'log.txt') {
        if (initializer) {
            initializer();
        }
        else {
            try {
                /** @type {?} */
                let directory = new IO.Directory();
                /** @type {?} */
                let folder = directory.GetUserDataFolder();
                directory.EnsureFolderExist(folder);
                /** @type {?} */
                let file = directory.Combine(folder, logFileName);
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
     * @param {?} name logger name
     * @return {?}
     */
    CreateLogger(name) {
        /** @type {?} */
        let loggerName = name ? name : 'Default';
        /** @type {?} */
        let log4Logger = log4js.getLogger(loggerName);
        return new Log4JsLogger(loggerName, log4Logger);
    }
    /**
     * @return {?}
     */
    Dispose() {
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nNEpzTG9nZ2VyUHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vbG9nZ2luZy9sb2c0anMvTG9nNEpzTG9nZ2VyUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3JDLE1BQU07Ozs7O0lBRUYsWUFBWSxXQUF3QixFQUFFLFdBQVcsR0FBRyxTQUFTO1FBRXpELElBQUksV0FBVyxFQUFFO1lBQ2IsV0FBVyxFQUFFLENBQUM7U0FDakI7YUFBTTtZQUNILElBQUk7O2dCQUNBLElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOztnQkFDbkMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzNDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBQ3BDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUVsRCxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNiLFNBQVMsRUFBRTt3QkFDUCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO3dCQUNyRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxHQUFHO3FCQUNoQztvQkFDRCxVQUFVLEVBQUU7d0JBQ1IsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7cUJBQzlEO2lCQUNKLENBQUMsQ0FBQzthQUNOO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO2FBQ2xFO1NBRUo7S0FDSjs7Ozs7O0lBTUQsWUFBWSxDQUFDLElBQVk7O1FBQ3JCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7O1FBQ3pDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFRCxPQUFPO0tBRU47Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2dnZXJQcm92aWRlciB9IGZyb20gJy4uL0lMb2dnZXJQcm92aWRlcic7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuLi9JTG9nZ2VyJztcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICcuLi9Mb2dMZXZlbCc7XHJcbmltcG9ydCB7IExvZzRKc0xvZ2dlciB9IGZyb20gJy4vTG9nNEpzTG9nZ2VyJztcclxuaW1wb3J0ICogYXMgSU8gZnJvbSAnLi4vLi4vaW8vaW5kZXgnO1xyXG5cclxuZGVjbGFyZSB2YXIgbG9nNGpzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGVsZWN0cm9uOiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nNEpzTG9nZ2VyUHJvdmlkZXIgaW1wbGVtZW50cyBJTG9nZ2VyUHJvdmlkZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxpemVyPzogKCkgPT4gdm9pZCwgbG9nRmlsZU5hbWUgPSAnbG9nLnR4dCcpIHtcclxuXHJcbiAgICAgICAgaWYgKGluaXRpYWxpemVyKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXJlY3RvcnkgPSBuZXcgSU8uRGlyZWN0b3J5KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9sZGVyID0gZGlyZWN0b3J5LkdldFVzZXJEYXRhRm9sZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RvcnkuRW5zdXJlRm9sZGVyRXhpc3QoZm9sZGVyKTtcclxuICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZGlyZWN0b3J5LkNvbWJpbmUoZm9sZGVyLCBsb2dGaWxlTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9nNGpzLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IHsgdHlwZTogJ2ZpbGUnLCBmaWxlbmFtZTogZmlsZSwgbWF4TG9nU2l6ZTogMjA0ODAsIGJhY2t1cHM6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZTogeyB0eXBlOiAnY29uc29sZScsIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogeyBhcHBlbmRlcnM6IFsnY29uc29sZScsICdmaWxlJ10sIGxldmVsOiAnZGVidWcnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBFbGVjdHJvbiBydW50aW1lLCBpbml0aWFsaXplIExvZzRKUyBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGxvZ2dlciBcclxuICAgICAqIEBwYXJhbSBuYW1lIGxvZ2dlciBuYW1lXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZUxvZ2dlcihuYW1lOiBzdHJpbmcpOiBJTG9nZ2VyIHtcclxuICAgICAgICBsZXQgbG9nZ2VyTmFtZSA9IG5hbWUgPyBuYW1lIDogJ0RlZmF1bHQnO1xyXG4gICAgICAgIGxldCBsb2c0TG9nZ2VyID0gbG9nNGpzLmdldExvZ2dlcihsb2dnZXJOYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBMb2c0SnNMb2dnZXIobG9nZ2VyTmFtZSwgbG9nNExvZ2dlcik7XHJcbiAgICB9XHJcblxyXG4gICAgRGlzcG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iXX0=