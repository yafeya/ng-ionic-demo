import { INamedDictionary } from './INamedDictionary';
export declare class NamedDictionary<T> implements INamedDictionary<T> {
    private items;
    private count;
    ContainsKey(key: string): boolean;
    Count(): number;
    Add(key: string, value: T): void;
    Remove(key: string): T;
    Item(key: string): T;
    Keys(): string[];
    Values(): T[];
}
