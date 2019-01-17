export declare class ResourceDictionary {
    Local: string;
    private mInnerDictionary;
    /** Add resource value */
    Add(key: string, value: string): ResourceDictionary;
    /** Get resource value */
    Get(key: string): string;
}
