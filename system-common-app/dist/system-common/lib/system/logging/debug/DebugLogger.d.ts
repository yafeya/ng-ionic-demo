import { LoggerBase } from '../LoggerBase';
import { LogLevel } from '../LogLevel';
export declare class DebugLogger extends LoggerBase {
    private filter;
    constructor(name: string, filter: (message: string, levle: LogLevel) => boolean);
    /**
     * Peform log output to console
     * @param level
     * @param eventId
     * @param state
     * @param error
     * @param formatter
     */
    Log(level: LogLevel, eventId: number, state: any, error: Error, formatter: (any: any, Error: any) => string): void;
}
