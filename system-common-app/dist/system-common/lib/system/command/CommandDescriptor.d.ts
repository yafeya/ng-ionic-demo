import { ICommandDescriptor } from './ICommandDescriptor';
export declare class CommandDescriptor implements ICommandDescriptor {
    Header: string;
    CommandName: string;
    Group?: string;
    Icon?: string;
    Image?: string;
    Description?: string;
    Id?: string;
    Tag?: any;
    Shortcut?: string;
    constructor(Header: string, CommandName: string, Group?: string, Icon?: string, Image?: string, Description?: string, Id?: string, Tag?: any, Shortcut?: string);
}
