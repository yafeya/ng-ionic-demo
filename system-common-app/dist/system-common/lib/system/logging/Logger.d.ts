import { ILogger } from './ILogger';
import { DefaultLoggerFactory } from './DefaultLoggerFactory';
import { LogLevel } from './LogLevel';
import { ILoggerProvider } from './ILoggerProvider';
export declare class Logger implements ILogger {
    private loggerFactory;
    private name;
    private loggers;
    private formatter;
    constructor(loggerFactory: DefaultLoggerFactory, name: string);
    /** Aggregates most logging patterns to a single method. */
    Log(level: LogLevel, eventId: number, state: any, error: Error, formatter: (any: any, Error: any) => string): void;
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
    /**
     * Add a logger provider
     * @provider
     */
    AddProvider(provider: ILoggerProvider): void;
    private MessageFormatter;
}
