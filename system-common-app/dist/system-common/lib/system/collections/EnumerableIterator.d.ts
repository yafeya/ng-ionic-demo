import { IEnumerable } from './IEnumerable';
export declare class EnumerableIterator<T> implements Iterator<T> {
    private enumerable;
    private pointer;
    constructor(enumerable: IEnumerable<T>);
    next(value?: any): IteratorResult<T>;
}
