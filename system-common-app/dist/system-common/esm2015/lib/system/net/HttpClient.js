/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as ExceptionHandling from '../exception/index';
import * as Logging from '../logging/index';
export class HttpClient {
    /**
     * @param {?} http
     * @param {?} exceptionHandler
     * @param {?} loggerFactory
     */
    constructor(http, exceptionHandler, loggerFactory) {
        this.http = http;
        this.exceptionHandler = exceptionHandler;
        this.OutputDebugging = true;
        this.logger = loggerFactory.CreateLogger('HttpClient');
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    /**
     * @return {?}
     */
    get ErrorHander() {
        return this.errorHandler;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ErrorHander(value) {
        this.errorHandler = value;
    }
    /**
     * Post data to given url
     * @param {?} url Post url
     * @param {?} data  post data
     * @return {?}
     */
    Post(url, data) {
        /** @type {?} */
        const self = this;
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            const body = JSON.stringify(data);
            if (self.OutputDebugging) {
                self.logger
                    .Debug(`Post data url: ${url}`)
                    .Debug(body);
            }
            self.http.post(url, body, { headers: self.headers })
                .toPromise()
                .then(response => {
                resolve(response.json());
            })
                .catch(error => {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    }
    /**
     * Post raw string to given url
     * @param {?} url url to post data
     * @param {?} data data in string format
     * @return {?}
     */
    PostRaw(url, data) {
        /** @type {?} */
        const self = this;
        return new Promise(function (resolve, reject) {
            if (self.OutputDebugging) {
                self.logger
                    .Debug(`Post data url: ${url}`)
                    .Debug(data);
            }
            self.http.post(url, data, { headers: self.headers })
                .toPromise()
                .then(response => {
                resolve(response.json());
            })
                .catch(error => {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    }
    /**
     * Delete reques
     * @param {?} url the url for delete
     * @return {?}
     */
    Delete(url) {
        /** @type {?} */
        const self = this;
        return new Promise((resolve, reject) => {
            self.http.delete(url)
                .toPromise()
                .then(response => {
                resolve(response.json());
            })
                .catch(error => {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    }
    /**
     * Get data from given url in async mode
     * @param {?} url the url to get data.
     * @param {?=} useRaw
     * @return {?}
     */
    Get(url, useRaw = false) {
        /** @type {?} */
        const self = this;
        return new Promise(function (resolve, reject) {
            if (self.OutputDebugging) {
                self.logger.Debug(`Get data url: ${url}`);
            }
            self.http.get(url, { headers: self.headers })
                .toPromise()
                .then(response => {
                if (useRaw) {
                    resolve(response);
                }
                else {
                    resolve(response.json());
                }
            })
                .catch(error => {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    }
    /**
     * Create a new header with given token
     * @param {?} token bearer token value
     * @return {?}
     */
    UseToken(token) {
        /** @type {?} */
        const headers = this.CreateDefaultHeader();
        if (token) {
            headers.append('Authorization', `bearer ${token}`);
        }
        this.headers = headers;
        return this;
    }
    /**
     * User given header or the default header with content type set to json
     * @param {?=} headers given header
     * @return {?}
     */
    UseHeader(headers = this.CreateDefaultHeader()) {
        if (!headers)
            throw new Error('Given http header is null.');
        this.headers = headers;
        return this;
    }
    /**
     * @return {?}
     */
    CreateDefaultHeader() {
        /** @type {?} */
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}
HttpClient.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpClient.ctorParameters = () => [
    { type: Http },
    { type: ExceptionHandling.LoggingExceptionHandler },
    { type: Logging.DefaultLoggerFactory }
];
if (false) {
    /** @type {?} */
    HttpClient.prototype.logger;
    /** @type {?} */
    HttpClient.prototype.headers;
    /** @type {?} */
    HttpClient.prototype.errorHandler;
    /** @type {?} */
    HttpClient.prototype.OutputDebugging;
    /** @type {?} */
    HttpClient.prototype.http;
    /** @type {?} */
    HttpClient.prototype.exceptionHandler;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9uZXQvSHR0cENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBRzVDLE1BQU07Ozs7OztJQU9GLFlBQ1ksTUFDQSxrQkFDUixhQUEyQztRQUZuQyxTQUFJLEdBQUosSUFBSTtRQUNKLHFCQUFnQixHQUFoQixnQkFBZ0I7K0JBSlYsSUFBSTtRQU9sQixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0tBQzNEOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzVCOzs7OztJQUNELElBQUksV0FBVyxDQUFDLEtBQTJCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0tBQzdCOzs7Ozs7O0lBT0QsSUFBSSxDQUFDLEdBQVcsRUFBRSxJQUFTOztRQUN2QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNOztZQUV4QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElB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QUFDLE9BQU87WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7S0FDZjs7OztJQUVPLG1CQUFtQjs7UUFDdkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sT0FBTyxDQUFDOzs7O1lBaEt0QixVQUFVOzs7O1lBTEYsSUFBSTtZQWVxQixpQkFBaUIsQ0FBQyx1QkFBdUI7WUFDcEQsT0FBTyxDQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbmltcG9ydCAqIGFzIEV4Y2VwdGlvbkhhbmRsaW5nIGZyb20gJy4uL2V4Y2VwdGlvbi9pbmRleCc7XHJcbmltcG9ydCAqIGFzIExvZ2dpbmcgZnJvbSAnLi4vbG9nZ2luZy9pbmRleCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2luZy5JTG9nZ2VyO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzOiBIZWFkZXJzO1xyXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IChlcnJvcjogYW55KSA9PiB2b2lkO1xyXG4gICAgT3V0cHV0RGVidWdnaW5nID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICAgICAgcHJpdmF0ZSBleGNlcHRpb25IYW5kbGVyOiBFeGNlcHRpb25IYW5kbGluZy5Mb2dnaW5nRXhjZXB0aW9uSGFuZGxlcixcclxuICAgICAgICBsb2dnZXJGYWN0b3J5OiBMb2dnaW5nLkRlZmF1bHRMb2dnZXJGYWN0b3J5KSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5DcmVhdGVMb2dnZXIoJ0h0dHBDbGllbnQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICB0aGlzLmhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBFcnJvckhhbmRlcigpOiAoZXJyb3I6IGFueSkgPT4gdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JIYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgc2V0IEVycm9ySGFuZGVyKHZhbHVlOiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3N0IGRhdGEgdG8gZ2l2ZW4gdXJsIFxyXG4gICAgICogQHBhcmFtIHVybCBQb3N0IHVybFxyXG4gICAgICogQHBhcmFtIGRhdGEgIHBvc3QgZGF0YVxyXG4gICAgICovXHJcbiAgICBQb3N0KHVybDogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5PdXRwdXREZWJ1Z2dpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubG9nZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgLkRlYnVnKGBQb3N0IGRhdGEgdXJsOiAke3VybH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5EZWJ1Zyhib2R5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5odHRwLnBvc3QodXJsLCBib2R5LCB7IGhlYWRlcnM6IHNlbGYuaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leGNlcHRpb25IYW5kbGVyLkhhbmRsZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXJyb3JIYW5kbGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmVycm9ySGFuZGxlcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBvc3QgcmF3IHN0cmluZyB0byBnaXZlbiB1cmxcclxuICAgICAqIEBwYXJhbSB1cmwgdXJsIHRvIHBvc3QgZGF0YVxyXG4gICAgICogQHBhcmFtIGRhdGEgZGF0YSBpbiBzdHJpbmcgZm9ybWF0XHJcbiAgICAgKi9cclxuICAgIFBvc3RSYXcodXJsOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLk91dHB1dERlYnVnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2dnZXJcclxuICAgICAgICAgICAgICAgICAgICAuRGVidWcoYFBvc3QgZGF0YSB1cmw6ICR7dXJsfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLkRlYnVnKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLmh0dHAucG9zdCh1cmwsIGRhdGEsIHsgaGVhZGVyczogc2VsZi5oZWFkZXJzIH0pXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4Y2VwdGlvbkhhbmRsZXIuSGFuZGxlKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5lcnJvckhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXJyb3JIYW5kbGVyKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIHJlcXVlc1xyXG4gICAgICogQHBhcmFtIHVybCB0aGUgdXJsIGZvciBkZWxldGVcclxuICAgICAqL1xyXG4gICAgRGVsZXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmh0dHAuZGVsZXRlKHVybClcclxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhjZXB0aW9uSGFuZGxlci5IYW5kbGUoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmVycm9ySGFuZGxlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5lcnJvckhhbmRsZXIoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKiBcclxuICAgICAqIEdldCBkYXRhIGZyb20gZ2l2ZW4gdXJsIGluIGFzeW5jIG1vZGVcclxuICAgICAqIEBwYXJhbSB1cmwgdGhlIHVybCB0byBnZXQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgR2V0KHVybDogc3RyaW5nLCB1c2VSYXcgPSBmYWxzZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuT3V0cHV0RGVidWdnaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvZ2dlci5EZWJ1ZyhgR2V0IGRhdGEgdXJsOiAke3VybH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLmh0dHAuZ2V0KHVybCwge2hlYWRlcnM6IHNlbGYuaGVhZGVyc30pXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlUmF3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4Y2VwdGlvbkhhbmRsZXIuSGFuZGxlKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5lcnJvckhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXJyb3JIYW5kbGVyKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaGVhZGVyIHdpdGggZ2l2ZW4gdG9rZW5cclxuICAgICAqIEBwYXJhbSB0b2tlbiBiZWFyZXIgdG9rZW4gdmFsdWVcclxuICAgICAqL1xyXG4gICAgVXNlVG9rZW4odG9rZW46IHN0cmluZyk6IEh0dHBDbGllbnQge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLkNyZWF0ZURlZmF1bHRIZWFkZXIoKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBgYmVhcmVyICR7dG9rZW59YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVzZXIgZ2l2ZW4gaGVhZGVyIG9yIHRoZSBkZWZhdWx0IGhlYWRlciB3aXRoIGNvbnRlbnQgdHlwZSBzZXQgdG8ganNvblxyXG4gICAgICogQHBhcmFtIGhlYWRlcnMgZ2l2ZW4gaGVhZGVyXHJcbiAgICAgKi9cclxuICAgIFVzZUhlYWRlcihoZWFkZXJzOiBIZWFkZXJzID0gdGhpcy5DcmVhdGVEZWZhdWx0SGVhZGVyKCkpOiBIdHRwQ2xpZW50IHtcclxuICAgICAgICBpZiAoIWhlYWRlcnMpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gaHR0cCBoZWFkZXIgaXMgbnVsbC4nKTtcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQ3JlYXRlRGVmYXVsdEhlYWRlcigpOiBIZWFkZXJzIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxufSJdfQ==