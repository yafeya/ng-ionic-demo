/**
 * Angular CLI doesn't support import node module right now, have to use
 * declare
 * https://github.com/angular/angular-cli/issues/3482
 */
export declare class File {
    /**
     * Check whether given file is exist.
     * @param filename full file name with path
     */
    static Exists(filename: string): boolean;
    static Create(filename: string, content: string): void;
    static Delete(filename: string): void;
    static ReadAllText(filename: string, encoding: string): string;
    static Copy(source: string, target: string, overwrite: boolean): void;
    static FindFolder(filename: string): string;
}
