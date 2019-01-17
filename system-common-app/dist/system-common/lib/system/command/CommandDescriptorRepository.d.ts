import { ICommandDescriptorRepository } from './ICommandDescriptorRepository';
import { IEnumerable } from '../collections/IEnumerable';
import { ICommandDescriptor } from './ICommandDescriptor';
export declare class CommandDescriptorRepository implements ICommandDescriptorRepository {
    private descriptors;
    readonly Descriptors: IEnumerable<ICommandDescriptor>;
    /**
     * Register a descriptor.
     */
    Register(descriptor: ICommandDescriptor): ICommandDescriptorRepository;
    /**
    * Remove a descriptor
    */
    Remove(descriptor: ICommandDescriptor): ICommandDescriptorRepository;
    /**
     * Remove descriptors by given expression
     */
    RemoveRange(expression: (item: ICommandDescriptor) => boolean): void;
}
