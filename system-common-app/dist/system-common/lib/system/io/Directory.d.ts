export declare class Directory {
    private readonly App;
    GetUserDataFolder(): string;
    GetAppDataFolder(): string;
    GetMyDocumentFolder(): string;
    GetPictureFolder(): string;
    /** Get current executable file */
    GetCurrentFolder(): string;
    /** Get temporary folder */
    GetTempFolder(): string;
    GetAppName(): string;
    ShowItemInFolder(value: string): void;
    Exist(value: string): boolean;
    EnsureFolderExist(value: string): void;
    Combine(path1: string, path2: string): string;
}
