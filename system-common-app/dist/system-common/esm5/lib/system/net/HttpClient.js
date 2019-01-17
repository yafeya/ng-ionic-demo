/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as ExceptionHandling from '../exception/index';
import * as Logging from '../logging/index';
var HttpClient = /** @class */ (function () {
    function HttpClient(http, exceptionHandler, loggerFactory) {
        this.http = http;
        this.exceptionHandler = exceptionHandler;
        this.OutputDebugging = true;
        this.logger = loggerFactory.CreateLogger('HttpClient');
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    Object.defineProperty(HttpClient.prototype, "ErrorHander", {
        get: /**
         * @return {?}
         */
        function () {
            return this.errorHandler;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.errorHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Post data to given url
     * @param url Post url
     * @param data  post data
     */
    /**
     * Post data to given url
     * @param {?} url Post url
     * @param {?} data  post data
     * @return {?}
     */
    HttpClient.prototype.Post = /**
     * Post data to given url
     * @param {?} url Post url
     * @param {?} data  post data
     * @return {?}
     */
    function (url, data) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            var body = JSON.stringify(data);
            if (self.OutputDebugging) {
                self.logger
                    .Debug("Post data url: " + url)
                    .Debug(body);
            }
            self.http.post(url, body, { headers: self.headers })
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (error) {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    };
    /**
     * Post raw string to given url
     * @param url url to post data
     * @param data data in string format
     */
    /**
     * Post raw string to given url
     * @param {?} url url to post data
     * @param {?} data data in string format
     * @return {?}
     */
    HttpClient.prototype.PostRaw = /**
     * Post raw string to given url
     * @param {?} url url to post data
     * @param {?} data data in string format
     * @return {?}
     */
    function (url, data) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.OutputDebugging) {
                self.logger
                    .Debug("Post data url: " + url)
                    .Debug(data);
            }
            self.http.post(url, data, { headers: self.headers })
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (error) {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    };
    /**
     * Delete reques
     * @param url the url for delete
     */
    /**
     * Delete reques
     * @param {?} url the url for delete
     * @return {?}
     */
    HttpClient.prototype.Delete = /**
     * Delete reques
     * @param {?} url the url for delete
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            self.http.delete(url)
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (error) {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    };
    /**
     * Get data from given url in async mode
     * @param url the url to get data.
     */
    /**
     * Get data from given url in async mode
     * @param {?} url the url to get data.
     * @param {?=} useRaw
     * @return {?}
     */
    HttpClient.prototype.Get = /**
     * Get data from given url in async mode
     * @param {?} url the url to get data.
     * @param {?=} useRaw
     * @return {?}
     */
    function (url, useRaw) {
        if (useRaw === void 0) { useRaw = false; }
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.OutputDebugging) {
                self.logger.Debug("Get data url: " + url);
            }
            self.http.get(url, { headers: self.headers })
                .toPromise()
                .then(function (response) {
                if (useRaw) {
                    resolve(response);
                }
                else {
                    resolve(response.json());
                }
            })
                .catch(function (error) {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    };
    /**
     * Create a new header with given token
     * @param token bearer token value
     */
    /**
     * Create a new header with given token
     * @param {?} token bearer token value
     * @return {?}
     */
    HttpClient.prototype.UseToken = /**
     * Create a new header with given token
     * @param {?} token bearer token value
     * @return {?}
     */
    function (token) {
        /** @type {?} */
        var headers = this.CreateDefaultHeader();
        if (token) {
            headers.append('Authorization', "bearer " + token);
        }
        this.headers = headers;
        return this;
    };
    /**
     * User given header or the default header with content type set to json
     * @param headers given header
     */
    /**
     * User given header or the default header with content type set to json
     * @param {?=} headers given header
     * @return {?}
     */
    HttpClient.prototype.UseHeader = /**
     * User given header or the default header with content type set to json
     * @param {?=} headers given header
     * @return {?}
     */
    function (headers) {
        if (headers === void 0) { headers = this.CreateDefaultHeader(); }
        if (!headers)
            throw new Error('Given http header is null.');
        this.headers = headers;
        return this;
    };
    /**
     * @return {?}
     */
    HttpClient.prototype.CreateDefaultHeader = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    HttpClient.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpClient.ctorParameters = function () { return [
        { type: Http },
        { type: ExceptionHandling.LoggingExceptionHandler },
        { type: Logging.DefaultLoggerFactory }
    ]; };
    return HttpClient;
}());
export { HttpClient };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9uZXQvSHR0cENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDOztJQVV4QyxvQkFDWSxNQUNBLGtCQUNSLGFBQTJDO1FBRm5DLFNBQUksR0FBSixJQUFJO1FBQ0oscUJBQWdCLEdBQWhCLGdCQUFnQjsrQkFKVixJQUFJO1FBT2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7S0FDM0Q7SUFFRCxzQkFBSSxtQ0FBVzs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzVCOzs7OztRQUNELFVBQWdCLEtBQTJCO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCOzs7T0FIQTtJQUtEOzs7O09BSUc7Ozs7Ozs7SUFDSCx5QkFBSTs7Ozs7O0lBQUosVUFBSyxHQUFXLEVBQUUsSUFBUzs7UUFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTs7WUFFeEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxD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Ozs7OztJQUNILDhCQUFTOzs7OztJQUFULFVBQVUsT0FBNkM7UUFBN0Msd0JBQUEsRUFBQSxVQUFtQixJQUFJLENBQUMsbUJBQW1CLEVBQUU7UUFDbkQsSUFBSSxDQUFDLE9BQU87WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7S0FDZjs7OztJQUVPLHdDQUFtQjs7Ozs7UUFDdkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sT0FBTyxDQUFDOzs7Z0JBaEt0QixVQUFVOzs7O2dCQUxGLElBQUk7Z0JBZXFCLGlCQUFpQixDQUFDLHVCQUF1QjtnQkFDcEQsT0FBTyxDQUFDLG9CQUFvQjs7cUJBakJuRDs7U0FPYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0ICogYXMgRXhjZXB0aW9uSGFuZGxpbmcgZnJvbSAnLi4vZXhjZXB0aW9uL2luZGV4JztcclxuaW1wb3J0ICogYXMgTG9nZ2luZyBmcm9tICcuLi9sb2dnaW5nL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnQge1xyXG5cclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnaW5nLklMb2dnZXI7XHJcbiAgICBwcml2YXRlIGhlYWRlcnM6IEhlYWRlcnM7XHJcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogKGVycm9yOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBPdXRwdXREZWJ1Z2dpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcclxuICAgICAgICBwcml2YXRlIGV4Y2VwdGlvbkhhbmRsZXI6IEV4Y2VwdGlvbkhhbmRsaW5nLkxvZ2dpbmdFeGNlcHRpb25IYW5kbGVyLFxyXG4gICAgICAgIGxvZ2dlckZhY3Rvcnk6IExvZ2dpbmcuRGVmYXVsdExvZ2dlckZhY3RvcnkpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXJGYWN0b3J5LkNyZWF0ZUxvZ2dlcignSHR0cENsaWVudCcpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEVycm9ySGFuZGVyKCk6IChlcnJvcjogYW55KSA9PiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvckhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgRXJyb3JIYW5kZXIodmFsdWU6IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvc3QgZGF0YSB0byBnaXZlbiB1cmwgXHJcbiAgICAgKiBAcGFyYW0gdXJsIFBvc3QgdXJsXHJcbiAgICAgKiBAcGFyYW0gZGF0YSAgcG9zdCBkYXRhXHJcbiAgICAgKi9cclxuICAgIFBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLk91dHB1dERlYnVnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2dnZXJcclxuICAgICAgICAgICAgICAgICAgICAuRGVidWcoYFBvc3QgZGF0YSB1cmw6ICR7dXJsfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLkRlYnVnKGJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLmh0dHAucG9zdCh1cmwsIGJvZHksIHsgaGVhZGVyczogc2VsZi5oZWFkZXJzIH0pXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4Y2VwdGlvbkhhbmRsZXIuSGFuZGxlKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5lcnJvckhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXJyb3JIYW5kbGVyKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUG9zdCByYXcgc3RyaW5nIHRvIGdpdmVuIHVybFxyXG4gICAgICogQHBhcmFtIHVybCB1cmwgdG8gcG9zdCBkYXRhXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkYXRhIGluIHN0cmluZyBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgUG9zdFJhdyh1cmw6IHN0cmluZywgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYuT3V0cHV0RGVidWdnaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgIC5EZWJ1ZyhgUG9zdCBkYXRhIHVybDogJHt1cmx9YClcclxuICAgICAgICAgICAgICAgICAgICAuRGVidWcoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYuaHR0cC5wb3N0KHVybCwgZGF0YSwgeyBoZWFkZXJzOiBzZWxmLmhlYWRlcnMgfSlcclxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhjZXB0aW9uSGFuZGxlci5IYW5kbGUoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmVycm9ySGFuZGxlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5lcnJvckhhbmRsZXIoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgcmVxdWVzXHJcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSB1cmwgZm9yIGRlbGV0ZVxyXG4gICAgICovXHJcbiAgICBEZWxldGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuaHR0cC5kZWxldGUodXJsKVxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leGNlcHRpb25IYW5kbGVyLkhhbmRsZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXJyb3JIYW5kbGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmVycm9ySGFuZGxlcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqIFxyXG4gICAgICogR2V0IGRhdGEgZnJvbSBnaXZlbiB1cmwgaW4gYXN5bmMgbW9kZVxyXG4gICAgICogQHBhcmFtIHVybCB0aGUgdXJsIHRvIGdldCBkYXRhLlxyXG4gICAgICovXHJcbiAgICBHZXQodXJsOiBzdHJpbmcsIHVzZVJhdyA9IGZhbHNlKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5PdXRwdXREZWJ1Z2dpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubG9nZ2VyLkRlYnVnKGBHZXQgZGF0YSB1cmw6ICR7dXJsfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuaHR0cC5nZXQodXJsLCB7aGVhZGVyczogc2VsZi5oZWFkZXJzfSlcclxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VSYXcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhjZXB0aW9uSGFuZGxlci5IYW5kbGUoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmVycm9ySGFuZGxlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5lcnJvckhhbmRsZXIoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBoZWFkZXIgd2l0aCBnaXZlbiB0b2tlblxyXG4gICAgICogQHBhcmFtIHRva2VuIGJlYXJlciB0b2tlbiB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBVc2VUb2tlbih0b2tlbjogc3RyaW5nKTogSHR0cENsaWVudCB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuQ3JlYXRlRGVmYXVsdEhlYWRlcigpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGBiZWFyZXIgJHt0b2tlbn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXNlciBnaXZlbiBoZWFkZXIgb3IgdGhlIGRlZmF1bHQgaGVhZGVyIHdpdGggY29udGVudCB0eXBlIHNldCB0byBqc29uXHJcbiAgICAgKiBAcGFyYW0gaGVhZGVycyBnaXZlbiBoZWFkZXJcclxuICAgICAqL1xyXG4gICAgVXNlSGVhZGVyKGhlYWRlcnM6IEhlYWRlcnMgPSB0aGlzLkNyZWF0ZURlZmF1bHRIZWFkZXIoKSk6IEh0dHBDbGllbnQge1xyXG4gICAgICAgIGlmICghaGVhZGVycylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHaXZlbiBodHRwIGhlYWRlciBpcyBudWxsLicpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBDcmVhdGVEZWZhdWx0SGVhZGVyKCk6IEhlYWRlcnMge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG59Il19