import { ICommandRepository } from './ICommandRepository';
import { ILoggerFactory } from '../logging/ILoggerFactory';
export declare class InvokeCommandDirective {
    private commandRepository;
    CommandName: string;
    CommandParam: any;
    private logger;
    constructor(commandRepository: ICommandRepository, loggerFactory: ILoggerFactory);
    OnClicked(): void;
}
