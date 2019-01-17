import { IEnumerable } from './IEnumerable';
export declare class Enumerable<T> implements IEnumerable<T> {
    private items;
    /** Get counts of collection */
    readonly Count: number;
    /** Get all items */
    /** Set items value */
    Items: T[];
    [Symbol.iterator](): any;
    static From<T>(array: Array<T>): IEnumerable<T>;
}
