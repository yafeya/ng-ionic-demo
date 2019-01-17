import { IEnumerable } from './IEnumerable';
import { IGrouping } from './IGrouping';
/** Do ForEach on items */
export declare function ForEach<T>(this: IEnumerable<T>, action: (item: T) => void): void;
/** Sort items by given comparer */
export declare function Sort<T>(this: IEnumerable<T>, comparer: (x: T, y: T) => number): void;
/** Find items by given predicate */
export declare function FindAll<T>(this: IEnumerable<T>, predicate: (item: T) => boolean): IEnumerable<T>;
/** Find first item in the list */
export declare function FirstOrDefault<T>(this: IEnumerable<T>, predicate?: (item: T) => boolean): T;
export declare function IsEmpty<T>(this: IEnumerable<T>): boolean;
export declare function Any<T>(this: IEnumerable<T>, predicate?: (source: any) => boolean): boolean;
export declare function Max<T>(this: IEnumerable<T>, selector: (source: T) => number): number;
export declare function Min<T>(this: IEnumerable<T>, selector: (source: T) => any): number;
export declare function OrderBy<T>(this: IEnumerable<T>, keySelector: (source: T) => any): IEnumerable<T>;
export declare function OrderByDescending<T>(this: IEnumerable<T>, keySelector: (source: T) => any): IEnumerable<T>;
export declare function Where<T>(this: IEnumerable<T>, predicate: (source: T) => boolean): IEnumerable<T>;
export declare function Select<TSource, TResult>(this: IEnumerable<TSource>, selector: (source: TSource) => TResult): IEnumerable<TResult>;
export declare function ElementAt<T>(this: IEnumerable<T>, index: number): T;
export declare function GroupBy<T, TKey, TElement>(this: IEnumerable<T>, keySelector: (source: T) => TKey, valueSelector?: (source: T) => any): IEnumerable<IGrouping<TKey, TElement>>;
declare module './Enumerable' {
    interface Enumerable<T> {
        ForEach: (action: (item: T) => void) => void;
        Sort: (comparer: (x: T, y: T) => number) => void;
        FindAll: (predicate: (item: T) => boolean) => IEnumerable<T>;
        FirstOrDefault: (predicate?: (item: T) => boolean) => T;
        IsEmpty: () => boolean;
        Any: (predicate?: (source: any) => boolean) => boolean;
        Max: (selector: (source: T) => any) => number;
        Min: (selector: (source: T) => any) => number;
        OrderBy: (keySelector: (source: T) => any) => IEnumerable<T>;
        OrderByDescending: (keySelector: (source: T) => any) => IEnumerable<T>;
        Where: (predicate: (source: T) => boolean) => IEnumerable<T>;
        Select: <T, TResult>(selector: (source: T) => TResult) => IEnumerable<TResult>;
        ElementAt: (index: number) => T;
        GroupBy: <TKey, TElement>(keySelector: (source: T) => TKey, valueSelector?: (source: T) => TElement) => IEnumerable<IGrouping<TKey, TElement>>;
    }
}
declare module './IEnumerable' {
    interface IEnumerable<T> {
        ForEach: (action: (item: T) => void) => void;
        Sort: (comparer: (x: T, y: T) => number) => void;
        FindAll: (predicate: (item: T) => boolean) => IEnumerable<T>;
        FirstOrDefault: (predicate?: (item: T) => boolean) => T;
        IsEmpty: () => boolean;
        Any: (predicate?: (source: any) => boolean) => boolean;
        Max: (selector: (source: T) => any) => number;
        Min: (selector: (source: T) => any) => number;
        OrderBy: (keySelector: (source: T) => any) => IEnumerable<T>;
        OrderByDescending: (keySelector: (source: T) => any) => IEnumerable<T>;
        Where: (predicate: (source: T) => boolean) => IEnumerable<T>;
        Select: <T, TResult>(selector: (source: T) => TResult) => IEnumerable<TResult>;
        ElementAt: (index: number) => T;
        GroupBy: <TKey, TElement>(keySelector: (source: T) => TKey, valueSelector?: (source: T) => TElement) => IEnumerable<IGrouping<TKey, TElement>>;
    }
}
declare module './ObservableCollection' {
    interface ObservableCollection<T> {
        ForEach: (action: (item: T) => void) => void;
        Sort: (comparer: (x: T, y: T) => number) => void;
        FindAll: (predicate: (item: T) => boolean) => IEnumerable<T>;
        FirstOrDefault: (predicate?: (item: T) => boolean) => T;
        IsEmpty: () => boolean;
        Any: (predicate?: (source: any) => boolean) => boolean;
        Max: (selector: (source: T) => any) => number;
        Min: (selector: (source: T) => any) => number;
        OrderBy: (keySelector: (source: T) => any) => IEnumerable<T>;
        OrderByDescending: (keySelector: (source: T) => any) => IEnumerable<T>;
        Where: (predicate: (source: T) => boolean) => IEnumerable<T>;
        Select: <T, TResult>(selector: (source: T) => TResult) => IEnumerable<TResult>;
        ElementAt: (index: number) => T;
        GroupBy: <TKey, TElement>(keySelector: (source: T) => TKey, valueSelector?: (source: T) => TElement) => IEnumerable<IGrouping<TKey, TElement>>;
    }
}
