(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/system-common/fesm2015/system-common.js":
/*!******************************************************!*\
  !*** ./dist/system-common/fesm2015/system-common.js ***!
  \******************************************************/
/*! exports provided: XElement, XDocument, XObject, XAttribute, DelegateCommand, CommandRepository, InvokeCommandDirective, CommandDescriptor, CommandDescriptorRepository, CommandDescriptorExtensions, AppSettings, AppSettingItem, OptionRepositoryToken, OptionRepository, ResourceDictionary, ResourceHolder, DefaultLoggerFactory, LogLevel, DebugLogger, DebugLoggerProvider, Log4JsLogger, Log4JsLoggerProvider, LoggerFactoryExtensions, LoggingExceptionHandler, HttpClient, ElectronUtil, Guid, StringBuilder, XmlConverter, Clipboard, JsonToken, WindowSizeWatcherToken, WindowSizeWatcher, Collection, Enumerable, List, Grouping, EnumerableIterator, NamedDictionary, Dictionary, ForEach, Sort, FindAll, FirstOrDefault, IsEmpty, Any, Max, Min, OrderBy, OrderByDescending, Where, Select, ElementAt, GroupBy, ObservableCollection, AngularServiceProvider, ServiceLocator, IsDefined, IsObject, MergeDeep, Clone, CompareProperties, Delay, ActionRepository, Action, MessageMediator, ComponentCreatorToken, ComponentCreator, File, Directory, MessageMediatorToken, LoggerFactoryToken, ExceptionHandlerToken, CommandRepositoryToken, CommandDescriptorRepositoryToken, ActionRepositoryToken, SystemModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XElement", function() { return XElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XDocument", function() { return XDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XObject", function() { return XObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XAttribute", function() { return XAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelegateCommand", function() { return DelegateCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandRepository", function() { return CommandRepository; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvokeCommandDirective", function() { return InvokeCommandDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandDescriptor", function() { return CommandDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandDescriptorRepository", function() { return CommandDescriptorRepository; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandDescriptorExtensions", function() { return CommandDescriptorExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingItem", function() { return AppSettingItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionRepositoryToken", function() { return OptionRepositoryToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionRepository", function() { return OptionRepository; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDictionary", function() { return ResourceDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceHolder", function() { return ResourceHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLoggerFactory", function() { return DefaultLoggerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugLogger", function() { return DebugLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugLoggerProvider", function() { return DebugLoggerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log4JsLogger", function() { return Log4JsLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log4JsLoggerProvider", function() { return Log4JsLoggerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerFactoryExtensions", function() { return LoggerFactoryExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingExceptionHandler", function() { return LoggingExceptionHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronUtil", function() { return ElectronUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringBuilder", function() { return StringBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlConverter", function() { return XmlConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToken", function() { return JsonToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowSizeWatcherToken", function() { return WindowSizeWatcherToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowSizeWatcher", function() { return WindowSizeWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enumerable", function() { return Enumerable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grouping", function() { return Grouping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumerableIterator", function() { return EnumerableIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedDictionary", function() { return NamedDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForEach", function() { return ForEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindAll", function() { return FindAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstOrDefault", function() { return FirstOrDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEmpty", function() { return IsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Any", function() { return Any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Max", function() { return Max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Min", function() { return Min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByDescending", function() { return OrderByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Where", function() { return Where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAt", function() { return ElementAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBy", function() { return GroupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableCollection", function() { return ObservableCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularServiceProvider", function() { return AngularServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocator", function() { return ServiceLocator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDefined", function() { return IsDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObject", function() { return IsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeDeep", function() { return MergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clone", function() { return Clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareProperties", function() { return CompareProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return Delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionRepository", function() { return ActionRepository; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageMediator", function() { return MessageMediator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCreatorToken", function() { return ComponentCreatorToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCreator", function() { return ComponentCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageMediatorToken", function() { return MessageMediatorToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerFactoryToken", function() { return LoggerFactoryToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionHandlerToken", function() { return ExceptionHandlerToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandRepositoryToken", function() { return CommandRepositoryToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandDescriptorRepositoryToken", function() { return CommandDescriptorRepositoryToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionRepositoryToken", function() { return ActionRepositoryToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LoggerBase; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class XObject {
    /**
     * @return {?}
     */
    get Document() {
        return this.mDocument;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Document(value) {
        this.mDocument = value;
    }
    /**
     *
     * @param {?} name
     * @param {?} value
     */
    constructor(name, value) {
        this.Name = name;
        this.Value = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class XElement extends XObject {
    /**
     * @param {?} name
     * @param {?=} value
     */
    constructor(name, value = null) {
        super(name, value);
        this.Elements = [];
        this.Attributes = [];
    }
    /**
     * @param {?} element
     * @return {?}
     */
    AppendChild(element) {
        if (!element)
            throw new Error('element is null.');
        this.Elements.push(element);
        element.Document = this.Document;
        element.Parent = this;
        return this;
    }
    /**
     * @param {?} attribute
     * @return {?}
     */
    AppendAttribute(attribute) {
        if (!attribute)
            throw new Error('attribute is null.');
        this.Attributes.push(attribute);
        attribute.Document = this.Document;
    }
    /**
     * @param {?} doc
     * @return {?}
     */
    ToXmlElement(doc) {
        /** @type {?} */
        let element = doc.createElement(this.Name);
        if (this.Value) {
            if (this.Name == "base64")
                console.log(this.Value);
            element.appendChild(document.createTextNode(this.Value));
        }
        this.Attributes.forEach(function (attribute) {
            element.setAttribute(attribute.Name, attribute.Value);
        });
        this.Elements.forEach(function (child) {
            element.appendChild(child.ToXmlElement(doc));
        });
        return element;
    }
    /**
     * @param {?} builder
     * @return {?}
     */
    ToXmlString(builder) {
        builder.Append('<' + this.Name + '>');
        if (this.Value) {
            builder.Append(this.Value);
        }
        else {
            this.Elements.forEach(function (child) {
                child.ToXmlString(builder);
            });
        }
        builder.Append('</' + this.Name + '>');
        return builder.Build();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Guid {
    /**
     * @param {?} value
     */
    constructor(value) {
        if (!value)
            throw new TypeError('Invalid argument; `value` has no value.');
        this.value = Guid.Empty;
        if (value && value instanceof Guid) {
            this.value = (/** @type {?} */ (value)).Value;
        }
        else if (value && Object.prototype.toString.call(value) === '[object String]' && Guid.IsGuid(value)) {
            this.value = value;
        }
    }
    /**
     * @return {?}
     */
    get Value() {
        return this.value;
    }
    /**
     * @return {?}
     */
    IsEmpty() {
        return this.value === Guid.Empty;
    }
    /**
     * @return {?}
     */
    ToString() {
        return this.value;
    }
    /**
     * @return {?}
     */
    ToJson() {
        return this.value;
    }
    /**
     * @param {?} count
     * @return {?}
     */
    static Generate(count) {
        /** @type {?} */
        let out = '';
        for (let i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    }
    /**
     * @return {?}
     */
    static New() {
        return new Guid([Guid.Generate(2), Guid.Generate(1), Guid.Generate(1), Guid.Generate(1), Guid.Generate(3)].join('-'));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static IsGuid(value) {
        return value && (value instanceof Guid || Guid.Validator.test(value.toString()));
    }
}
Guid.Empty = '00000000-0000-0000-0000-000000000000';
Guid.Validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class StringBuilder {
    constructor() {
        this.content = [];
        this.latest = null;
    }
    /**
     * @return {?}
     */
    get IsEmpty() {
        return this.content.length === 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Append(item) {
        this.AppendSingle(item);
        return this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    AppendLine(item) {
        this.AppendSingle(item);
        this.content.push('\r\n');
        return this;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    AppendLines(items) {
        items.forEach(x => {
            if (x != null) {
                this.AppendLine(x);
            }
        });
        return this;
    }
    /**
     * @return {?}
     */
    Build() {
        if (this.latest != null)
            return this.latest;
        this.latest = this.Join('');
        return this.latest;
    }
    /**
     * @param {?} delimiter
     * @return {?}
     */
    Join(delimiter) {
        return this.content.join(delimiter);
    }
    /**
     * @return {?}
     */
    toString() {
        return this.Build();
    }
    /**
     * @return {?}
     */
    Dispose() {
        this.latest = null;
        this.content = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    AppendSingle(item) {
        if (item != null) {
            this.latest = null;
            if (typeof item !== 'string') {
                this.content.push(item.toString());
            }
            else {
                this.content.push(item);
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class XmlConverter {
    /**
     * Convert Xml to Json
     * @param {?} xml
     * @return {?}
     */
    ToJson(xml) {
        /** @type {?} */
        let parser = Xml2Js.Parser();
        return parser.toJson(xml);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Clipboard {
    /**
     *
     * @return {?}
     */
    ContainsImage() {
        /** @type {?} */
        let formats = clipboard.availableFormats();
        return formats.some(x => x === 'image/png' || x === 'image/jpeg' || x === 'image/jpg' || x === 'image/gif');
    }
    /**
     * Get image data from clipboard
     * @return {?}
     */
    GetImage() {
        /** @type {?} */
        let formats = clipboard.availableFormats();
        /** @type {?} */
        let native = clipboard.readImage();
        return native;
    }
    /**
     * @return {?}
     */
    GetAvailableFormats() {
        return clipboard.availableFormats();
    }
    /**
     * Get image data URL
     * @return {?}
     */
    GetImageUrl() {
        /** @type {?} */
        let url = '';
        /** @type {?} */
        let image = this.GetImage();
        if (image) {
            url = image.toDataURL();
        }
        return url;
    }
    /**
     * Get PNG format image encoded with base64
     * @return {?}
     */
    GetPngImage() {
        /** @type {?} */
        let data;
        /** @type {?} */
        let image = this.GetImage();
        if (image) {
            data = image.toPNG();
        }
        return data;
    }
    /**
     * Get PNG format image encoded with base64
     * @return {?}
     */
    GetPngBase64Image() {
        /** @type {?} */
        let data = '';
        /** @type {?} */
        let image = this.GetImage();
        if (image) {
            /** @type {?} */
            let buffer = image.toPNG();
            data = buffer.toString('base64');
        }
        return data;
    }
    /**
     * @return {?}
     */
    Clear() {
        clipboard.clear();
    }
    /**
     * Clears the Clipboard and then adds text data in the Text or UnicodeText format, depending on the operating system.
     * @param {?} text
     * @return {?}
     */
    SetText(text) {
        try {
            if (clipboard !== null) {
                clipboard.writeText(text);
            }
        }
        catch (e) {
            console.log(e);
        }
        if (document) {
            try {
                /** @type {?} */
                let temp = document.createElement('textarea');
                document.body.appendChild(temp);
                temp.textContent = text;
                /** @type {?} */
                let currentFocus = document.activeElement;
                temp.focus();
                temp.setSelectionRange(0, temp.value.length);
                document.execCommand('copy');
                if (currentFocus) {
                    currentFocus.focus();
                }
                document.body.removeChild(temp);
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    /**
     * Get text conent from clipboard
     * @return {?}
     */
    GetText() {
        return clipboard.readText();
    }
    /**
     * Get HTML fromat text content from clipboard
     * @return {?}
     */
    GetHtml() {
        return clipboard.readHTML();
    }
    /**
     * Set HTML format content to clipboard
     * @param {?} value HTML format content
     * @return {?}
     */
    SetHtml(value) {
        return clipboard.writerHTML(value);
    }
    /**
     * Get RTF format text from clipboard
     * @return {?}
     */
    GetRTF() {
        return clipboard.readRTF();
    }
    /**
     * Set RTF format content to clipboard
     * @param {?} value RTF format content
     * @return {?}
     */
    SetRTF(value) {
        clipboard.writerRTF(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JsonToken {
    /**
     * @param {?} token
     * @return {?}
     */
    Decode(token) {
        /** @type {?} */
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        /** @type {?} */
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    urlBase64Decode(str) {
        /** @type {?} */
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default: {
                throw new Error('Illegal base64url string!');
            }
        }
        return decodeURIComponent(encodeURI(window.atob(output)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class EnumerableIterator {
    /**
     * @param {?} enumerable
     */
    constructor(enumerable) {
        this.enumerable = enumerable;
        this.pointer = 0;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    next(value) {
        if (this.pointer < this.enumerable.Count) {
            return {
                done: false,
                value: this.enumerable.Items[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class Enumerable {
    constructor() {
        this.items = [];
    }
    /**
     * Get counts of collection
     * @return {?}
     */
    get Count() {
        return this.Items.length;
    }
    /**
     * Get all items
     * @return {?}
     */
    get Items() {
        return this.items;
    }
    /**
     * Set items value
     * @param {?} value
     * @return {?}
     */
    set Items(value) {
        this.items = value;
    }
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        return new EnumerableIterator(this);
    }
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    static From(array) {
        /** @type {?} */
        let list = new Enumerable();
        if (array) {
            list.Items = array;
        }
        return list;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class Collection extends Enumerable {
    /**
     * Get whether collection is readonly
     * @return {?}
     */
    get IsReadOnly() {
        return false;
    }
    /**
     * Add item to collection
     * @param {?} item
     * @return {?}
     */
    Add(item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        this.Items.push(item);
    }
    /**
     * Add items to collection
     * @param {?} items
     * @return {?}
     */
    AddRange(items) {
        if (!items)
            throw new Error(`Argument 'items' is null.`);
        for (let item of items) {
            this.Add(item);
        }
    }
    /**
     * Clear collection
     * @return {?}
     */
    Clear() {
        this.Items = [];
    }
    /**
     * Determines whether collection contains a specific item
     * @param {?} item
     * @return {?}
     */
    Contains(item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        return this.Items.indexOf(item) > -1;
    }
    /**
     * Remove item from collection
     * @param {?} item
     * @return {?}
     */
    Remove(item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        /** @type {?} */
        let index = this.Items.indexOf(item);
        if (index > -1) {
            this.Items.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Copy elements to an array starting at a particular index
     * \@array
     * \@arrayIndex The zero-based index in array at which copying begins.
     * @param {?} array
     * @param {?} arrayIndex
     * @return {?}
     */
    CopyTo(array, arrayIndex) {
        if (!array)
            throw new Error(`Argument 'array' is null.`);
        if (arrayIndex < 0 || arrayIndex > array.length)
            throw new Error(`Argument 'arrayIndex' is out of range.`);
        /** @type {?} */
        let index = arrayIndex;
        for (let item of this.Items) {
            array.splice(index++, 0, item);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class List extends Collection {
    /**
     * Get index of given item
     * @param {?} item
     * @return {?}
     */
    IndexOf(item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        return this.Items.indexOf(item);
    }
    /**
     * Insert item to given index
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    Insert(index, item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        if (index < 0 || index >= this.Items.length)
            throw new Error(`Argument 'index' is out of index`);
        this.Items.splice(index, 0, item);
    }
    /**
     * Remove item at given index
     * @param {?} index
     * @return {?}
     */
    RemoveAt(index) {
        if (index < 0 || index >= this.Items.length)
            throw new Error(`Argument 'index' is out of index`);
        this.Items.splice(index, 1);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template TKey, TElement
 */
class Grouping extends Enumerable {
    /**
     * @param {?=} key
     * @param {?=} elements
     */
    constructor(key, elements) {
        super();
        this.key = key;
        this.Items = elements.Items;
    }
    /**
     * @return {?}
     */
    get Key() {
        return this.key;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Key(value) {
        this.key = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class NamedDictionary {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    ContainsKey(key) {
        return this.items.hasOwnProperty(key);
    }
    /**
     * @return {?}
     */
    Count() {
        return this.count;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Add(key, value) {
        this.items[key] = value;
        this.count++;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Remove(key) {
        /** @type {?} */
        let value = this.items[key];
        delete this.items[key];
        this.count--;
        return value;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Item(key) {
        return this.items[key];
    }
    /**
     * @return {?}
     */
    Keys() {
        /** @type {?} */
        let keySet = [];
        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    }
    /**
     * @return {?}
     */
    Values() {
        /** @type {?} */
        let values = [];
        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template TKey, TValue
 */
class KeyValuePair {
    /**
     * @param {?} key
     * @param {?} value
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    /**
     * @return {?}
     */
    get Key() {
        return this.key;
    }
    /**
     * @return {?}
     */
    get Value() {
        return this.value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template TKey, TValue
 */
class Dictionary extends Enumerable {
    constructor() {
        super(...arguments);
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Add(key, value) {
        this.map.set(key, value);
        this.Items.Add(new KeyValuePair(key, value));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    ContainsKey(key) {
        return this.map.has(key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Item(key) {
        return this.map.get(key);
    }
    /**
     * @return {?}
     */
    Keys() {
        /** @type {?} */
        let keys = [];
        this.map.forEach((value, key) => {
            keys.push(key);
        });
        return keys;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Remove(key) {
        /** @type {?} */
        let item = this.Items.FirstOrDefault(x => x.Key === key);
        if (item)
            this.Items.Remove(item);
        return this.map.delete(key);
    }
    /**
     * @return {?}
     */
    Values() {
        /** @type {?} */
        let values = [];
        this.map.forEach((value, key) => {
            values.push(value);
        });
        return values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ObservableCollection extends rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] {
    /**
     * @param {?} array
     * @param {?=} scheduler
     */
    constructor(array, scheduler) {
        super();
        this.array = array;
        this.scheduler = scheduler;
        // console.log(array);
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.values = /** @type {?} */ (array[0]);
        }
        else {
            this._isScalar = true;
            this.values = array;
        }
    }
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    static Create(array) {
        return new ObservableCollection(/** @type {?} */ ([array]));
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static dispatch(state) {
        const { array, index, count, subscriber } = state;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        (/** @type {?} */ (this)).schedule(state);
    }
    /**
     * @return {?}
     */
    get Count() {
        return this.values.length;
    }
    /**
     * @return {?}
     */
    get Values() {
        return this.values;
    }
    /**
     * @return {?}
     */
    get Items() {
        return this.values;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Items(value) {
        this.values = value;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Add(item) {
        if (this.values) {
            this.values.push(item);
        }
    }
    /**
     * @param {?} items
     * @return {?}
     */
    AddRange(items) {
        if (items) {
            for (let item of items) {
                this.Add(item);
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Remove(item) {
        /** @type {?} */
        let index = this.values.indexOf(item);
        if (index > -1) {
            this.values.splice(index, 1);
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        return new EnumerableIterator(this);
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    _subscribe(subscriber) {
        /** @type {?} */
        let index = 0;
        /** @type {?} */
        const array = this.array;
        /** @type {?} */
        const count = array.length;
        /** @type {?} */
        const scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ObservableCollection.dispatch, 0, {
                array, index, count, subscriber
            });
        }
        else {
            //console.log(this.values);
            for (let i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[0]);
            }
            subscriber.complete();
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Do ForEach on items
 * @template T
 * @this {?}
 * @param {?} action
 * @return {?}
 */
function ForEach(action) {
    if (!action) {
        throw new Error(`Argument 'item' is null.`);
    }
    for (let item of this.Items) {
        action(item);
    }
}
/**
 * Sort items by given comparer
 * @template T
 * @this {?}
 * @param {?} comparer
 * @return {?}
 */
function Sort(comparer) {
    if (!comparer)
        throw new Error(`Argument 'comparer' is null.`);
    this.Items = this.Items.sort(comparer);
}
/**
 * Find items by given predicate
 * @template T
 * @this {?}
 * @param {?} predicate
 * @return {?}
 */
function FindAll(predicate) {
    if (!predicate)
        throw new Error(`Argument 'predicate' is null.`);
    /** @type {?} */
    let result = new List();
    for (let item of this.Items) {
        if (predicate(item))
            result.Add(item);
    }
    return Enumerable.From(result.Items);
}
/**
 * Find first item in the list
 * @template T
 * @this {?}
 * @param {?=} predicate
 * @return {?}
 */
function FirstOrDefault(predicate) {
    /** @type {?} */
    let result;
    result = this.Items.FirstOrDefault(predicate);
    return result;
}
/**
 * @template T
 * @this {?}
 * @return {?}
 */
function IsEmpty() {
    return !(this.Items && this.Items.length > 0);
}
/**
 * @template T
 * @this {?}
 * @param {?=} predicate
 * @return {?}
 */
function Any(predicate) {
    if (predicate) {
        for (let item of this.Items) {
            if (predicate(item))
                return true;
        }
        return false;
    }
    else {
        if (this.Items.length === 0) {
            return false;
        }
        return true;
    }
}
/**
 * @template T
 * @this {?}
 * @param {?} selector
 * @return {?}
 */
function Max(selector) {
    /** @type {?} */
    let max = this.Select(selector).Items.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return max;
}
/**
 * @template T
 * @this {?}
 * @param {?} selector
 * @return {?}
 */
function Min(selector) {
    /** @type {?} */
    let min = this.Select(selector).Items.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return min;
}
/**
 * @template T
 * @this {?}
 * @param {?} keySelector
 * @return {?}
 */
function OrderBy(keySelector) {
    /** @type {?} */
    let values = this.Items.sort(function (a, b) {
        return keySelector(a) - keySelector(b);
    });
    return Enumerable.From(values);
}
/**
 * @template T
 * @this {?}
 * @param {?} keySelector
 * @return {?}
 */
function OrderByDescending(keySelector) {
    /** @type {?} */
    let values = this.Items.sort(function (a, b) {
        return keySelector(b) - keySelector(a);
    });
    return Enumerable.From(values);
}
/**
 * @template T
 * @this {?}
 * @param {?} predicate
 * @return {?}
 */
function Where(predicate) {
    /** @type {?} */
    let values = this.Items.filter((x) => {
        return predicate(x);
    });
    return Enumerable.From(values);
}
/**
 * @template TSource, TResult
 * @this {?}
 * @param {?} selector
 * @return {?}
 */
function Select(selector) {
    /** @type {?} */
    let result = [];
    for (let item of this.Items) {
        result.push(selector(item));
    }
    return Enumerable.From(result);
}
/**
 * @template T
 * @this {?}
 * @param {?} index
 * @return {?}
 */
function ElementAt(index) {
    /** @type {?} */
    let values = this.Items;
    return values[index];
}
/**
 * @template T, TKey, TElement
 * @this {?}
 * @param {?} keySelector
 * @param {?=} valueSelector
 * @return {?}
 */
function GroupBy(keySelector, valueSelector) {
    if (!this)
        throw new Error(`Parameter is null`);
    if (!keySelector)
        throw new Error(`Parameter 'keySelelctor'is null`);
    if (!valueSelector)
        valueSelector = x => x;
    /** @type {?} */
    let dictionary = new Dictionary();
    this.ForEach(x => {
        /** @type {?} */
        let key = keySelector(x);
        /** @type {?} */
        let value = valueSelector ? valueSelector(x) : x;
        /** @type {?} */
        let values;
        if (dictionary.ContainsKey(key)) {
            /** @type {?} */
            let item = dictionary.Item(key);
            values = item ? item : new List();
        }
        else {
            values = new List();
            dictionary.Add(key, values);
        }
        values.Add(value);
    });
    /** @type {?} */
    let groups = new List();
    dictionary.ForEach(x => {
        groups.Add(new Grouping(x.Key, x.Value));
    });
    return groups;
}
Enumerable.prototype.ForEach = ForEach;
Enumerable.prototype.Sort = Sort;
Enumerable.prototype.FindAll = FindAll;
Enumerable.prototype.FirstOrDefault = FirstOrDefault;
Enumerable.prototype.IsEmpty = IsEmpty;
Enumerable.prototype.Any = Any;
Enumerable.prototype.Max = Max;
Enumerable.prototype.Min = Min;
Enumerable.prototype.OrderBy = OrderBy;
Enumerable.prototype.OrderByDescending = OrderByDescending;
Enumerable.prototype.Where = Where;
Enumerable.prototype.Select = Select;
Enumerable.prototype.ElementAt = ElementAt;
Enumerable.prototype.GroupBy = GroupBy;
ObservableCollection.prototype.ForEach = ForEach;
ObservableCollection.prototype.Sort = Sort;
ObservableCollection.prototype.FindAll = FindAll;
ObservableCollection.prototype.FirstOrDefault = FirstOrDefault;
ObservableCollection.prototype.IsEmpty = IsEmpty;
ObservableCollection.prototype.Any = Any;
ObservableCollection.prototype.Max = Max;
ObservableCollection.prototype.Min = Min;
ObservableCollection.prototype.OrderBy = OrderBy;
ObservableCollection.prototype.OrderByDescending = OrderByDescending;
ObservableCollection.prototype.Where = Where;
ObservableCollection.prototype.Select = Select;
ObservableCollection.prototype.ElementAt = ElementAt;
ObservableCollection.prototype.GroupBy = GroupBy;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const WindowSizeWatcherToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./IWindowSizeWatcher');
class WindowSizeWatcher {
    constructor() {
        this.handlers = new Dictionary();
    }
    /**
     * @return {?}
     */
    Start() {
        /** @type {?} */
        let self = this;
        window.onresize = (e) => {
            for (let handler of self.handlers.Values()) {
                handler.Handle({ Width: window.innerWidth, Height: window.innerHeight });
            }
        };
    }
    /**
     * @param {?} name
     * @param {?} handler
     * @return {?}
     */
    Add(name, handler) {
        this.handlers.Add(name, handler);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    Remove(name) {
        this.handlers.Remove(name);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    OnSizeChanged(e) {
        for (let handler of this.handlers.Values()) {
            handler.Handle({ Width: window.innerWidth, Height: window.innerHeight });
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class XDocument {
    /**
     * @return {?}
     */
    get Root() {
        return this.mRoot;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Root(value) {
        this.mRoot = value;
        this.mRoot.Document = this;
    }
    /**
     * @return {?}
     */
    Build() {
        /** @type {?} */
        var doc = document.implementation.createDocument("", "", null);
        doc.appendChild(this.Root.ToXmlElement(doc));
        return doc;
    }
    /**
     * @return {?}
     */
    BuildXmlString() {
        /** @type {?} */
        let builder = new StringBuilder();
        /** @type {?} */
        let content = this.Root.ToXmlString(builder);
        return content;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class XAttribute extends XObject {
    /**
     * @param {?} name
     * @param {?} value
     */
    constructor(name, value) {
        super(name, value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DelegateCommand {
    /**
     * @param {?} canExecute
     * @param {?} action
     */
    constructor(canExecute, action) {
        this.canExecute = canExecute;
        this.action = action;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    CanExecute(param) {
        if (this.canExecute === null)
            return true;
        return this.canExecute(param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    Execute(param) {
        if (this.action) {
            try {
                this.action(param);
            }
            catch (error) {
                throw error;
            }
        }
    }
    /**
     * Create a command from given actions.
     * @param {?} action executed action
     * @param {?=} canExecute can execue action
     * @return {?}
     */
    static From(action, canExecute) {
        if (!canExecute)
            canExecute = (param) => true;
        return new DelegateCommand(canExecute, action);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommandRepository {
    constructor() {
        this.Commands = new Dictionary();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    GetCommand(name) {
        /** @type {?} */
        let command = this.Commands.Item(name);
        return command;
    }
    /**
     * @param {?} name
     * @param {?} command
     * @return {?}
     */
    Register(name, command) {
        if (!name)
            throw new Error('Name value is null.');
        if (!command)
            throw new Error('Command value is null.');
        this.Commands.Add(name, command);
        return this;
    }
}
CommandRepository.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MessageMediatorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./message-mediator/IMessageMediator');
/** @type {?} */
const LoggerFactoryToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./logging/ILoggerFactory');
/** @type {?} */
const ExceptionHandlerToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./exception/IExceptionHandler');
/** @type {?} */
const CommandRepositoryToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./command/ICommandRepository');
/** @type {?} */
const CommandDescriptorRepositoryToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./command/ICommandDescriptorRepository');
/** @type {?} */
const ActionRepositoryToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./action/IActionRepository');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InvokeCommandDirective {
    /**
     * @param {?} commandRepository
     * @param {?} loggerFactory
     */
    constructor(commandRepository, loggerFactory) {
        this.commandRepository = commandRepository;
        this.logger = loggerFactory.CreateLogger('InvokeCommand');
    }
    /**
     * @return {?}
     */
    OnClicked() {
        this.logger.Debug(`Invoke command: ${this.CommandName} with ${JSON.stringify(this.CommandParam)}`);
        if (String.IsValid(this.CommandName)) {
            /** @type {?} */
            let command = this.commandRepository.GetCommand(this.CommandName);
            if (command != null && command.CanExecute(this.CommandParam)) {
                this.logger.Debug(`Get command with name: ${this.CommandName}, ${JSON.stringify(command)}`);
                command.Execute(this.CommandParam);
            }
        }
    }
}
InvokeCommandDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                selector: '[InvokeCommand]'
            },] }
];
/** @nocollapse */
InvokeCommandDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [CommandRepositoryToken,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [LoggerFactoryToken,] }] }
];
InvokeCommandDirective.propDecorators = {
    CommandName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['InvokeCommand',] }],
    CommandParam: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    OnClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommandDescriptor {
    /**
     * @param {?} Header
     * @param {?} CommandName
     * @param {?=} Group
     * @param {?=} Icon
     * @param {?=} Image
     * @param {?=} Description
     * @param {?=} Id
     * @param {?=} Tag
     * @param {?=} Shortcut
     */
    constructor(Header, CommandName, Group, Icon, Image, Description, Id, Tag, Shortcut) {
        this.Header = Header;
        this.CommandName = CommandName;
        this.Group = Group;
        this.Icon = Icon;
        this.Image = Image;
        this.Description = Description;
        this.Id = Id;
        this.Tag = Tag;
        this.Shortcut = Shortcut;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommandDescriptorRepository {
    constructor() {
        this.descriptors = new List();
    }
    /**
     * @return {?}
     */
    get Descriptors() {
        return this.descriptors;
    }
    /**
     * Register a descriptor.
     * @param {?} descriptor
     * @return {?}
     */
    Register(descriptor) {
        if (descriptor != null) {
            this.descriptors.Add(descriptor);
        }
        return this;
    }
    /**
     * Remove a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    Remove(descriptor) {
        if (descriptor !== null)
            this.descriptors.Remove(descriptor);
        return this;
    }
    /**
     * Remove descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    RemoveRange(expression) {
        if (expression === null) {
            return;
        }
        this.Descriptors.FindAll(expression)
            .ForEach(x => {
            this.descriptors.Remove(x);
        });
    }
}
CommandDescriptorRepository.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommandDescriptorExtensions {
    /**
     * Get descriptors by group
     * @this {?}
     * @param {?} group group name
     * @return {?}
     */
    static GetDescriptorsByGroup(group) {
        /** @type {?} */
        let repo = this;
        return repo.Descriptors.Where((x) => { return x.Group === group; });
    }
}
CommandDescriptorRepository.prototype.GetDescriptorsByGroup = CommandDescriptorExtensions.GetDescriptorsByGroup;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AppSettingItem {
    /**
     * @return {?}
     */
    get ToString() {
        return `AppSettingItem Name:'${this.Name}', Id:'${this.Id}', Value:'${this.Value}'`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AppSettings {
    constructor() {
        this.Items = new NamedDictionary();
    }
    /**
     * @return {?}
     */
    get SettingItems() {
        return this.Items.Values();
    }
    /**
     * Get a setting item by name.
     * @param {?} name
     * @param {?=} defaultValue
     * @return {?}
     */
    GetItem(name, defaultValue) {
        if (!name)
            throw new Error('Given name is null.');
        /** @type {?} */
        let item = this.Items.Item(name);
        if (!item && defaultValue != null) {
            item = new AppSettingItem();
            item.Name = name;
            item.Value = defaultValue;
            this.Items.Add(name, item);
        }
        return item;
    }
    /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     * @param {?} item
     * @return {?}
     */
    AddItem(item) {
        if (item && item.Name) {
            /** @type {?} */
            let existing = this.GetItem(item.Name);
            if (existing) {
                existing.Value = item.Value;
            }
            else {
                this.Items.Add(item.Name, item);
            }
        }
        return this;
    }
    /**
     * Set setting item value
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    SetValue(name, value) {
        /** @type {?} */
        let item = this.GetItem(name);
        if (!item) {
            item = new AppSettingItem();
            item.Name = name;
            this.Items.Add(name, item);
        }
        item.Value = value;
        return this;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const OptionRepositoryToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./IOptionRepository');
class OptionRepository {
    constructor() {
        this.descriptors = new Dictionary();
    }
    /**
     * Register a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    Register(descriptor) {
        if (!descriptor)
            throw new Error(`Argument descriptor is null`);
        if (!this.descriptors.ContainsKey(descriptor.Id)) {
            this.descriptors.Add(descriptor.Id, descriptor);
        }
        return this;
    }
    /**
     * Find descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    Find(expression) {
        return Enumerable.From(this.descriptors.Values().Where(x => expression(x)));
    }
    /**
     * Find a descriptor by id
     * @param {?} id
     * @return {?}
     */
    FindOne(id) {
        if (this.descriptors.ContainsKey(id)) {
            return this.descriptors.Item(id);
        }
        else {
            return null;
        }
    }
}
OptionRepository.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ResourceDictionary {
    constructor() {
        this.mInnerDictionary = new NamedDictionary();
    }
    /**
     * Add resource value
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Add(key, value) {
        if (key) {
            this.mInnerDictionary.Add(key, value);
        }
        return this;
    }
    /**
     * Get resource value
     * @param {?} key
     * @return {?}
     */
    Get(key) {
        if (key) {
            return this.mInnerDictionary.Item(key);
        }
        return '';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ResourceHolder {
    constructor() {
        this.DefaultLocal = 'en-US';
        this.mInnerDictionary = new NamedDictionary();
    }
    /**
     * Get resource dictionary by local name
     * @param {?} local
     * @return {?}
     */
    GetResources(local) {
        return this.mInnerDictionary.Item(local);
    }
    /**
     * Add resource for specific local
     * @param {?} local
     * @param {?} resource
     * @return {?}
     */
    AddResources(local, resource) {
        if (local) {
            this.mInnerDictionary.Add(local, resource);
        }
        return this;
    }
    /**
     * Get resource string
     * @param {?} name
     * @param {?=} local
     * @return {?}
     */
    GetString(name, local) {
        /** @type {?} */
        let culture = local ? local : this.DefaultLocal;
        /** @type {?} */
        let resources = this.GetResources(culture);
        if (resources) {
            return resources.Get(name);
        }
        return '';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const LogLevel = {
    Trace: 1,
    Debug: 2,
    Information: 3,
    Warning: 4,
    Error: 5,
    Critical: 6,
    None: 9999,
};
LogLevel[LogLevel.Trace] = 'Trace';
LogLevel[LogLevel.Debug] = 'Debug';
LogLevel[LogLevel.Information] = 'Information';
LogLevel[LogLevel.Warning] = 'Warning';
LogLevel[LogLevel.Error] = 'Error';
LogLevel[LogLevel.Critical] = 'Critical';
LogLevel[LogLevel.None] = 'None';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Logger {
    /**
     * @param {?} loggerFactory
     * @param {?} name
     */
    constructor(loggerFactory, name) {
        this.loggerFactory = loggerFactory;
        this.name = name;
        this.loggers = new List();
        this.formatter = this.MessageFormatter;
        /** @type {?} */
        let providers = loggerFactory.GetProviders();
        if (providers.Count > 0) {
            providers.ForEach(x => {
                this.loggers.Add(x.CreateLogger(name));
            });
        }
    }
    /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    Log(level, eventId, state, error, formatter) {
        /** @type {?} */
        let errors = new List();
        this.loggers.ForEach(logger => {
            try {
                logger.Log(level, eventId, state, error, formatter);
            }
            catch (error) {
                errors.Add(error);
            }
        });
        if (errors.Count > 0) {
            throw new Error();
        }
    }
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    IsEnabled(level) {
        for (let logger of this.loggers.Items) {
            if (logger.IsEnabled(level))
                return true;
        }
        return false;
    }
    /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    Debug(message) {
        this.Log(LogLevel.Debug, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    Trace(message) {
        this.Log(LogLevel.Trace, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    Info(message) {
        this.Log(LogLevel.Information, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    Warn(message) {
        this.Log(LogLevel.Warning, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    Error(message) {
        this.Log(LogLevel.Error, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    Fatal(message) {
        this.Log(LogLevel.Critical, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Add a logger provider
     * \@provider
     * @param {?} provider
     * @return {?}
     */
    AddProvider(provider) {
        /** @type {?} */
        let logger = provider.CreateLogger(this.name);
        this.loggers.Add(logger);
    }
    /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    MessageFormatter(state, error) {
        if (!state && !error)
            // throw new Error(`No message or exception details wer found to create a message for the log.`);
            return '';
        if (!state)
            return error.message;
        if (!error)
            return state.toString();
        return `${state}\n${error}`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DefaultLoggerFactory {
    constructor() {
        this.providers = new List();
        this.loggers = new Dictionary();
    }
    /**
     * Create a logger
     * @param {?} name
     * @return {?}
     */
    CreateLogger(name) {
        /** @type {?} */
        let logger = this.loggers.Item(name);
        if (!logger) {
            logger = new Logger(this, name);
            this.loggers.Add(name, logger);
        }
        return logger;
    }
    /**
     * Add an logger provider to the logging system
     * \@provider logger provider
     * @param {?} provider
     * @return {?}
     */
    AddProvider(provider) {
        this.providers.Add(provider);
        for (let item of this.loggers.Items) {
            item.Value.AddProvider(provider);
        }
    }
    /**
     * Get logger providers
     * @return {?}
     */
    GetProviders() {
        return this.providers;
    }
}
DefaultLoggerFactory.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];
/** @nocollapse */
DefaultLoggerFactory.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class LoggerBase {
    constructor() {
        this.formatter = this.MessageFormatter;
    }
    /**
     * @return {?}
     */
    get Name() {
        return this.name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Name(value) {
        this.name = value;
    }
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    IsEnabled(level) {
        return true;
    }
    /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    Debug(message) {
        this.Log(LogLevel.Debug, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    Trace(message) {
        this.Log(LogLevel.Trace, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    Info(message) {
        this.Log(LogLevel.Information, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    Warn(message) {
        this.Log(LogLevel.Warning, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    Error(message) {
        this.Log(LogLevel.Error, 0, message, null, this.formatter);
        return this;
    }
    /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    Fatal(message) {
        this.Log(LogLevel.Critical, 0, message, null, this.formatter);
        return this;
    }
    /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    MessageFormatter(state, error) {
        if (!state && !error)
            // throw new Error(`No message or exception details wer found to create a message for the log.`);
            return '';
        if (!state)
            return error.message;
        if (!error)
            return JSON.stringify(state); // state.toString();
        return `${state}\n${error}`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DebugLogger extends LoggerBase {
    /**
     * @param {?} name
     * @param {?} filter
     */
    constructor(name, filter) {
        super();
        this.filter = filter;
        this.Name = name;
    }
    /**
     * Peform log output to console
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    Log(level, eventId, state, error, formatter) {
        console.log(`[${new Date().toLocaleTimeString()}] ${this.Name}: ${level}, ${this.formatter(state, error)}`);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DebugLoggerProvider {
    /**
     * @param {?=} filter
     */
    constructor(filter) {
        this.filter = filter;
        if (filter == null) {
            filter = (message, level) => {
                return true;
            };
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    CreateLogger(name) {
        return new DebugLogger(name, this.filter);
    }
    /**
     * @return {?}
     */
    Dispose() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Log4JsLogger extends LoggerBase {
    /**
     * @param {?} name
     * @param {?} log4JsLogger
     */
    constructor(name, log4JsLogger) {
        super();
        this.log4JsLogger = log4JsLogger;
        this.Name = name;
    }
    /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    Log(level, eventId, state, error, formatter) {
        /** @type {?} */
        let message = this.formatter(state, error);
        switch (level) {
            case LogLevel.Debug:
                this.log4JsLogger.debug(message);
                break;
            case LogLevel.Trace:
                this.log4JsLogger.trace(message);
                break;
            case LogLevel.Information:
                this.log4JsLogger.info(message);
                break;
            case LogLevel.Warning:
                this.log4JsLogger.warn(message);
                break;
            case LogLevel.Error:
                this.log4JsLogger.error(message);
                break;
            case LogLevel.Critical:
                this.log4JsLogger.fatal(message);
                break;
            default:
                this.log4JsLogger.debug(message);
                break;
        }
    }
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    IsEnabled(level) {
        /** @type {?} */
        let rawLevel;
        switch (level) {
            case LogLevel.Debug:
                rawLevel = { level: 5000, levelStr: 'TRACE' };
                break;
            case LogLevel.Trace:
                rawLevel = { level: 10000, levelStr: 'DEBUG' };
                break;
            case LogLevel.Information:
                rawLevel = { level: 20000, levelStr: 'INFO' };
                break;
            case LogLevel.Warning:
                rawLevel = { level: 30000, levelStr: 'WARN' };
                break;
            case LogLevel.Error:
                rawLevel = { level: 40000, levelStr: 'ERROR' };
                break;
            case LogLevel.Critical:
                rawLevel = { level: 50000, levelStr: 'FATAL' };
                break;
            default:
                rawLevel = { level: 10000, levelStr: 'DEBUG' };
                break;
        }
        return this.log4JsLogger.isLevelEnabled(rawLevel);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Angular CLI doesn't support import node module right now, have to use
 * declare
 * https://github.com/angular/angular-cli/issues/3482
 */
class File {
    /**
     * Check whether given file is exist.
     * @param {?} filename full file name with path
     * @return {?}
     */
    static Exists(filename) {
        /** @type {?} */
        let existed;
        try {
            existed = fs.existsSync(filename);
        }
        catch (error) {
            console.log(error);
            existed = false;
        }
        return existed;
    }
    /**
     * @param {?} filename
     * @param {?} content
     * @return {?}
     */
    static Create(filename, content) {
        try {
            fs.writeFileSync(filename, content);
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} filename
     * @return {?}
     */
    static Delete(filename) {
        try {
            fs.unlinkSync(filename);
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} filename
     * @param {?} encoding
     * @return {?}
     */
    static ReadAllText(filename, encoding) {
        /** @type {?} */
        let content;
        try {
            content = fs.readFileSync(filename, encoding);
        }
        catch (error) {
            console.log(error);
            content = undefined;
        }
        return content;
    }
    /**
     * @param {?} source
     * @param {?} target
     * @param {?} overwrite
     * @return {?}
     */
    static Copy(source, target, overwrite) {
        try {
            /** @type {?} */
            let goodToWrite = false;
            /** @type {?} */
            let sourceStream = fs.createReadStream(source);
            if (this.Exists(target)) {
                if (overwrite) {
                    fs.unlinkSync(target);
                    goodToWrite = true;
                }
            }
            else {
                goodToWrite = true;
            }
            if (goodToWrite) {
                sourceStream.pipe(fs.createWriteStream(target));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} filename
     * @return {?}
     */
    static FindFolder(filename) {
        /** @type {?} */
        let folder = undefined;
        if (filename && this.Exists(filename)) {
            folder = filename.substr(0, filename.lastIndexOf('/'));
            if (String.IsNullOrEmpty(folder)) {
                folder = filename.substr(0, filename.lastIndexOf('\\'));
            }
        }
        return folder;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Directory {
    /**
     * @return {?}
     */
    get App() {
        return electron.remote.app;
    }
    /**
     * @return {?}
     */
    GetUserDataFolder() {
        return this.App.getPath('userData');
    }
    /**
     * @return {?}
     */
    GetAppDataFolder() {
        return this.App.getPath('appData');
    }
    /**
     * @return {?}
     */
    GetMyDocumentFolder() {
        return this.App.getPath('documents');
    }
    /**
     * @return {?}
     */
    GetPictureFolder() {
        return this.App.getPath('pictures');
    }
    /**
     * Get current executable file
     * @return {?}
     */
    GetCurrentFolder() {
        return this.App.getPath('exe');
    }
    /**
     * Get temporary folder
     * @return {?}
     */
    GetTempFolder() {
        return this.App.getPath('temp');
    }
    /**
     * @return {?}
     */
    GetAppName() {
        return this.App.getName();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ShowItemInFolder(value) {
        electron.remote.shell.showItemInFolder(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    Exist(value) {
        try {
            fs.accessSync(value, fs.F_OK);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EnsureFolderExist(value) {
        if (!this.Exist(value)) {
            try {
                fs.mkdirSync(value);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    /**
     * @param {?} path1
     * @param {?} path2
     * @return {?}
     */
    Combine(path1, path2) {
        return path.join(path1, path2);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Log4JsLoggerProvider {
    /**
     * @param {?=} initializer
     * @param {?=} logFileName
     */
    constructor(initializer, logFileName = 'log.txt') {
        if (initializer) {
            initializer();
        }
        else {
            try {
                /** @type {?} */
                let directory = new Directory();
                /** @type {?} */
                let folder = directory.GetUserDataFolder();
                directory.EnsureFolderExist(folder);
                /** @type {?} */
                let file = directory.Combine(folder, logFileName);
                log4js.configure({
                    appenders: {
                        file: { type: 'file', filename: file, maxLogSize: 20480, backups: 2 },
                        console: { type: 'console', }
                    },
                    categories: {
                        default: { appenders: ['console', 'file'], level: 'debug' }
                    }
                });
            }
            catch (e) {
                console.log('Not Electron runtime, initialize Log4JS failed.');
            }
        }
    }
    /**
     * Create logger
     * @param {?} name logger name
     * @return {?}
     */
    CreateLogger(name) {
        /** @type {?} */
        let loggerName = name ? name : 'Default';
        /** @type {?} */
        let log4Logger = log4js.getLogger(loggerName);
        return new Log4JsLogger(loggerName, log4Logger);
    }
    /**
     * @return {?}
     */
    Dispose() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extension methods for LoggerFactory
 */
class LoggerFactoryExtensions {
    /**
     * Add Debugger to logger
     * @this {?}
     * @return {?}
     */
    static AddDebug() {
        /** @type {?} */
        let provider = new DebugLoggerProvider();
        this.AddProvider(provider);
        return this;
    }
    /**
     * @this {?}
     * @param {?=} initializer
     * @param {?=} logFileName
     * @return {?}
     */
    static AddLog4Js(initializer, logFileName = 'log.txt') {
        /** @type {?} */
        let provider = new Log4JsLoggerProvider(initializer, logFileName);
        this.AddProvider(provider);
        return this;
    }
}
/** hook defination to the implementation */
DefaultLoggerFactory.prototype.AddLogJs = LoggerFactoryExtensions.AddLog4Js;
DefaultLoggerFactory.prototype.AddDebug = LoggerFactoryExtensions.AddDebug;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LoggingExceptionHandler {
    /**
     * @param {?} loggerFactory
     */
    constructor(loggerFactory) {
        this.loggerFactory = loggerFactory;
        this.logger = loggerFactory.CreateLogger('ExceptionHandler');
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    Handle(exception) {
        this.logger.Error(exception);
    }
}
LoggingExceptionHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];
/** @nocollapse */
LoggingExceptionHandler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [LoggerFactoryToken,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HttpClient {
    /**
     * @param {?} http
     * @param {?} exceptionHandler
     * @param {?} loggerFactory
     */
    constructor(http, exceptionHandler, loggerFactory) {
        this.http = http;
        this.exceptionHandler = exceptionHandler;
        this.OutputDebugging = true;
        this.logger = loggerFactory.CreateLogger('HttpClient');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
    }
    /**
     * @return {?}
     */
    get ErrorHander() {
        return this.errorHandler;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ErrorHander(value) {
        this.errorHandler = value;
    }
    /**
     * Post data to given url
     * @param {?} url Post url
     * @param {?} data  post data
     * @return {?}
     */
    Post(url, data) {
        /** @type {?} */
        const self = this;
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            const body = JSON.stringify(data);
            if (self.OutputDebugging) {
                self.logger
                    .Debug(`Post data url: ${url}`)
                    .Debug(body);
            }
            self.http.post(url, body, { headers: self.headers })
                .toPromise()
                .then(response => {
                resolve(response.json());
            })
                .catch(error => {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    }
    /**
     * Post raw string to given url
     * @param {?} url url to post data
     * @param {?} data data in string format
     * @return {?}
     */
    PostRaw(url, data) {
        /** @type {?} */
        const self = this;
        return new Promise(function (resolve, reject) {
            if (self.OutputDebugging) {
                self.logger
                    .Debug(`Post data url: ${url}`)
                    .Debug(data);
            }
            self.http.post(url, data, { headers: self.headers })
                .toPromise()
                .then(response => {
                resolve(response.json());
            })
                .catch(error => {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    }
    /**
     * Delete reques
     * @param {?} url the url for delete
     * @return {?}
     */
    Delete(url) {
        /** @type {?} */
        const self = this;
        return new Promise((resolve, reject) => {
            self.http.delete(url)
                .toPromise()
                .then(response => {
                resolve(response.json());
            })
                .catch(error => {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    }
    /**
     * Get data from given url in async mode
     * @param {?} url the url to get data.
     * @param {?=} useRaw
     * @return {?}
     */
    Get(url, useRaw = false) {
        /** @type {?} */
        const self = this;
        return new Promise(function (resolve, reject) {
            if (self.OutputDebugging) {
                self.logger.Debug(`Get data url: ${url}`);
            }
            self.http.get(url, { headers: self.headers })
                .toPromise()
                .then(response => {
                if (useRaw) {
                    resolve(response);
                }
                else {
                    resolve(response.json());
                }
            })
                .catch(error => {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    }
    /**
     * Create a new header with given token
     * @param {?} token bearer token value
     * @return {?}
     */
    UseToken(token) {
        /** @type {?} */
        const headers = this.CreateDefaultHeader();
        if (token) {
            headers.append('Authorization', `bearer ${token}`);
        }
        this.headers = headers;
        return this;
    }
    /**
     * User given header or the default header with content type set to json
     * @param {?=} headers given header
     * @return {?}
     */
    UseHeader(headers = this.CreateDefaultHeader()) {
        if (!headers)
            throw new Error('Given http header is null.');
        this.headers = headers;
        return this;
    }
    /**
     * @return {?}
     */
    CreateDefaultHeader() {
        /** @type {?} */
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}
HttpClient.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];
/** @nocollapse */
HttpClient.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: LoggingExceptionHandler },
    { type: DefaultLoggerFactory }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ElectronUtil {
    constructor() {
        this.algorithm = 'aes-256-ctr';
        this.password = 'a3b8d9w34';
    }
    /**
     * @return {?}
     */
    get Electron() {
        return electron;
    }
    /**
     * @return {?}
     */
    get App() {
        return electron.remote.app;
    }
    /**
     * @return {?}
     */
    get MainMenu() {
        return electron.remote.Menu;
    }
    /**
     * @return {?}
     */
    get IpcClient() {
        return electron.ipcRenderer;
    }
    /**
     * @return {?}
     */
    get Remote() {
        return electron.remote;
    }
    /**
     * @return {?}
     */
    GetUserDataFolder() {
        return this.App.getPath('userData');
    }
    /**
     * @return {?}
     */
    GetAppDataFolder() {
        return this.App.getPath('appData');
    }
    /**
     * @return {?}
     */
    GetMyDocumentFolder() {
        return this.App.getPath('documents');
    }
    /**
     * @return {?}
     */
    GetPictureFolder() {
        return this.App.getPath('pictures');
    }
    /**
     * @return {?}
     */
    GetAppName() {
        return this.App.getName();
    }
    /**
     * @param {?=} filters
     * @return {?}
     */
    OpenFileDialog(filters = null) {
        /** @type {?} */
        let dialog = electron.remote.dialog;
        /** @type {?} */
        let fileName = dialog.showOpenDialog({
            properties: ['openFile'],
            filters: filters
        });
        return fileName.toString();
    }
    /**
     * @param {?=} filters
     * @return {?}
     */
    OpenFilesDialog(filters = null) {
        /** @type {?} */
        let dialog = electron.remote.dialog;
        /** @type {?} */
        let fileNames = dialog.showOpenDialog({
            properties: ['openFile', 'multiSelections'],
            filters: filters
        });
        return fileNames;
    }
    /**
     * @return {?}
     */
    TextFileFilter() {
        return [{ name: 'Text Documents', extensions: ['txt', 'cs', 'ts', 'js', 'scss', 'css', 'html', 'htm'] }];
    }
    /**
     * @return {?}
     */
    ImageFileFilter() {
        return [{ name: 'Images', extensions: ['jpg', 'png', 'gif', 'bmp'] }];
    }
    /**
     * @return {?}
     */
    OpenImageDialog() {
        return this.OpenFileDialog(this.ImageFileFilter());
    }
    /**
     * @return {?}
     */
    OpenImagesDialog() {
        return this.OpenFilesDialog(this.ImageFileFilter());
    }
    /**
     * @param {?} menu
     * @return {?}
     */
    SetApplicationMenu(menu) {
        electron.remote.Menu.setApplicationMenu(menu);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    OpenExternal(url) {
        electron.remote.shell.openExternal(url);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ShowItemInFolder(path) {
        electron.remote.shell.showItemInFolder(path);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileAsync(file) {
        /** @type {?} */
        let self = this;
        return new Promise(function (resolve, reject) {
            if (!self.Exist(file))
                reject(new Error(`File doesn't exist.`));
            fs.readFile(file, 'binary', (error, data) => {
                if (error)
                    reject(error);
                /** @type {?} */
                let content = EncodingHelper.decode(data, 'utf8');
                resolve(content);
            });
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileLineByLine(file) {
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            let lines = [];
            /** @type {?} */
            let stream = fs.createReadStream(file)
                .pipe(EventStream.split())
                .pipe(EventStream.mapSync(function (line) {
                stream.pause();
                lines.push(line);
                stream.resume();
            })
                .on('error', function () {
                reject('Read file error.');
            })
                .on('end', function () {
                resolve(lines.join(''));
            }));
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileAsBase64Async(file) {
        /** @type {?} */
        let self = this;
        /** @type {?} */
        let fullPath = this.NormalizePath(file.toString());
        console.log('Full path: ' + fullPath);
        return new Promise(function (resolve, reject) {
            if (!self.Exist(fullPath))
                reject(new Error(`File doesn't exist.' + fullPath`));
            console.log('File to open ' + fullPath);
            /** @type {?} */
            let data = fs.readFileSync(fullPath, 'base64');
            /** @type {?} */
            let buffer = new Buffer(data, 'base64');
            /** @type {?} */
            let base64Data = buffer.toString('base64');
            resolve(base64Data);
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileAsBase64(file) {
        /** @type {?} */
        let self = this;
        /** @type {?} */
        let fullPath = this.NormalizePath(file.toString());
        if (!self.Exist(fullPath))
            throw Error(`File doesn't exist.${fullPath}`);
        /** @type {?} */
        let data = fs.readFileSync(fullPath, 'base64');
        /** @type {?} */
        let buffer = new Buffer(data, 'base64');
        /** @type {?} */
        let base64Data = buffer.toString('base64');
        return base64Data;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileStream(file) {
        return fs.createReadStream(file);
    }
    /**
     * @param {?} file
     * @param {?} data
     * @return {?}
     */
    WriteFileAsync(file, data) {
        console.log('Write data to file.');
        return new Promise(function (resolve, reject) {
            fs.writeFile(file, data, (error) => {
                if (error)
                    reject(error);
                resolve(true);
            });
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetMimeType(file) {
        try {
            return Mime.lookup(file);
        }
        catch (error) {
            console.log('Get MIME error: ' + error);
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetFilename(file) {
        try {
            return Path.basename(file);
        }
        catch (error) {
            console.log('Get file name error: ' + error);
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetFilenameWithoutExtension(file) {
        /** @type {?} */
        let filename = this.GetFilename(file);
        return Path.parse(filename).name;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetFileSize(file) {
        /** @type {?} */
        let stats = fs.statSync(file);
        return stats['size'];
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetFileSizeString(file) {
        try {
            /** @type {?} */
            let size = this.GetFileSize(file);
            /** @type {?} */
            let sizeString = FileSize(size);
            return sizeString;
        }
        catch (error) {
            console.log('Get file name error: ' + error);
        }
    }
    /**
     * @param {?} size
     * @return {?}
     */
    ConverToFileSizeString(size) {
        return FileSize(size);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    Encrypt(value) {
        if (!value)
            return '';
        /** @type {?} */
        let cipher = Crypts.createCipher(this.algorithm, this.password);
        /** @type {?} */
        let crypted = cipher.update(value, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    Decrypt(value) {
        if (!value)
            return '';
        /** @type {?} */
        let decipher = Crypts.createDecipher(this.algorithm, this.password);
        /** @type {?} */
        let dec = decipher.update(value, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    Exist(path) {
        try {
            fs.accessSync(path, fs.F_OK);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * @param {?} path
     * @return {?}
     */
    EnsureFolderExist(path) {
        if (!this.Exist(path)) {
            try {
                fs.mkdirSync(path);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    /**
     * @param {?} base
     * @param {?} paths
     * @return {?}
     */
    CombinePath(base, paths) {
        /** @type {?} */
        let value;
        try {
            value = NjPath.join(base, paths);
        }
        catch (error) {
            console.log(error);
        }
        return value;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    NormalizePath(path) {
        return NjPath.normalize(path);
    }
    /**
     * @return {?}
     */
    CreateGuidString() {
        /** @type {?} */
        let guid = Guid.New();
        return guid.Value;
    }
    /**
     * @return {?}
     */
    CreateGuid() {
        return Guid.New();
    }
}
ElectronUtil.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AngularServiceProvider {
    /**
     *
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * Gets the service object of the specified type.
     * @param {?} type
     * @return {?}
     */
    GetService(type) {
        return this.injector.get(type);
    }
}
AngularServiceProvider.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];
/** @nocollapse */
AngularServiceProvider.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ServiceLocator {
    /**
     * @param {?} provider
     * @return {?}
     */
    static SetLocatorProvider(provider) {
        ServiceLocator.currentProvider = provider();
    }
    /**
     * @template T
     * @param {?} token
     * @return {?}
     */
    static GetService(token) {
        return ServiceLocator.currentProvider.get(token);
    }
}
ServiceLocator.currentProvider = undefined;
ServiceLocator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
String.prototype.ToLower = function () {
    return this.toLowerCase();
};
String.prototype.ToUpper = function () {
    return this.toUpperCase();
};
String.prototype.Trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};
String.prototype.Normalize = function () {
    return this.replace(/^\s*|\s(?=\s)|\s*$/g, '');
};
String.prototype.StartsWith = function (part) {
    return this.slice(0, part.length) === part;
};
String.prototype.EndsWith = function (part) {
    return this.slice(part.length) === part;
};
String.prototype.CapFirst = function () {
    if (this.length === 1) {
        return this.toUpperCase();
    }
    else if (this.length > 0) {
        /** @type {?} */
        let regex = /^(\(|\[|'|')/;
        if (regex.test(this)) {
            return this.substring(0, 2).toUpperCase() + this.substring(2);
        }
        else {
            return this.substring(0, 1).toUpperCase() + this.substring(1);
        }
    }
    return null;
};
String.prototype.CapWords = function () {
    /** @type {?} */
    let regexp = /\s/;
    /** @type {?} */
    let words = this.split(regexp);
    if (words.length === 1) {
        return words[0].capFirst();
    }
    else if (words.length > 1) {
        /** @type {?} */
        let result = '';
        for (let i = 0; i < words.length; i++) {
            if (words[i].capFirst() !== null) {
                result += words[i].capFirst() + ' ';
            }
        }
        result.trim();
        return result;
    }
    return null;
};
String.prototype.TruncateWords = function (num) {
    /** @type {?} */
    let words = this.split(/\s+/);
    if (words.length > num) {
        return words.slice(0, num).join(' ');
    }
    return words.join(' ');
};
String.prototype.StripHtml = function () {
    /** @type {?} */
    let content = this.replace(/<[\/]?([^> ]+)[^>]*>/g, '');
    content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/ig, '');
    content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/ig, '');
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    content = content.replace('&nbsp;', ' ');
    content = content.replace('&amp;', '&');
    return content;
};
String.prototype.EscapeHtml = function () {
    /** @type {?} */
    let content = this.replace(/'/g, '&quot;');
    content.replace(/&(?!\w+;)/g, '&amp;');
    content.replace(/>/g, '&gt;');
    content.replace(/</g, '&lt;');
    return content;
};
String.prototype.Contains = function (val) {
    if (this.indexOf(val) !== -1) {
        return true;
    }
    return false;
};
String.prototype.Slugify = function (lower = true) {
    if (!lower) {
        return this.lower().normalize().replace(/[^a-z0-9]/gi, '-');
    }
    return this.normalize().replace(/[^a-z0-9]/gi, '-');
};
String.prototype.HtmlToText = function () {
    /** @type {?} */
    const output = this.replace(/<[^>]*>?/g, '');
    return output;
};
String.prototype.CountWord = function () {
    /** @type {?} */
    let content = this;
    if (!content)
        return 0;
    /** @type {?} */
    let words = '';
    /** @type {?} */
    let symbols = '';
    content.replace(/([\w\s]*)([^\w;,.''{}\[\]+_)(*&\^%$#@!~\/?]*)/g, (a, b, c) => {
        words += b;
        symbols += c;
        return a;
    });
    /** @type {?} */
    let count = words.trim().split(' ').length;
    if (symbols)
        count += symbols.replace(' ', '').split('').length;
    return count;
};
String.prototype.ValidateEmail = function () {
    /** @type {?} */
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this);
};
String.prototype.IndexOf = function (value) {
    return this.indexOf(value);
};
String.prototype.LastIndexOf = function (value) {
    return this.lastIndexOf(value);
};
String.prototype.SubString = function (start, length) {
    return this.substring(start, length);
};
String.IsNullOrEmpty = function (value) {
    if (value === undefined || value === null) {
        return true;
    }
    /** @type {?} */
    let text = value.toString();
    if (text === '') {
        return true;
    }
    if (text && text.trim() === '') {
        return true;
    }
    return false;
};
String.IsValid = function (value) {
    return !String.IsNullOrEmpty(value);
};
String.Empty = function () {
    return '';
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
Array.prototype.Add = function (item) {
    this.push(item);
};
Array.prototype.Empty = function () {
    return this.splice(0, this.length);
};
Array.prototype.IsEmpty = function () {
    if (this.length === 0) {
        return true;
    }
    return false;
};
Array.prototype.ElementAt = function (index) {
    return this[index];
};
Array.prototype.FirstOrDefault = function (predicate) {
    /** @type {?} */
    let result = null;
    if (predicate) {
        for (let item of this) {
            if (predicate(item)) {
                result = item;
                break;
            }
        }
    }
    else {
        result = this[0];
    }
    return result;
};
Array.prototype.Max = function () {
    /** @type {?} */
    let max = this.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return max;
};
Array.prototype.Min = function () {
    /** @type {?} */
    let min = this.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return min;
};
Array.prototype.Count = function () {
    return this.length;
};
Array.prototype.Any = function (predicate) {
    if (predicate) {
        for (let item of this) {
            if (predicate(item))
                return true;
        }
        return false;
    }
    else {
        if (this.length === 0) {
            return false;
        }
        return true;
    }
};
Array.prototype.Where = function (predicate) {
    return this.filter(x => {
        return predicate(x);
    });
};
Array.prototype.Select = function (selector) {
    /** @type {?} */
    let result = [];
    for (let item of this) {
        result.push(selector(item));
    }
    return result;
};
Array.prototype.OrderBy = function (keySelector) {
    return this.sort(function (a, b) {
        return keySelector(a) > keySelector(b);
    });
};
Array.prototype.OrderByDescending = function (keySelector) {
    return this.sort(function (a, b) {
        return keySelector(b) - keySelector(a);
    });
};
Array.prototype.ForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(i, this[i]);
    }
};
Array.prototype.Remove = function (item) {
    /** @type {?} */
    let index = this.indexOf(item);
    if (index !== -1) {
        return this.splice(index, 1);
    }
    return null;
};
Array.prototype.Contains = function (partial, strict) {
    for (let i = 0; i < this.length; i++) {
        if (!strict && this[i].contains(partial)) {
            return true;
        }
        if (strict && this[i] === partial) {
            return true;
        }
    }
    return false;
};
Array.prototype.IndexOfPartial = function (partial) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].contains(partial)) {
            return i;
        }
    }
    return -1;
};
/*
 * There are frameworks that auto-generate JSON based on data schemas, but sometimes they
 * return data in inconsistent ways. For example, an array of strings might be returned
 * instead of an array of objects containing strings, etc. because the underlying data at the time
 * only cotains the string value, but when other data is present (in the database, etc.),
 * it will return the object array. Certain convenience methods are necessary to force proper formatting.
 */
Array.prototype.ToObjectArray = function (objName) {
    if (objName === undefined || objName === null) {
        throw new Error('Error: Property name must be provided for conversion.');
    }
    /** @type {?} */
    let items = this;
    if (typeof (items[0]) === 'string' || typeof (items[0]) === 'number' || typeof (items[0]) === 'boolean') {
        for (let i = 0; i < items.length; i++) {
            /** @type {?} */
            let val = items[i];
            items[i] = {};
            items[i][objName] = val;
        }
        return items;
    }
    else {
        return this;
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
Document.prototype.SelectOne = function (selector) {
    return document.querySelector(selector);
};
Document.prototype.SelectAll = function (selector) {
    return document.querySelectorAll(selector);
};
Document.prototype.Create = function (html) {
    /** @type {?} */
    let placeholder = document.createElement('div');
    placeholder.innerHTML = html;
    return /** @type {?} */ (placeholder.childNodes[0]);
};
NodeList.prototype.ForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(i, this[i]);
    }
};
NodeList.prototype.Last = function () {
    return this[this.length - 1];
};
Element.prototype.SelectOne = function (selector) {
    return this.querySelector(selector);
};
Element.prototype.SelectAll = function (selector) {
    return this.querySelectorAll(selector);
};
Element.prototype.Attribute = function (name, value) {
    if (value != null) {
        this.setAttribute(name, value);
        return this;
    }
    return this.getAttribute(name);
};
Element.prototype.Parent = function () {
    return this.parentNode;
};
Element.prototype.HasMatches = function (selector) {
    if ((/** @type {?} */ (this)).matches != null) {
        return (/** @type {?} */ (this)).matches(selector);
    }
    else if ((/** @type {?} */ (this)).msMatchesSelector != null) {
        return (/** @type {?} */ (this)).msMatchesSelector(selector);
    }
    return false;
};
Element.prototype.Up = function (selector) {
    /** @type {?} */
    let el = this;
    if ((/** @type {?} */ (el)).closest != null) {
        return (/** @type {?} */ (el)).closest(selector);
    }
    else {
        while (el) {
            if (el.HasMatches(selector)) {
                return /** @type {?} */ (el);
            }
            el = el.parentElement;
        }
    }
};
Element.prototype.First = function (selector) {
    /**
     * @param {?} node
     * @return {?}
     */
    function _decend(node) {
        /** @type {?} */
        let _currentNode = node;
        /** @type {?} */
        let nodeList = _currentNode.childNodes;
        for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i].nodeName.ToLower() === selector.ToLower()) {
                return /** @type {?} */ (nodeList[i]);
            }
        }
        _decend(_currentNode);
    }
    return _decend(this);
};
Element.prototype.Append = function (html) {
    this.insertAdjacentHTML('beforeend', html);
    return this;
};
Element.prototype.Empty = function () {
    this.innerHTML = '';
    return this;
};
Element.prototype.Drop = function () {
    /** @type {?} */
    let self = this;
    /** @type {?} */
    let parent = self.parentNode;
    parent.removeChild(self);
    return self;
};
Element.prototype.RemoveEvent = function (event) {
    /** @type {?} */
    let evt = this[`on${event}`] || this[`${event}`];
    try {
        this.removeEventListener(event, evt);
    }
    catch (e) { }
    try {
        this.detachEvent(`on${event}`, evt);
    }
    catch (e) { }
    this[`on${event}`] = null;
    this[`${event}`] = null;
    return this;
};
Element.prototype.AddEvent = function (event, callback, overwrite = false) {
    if (overwrite) {
        this[`on${event}`] = callback;
    }
    else {
        this.addEventListener(event, callback);
    }
    return this;
};
Element.prototype.Show = function (t = 'block') {
    /** @type {?} */
    let styles = this.attribute('style');
    if (styles != null && styles !== '') {
        return this.attribute('style', styles.setValueByKey('display', t));
    }
    return this.attribute('style', `display:${t}`);
};
Element.prototype.Hide = function () {
    /** @type {?} */
    let styles = this.attribute('style');
    if (styles != null && styles !== '') {
        return this.attribute('style', styles.setValueByKey('display', 'none'));
    }
    return this.attribute('style', `display:none;`);
};
Element.prototype.Toggle = function () {
    if (!(this.offsetWidth || this.offsetHeight || this.getClientRects().length)) {
        return this.show();
    }
    else {
        return this.hide();
    }
};
Element.prototype.AddClass = function (className) {
    this.className += ` ${className}`;
    this.className = this.className.trim();
    return this;
};
Element.prototype.RemoveClass = function (className) {
    this.className = (/** @type {?} */ (this.className)).replace(className, '').normalize();
    return this;
};
Element.prototype.AsString = function () {
    return this.outerHTML;
};
Element.prototype.IsHidden = function () {
    return (this.offsetParent === null);
};
HTMLElement.prototype.Clean = function () {
    this.value = this.value.replace(/\r?\n/g, '\r\n');
    return this;
};
HTMLElement.prototype.Value = function (val) {
    if (val != null) {
        if (this.nodeName.lower() === 'textarea') {
            this.innerHTML = val;
            try {
                this.innerText = val;
            }
            catch (e) { }
            try {
                this.value = val;
            }
            catch (e) { }
        }
        else if (this.nodeName.lower() === 'input') {
            switch (this.attribute('type').lower()) {
                case 'file':
                    break;
                case 'checkbox':
                    if (/** @type {?} */ (/** @type {?} */ (val))) {
                        this.checked = true;
                    }
                    else {
                        this.checked = false;
                    }
                    break;
                case 'radio':
                    /** @type {?} */
                    let name = this.attribute('name');
                    /** @type {?} */
                    let radios = document.SelectAll(`input[type='radio'][name='${name}']`);
                    radios.ForEach(function (idx, elem) {
                        if (elem.Attribute('value') === val) {
                            (/** @type {?} */ (elem)).checked = true;
                        }
                        else {
                            (/** @type {?} */ (elem)).checked = false;
                        }
                    });
                    break;
                default:
                    this.value = val;
                    break;
            }
        }
        else if (this.nodeName.lower() === 'select') {
            for (let i = 0; i < this.options.length; i++) {
                if (this.options[i].value === val) {
                    this.selectedIndex = i;
                    break;
                }
            }
        }
    }
    else {
        if (this.nodeName.lower() === 'textarea') {
            try {
                return this.value;
            }
            catch (e) { }
            if (this.innerText != null && (/** @type {?} */ (this.innerText)).trim() !== '') {
                return this.innerText;
            }
            else if (this.innerHTML != null && (/** @type {?} */ (this.innerHTML)).trim() !== '') {
                return this.innerHTML;
            }
            return null;
        }
        else if (this.nodeName.lower() === 'input') {
            switch (this.attribute('type').lower()) {
                case 'checkbox':
                    return this.checked;
                case 'radio':
                    /** @type {?} */
                    let name = this.attribute('name');
                    return (/** @type {?} */ (document.SelectOne(`input[type='radio'][name='${name}']:checked`))).value;
                default:
                    return this.value;
            }
        }
        else if (this.nodeName.lower() === 'select') {
            return this.options[this.selectedIndex].value;
        }
    }
    return val;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function IsDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
function IsObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function MergeDeep(target, source) {
    target = JSON.parse(JSON.stringify(target));
    source = JSON.parse(JSON.stringify(source));
    /** @type {?} */
    let output = Object.assign({}, target);
    if (IsObject(target) && IsObject(source)) {
        Object.keys(source).forEach((key) => {
            if (IsObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                }
                else {
                    output[key] = MergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}
/**
 * Clone given object
 * @param {?} source
 * @return {?}
 */
function Clone(source) {
    if (!source) {
        return source;
    }
    return JSON.parse(JSON.stringify(source));
}
/**
 *
 * @param {?} source
 * @param {?} target
 * @return {?}
 */
function CompareProperties(source, target) {
    if (source === undefined && target === undefined) {
        return true;
    }
    if (Object.prototype.toString.call(source) === '[object Array]') {
        /** @type {?} */
        let arrayX = /** @type {?} */ (source);
        /** @type {?} */
        let arrayY = /** @type {?} */ (target);
        if (arrayX.length !== arrayY.length) {
            return false;
        }
        for (let index = 0; index < arrayX.length; index++) {
            console.log(arrayX[index]);
            console.log(arrayY[index]);
            if (CompareProperties(arrayX[index], arrayY[index] === false)) {
                return false;
            }
        }
    }
    else {
        /** @type {?} */
        let names = Object.getOwnPropertyNames(source);
        // console.log(names);
        for (let name of names) {
            /** @type {?} */
            let property = Object.getOwnPropertyDescriptor(target, name);
            if (!property) {
                return false;
            }
            else {
                if (Object.prototype.toString.call(source) === '[object Array]') {
                    if (CompareProperties(property.value, source[name] === false)) {
                        return false;
                    }
                }
                else if (property.value !== source[name] && property.value.toString() !== source[name].toString()) {
                    // console.log(`Property ${name} ${typeof property.value}: '${property.value}', '${source[name]}'`);
                    return false;
                }
            }
        }
    }
    return true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Delay give ms
 * \@param elapse length of time
  @type {?} */
const Delay = function (elapse) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, elapse);
    });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ActionRepository {
    constructor() {
        this.Actions = new List();
    }
    /**
     * @param {?} action
     * @return {?}
     */
    Register(action) {
        if (action) {
            this.Actions.Add(action);
        }
        return this;
    }
    /**
     * @param {?} expression
     * @return {?}
     */
    Find(expression) {
        return this.Actions.FindAll(expression);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    FindOne(name) {
        return this.Actions.FirstOrDefault(x => x.Name === name);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Action {
    /**
     * @param {?} delegate
     */
    constructor(delegate) {
        this.delegate = delegate;
    }
    /**
     * @param {?=} args
     * @return {?}
     */
    Invoke(args) {
        if (this.delegate)
            this.delegate(args);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MessageMediator {
    constructor() {
        this.mediators = new Dictionary();
    }
    /**
     * @return {?}
     */
    get Mediators() {
        return this.mediators;
    }
    /**
     * Register an event
     * @param {?} topic
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    RegisterHandler(topic, id, action) {
        /** @type {?} */
        let values = this.mediators.Item(topic);
        if (values == null) {
            values = new Dictionary();
            this.mediators.Add(topic, values);
        }
        values.Add(id, action);
        return this;
    }
    /**
     * Unregister an event
     * @param {?} topic
     * @param {?} id
     * @return {?}
     */
    UnregisterHandler(topic, id) {
        /** @type {?} */
        let values = this.mediators.Item(topic);
        if (values != null) {
            values.Remove(id);
            if (values.Count === 0) {
                this.mediators.Remove(topic);
            }
        }
        return this;
    }
    /**
     * @template T
     * @param {?} topic
     * @param {?=} message
     * @return {?}
     */
    SendMessage(topic, message) {
        /** @type {?} */
        let result = true;
        /** @type {?} */
        let values = this.mediators.Item(topic);
        if (values != null) {
            for (let item of values.Values()) {
                try {
                    item.Invoke(message);
                }
                catch (error) {
                    result = false;
                }
            }
        }
        return result;
    }
}
MessageMediator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ComponentCreatorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('./ICommponentCreator');
class ComponentCreator {
    /**
     * @return {?}
     */
    get ViewContainer() {
        return this.mViewContainer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ViewContainer(value) {
        this.mViewContainer = value;
    }
    /**
     * @return {?}
     */
    get ComponentFactoryResolver() {
        return this.mComponentFactoryResolver;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ComponentFactoryResolver(value) {
        this.mComponentFactoryResolver = value;
    }
    /**
     * Initialize
     * @param {?} viewContainer
     * @param {?} resolver
     * @return {?}
     */
    Initialize(viewContainer, resolver) {
        this.mViewContainer = viewContainer;
        this.mComponentFactoryResolver = resolver;
    }
    /**
     * @param {?} componentType
     * @param {?=} viewContainer
     * @return {?}
     */
    CreateComponent(componentType, viewContainer) {
        try {
            /** @type {?} */
            let factory = this.ComponentFactoryResolver.resolveComponentFactory(componentType);
            /** @type {?} */
            let component = viewContainer ?
                viewContainer.createComponent(factory) :
                this.ViewContainer.createComponent(factory);
            return component;
        }
        catch (error) {
            return null;
        }
    }
}
ComponentCreator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [];
/** @type {?} */
const directives = [
    InvokeCommandDirective
];
/** @type {?} */
const providers = [
    DefaultLoggerFactory,
    HttpClient,
    LoggingExceptionHandler,
    CommandRepository,
    CommandDescriptorRepository,
    ElectronUtil,
    AngularServiceProvider,
    ServiceLocator,
    MessageMediator,
    ComponentCreator,
    OptionRepository,
    { provide: ActionRepositoryToken, useClass: ActionRepository },
    { provide: CommandRepositoryToken, useClass: CommandRepository },
    { provide: CommandDescriptorRepositoryToken, useClass: CommandDescriptorRepository },
    { provide: ExceptionHandlerToken, useClass: LoggingExceptionHandler },
    { provide: LoggerFactoryToken, useClass: DefaultLoggerFactory },
    { provide: MessageMediatorToken, useClass: MessageMediator },
    { provide: ComponentCreatorToken, useClass: ComponentCreator },
    { provide: OptionRepositoryToken, useClass: OptionRepository },
    { provide: WindowSizeWatcherToken, useClass: WindowSizeWatcher }
];
/** @type {?} */
const exportItems = [];
class SystemModule {
}
SystemModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                declarations: [directives, components],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"]],
                providers: providers,
                exports: [directives, exportItems]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=system-common.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const Common = __webpack_require__(/*! system-common */ "./dist/system-common/fesm2015/system-common.js");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'system-common-app';
    }
    ngOnInit() {
        let list = new Common.List();
        list.AddRange(['Frank', 'Mario']);
        let results = list.Where(x => true);
        for (let result of results) {
            console.log(result);
        }
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\src\ng-ionic-demo\system-common-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map