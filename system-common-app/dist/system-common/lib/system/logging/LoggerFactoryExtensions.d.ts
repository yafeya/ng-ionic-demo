import { ILoggerFactory } from './ILoggerFactory';
/** Extension method implementation in TypeScript
 * 1. create extension methods class, method declared as static
 * 2. declare module for the type to be extented
 * 3. hook the method delcaration to implementation
 */
/**
 * Extension methods for LoggerFactory
 */
export declare class LoggerFactoryExtensions {
    /**
     * Add Debugger to logger
     * @param this ILoggerFactory instance
     */
    static AddDebug(this: ILoggerFactory): ILoggerFactory;
    /**
    * Add Log4JS to logging
    * @param this ILoggerFactory instance
    */
    static AddLog4Js(this: ILoggerFactory): ILoggerFactory;
}
/** Exten type of the implementation */
declare module './DefaultLoggerFactory' {
    interface DefaultLoggerFactory {
        AddDebug: () => ILoggerFactory;
        AddLogJs: (initializer?: () => void, logFileName?: string) => ILoggerFactory;
    }
}
/** Extend type of the interface */
declare module './ILoggerFactory' {
    interface ILoggerFactory {
        AddDebug: () => ILoggerFactory;
        AddLogJs: (initializer?: () => void, logFileName?: string) => ILoggerFactory;
    }
}
