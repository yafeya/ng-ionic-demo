/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Dictionary, } from '../collections/index';
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function ISize() { }
/** @type {?} */
ISize.prototype.Width;
/** @type {?} */
ISize.prototype.Height;
/**
 * @record
 */
export function ISizChangeHandler() { }
/** @type {?} */
ISizChangeHandler.prototype.Handle;
/**
 * @record
 */
export function IWindowSizeWatcher() { }
/** @type {?} */
IWindowSizeWatcher.prototype.Start;
/** @type {?} */
IWindowSizeWatcher.prototype.Add;
/** @type {?} */
IWindowSizeWatcher.prototype.Remove;
/** @type {?} */
export var WindowSizeWatcherToken = new InjectionToken('./IWindowSizeWatcher');
var WindowSizeWatcher = /** @class */ (function () {
    function WindowSizeWatcher() {
        this.handlers = new Dictionary();
    }
    /**
     * @return {?}
     */
    WindowSizeWatcher.prototype.Start = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        window.onresize = function (e) {
            var e_1, _a;
            try {
                for (var _b = tslib_1.__values(self.handlers.Values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var handler = _c.value;
                    handler.Handle({ Width: window.innerWidth, Height: window.innerHeight });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
    };
    /**
     * @param {?} name
     * @param {?} handler
     * @return {?}
     */
    WindowSizeWatcher.prototype.Add = /**
     * @param {?} name
     * @param {?} handler
     * @return {?}
     */
    function (name, handler) {
        this.handlers.Add(name, handler);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    WindowSizeWatcher.prototype.Remove = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.handlers.Remove(name);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    WindowSizeWatcher.prototype.OnSizeChanged = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.handlers.Values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                handler.Handle({ Width: window.innerWidth, Height: window.innerHeight });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return WindowSizeWatcher;
}());
export { WindowSizeWatcher };
if (false) {
    /** @type {?} */
    WindowSizeWatcher.prototype.handlers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93U2l6ZVdhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vY29tbW9uL1dpbmRvd1NpemVXYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLFVBQVUsR0FBSSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYy9DLFdBQWEsc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUVqRixJQUFBO0lBSUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxFQUE2QixDQUFDO0tBQy9EOzs7O0lBRUQsaUNBQUs7OztJQUFMOztRQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsUUFBUSxHQUFHLFVBQUMsQ0FBVTs7O2dCQUN6QixLQUFvQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBdkMsSUFBSSxPQUFPLFdBQUE7b0JBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztpQkFDNUU7Ozs7Ozs7OztTQUNKLENBQUM7S0FDTDs7Ozs7O0lBRUQsK0JBQUc7Ozs7O0lBQUgsVUFBSSxJQUFZLEVBQUUsT0FBMEI7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDOzs7OztJQUNELGtDQUFNOzs7O0lBQU4sVUFBTyxJQUFZO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBRU8seUNBQWE7Ozs7Y0FBQyxDQUFVOzs7WUFFNUIsS0FBb0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXZDLElBQUksT0FBTyxXQUFBO2dCQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDNUU7Ozs7Ozs7Ozs7NEJBOUNUO0lBZ0RDLENBQUE7QUEvQkQsNkJBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURpY3Rpb25hcnksIERpY3Rpb25hcnksICB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpemUge1xyXG4gICAgV2lkdGg6IG51bWJlcjtcclxuICAgIEhlaWdodDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpekNoYW5nZUhhbmRsZXIge1xyXG4gICAgSGFuZGxlKHNpemU6IElTaXplKTogdm9pZDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElXaW5kb3dTaXplV2F0Y2hlciB7XHJcbiAgICBTdGFydCgpOiB2b2lkO1xyXG4gICAgQWRkKG5hbWU6IHN0cmluZywgaGFuZGxlcjogSVNpekNoYW5nZUhhbmRsZXIpO1xyXG4gICAgUmVtb3ZlKG5hbWU6IHN0cmluZyk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFdpbmRvd1NpemVXYXRjaGVyVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJy4vSVdpbmRvd1NpemVXYXRjaGVyJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93U2l6ZVdhdGNoZXIgaW1wbGVtZW50cyBJV2luZG93U2l6ZVdhdGNoZXIge1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogSURpY3Rpb25hcnk8c3RyaW5nLCBJU2l6Q2hhbmdlSGFuZGxlcj47XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgRGljdGlvbmFyeTxzdHJpbmcsIElTaXpDaGFuZ2VIYW5kbGVyPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gKGU6IFVJRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiBzZWxmLmhhbmRsZXJzLlZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLkhhbmRsZSh7IFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgSGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIEFkZChuYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElTaXpDaGFuZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5BZGQobmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBSZW1vdmUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5SZW1vdmUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPblNpemVDaGFuZ2VkKGU6IFVJRXZlbnQpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzLlZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuSGFuZGxlKHsgV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19