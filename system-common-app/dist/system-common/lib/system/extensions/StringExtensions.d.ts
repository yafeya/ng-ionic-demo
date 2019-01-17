interface String {
    ToLower: () => string;
    ToUpper: () => string;
    Trim: () => string;
    Normalize: () => string;
    StartsWith: (part: string) => boolean;
    EndsWith: (part: string) => boolean;
    CapFirst: () => string;
    CapWords: () => string;
    TruncateWords: (number: number) => string;
    Contains: (value: string) => boolean;
    Slugify: (lower?: boolean) => string;
    StripHtml: () => string;
    EscapeHtml: () => string;
    CountWord: () => number;
    HtmlToText: () => string;
    ValidateEmail: () => boolean;
    IndexOf: (value: string) => number;
    LastIndexOf: (value: string) => number;
    SubString: (start: number, length: number) => string;
}
interface StringConstructor {
    IsNullOrEmpty: (value: any) => boolean;
    IsValid: (value: any) => boolean;
    Empty: () => string;
}
