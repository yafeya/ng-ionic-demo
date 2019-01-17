export interface INamedDictionary<T> {
    Add(key: string, value: T): any;
    ContainsKey(key: string): boolean;
    Count(): number;
    Item(key: string): T;
    Keys(): string[];
    Remove(key: string): T;
    Values(): T[];
}
