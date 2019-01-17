/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export const WindowSizeWatcherToken = new InjectionToken('./IWindowSizeWatcher');
export class WindowSizeWatcher {
    constructor() {
        this.handlers = new Dictionary();
    }
    /**
     * @return {?}
     */
    Start() {
        /** @type {?} */
        let self = this;
        window.onresize = (e) => {
            for (let handler of self.handlers.Values()) {
                handler.Handle({ Width: window.innerWidth, Height: window.innerHeight });
            }
        };
    }
    /**
     * @param {?} name
     * @param {?} handler
     * @return {?}
     */
    Add(name, handler) {
        this.handlers.Add(name, handler);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    Remove(name) {
        this.handlers.Remove(name);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    OnSizeChanged(e) {
        for (let handler of this.handlers.Values()) {
            handler.Handle({ Width: window.innerWidth, Height: window.innerHeight });
        }
    }
}
if (false) {
    /** @type {?} */
    WindowSizeWatcher.prototype.handlers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93U2l6ZVdhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vY29tbW9uL1dpbmRvd1NpemVXYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWUsVUFBVSxHQUFJLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjL0MsYUFBYSxzQkFBc0IsR0FBRyxJQUFJLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRWpGLE1BQU07SUFJRjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLEVBQTZCLENBQUM7S0FDL0Q7Ozs7SUFFRCxLQUFLOztRQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBVSxFQUFFLEVBQUU7WUFDN0IsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUN4QyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQzVFO1NBQ0osQ0FBQztLQUNMOzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBWSxFQUFFLE9BQTBCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNwQzs7Ozs7SUFDRCxNQUFNLENBQUMsSUFBWTtRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOzs7OztJQUVPLGFBQWEsQ0FBQyxDQUFVO1FBRTVCLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN4QyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQzVFOztDQUVSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURpY3Rpb25hcnksIERpY3Rpb25hcnksICB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpemUge1xyXG4gICAgV2lkdGg6IG51bWJlcjtcclxuICAgIEhlaWdodDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpekNoYW5nZUhhbmRsZXIge1xyXG4gICAgSGFuZGxlKHNpemU6IElTaXplKTogdm9pZDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElXaW5kb3dTaXplV2F0Y2hlciB7XHJcbiAgICBTdGFydCgpOiB2b2lkO1xyXG4gICAgQWRkKG5hbWU6IHN0cmluZywgaGFuZGxlcjogSVNpekNoYW5nZUhhbmRsZXIpO1xyXG4gICAgUmVtb3ZlKG5hbWU6IHN0cmluZyk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFdpbmRvd1NpemVXYXRjaGVyVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJy4vSVdpbmRvd1NpemVXYXRjaGVyJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93U2l6ZVdhdGNoZXIgaW1wbGVtZW50cyBJV2luZG93U2l6ZVdhdGNoZXIge1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogSURpY3Rpb25hcnk8c3RyaW5nLCBJU2l6Q2hhbmdlSGFuZGxlcj47XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgRGljdGlvbmFyeTxzdHJpbmcsIElTaXpDaGFuZ2VIYW5kbGVyPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gKGU6IFVJRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiBzZWxmLmhhbmRsZXJzLlZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLkhhbmRsZSh7IFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgSGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIEFkZChuYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElTaXpDaGFuZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5BZGQobmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBSZW1vdmUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5SZW1vdmUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPblNpemVDaGFuZ2VkKGU6IFVJRXZlbnQpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzLlZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuSGFuZGxlKHsgV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19