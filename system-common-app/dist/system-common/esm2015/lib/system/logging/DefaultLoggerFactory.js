/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from './Logger';
import * as Collections from '../collections/index';
export class DefaultLoggerFactory {
    constructor() {
        this.providers = new Collections.List();
        this.loggers = new Collections.Dictionary();
    }
    /**
     * Create a logger
     * @param {?} name
     * @return {?}
     */
    CreateLogger(name) {
        /** @type {?} */
        let logger = this.loggers.Item(name);
        if (!logger) {
            logger = new Logger(this, name);
            this.loggers.Add(name, logger);
        }
        return logger;
    }
    /**
     * Add an logger provider to the logging system
     * \@provider logger provider
     * @param {?} provider
     * @return {?}
     */
    AddProvider(provider) {
        this.providers.Add(provider);
        for (let item of this.loggers.Items) {
            item.Value.AddProvider(provider);
        }
    }
    /**
     * Get logger providers
     * @return {?}
     */
    GetProviders() {
        return this.providers;
    }
}
DefaultLoggerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DefaultLoggerFactory.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    DefaultLoggerFactory.prototype.providers;
    /** @type {?} */
    DefaultLoggerFactory.prototype.loggers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdExvZ2dlckZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vbG9nZ2luZy9EZWZhdWx0TG9nZ2VyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sS0FBSyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsTUFBTTtJQUtGO3lCQUhvQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQW1CO3VCQUN6QyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQWtCO0tBRTdDOzs7Ozs7SUFHakIsWUFBWSxDQUFDLElBQVk7O1FBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2pCOzs7Ozs7O0lBTUQsV0FBVyxDQUFDLFFBQXlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTdCLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEM7S0FDSjs7Ozs7SUFJRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3pCOzs7WUFwQ0osVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUxvZ2dlckZhY3RvcnkgfSBmcm9tICcuL0lMb2dnZXJGYWN0b3J5JztcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJy4vSUxvZ2dlcic7XHJcbmltcG9ydCB7IElMb2dnZXJQcm92aWRlciB9IGZyb20gJy4vSUxvZ2dlclByb3ZpZGVyJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9Mb2dnZXInO1xyXG5cclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdExvZ2dlckZhY3RvcnkgaW1wbGVtZW50cyBJTG9nZ2VyRmFjdG9yeSB7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm92aWRlcnMgPSBuZXcgQ29sbGVjdGlvbnMuTGlzdDxJTG9nZ2VyUHJvdmlkZXI+KCk7XHJcbiAgICBwcml2YXRlIGxvZ2dlcnMgPSBuZXcgQ29sbGVjdGlvbnMuRGljdGlvbmFyeTxzdHJpbmcsIExvZ2dlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGUgYSBsb2dnZXIgKi9cclxuICAgIENyZWF0ZUxvZ2dlcihuYW1lOiBzdHJpbmcpOiBJTG9nZ2VyIHtcclxuICAgICAgICBsZXQgbG9nZ2VyID0gdGhpcy5sb2dnZXJzLkl0ZW0obmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghbG9nZ2VyKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcywgbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2Vycy5BZGQobmFtZSwgbG9nZ2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsb2dnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQWRkIGFuIGxvZ2dlciBwcm92aWRlciB0byB0aGUgbG9nZ2luZyBzeXN0ZW1cclxuICAgICAqIEBwcm92aWRlciBsb2dnZXIgcHJvdmlkZXJcclxuICAgICAqL1xyXG4gICAgQWRkUHJvdmlkZXIocHJvdmlkZXI6IElMb2dnZXJQcm92aWRlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzLkFkZChwcm92aWRlcik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5sb2dnZXJzLkl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uVmFsdWUuQWRkUHJvdmlkZXIocHJvdmlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGxvZ2dlciBwcm92aWRlcnNcclxuICAgICAqL1xyXG4gICAgR2V0UHJvdmlkZXJzKCk6IENvbGxlY3Rpb25zLklMaXN0PElMb2dnZXJQcm92aWRlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVycztcclxuICAgIH1cclxufSJdfQ==