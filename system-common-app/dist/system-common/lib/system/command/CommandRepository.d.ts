import { ICommandRepository } from './ICommandRepository';
import { ICommand } from './ICommand';
import { Dictionary } from '../collections/Dictionary';
export declare class CommandRepository implements ICommandRepository {
    Commands: Dictionary<string, ICommand>;
    GetCommand(name: string): ICommand;
    Register(name: string, command: ICommand): ICommandRepository;
}
