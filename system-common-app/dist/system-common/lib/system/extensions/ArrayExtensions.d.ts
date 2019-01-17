interface Array<T> {
    Add: (item: T) => void;
    Empty: () => Array<any>;
    IsEmpty: () => boolean;
    Any: (predicate?: (source: T) => boolean) => boolean;
    Count: () => number;
    Max: () => number;
    Min: () => number;
    OrderBy: (keySelector: (source: T) => any) => Array<T>;
    OrderByDescending: (keySelector: (source: T) => any) => Array<T>;
    Where: (predicate: (source: T) => boolean) => Array<T>;
    Select: <TResult>(selector: (source: T) => TResult) => Array<TResult>;
    ElementAt: (index: number) => any;
    FirstOrDefault: (predicate?: (source: T) => boolean) => T;
    ForEach: (callback: Function) => void;
    Remove: (item: any) => any;
    Contains: (partial: string, strict: boolean) => boolean;
    IndexOfPartial: (partial: string) => number;
    ToObjectArray: (objName: string) => Array<any>;
}
