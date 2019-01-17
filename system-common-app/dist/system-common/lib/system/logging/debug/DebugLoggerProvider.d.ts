import { ILoggerProvider } from '../ILoggerProvider';
import { ILogger } from '../ILogger';
import { LogLevel } from '../LogLevel';
export declare class DebugLoggerProvider implements ILoggerProvider {
    private filter?;
    constructor(filter?: (message: string, level: LogLevel) => boolean);
    CreateLogger(name: string): ILogger;
    Dispose(): void;
}
