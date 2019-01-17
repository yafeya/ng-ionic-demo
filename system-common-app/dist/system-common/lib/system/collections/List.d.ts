import { Collection } from './Collection';
import { IList } from './IList';
export declare class List<T> extends Collection<T> implements IList<T> {
    /** Get index of given item */
    IndexOf(item: T): number;
    /** Insert item to given index */
    Insert(index: number, item: T): void;
    /** Remove item at given index */
    RemoveAt(index: number): void;
}
