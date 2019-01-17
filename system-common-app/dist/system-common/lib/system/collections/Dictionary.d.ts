import { IDictionary } from './IDictionary';
import { Enumerable } from './Enumerable';
import { KeyValuePair } from './KeyValuePair';
export declare class Dictionary<TKey, TValue> extends Enumerable<KeyValuePair<TKey, TValue>> implements IDictionary<TKey, TValue> {
    private map;
    Add(key: TKey, value: TValue): void;
    ContainsKey(key: TKey): boolean;
    Item(key: TKey): TValue;
    Keys(): TKey[];
    Remove(key: TKey): boolean;
    Values(): TValue[];
}
