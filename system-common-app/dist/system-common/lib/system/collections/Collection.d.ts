import { Enumerable } from './Enumerable';
import { ICollection } from './ICollection';
export declare class Collection<T> extends Enumerable<T> implements ICollection<T> {
    /** Get whether collection is readonly */
    readonly IsReadOnly: boolean;
    /** Add item to collection */
    Add(item: T): void;
    /** Add items to collection */
    AddRange(items: T[]): void;
    /** Clear collection */
    Clear(): void;
    /** Determines whether collection contains a specific item */
    Contains(item: T): boolean;
    /** Remove item from collection */
    Remove(item: T): boolean;
    /** Copy elements to an array starting at a particular index
     * @array
     * @arrayIndex The zero-based index in array at which copying begins.
     */
    CopyTo(array: T[], arrayIndex: number): void;
}
