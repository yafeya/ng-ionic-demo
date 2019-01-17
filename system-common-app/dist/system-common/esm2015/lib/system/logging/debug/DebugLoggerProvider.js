/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DebugLogger } from './DebugLogger';
export class DebugLoggerProvider {
    /**
     * @param {?=} filter
     */
    constructor(filter) {
        this.filter = filter;
        if (filter == null) {
            filter = (message, level) => {
                return true;
            };
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    CreateLogger(name) {
        return new DebugLogger(name, this.filter);
    }
    /**
     * @return {?}
     */
    Dispose() {
    }
}
if (false) {
    /** @type {?} */
    DebugLoggerProvider.prototype.filter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdMb2dnZXJQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9sb2dnaW5nL2RlYnVnL0RlYnVnTG9nZ2VyUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUMsTUFBTTs7OztJQUVGLFlBQW9CLE1BQXNEO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQWdEO1FBQ3RFLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixNQUFNLEdBQUcsQ0FBQyxPQUFlLEVBQUUsS0FBZSxFQUFFLEVBQUU7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDO2FBQ2YsQ0FBQztTQUNMO0tBQ0o7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdDOzs7O0lBRUQsT0FBTztLQUVOO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9nZ2VyUHJvdmlkZXIgfSBmcm9tICcuLi9JTG9nZ2VyUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSAnLi4vSUxvZ2dlcic7XHJcbmltcG9ydCB7IERlYnVnTG9nZ2VyIH0gZnJvbSAnLi9EZWJ1Z0xvZ2dlcic7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSAnLi4vTG9nTGV2ZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlYnVnTG9nZ2VyUHJvdmlkZXIgaW1wbGVtZW50cyBJTG9nZ2VyUHJvdmlkZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsdGVyPzogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IExvZ0xldmVsKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZpbHRlciA9IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBMb2dMZXZlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUxvZ2dlcihuYW1lOiBzdHJpbmcpOiBJTG9nZ2VyIHtcclxuICAgICAgICByZXR1cm4gbmV3IERlYnVnTG9nZ2VyKG5hbWUsIHRoaXMuZmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBEaXNwb3NlKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSJdfQ==