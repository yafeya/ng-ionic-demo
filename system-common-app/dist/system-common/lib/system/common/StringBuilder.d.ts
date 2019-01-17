import { IDisposable } from './IDisposable';
export declare class StringBuilder implements IDisposable {
    private content;
    private latest;
    readonly IsEmpty: boolean;
    Append(item: any): StringBuilder;
    AppendLine(item: any): StringBuilder;
    AppendLines(items: any[]): StringBuilder;
    Build(): string;
    Join(delimiter: string): string;
    toString(): string;
    Dispose(): void;
    private AppendSingle;
}
