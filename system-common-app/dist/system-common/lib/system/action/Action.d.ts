import { IAction } from './IAction';
export declare class Action implements IAction {
    private delegate;
    Name: string;
    Group: string;
    Tag: any;
    constructor(delegate: (args?: any) => void);
    Invoke(args?: any): void;
}
