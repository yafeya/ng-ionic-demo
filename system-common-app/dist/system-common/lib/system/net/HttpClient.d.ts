import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as ExceptionHandling from '../exception/index';
import * as Logging from '../logging/index';
export declare class HttpClient {
    private http;
    private exceptionHandler;
    private logger;
    private headers;
    private errorHandler;
    OutputDebugging: boolean;
    constructor(http: Http, exceptionHandler: ExceptionHandling.LoggingExceptionHandler, loggerFactory: Logging.DefaultLoggerFactory);
    ErrorHander: (error: any) => void;
    /**
     * Post data to given url
     * @param url Post url
     * @param data  post data
     */
    Post(url: string, data: any): Promise<any>;
    /**
     * Post raw string to given url
     * @param url url to post data
     * @param data data in string format
     */
    PostRaw(url: string, data: string): Promise<any>;
    /**
     * Delete reques
     * @param url the url for delete
     */
    Delete(url: string): Promise<any>;
    /**
     * Get data from given url in async mode
     * @param url the url to get data.
     */
    Get(url: string, useRaw?: boolean): Promise<any>;
    /**
     * Create a new header with given token
     * @param token bearer token value
     */
    UseToken(token: string): HttpClient;
    /**
     * User given header or the default header with content type set to json
     * @param headers given header
     */
    UseHeader(headers?: Headers): HttpClient;
    private CreateDefaultHeader;
}
