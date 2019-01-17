import { ResourceDictionary } from './ResourceDictionary';
export declare class ResourceHolder {
    DefaultLocal: string;
    private mInnerDictionary;
    constructor();
    /** Get resource dictionary by local name */
    GetResources(local: string): ResourceDictionary;
    /** Add resource for specific local */
    AddResources(local: string, resource: ResourceDictionary): ResourceHolder;
    /** Get resource string */
    GetString(name: string, local?: string): string;
}
