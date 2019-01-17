import { IEnumerable } from '../collections/IEnumerable';
import { ICommandDescriptor } from './ICommandDescriptor';
import { ICommandDescriptorRepository } from './ICommandDescriptorRepository';
export declare class CommandDescriptorExtensions {
    /**
     * Get descriptors by group
     * @param this command descriptor repository
     * @param group group name
     */
    static GetDescriptorsByGroup(this: ICommandDescriptorRepository, group: string): IEnumerable<ICommandDescriptor>;
}
declare module './ICommandDescriptorRepository' {
    interface ICommandDescriptorRepository {
        /**
         * Get descriptors by group
         * @param this command descriptor repository
         * @param group group name
         */
        GetDescriptorsByGroup: (group: string) => IEnumerable<ICommandDescriptor>;
    }
}
declare module './CommandDescriptorRepository' {
    interface CommandDescriptorRepository {
        /**
         * Get descriptors by group
         * @param this command descriptor repository
         * @param group group name
         */
        GetDescriptorsByGroup: (group: string) => IEnumerable<ICommandDescriptor>;
    }
}
