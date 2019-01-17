import * as Collections from '../collections/index';
import { IAction } from './IAction';
export interface IActionRepository {
    readonly Actions: Collections.List<IAction>;
    Register(action: IAction): IActionRepository;
    Find(expression: (action: IAction) => boolean): Collections.IEnumerable<IAction>;
    FindOne(name: string): IAction;
}
export declare class ActionRepository implements IActionRepository {
    readonly Actions: Collections.List<IAction>;
    Register(action: IAction): ActionRepository;
    Find(expression: (action: IAction) => boolean): Collections.IEnumerable<IAction>;
    FindOne(name: string): IAction;
}
