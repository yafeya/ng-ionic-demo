import { ILogger } from './ILogger';
import { LogLevel } from './LogLevel';
export declare abstract class LoggerBase implements ILogger {
    private name;
    protected formatter: (any: any, Error: any) => string;
    constructor();
    /** Aggregates most logging patterns to a single method. */
    abstract Log(level: LogLevel, eventId: number, state: any, error: Error, formatter: (any: any, Error: any) => string): any;
    protected Name: string;
    /**
     * Checks if the given LogLevel is enabled.
     */
    IsEnabled(level: LogLevel): boolean;
    /** Log to Debug level */
    Debug(message: any): ILogger;
    /** Log to Trace level */
    Trace(message: any): ILogger;
    /** Log to Info level */
    Info(message: any): ILogger;
    /** Log to Warn level */
    Warn(message: any): ILogger;
    /** Log to Error level */
    Error(message: any): ILogger;
    /** Log to Fatal level */
    Fatal(message: any): ILogger;
    protected MessageFormatter(state: any, error: Error): string;
}
