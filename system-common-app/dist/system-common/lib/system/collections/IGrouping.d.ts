import { IEnumerable } from './IEnumerable';
import { Enumerable } from './Enumerable';
export interface IGrouping<TKey, TElement> extends IEnumerable<TElement> {
    readonly Key: TKey;
}
export declare class Grouping<TKey, TElement> extends Enumerable<TElement> implements IGrouping<TKey, TElement> {
    private key;
    constructor(key?: TKey, elements?: IEnumerable<TElement>);
    Key: TKey;
}
