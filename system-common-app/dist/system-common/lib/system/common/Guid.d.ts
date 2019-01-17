export declare class Guid {
    static Empty: string;
    static Validator: RegExp;
    private value;
    constructor(value: any);
    readonly Value: string;
    IsEmpty(): boolean;
    ToString(): string;
    ToJson(): string;
    private static Generate;
    static New(): Guid;
    static IsGuid(value: any): boolean;
}
