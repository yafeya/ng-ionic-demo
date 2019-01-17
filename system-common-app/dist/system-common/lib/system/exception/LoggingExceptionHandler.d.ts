import * as Logging from '../logging/index';
import { IExceptionHandler } from './IExceptionHandler';
export declare class LoggingExceptionHandler implements IExceptionHandler {
    private loggerFactory;
    private logger;
    constructor(loggerFactory: Logging.ILoggerFactory);
    Handle(exception: Error): void;
}
