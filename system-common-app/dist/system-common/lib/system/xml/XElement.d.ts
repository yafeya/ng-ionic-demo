import { XObject } from './XObject';
import { XAttribute } from './XAttribute';
import * as Common from '../common/index';
export declare class XElement extends XObject {
    Elements: Array<XElement>;
    Attributes: Array<XAttribute>;
    Parent: XElement;
    constructor(name: string, value?: any);
    AppendChild(element: XElement): XElement;
    AppendAttribute(attribute: XAttribute): void;
    ToXmlElement(doc: XMLDocument): HTMLElement;
    ToXmlString(builder: Common.StringBuilder): string;
}
