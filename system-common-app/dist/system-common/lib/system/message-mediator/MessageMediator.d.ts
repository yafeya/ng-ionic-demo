import { IMessageMediator } from './IMessageMediator';
import * as Actions from '../action/index';
import * as Collections from '../collections/index';
export declare class MessageMediator implements IMessageMediator {
    private mediators;
    readonly Mediators: Collections.Dictionary<string, Collections.Dictionary<string, Actions.IAction>>;
    /**
     * Register an event
     */
    RegisterHandler(topic: string, id: string, action: Actions.IAction): IMessageMediator;
    /**
     * Unregister an event
     */
    UnregisterHandler(topic: string, id: string): IMessageMediator;
    /**
     * Trigger an event with given parameter
     */
    SendMessage(topic: string, param?: any): boolean;
}
