import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { TeardownLogic } from 'rxjs/Subscription';
import { IScheduler } from 'rxjs/Scheduler';
import { IEnumerable } from './IEnumerable';
export declare class ObservableCollection<T> extends Observable<T> implements IEnumerable<T> {
    private array;
    private scheduler?;
    static Create<T>(array: Array<T>): ObservableCollection<T>;
    static dispatch(state: any): void;
    private values;
    constructor(array: any[], scheduler?: IScheduler);
    readonly Count: number;
    readonly Values: T[];
    Items: T[];
    Add(item: T): void;
    AddRange(items: T[]): void;
    Remove(item: T): boolean;
    [Symbol.iterator](): any;
    _subscribe(subscriber: Subscriber<T>): TeardownLogic;
}
