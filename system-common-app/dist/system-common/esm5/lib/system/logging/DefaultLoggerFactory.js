/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Logger } from './Logger';
import * as Collections from '../collections/index';
var DefaultLoggerFactory = /** @class */ (function () {
    function DefaultLoggerFactory() {
        this.providers = new Collections.List();
        this.loggers = new Collections.Dictionary();
    }
    /** Create a logger */
    /**
     * Create a logger
     * @param {?} name
     * @return {?}
     */
    DefaultLoggerFactory.prototype.CreateLogger = /**
     * Create a logger
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var logger = this.loggers.Item(name);
        if (!logger) {
            logger = new Logger(this, name);
            this.loggers.Add(name, logger);
        }
        return logger;
    };
    /**
     * Add an logger provider to the logging system
     * @provider logger provider
     */
    /**
     * Add an logger provider to the logging system
     * \@provider logger provider
     * @param {?} provider
     * @return {?}
     */
    DefaultLoggerFactory.prototype.AddProvider = /**
     * Add an logger provider to the logging system
     * \@provider logger provider
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        var e_1, _a;
        this.providers.Add(provider);
        try {
            for (var _b = tslib_1.__values(this.loggers.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.Value.AddProvider(provider);
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
    /**
     * Get logger providers
     */
    /**
     * Get logger providers
     * @return {?}
     */
    DefaultLoggerFactory.prototype.GetProviders = /**
     * Get logger providers
     * @return {?}
     */
    function () {
        return this.providers;
    };
    DefaultLoggerFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DefaultLoggerFactory.ctorParameters = function () { return []; };
    return DefaultLoggerFactory;
}());
export { DefaultLoggerFactory };
if (false) {
    /** @type {?} */
    DefaultLoggerFactory.prototype.providers;
    /** @type {?} */
    DefaultLoggerFactory.prototype.loggers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdExvZ2dlckZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vbG9nZ2luZy9EZWZhdWx0TG9nZ2VyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEtBQUssV0FBVyxNQUFNLHNCQUFzQixDQUFDOztJQVFoRDt5QkFIb0IsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFtQjt1QkFDekMsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFrQjtLQUU3QztJQUVqQixzQkFBc0I7Ozs7OztJQUN0QiwyQ0FBWTs7Ozs7SUFBWixVQUFhLElBQVk7O1FBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsMENBQVc7Ozs7OztJQUFYLFVBQVksUUFBeUI7O1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUU3QixLQUFpQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQWhDLElBQUksSUFBSSxXQUFBO2dCQUNULElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDOzs7Ozs7Ozs7S0FDSjtJQUNEOztPQUVHOzs7OztJQUNILDJDQUFZOzs7O0lBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDekI7O2dCQXBDSixVQUFVOzs7OytCQVJYOztTQVNhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUxvZ2dlckZhY3RvcnkgfSBmcm9tICcuL0lMb2dnZXJGYWN0b3J5JztcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJy4vSUxvZ2dlcic7XHJcbmltcG9ydCB7IElMb2dnZXJQcm92aWRlciB9IGZyb20gJy4vSUxvZ2dlclByb3ZpZGVyJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9Mb2dnZXInO1xyXG5cclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdExvZ2dlckZhY3RvcnkgaW1wbGVtZW50cyBJTG9nZ2VyRmFjdG9yeSB7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm92aWRlcnMgPSBuZXcgQ29sbGVjdGlvbnMuTGlzdDxJTG9nZ2VyUHJvdmlkZXI+KCk7XHJcbiAgICBwcml2YXRlIGxvZ2dlcnMgPSBuZXcgQ29sbGVjdGlvbnMuRGljdGlvbmFyeTxzdHJpbmcsIExvZ2dlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGUgYSBsb2dnZXIgKi9cclxuICAgIENyZWF0ZUxvZ2dlcihuYW1lOiBzdHJpbmcpOiBJTG9nZ2VyIHtcclxuICAgICAgICBsZXQgbG9nZ2VyID0gdGhpcy5sb2dnZXJzLkl0ZW0obmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghbG9nZ2VyKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcywgbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2Vycy5BZGQobmFtZSwgbG9nZ2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsb2dnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQWRkIGFuIGxvZ2dlciBwcm92aWRlciB0byB0aGUgbG9nZ2luZyBzeXN0ZW1cclxuICAgICAqIEBwcm92aWRlciBsb2dnZXIgcHJvdmlkZXJcclxuICAgICAqL1xyXG4gICAgQWRkUHJvdmlkZXIocHJvdmlkZXI6IElMb2dnZXJQcm92aWRlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzLkFkZChwcm92aWRlcik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5sb2dnZXJzLkl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uVmFsdWUuQWRkUHJvdmlkZXIocHJvdmlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGxvZ2dlciBwcm92aWRlcnNcclxuICAgICAqL1xyXG4gICAgR2V0UHJvdmlkZXJzKCk6IENvbGxlY3Rpb25zLklMaXN0PElMb2dnZXJQcm92aWRlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVycztcclxuICAgIH1cclxufSJdfQ==