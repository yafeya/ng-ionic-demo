import { ILoggerProvider } from '../ILoggerProvider';
import { ILogger } from '../ILogger';
export declare class Log4JsLoggerProvider implements ILoggerProvider {
    constructor(initializer?: () => void, logFileName?: string);
    /**
     * Create logger
     * @param name logger name
     */
    CreateLogger(name: string): ILogger;
    Dispose(): void;
}
