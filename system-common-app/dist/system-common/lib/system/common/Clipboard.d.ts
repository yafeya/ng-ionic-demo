export declare class Clipboard {
    /**
     *
     */
    ContainsImage(): boolean;
    /** Get image data from clipboard */
    GetImage(): any;
    GetAvailableFormats(): string[];
    /**
     * Get image data URL
     */
    GetImageUrl(): string;
    /** Get PNG format image encoded with base64 */
    GetPngImage(): any;
    /** Get PNG format image encoded with base64 */
    GetPngBase64Image(): string;
    Clear(): void;
    /**  Clears the Clipboard and then adds text data in the Text or UnicodeText format, depending on the operating system.*/
    SetText(text: string): void;
    /**
     * Get text conent from clipboard
     */
    GetText(): string;
    /**
     * Get HTML fromat text content from clipboard
     */
    GetHtml(): string;
    /**
     * Set HTML format content to clipboard
     * @param value HTML format content
     */
    SetHtml(value: string): void;
    /**
     * Get RTF format text from clipboard
     */
    GetRTF(): string;
    /**
     * Set RTF format content to clipboard
     * @param value RTF format content
     */
    SetRTF(value: string): void;
}
