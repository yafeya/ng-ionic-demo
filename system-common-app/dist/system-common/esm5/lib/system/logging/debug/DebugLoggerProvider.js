/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DebugLogger } from './DebugLogger';
var DebugLoggerProvider = /** @class */ (function () {
    function DebugLoggerProvider(filter) {
        this.filter = filter;
        if (filter == null) {
            filter = function (message, level) {
                return true;
            };
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    DebugLoggerProvider.prototype.CreateLogger = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return new DebugLogger(name, this.filter);
    };
    /**
     * @return {?}
     */
    DebugLoggerProvider.prototype.Dispose = /**
     * @return {?}
     */
    function () {
    };
    return DebugLoggerProvider;
}());
export { DebugLoggerProvider };
if (false) {
    /** @type {?} */
    DebugLoggerProvider.prototype.filter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdMb2dnZXJQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9sb2dnaW5nL2RlYnVnL0RlYnVnTG9nZ2VyUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUMsSUFBQTtJQUVJLDZCQUFvQixNQUFzRDtRQUF0RCxXQUFNLEdBQU4sTUFBTSxDQUFnRDtRQUN0RSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxHQUFHLFVBQUMsT0FBZSxFQUFFLEtBQWU7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDO2FBQ2YsQ0FBQztTQUNMO0tBQ0o7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLElBQVk7UUFDckIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdDOzs7O0lBRUQscUNBQU87OztJQUFQO0tBRUM7OEJBckJMO0lBc0JDLENBQUE7QUFqQkQsK0JBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxvZ2dlclByb3ZpZGVyIH0gZnJvbSAnLi4vSUxvZ2dlclByb3ZpZGVyJztcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJy4uL0lMb2dnZXInO1xyXG5pbXBvcnQgeyBEZWJ1Z0xvZ2dlciB9IGZyb20gJy4vRGVidWdMb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gJy4uL0xvZ0xldmVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0xvZ2dlclByb3ZpZGVyIGltcGxlbWVudHMgSUxvZ2dlclByb3ZpZGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbHRlcj86IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBMb2dMZXZlbCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogTG9nTGV2ZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDcmVhdGVMb2dnZXIobmFtZTogc3RyaW5nKTogSUxvZ2dlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEZWJ1Z0xvZ2dlcihuYW1lLCB0aGlzLmZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgRGlzcG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iXX0=