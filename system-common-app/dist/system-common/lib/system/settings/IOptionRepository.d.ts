import { InjectionToken } from '@angular/core';
import { IOptionDescriptor } from './IOptionDescriptor';
import * as Collections from '../collections/index';
export declare const OptionRepositoryToken: InjectionToken<{}>;
export interface IOptionRepository {
    /**
     * Register a descriptor
     */
    Register(descriptor: IOptionDescriptor): IOptionRepository;
    /**
     * Find descriptors by given expression
     */
    Find(expression: (descriptor: IOptionDescriptor) => boolean): Collections.IEnumerable<IOptionDescriptor>;
    /**
     * Find a descriptor by id
     */
    FindOne(id: string): IOptionDescriptor;
}
export declare class OptionRepository implements IOptionRepository {
    private descriptors;
    /**
     * Register a descriptor
     */
    Register(descriptor: IOptionDescriptor): IOptionRepository;
    /**
     * Find descriptors by given expression
     */
    Find(expression: (descriptor: IOptionDescriptor) => boolean): Collections.IEnumerable<IOptionDescriptor>;
    /**
     * Find a descriptor by id
     */
    FindOne(id: string): IOptionDescriptor;
}
