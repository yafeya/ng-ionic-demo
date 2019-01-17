import { XElement } from './XElement';
export declare class XDocument {
    private mRoot;
    Root: XElement;
    Build(): XMLDocument;
    BuildXmlString(): string;
}
