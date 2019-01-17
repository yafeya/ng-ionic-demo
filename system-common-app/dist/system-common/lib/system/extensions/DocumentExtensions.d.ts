interface Document {
    SelectOne: (selector: string) => Element;
    SelectAll: (selector: string) => NodeListOf<Element>;
    Create: (html: string) => Element;
}
interface NodeList {
    ForEach: (callback: Function) => void;
    Last: () => Element;
}
interface Element {
    Attribute: (name: string, value?: string) => string & Element;
    Parent: () => Element;
    First: (selector: string) => Element;
    Append: (html: string) => Element;
    Empty: () => Element;
    Drop: () => Element;
    RemoveEvent: (event: string) => Element;
    AddEvent: (event: string, callback: Function, overwrite?: boolean) => Element;
    Show: (t?: string) => Element;
    Hide: () => Element;
    Toggle: () => Element;
    AddClass: (className: string) => Element;
    RemoveClass: (className: string) => Element;
    AsString: () => string;
    SelectOne: (selector: string) => Element;
    SelectAll: (selector: string) => NodeListOf<Element>;
    HasMatches: (selector: string) => boolean;
    Up: (selector: string) => Element;
    IsHidden: () => Boolean;
}
interface HTMLElement {
    Clean: () => HTMLElement;
    Value: (val?: string) => string;
}
