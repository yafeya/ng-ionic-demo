import { LogLevel } from '../LogLevel';
import { LoggerBase } from '../LoggerBase';
export declare class Log4JsLogger extends LoggerBase {
    private log4JsLogger;
    constructor(name: string, log4JsLogger: any);
    /** Aggregates most logging patterns to a single method. */
    Log(level: LogLevel, eventId: number, state: any, error: Error, formatter: (any: any, Error: any) => string): void;
    /**
    * Checks if the given LogLevel is enabled.
    */
    IsEnabled(level: LogLevel): boolean;
}
