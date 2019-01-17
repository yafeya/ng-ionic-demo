import { ILoggerFactory } from './ILoggerFactory';
import { ILogger } from './ILogger';
import { ILoggerProvider } from './ILoggerProvider';
import * as Collections from '../collections/index';
export declare class DefaultLoggerFactory implements ILoggerFactory {
    private providers;
    private loggers;
    constructor();
    /** Create a logger */
    CreateLogger(name: string): ILogger;
    /**
     * Add an logger provider to the logging system
     * @provider logger provider
     */
    AddProvider(provider: ILoggerProvider): void;
    /**
     * Get logger providers
     */
    GetProviders(): Collections.IList<ILoggerProvider>;
}
