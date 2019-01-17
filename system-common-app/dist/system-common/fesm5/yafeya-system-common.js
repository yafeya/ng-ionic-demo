import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { __values, __extends } from 'tslib';
import { InjectionToken, Injectable, Directive, Input, HostListener, Inject, Injector, NgModule } from '@angular/core';
import { Http, Headers, HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var XObject = /** @class */ (function () {
    /**
     *
     */
    function XObject(name, value) {
        this.Name = name;
        this.Value = value;
    }
    Object.defineProperty(XObject.prototype, "Document", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mDocument;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mDocument = value;
        },
        enumerable: true,
        configurable: true
    });
    return XObject;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var XElement = /** @class */ (function (_super) {
    __extends(XElement, _super);
    function XElement(name, value) {
        if (value === void 0) { value = null; }
        var _this = _super.call(this, name, value) || this;
        _this.Elements = [];
        _this.Attributes = [];
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    XElement.prototype.AppendChild = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element)
            throw new Error('element is null.');
        this.Elements.push(element);
        element.Document = this.Document;
        element.Parent = this;
        return this;
    };
    /**
     * @param {?} attribute
     * @return {?}
     */
    XElement.prototype.AppendAttribute = /**
     * @param {?} attribute
     * @return {?}
     */
    function (attribute) {
        if (!attribute)
            throw new Error('attribute is null.');
        this.Attributes.push(attribute);
        attribute.Document = this.Document;
    };
    /**
     * @param {?} doc
     * @return {?}
     */
    XElement.prototype.ToXmlElement = /**
     * @param {?} doc
     * @return {?}
     */
    function (doc) {
        /** @type {?} */
        var element = doc.createElement(this.Name);
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
    };
    /**
     * @param {?} builder
     * @return {?}
     */
    XElement.prototype.ToXmlString = /**
     * @param {?} builder
     * @return {?}
     */
    function (builder) {
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
    };
    return XElement;
}(XObject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Guid = /** @class */ (function () {
    function Guid(value) {
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
    Object.defineProperty(Guid.prototype, "Value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Guid.prototype.IsEmpty = /**
     * @return {?}
     */
    function () {
        return this.value === Guid.Empty;
    };
    /**
     * @return {?}
     */
    Guid.prototype.ToString = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @return {?}
     */
    Guid.prototype.ToJson = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @param {?} count
     * @return {?}
     */
    Guid.Generate = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        /** @type {?} */
        var out = '';
        for (var i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    };
    /**
     * @return {?}
     */
    Guid.New = /**
     * @return {?}
     */
    function () {
        return new Guid([Guid.Generate(2), Guid.Generate(1), Guid.Generate(1), Guid.Generate(1), Guid.Generate(3)].join('-'));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Guid.IsGuid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value && (value instanceof Guid || Guid.Validator.test(value.toString()));
    };
    Guid.Empty = '00000000-0000-0000-0000-000000000000';
    Guid.Validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
    return Guid;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StringBuilder = /** @class */ (function () {
    function StringBuilder() {
        this.content = [];
        this.latest = null;
    }
    Object.defineProperty(StringBuilder.prototype, "IsEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.content.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    StringBuilder.prototype.Append = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.AppendSingle(item);
        return this;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StringBuilder.prototype.AppendLine = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.AppendSingle(item);
        this.content.push('\r\n');
        return this;
    };
    /**
     * @param {?} items
     * @return {?}
     */
    StringBuilder.prototype.AppendLines = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        items.forEach(function (x) {
            if (x != null) {
                _this.AppendLine(x);
            }
        });
        return this;
    };
    /**
     * @return {?}
     */
    StringBuilder.prototype.Build = /**
     * @return {?}
     */
    function () {
        if (this.latest != null)
            return this.latest;
        this.latest = this.Join('');
        return this.latest;
    };
    /**
     * @param {?} delimiter
     * @return {?}
     */
    StringBuilder.prototype.Join = /**
     * @param {?} delimiter
     * @return {?}
     */
    function (delimiter) {
        return this.content.join(delimiter);
    };
    /**
     * @return {?}
     */
    StringBuilder.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.Build();
    };
    /**
     * @return {?}
     */
    StringBuilder.prototype.Dispose = /**
     * @return {?}
     */
    function () {
        this.latest = null;
        this.content = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StringBuilder.prototype.AppendSingle = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item != null) {
            this.latest = null;
            if (typeof item !== 'string') {
                this.content.push(item.toString());
            }
            else {
                this.content.push(item);
            }
        }
    };
    return StringBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var XmlConverter = /** @class */ (function () {
    function XmlConverter() {
    }
    /** Convert Xml to Json */
    /**
     * Convert Xml to Json
     * @param {?} xml
     * @return {?}
     */
    XmlConverter.prototype.ToJson = /**
     * Convert Xml to Json
     * @param {?} xml
     * @return {?}
     */
    function (xml) {
        /** @type {?} */
        var parser = Xml2Js.Parser();
        return parser.toJson(xml);
    };
    return XmlConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Clipboard = /** @class */ (function () {
    function Clipboard() {
    }
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    Clipboard.prototype.ContainsImage = /**
     *
     * @return {?}
     */
    function () {
        /** @type {?} */
        var formats = clipboard.availableFormats();
        return formats.some(function (x) { return x === 'image/png' || x === 'image/jpeg' || x === 'image/jpg' || x === 'image/gif'; });
    };
    /** Get image data from clipboard */
    /**
     * Get image data from clipboard
     * @return {?}
     */
    Clipboard.prototype.GetImage = /**
     * Get image data from clipboard
     * @return {?}
     */
    function () {
        /** @type {?} */
        var formats = clipboard.availableFormats();
        /** @type {?} */
        var native = clipboard.readImage();
        return native;
    };
    /**
     * @return {?}
     */
    Clipboard.prototype.GetAvailableFormats = /**
     * @return {?}
     */
    function () {
        return clipboard.availableFormats();
    };
    /**
     * Get image data URL
     */
    /**
     * Get image data URL
     * @return {?}
     */
    Clipboard.prototype.GetImageUrl = /**
     * Get image data URL
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = '';
        /** @type {?} */
        var image = this.GetImage();
        if (image) {
            url = image.toDataURL();
        }
        return url;
    };
    /** Get PNG format image encoded with base64 */
    /**
     * Get PNG format image encoded with base64
     * @return {?}
     */
    Clipboard.prototype.GetPngImage = /**
     * Get PNG format image encoded with base64
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data;
        /** @type {?} */
        var image = this.GetImage();
        if (image) {
            data = image.toPNG();
        }
        return data;
    };
    /** Get PNG format image encoded with base64 */
    /**
     * Get PNG format image encoded with base64
     * @return {?}
     */
    Clipboard.prototype.GetPngBase64Image = /**
     * Get PNG format image encoded with base64
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = '';
        /** @type {?} */
        var image = this.GetImage();
        if (image) {
            /** @type {?} */
            var buffer = image.toPNG();
            data = buffer.toString('base64');
        }
        return data;
    };
    /**
     * @return {?}
     */
    Clipboard.prototype.Clear = /**
     * @return {?}
     */
    function () {
        clipboard.clear();
    };
    /**  Clears the Clipboard and then adds text data in the Text or UnicodeText format, depending on the operating system.*/
    /**
     * Clears the Clipboard and then adds text data in the Text or UnicodeText format, depending on the operating system.
     * @param {?} text
     * @return {?}
     */
    Clipboard.prototype.SetText = /**
     * Clears the Clipboard and then adds text data in the Text or UnicodeText format, depending on the operating system.
     * @param {?} text
     * @return {?}
     */
    function (text) {
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
                var temp = document.createElement('textarea');
                document.body.appendChild(temp);
                temp.textContent = text;
                /** @type {?} */
                var currentFocus = document.activeElement;
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
    };
    /**
     * Get text conent from clipboard
     */
    /**
     * Get text conent from clipboard
     * @return {?}
     */
    Clipboard.prototype.GetText = /**
     * Get text conent from clipboard
     * @return {?}
     */
    function () {
        return clipboard.readText();
    };
    /**
     * Get HTML fromat text content from clipboard
     */
    /**
     * Get HTML fromat text content from clipboard
     * @return {?}
     */
    Clipboard.prototype.GetHtml = /**
     * Get HTML fromat text content from clipboard
     * @return {?}
     */
    function () {
        return clipboard.readHTML();
    };
    /**
     * Set HTML format content to clipboard
     * @param value HTML format content
     */
    /**
     * Set HTML format content to clipboard
     * @param {?} value HTML format content
     * @return {?}
     */
    Clipboard.prototype.SetHtml = /**
     * Set HTML format content to clipboard
     * @param {?} value HTML format content
     * @return {?}
     */
    function (value) {
        return clipboard.writerHTML(value);
    };
    /**
     * Get RTF format text from clipboard
     */
    /**
     * Get RTF format text from clipboard
     * @return {?}
     */
    Clipboard.prototype.GetRTF = /**
     * Get RTF format text from clipboard
     * @return {?}
     */
    function () {
        return clipboard.readRTF();
    };
    /**
     * Set RTF format content to clipboard
     * @param value RTF format content
     */
    /**
     * Set RTF format content to clipboard
     * @param {?} value RTF format content
     * @return {?}
     */
    Clipboard.prototype.SetRTF = /**
     * Set RTF format content to clipboard
     * @param {?} value RTF format content
     * @return {?}
     */
    function (value) {
        clipboard.writerRTF(value);
    };
    return Clipboard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JsonToken = /** @class */ (function () {
    function JsonToken() {
    }
    /**
     * @param {?} token
     * @return {?}
     */
    JsonToken.prototype.Decode = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        /** @type {?} */
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        /** @type {?} */
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    /**
     * @param {?} str
     * @return {?}
     */
    JsonToken.prototype.urlBase64Decode = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
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
    };
    return JsonToken;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
EnumerableIterator = /** @class */ (function () {
    function EnumerableIterator(enumerable) {
        this.enumerable = enumerable;
        this.pointer = 0;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    EnumerableIterator.prototype.next = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
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
    };
    return EnumerableIterator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
Enumerable = /** @class */ (function () {
    function Enumerable() {
        this.items = [];
    }
    Object.defineProperty(Enumerable.prototype, "Count", {
        /** Get counts of collection */
        get: /**
         * Get counts of collection
         * @return {?}
         */
        function () {
            return this.Items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Enumerable.prototype, "Items", {
        /** Get all items */
        get: /**
         * Get all items
         * @return {?}
         */
        function () {
            return this.items;
        },
        /** Set items value */
        set: /**
         * Set items value
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.items = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Enumerable.prototype[Symbol.iterator] = /**
     * @return {?}
     */
    function () {
        return new EnumerableIterator(this);
    };
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    Enumerable.From = /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var list = new Enumerable();
        if (array) {
            list.Items = array;
        }
        return list;
    };
    return Enumerable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Collection.prototype, "IsReadOnly", {
        /** Get whether collection is readonly */
        get: /**
         * Get whether collection is readonly
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /** Add item to collection */
    /**
     * Add item to collection
     * @param {?} item
     * @return {?}
     */
    Collection.prototype.Add = /**
     * Add item to collection
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        this.Items.push(item);
    };
    /** Add items to collection */
    /**
     * Add items to collection
     * @param {?} items
     * @return {?}
     */
    Collection.prototype.AddRange = /**
     * Add items to collection
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var e_1, _a;
        if (!items)
            throw new Error("Argument 'items' is null.");
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                this.Add(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Clear collection */
    /**
     * Clear collection
     * @return {?}
     */
    Collection.prototype.Clear = /**
     * Clear collection
     * @return {?}
     */
    function () {
        this.Items = [];
    };
    /** Determines whether collection contains a specific item */
    /**
     * Determines whether collection contains a specific item
     * @param {?} item
     * @return {?}
     */
    Collection.prototype.Contains = /**
     * Determines whether collection contains a specific item
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        return this.Items.indexOf(item) > -1;
    };
    /** Remove item from collection */
    /**
     * Remove item from collection
     * @param {?} item
     * @return {?}
     */
    Collection.prototype.Remove = /**
     * Remove item from collection
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        /** @type {?} */
        var index = this.Items.indexOf(item);
        if (index > -1) {
            this.Items.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    };
    /** Copy elements to an array starting at a particular index
     * @array
     * @arrayIndex The zero-based index in array at which copying begins.
     */
    /**
     * Copy elements to an array starting at a particular index
     * \@array
     * \@arrayIndex The zero-based index in array at which copying begins.
     * @param {?} array
     * @param {?} arrayIndex
     * @return {?}
     */
    Collection.prototype.CopyTo = /**
     * Copy elements to an array starting at a particular index
     * \@array
     * \@arrayIndex The zero-based index in array at which copying begins.
     * @param {?} array
     * @param {?} arrayIndex
     * @return {?}
     */
    function (array, arrayIndex) {
        var e_2, _a;
        if (!array)
            throw new Error("Argument 'array' is null.");
        if (arrayIndex < 0 || arrayIndex > array.length)
            throw new Error("Argument 'arrayIndex' is out of range.");
        /** @type {?} */
        var index = arrayIndex;
        try {
            for (var _b = __values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                array.splice(index++, 0, item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return Collection;
}(Enumerable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Get index of given item */
    /**
     * Get index of given item
     * @param {?} item
     * @return {?}
     */
    List.prototype.IndexOf = /**
     * Get index of given item
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        return this.Items.indexOf(item);
    };
    /** Insert item to given index */
    /**
     * Insert item to given index
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    List.prototype.Insert = /**
     * Insert item to given index
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        if (index < 0 || index >= this.Items.length)
            throw new Error("Argument 'index' is out of index");
        this.Items.splice(index, 0, item);
    };
    /** Remove item at given index */
    /**
     * Remove item at given index
     * @param {?} index
     * @return {?}
     */
    List.prototype.RemoveAt = /**
     * Remove item at given index
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index < 0 || index >= this.Items.length)
            throw new Error("Argument 'index' is out of index");
        this.Items.splice(index, 1);
    };
    return List;
}(Collection));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template TKey, TElement
 */
var  /**
 * @template TKey, TElement
 */
Grouping = /** @class */ (function (_super) {
    __extends(Grouping, _super);
    function Grouping(key, elements) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.Items = elements.Items;
        return _this;
    }
    Object.defineProperty(Grouping.prototype, "Key", {
        get: /**
         * @return {?}
         */
        function () {
            return this.key;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.key = value;
        },
        enumerable: true,
        configurable: true
    });
    return Grouping;
}(Enumerable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
NamedDictionary = /** @class */ (function () {
    function NamedDictionary() {
        this.items = {};
        this.count = 0;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    NamedDictionary.prototype.ContainsKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.items.hasOwnProperty(key);
    };
    /**
     * @return {?}
     */
    NamedDictionary.prototype.Count = /**
     * @return {?}
     */
    function () {
        return this.count;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NamedDictionary.prototype.Add = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.items[key] = value;
        this.count++;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    NamedDictionary.prototype.Remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = this.items[key];
        delete this.items[key];
        this.count--;
        return value;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    NamedDictionary.prototype.Item = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.items[key];
    };
    /**
     * @return {?}
     */
    NamedDictionary.prototype.Keys = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    /**
     * @return {?}
     */
    NamedDictionary.prototype.Values = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return NamedDictionary;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template TKey, TValue
 */
var /**
 * @template TKey, TValue
 */
KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    Object.defineProperty(KeyValuePair.prototype, "Key", {
        get: /**
         * @return {?}
         */
        function () {
            return this.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyValuePair.prototype, "Value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    return KeyValuePair;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template TKey, TValue
 */
var  /**
 * @template TKey, TValue
 */
Dictionary = /** @class */ (function (_super) {
    __extends(Dictionary, _super);
    function Dictionary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map = new Map();
        return _this;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Dictionary.prototype.Add = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.map.set(key, value);
        this.Items.Add(new KeyValuePair(key, value));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Dictionary.prototype.ContainsKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.map.has(key);
    };
    // Count(): number {
    //     return this.items.size;
    // }
    /**
     * @param {?} key
     * @return {?}
     */
    Dictionary.prototype.Item = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.map.get(key);
    };
    /**
     * @return {?}
     */
    Dictionary.prototype.Keys = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = [];
        this.map.forEach(function (value, key) {
            keys.push(key);
        });
        return keys;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Dictionary.prototype.Remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var item = this.Items.FirstOrDefault(function (x) { return x.Key === key; });
        if (item)
            this.Items.Remove(item);
        return this.map.delete(key);
    };
    /**
     * @return {?}
     */
    Dictionary.prototype.Values = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var values = [];
        this.map.forEach(function (value, key) {
            values.push(value);
        });
        return values;
    };
    return Dictionary;
}(Enumerable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ObservableCollection = /** @class */ (function (_super) {
    __extends(ObservableCollection, _super);
    function ObservableCollection(array, scheduler) {
        var _this = _super.call(this) || this;
        _this.array = array;
        _this.scheduler = scheduler;
        // console.log(array);
        if (!scheduler && array.length === 1) {
            _this._isScalar = true;
            _this.values = /** @type {?} */ (array[0]);
        }
        else {
            _this._isScalar = true;
            _this.values = array;
        }
        return _this;
    }
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    ObservableCollection.Create = /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return new ObservableCollection(/** @type {?} */ ([array]));
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ObservableCollection.dispatch = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
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
    };
    Object.defineProperty(ObservableCollection.prototype, "Count", {
        get: /**
         * @return {?}
         */
        function () {
            return this.values.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableCollection.prototype, "Values", {
        get: /**
         * @return {?}
         */
        function () {
            return this.values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableCollection.prototype, "Items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.values;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.values = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    ObservableCollection.prototype.Add = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.values) {
            this.values.push(item);
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    ObservableCollection.prototype.AddRange = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var e_1, _a;
        if (items) {
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    this.Add(item);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ObservableCollection.prototype.Remove = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var index = this.values.indexOf(item);
        if (index > -1) {
            this.values.splice(index, 1);
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    ObservableCollection.prototype[Symbol.iterator] = /**
     * @return {?}
     */
    function () {
        return new EnumerableIterator(this);
    };
    /**
     * @param {?} subscriber
     * @return {?}
     */
    ObservableCollection.prototype._subscribe = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        /** @type {?} */
        var index = 0;
        /** @type {?} */
        var array = this.array;
        /** @type {?} */
        var count = array.length;
        /** @type {?} */
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ObservableCollection.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            //console.log(this.values);
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[0]);
            }
            subscriber.complete();
        }
    };
    return ObservableCollection;
}(Observable));

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
    var e_1, _a;
    if (!action) {
        throw new Error("Argument 'item' is null.");
    }
    try {
        for (var _b = __values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            action(item);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
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
        throw new Error("Argument 'comparer' is null.");
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
    var e_2, _a;
    if (!predicate)
        throw new Error("Argument 'predicate' is null.");
    /** @type {?} */
    var result = new List();
    try {
        for (var _b = __values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            if (predicate(item))
                result.Add(item);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
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
    var result;
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
    var e_3, _a;
    if (predicate) {
        try {
            for (var _b = __values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (predicate(item))
                    return true;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
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
    var max = this.Select(selector).Items.reduce(function (a, b) {
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
    var min = this.Select(selector).Items.reduce(function (a, b) {
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
    var values = this.Items.sort(function (a, b) {
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
    var values = this.Items.sort(function (a, b) {
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
    var values = this.Items.filter(function (x) {
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
    var e_4, _a;
    /** @type {?} */
    var result = [];
    try {
        for (var _b = __values(this.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            result.push(selector(item));
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
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
    var values = this.Items;
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
        throw new Error("Parameter is null");
    if (!keySelector)
        throw new Error("Parameter 'keySelelctor'is null");
    if (!valueSelector)
        valueSelector = function (x) { return x; };
    /** @type {?} */
    var dictionary = new Dictionary();
    this.ForEach(function (x) {
        /** @type {?} */
        var key = keySelector(x);
        /** @type {?} */
        var value = valueSelector ? valueSelector(x) : x;
        /** @type {?} */
        var values;
        if (dictionary.ContainsKey(key)) {
            /** @type {?} */
            var item = dictionary.Item(key);
            values = item ? item : new List();
        }
        else {
            values = new List();
            dictionary.Add(key, values);
        }
        values.Add(value);
    });
    /** @type {?} */
    var groups = new List();
    dictionary.ForEach(function (x) {
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
var WindowSizeWatcherToken = new InjectionToken('./IWindowSizeWatcher');
var WindowSizeWatcher = /** @class */ (function () {
    function WindowSizeWatcher() {
        this.handlers = new Dictionary();
    }
    /**
     * @return {?}
     */
    WindowSizeWatcher.prototype.Start = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        window.onresize = function (e) {
            var e_1, _a;
            try {
                for (var _b = __values(self.handlers.Values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var handler = _c.value;
                    handler.Handle({ Width: window.innerWidth, Height: window.innerHeight });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
    };
    /**
     * @param {?} name
     * @param {?} handler
     * @return {?}
     */
    WindowSizeWatcher.prototype.Add = /**
     * @param {?} name
     * @param {?} handler
     * @return {?}
     */
    function (name, handler) {
        this.handlers.Add(name, handler);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    WindowSizeWatcher.prototype.Remove = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.handlers.Remove(name);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    WindowSizeWatcher.prototype.OnSizeChanged = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var e_2, _a;
        try {
            for (var _b = __values(this.handlers.Values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                handler.Handle({ Width: window.innerWidth, Height: window.innerHeight });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return WindowSizeWatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var XDocument = /** @class */ (function () {
    function XDocument() {
    }
    Object.defineProperty(XDocument.prototype, "Root", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mRoot;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mRoot = value;
            this.mRoot.Document = this;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    XDocument.prototype.Build = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc = document.implementation.createDocument("", "", null);
        doc.appendChild(this.Root.ToXmlElement(doc));
        return doc;
    };
    /**
     * @return {?}
     */
    XDocument.prototype.BuildXmlString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var builder = new StringBuilder();
        /** @type {?} */
        var content = this.Root.ToXmlString(builder);
        return content;
    };
    return XDocument;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var XAttribute = /** @class */ (function (_super) {
    __extends(XAttribute, _super);
    function XAttribute(name, value) {
        return _super.call(this, name, value) || this;
    }
    return XAttribute;
}(XObject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DelegateCommand = /** @class */ (function () {
    function DelegateCommand(canExecute, action) {
        this.canExecute = canExecute;
        this.action = action;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    DelegateCommand.prototype.CanExecute = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (this.canExecute === null)
            return true;
        return this.canExecute(param);
    };
    /**
     * @param {?} param
     * @return {?}
     */
    DelegateCommand.prototype.Execute = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (this.action) {
            try {
                this.action(param);
            }
            catch (error) {
                throw error;
            }
        }
    };
    /**
     * Create a command from given actions.
     * @param action executed action
     * @param canExecute can execue action
     */
    /**
     * Create a command from given actions.
     * @param {?} action executed action
     * @param {?=} canExecute can execue action
     * @return {?}
     */
    DelegateCommand.From = /**
     * Create a command from given actions.
     * @param {?} action executed action
     * @param {?=} canExecute can execue action
     * @return {?}
     */
    function (action, canExecute) {
        if (!canExecute)
            canExecute = function (param) { return true; };
        return new DelegateCommand(canExecute, action);
    };
    return DelegateCommand;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandRepository = /** @class */ (function () {
    function CommandRepository() {
        this.Commands = new Dictionary();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    CommandRepository.prototype.GetCommand = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var command = this.Commands.Item(name);
        return command;
    };
    /**
     * @param {?} name
     * @param {?} command
     * @return {?}
     */
    CommandRepository.prototype.Register = /**
     * @param {?} name
     * @param {?} command
     * @return {?}
     */
    function (name, command) {
        if (!name)
            throw new Error('Name value is null.');
        if (!command)
            throw new Error('Command value is null.');
        this.Commands.Add(name, command);
        return this;
    };
    CommandRepository.decorators = [
        { type: Injectable }
    ];
    return CommandRepository;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MessageMediatorToken = new InjectionToken('./message-mediator/IMessageMediator');
/** @type {?} */
var LoggerFactoryToken = new InjectionToken('./logging/ILoggerFactory');
/** @type {?} */
var ExceptionHandlerToken = new InjectionToken('./exception/IExceptionHandler');
/** @type {?} */
var CommandRepositoryToken = new InjectionToken('./command/ICommandRepository');
/** @type {?} */
var CommandDescriptorRepositoryToken = new InjectionToken('./command/ICommandDescriptorRepository');
/** @type {?} */
var ActionRepositoryToken = new InjectionToken('./action/IActionRepository');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InvokeCommandDirective = /** @class */ (function () {
    function InvokeCommandDirective(commandRepository, loggerFactory) {
        this.commandRepository = commandRepository;
        this.logger = loggerFactory.CreateLogger('InvokeCommand');
    }
    /**
     * @return {?}
     */
    InvokeCommandDirective.prototype.OnClicked = /**
     * @return {?}
     */
    function () {
        this.logger.Debug("Invoke command: " + this.CommandName + " with " + JSON.stringify(this.CommandParam));
        if (String.IsValid(this.CommandName)) {
            /** @type {?} */
            var command = this.commandRepository.GetCommand(this.CommandName);
            if (command != null && command.CanExecute(this.CommandParam)) {
                this.logger.Debug("Get command with name: " + this.CommandName + ", " + JSON.stringify(command));
                command.Execute(this.CommandParam);
            }
        }
    };
    InvokeCommandDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[InvokeCommand]'
                },] }
    ];
    /** @nocollapse */
    InvokeCommandDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CommandRepositoryToken,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [LoggerFactoryToken,] }] }
    ]; };
    InvokeCommandDirective.propDecorators = {
        CommandName: [{ type: Input, args: ['InvokeCommand',] }],
        CommandParam: [{ type: Input }],
        OnClicked: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return InvokeCommandDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandDescriptor = /** @class */ (function () {
    function CommandDescriptor(Header, CommandName, Group, Icon, Image, Description, Id, Tag, Shortcut) {
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
    return CommandDescriptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandDescriptorRepository = /** @class */ (function () {
    function CommandDescriptorRepository() {
        this.descriptors = new List();
    }
    Object.defineProperty(CommandDescriptorRepository.prototype, "Descriptors", {
        get: /**
         * @return {?}
         */
        function () {
            return this.descriptors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Register a descriptor.
     */
    /**
     * Register a descriptor.
     * @param {?} descriptor
     * @return {?}
     */
    CommandDescriptorRepository.prototype.Register = /**
     * Register a descriptor.
     * @param {?} descriptor
     * @return {?}
     */
    function (descriptor) {
        if (descriptor != null) {
            this.descriptors.Add(descriptor);
        }
        return this;
    };
    /**
    * Remove a descriptor
    */
    /**
     * Remove a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    CommandDescriptorRepository.prototype.Remove = /**
     * Remove a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    function (descriptor) {
        if (descriptor !== null)
            this.descriptors.Remove(descriptor);
        return this;
    };
    /**
     * Remove descriptors by given expression
     */
    /**
     * Remove descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    CommandDescriptorRepository.prototype.RemoveRange = /**
     * Remove descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        var _this = this;
        if (expression === null) {
            return;
        }
        this.Descriptors.FindAll(expression)
            .ForEach(function (x) {
            _this.descriptors.Remove(x);
        });
    };
    CommandDescriptorRepository.decorators = [
        { type: Injectable }
    ];
    return CommandDescriptorRepository;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandDescriptorExtensions = /** @class */ (function () {
    function CommandDescriptorExtensions() {
    }
    /**
     * Get descriptors by group
     * @param this command descriptor repository
     * @param group group name
     */
    /**
     * Get descriptors by group
     * @this {?}
     * @param {?} group group name
     * @return {?}
     */
    CommandDescriptorExtensions.GetDescriptorsByGroup = /**
     * Get descriptors by group
     * @this {?}
     * @param {?} group group name
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var repo = this;
        return repo.Descriptors.Where(function (x) { return x.Group === group; });
    };
    return CommandDescriptorExtensions;
}());
CommandDescriptorRepository.prototype.GetDescriptorsByGroup = CommandDescriptorExtensions.GetDescriptorsByGroup;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppSettingItem = /** @class */ (function () {
    function AppSettingItem() {
    }
    Object.defineProperty(AppSettingItem.prototype, "ToString", {
        get: /**
         * @return {?}
         */
        function () {
            return "AppSettingItem Name:'" + this.Name + "', Id:'" + this.Id + "', Value:'" + this.Value + "'";
        },
        enumerable: true,
        configurable: true
    });
    return AppSettingItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.Items = new NamedDictionary();
    }
    Object.defineProperty(AppSettings.prototype, "SettingItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this.Items.Values();
        },
        enumerable: true,
        configurable: true
    });
    /** Get a setting item by name. */
    /**
     * Get a setting item by name.
     * @param {?} name
     * @param {?=} defaultValue
     * @return {?}
     */
    AppSettings.prototype.GetItem = /**
     * Get a setting item by name.
     * @param {?} name
     * @param {?=} defaultValue
     * @return {?}
     */
    function (name, defaultValue) {
        if (!name)
            throw new Error('Given name is null.');
        /** @type {?} */
        var item = this.Items.Item(name);
        if (!item && defaultValue != null) {
            item = new AppSettingItem();
            item.Name = name;
            item.Value = defaultValue;
            this.Items.Add(name, item);
        }
        return item;
    };
    /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     */
    /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     * @param {?} item
     * @return {?}
     */
    AppSettings.prototype.AddItem = /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item && item.Name) {
            /** @type {?} */
            var existing = this.GetItem(item.Name);
            if (existing) {
                existing.Value = item.Value;
            }
            else {
                this.Items.Add(item.Name, item);
            }
        }
        return this;
    };
    /**
     * Set setting item value
     */
    /**
     * Set setting item value
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    AppSettings.prototype.SetValue = /**
     * Set setting item value
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        /** @type {?} */
        var item = this.GetItem(name);
        if (!item) {
            item = new AppSettingItem();
            item.Name = name;
            this.Items.Add(name, item);
        }
        item.Value = value;
        return this;
    };
    return AppSettings;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var OptionRepositoryToken = new InjectionToken('./IOptionRepository');
var OptionRepository = /** @class */ (function () {
    function OptionRepository() {
        this.descriptors = new Dictionary();
    }
    /**
     * Register a descriptor
     */
    /**
     * Register a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    OptionRepository.prototype.Register = /**
     * Register a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    function (descriptor) {
        if (!descriptor)
            throw new Error("Argument descriptor is null");
        if (!this.descriptors.ContainsKey(descriptor.Id)) {
            this.descriptors.Add(descriptor.Id, descriptor);
        }
        return this;
    };
    /**
     * Find descriptors by given expression
     */
    /**
     * Find descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    OptionRepository.prototype.Find = /**
     * Find descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        return Enumerable.From(this.descriptors.Values().Where(function (x) { return expression(x); }));
    };
    /**
     * Find a descriptor by id
     */
    /**
     * Find a descriptor by id
     * @param {?} id
     * @return {?}
     */
    OptionRepository.prototype.FindOne = /**
     * Find a descriptor by id
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.descriptors.ContainsKey(id)) {
            return this.descriptors.Item(id);
        }
        else {
            return null;
        }
    };
    OptionRepository.decorators = [
        { type: Injectable }
    ];
    return OptionRepository;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ResourceDictionary = /** @class */ (function () {
    function ResourceDictionary() {
        this.mInnerDictionary = new NamedDictionary();
    }
    /** Add resource value */
    /**
     * Add resource value
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ResourceDictionary.prototype.Add = /**
     * Add resource value
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (key) {
            this.mInnerDictionary.Add(key, value);
        }
        return this;
    };
    /** Get resource value */
    /**
     * Get resource value
     * @param {?} key
     * @return {?}
     */
    ResourceDictionary.prototype.Get = /**
     * Get resource value
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (key) {
            return this.mInnerDictionary.Item(key);
        }
        return '';
    };
    return ResourceDictionary;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ResourceHolder = /** @class */ (function () {
    function ResourceHolder() {
        this.DefaultLocal = 'en-US';
        this.mInnerDictionary = new NamedDictionary();
    }
    /** Get resource dictionary by local name */
    /**
     * Get resource dictionary by local name
     * @param {?} local
     * @return {?}
     */
    ResourceHolder.prototype.GetResources = /**
     * Get resource dictionary by local name
     * @param {?} local
     * @return {?}
     */
    function (local) {
        return this.mInnerDictionary.Item(local);
    };
    /** Add resource for specific local */
    /**
     * Add resource for specific local
     * @param {?} local
     * @param {?} resource
     * @return {?}
     */
    ResourceHolder.prototype.AddResources = /**
     * Add resource for specific local
     * @param {?} local
     * @param {?} resource
     * @return {?}
     */
    function (local, resource) {
        if (local) {
            this.mInnerDictionary.Add(local, resource);
        }
        return this;
    };
    /** Get resource string */
    /**
     * Get resource string
     * @param {?} name
     * @param {?=} local
     * @return {?}
     */
    ResourceHolder.prototype.GetString = /**
     * Get resource string
     * @param {?} name
     * @param {?=} local
     * @return {?}
     */
    function (name, local) {
        /** @type {?} */
        var culture = local ? local : this.DefaultLocal;
        /** @type {?} */
        var resources = this.GetResources(culture);
        if (resources) {
            return resources.Get(name);
        }
        return '';
    };
    return ResourceHolder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var LogLevel = {
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
var Logger = /** @class */ (function () {
    function Logger(loggerFactory, name) {
        var _this = this;
        this.loggerFactory = loggerFactory;
        this.name = name;
        this.loggers = new List();
        this.formatter = this.MessageFormatter;
        /** @type {?} */
        var providers = loggerFactory.GetProviders();
        if (providers.Count > 0) {
            providers.ForEach(function (x) {
                _this.loggers.Add(x.CreateLogger(name));
            });
        }
    }
    /** Aggregates most logging patterns to a single method. */
    /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    Logger.prototype.Log = /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    function (level, eventId, state, error, formatter) {
        /** @type {?} */
        var errors = new List();
        this.loggers.ForEach(function (logger) {
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
    };
    /**
     * Checks if the given LogLevel is enabled.
     */
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    Logger.prototype.IsEnabled = /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var e_1, _a;
        try {
            for (var _b = __values(this.loggers.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                if (logger.IsEnabled(level))
                    return true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    /** Log to Debug level */
    /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.Debug = /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Debug, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Trace level */
    /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.Trace = /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Trace, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Info level */
    /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.Info = /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Information, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Warn level */
    /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.Warn = /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Warning, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Error level */
    /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.Error = /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Error, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Fatal level */
    /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.Fatal = /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Critical, 0, message, null, this.formatter);
        return this;
    };
    /**
     * Add a logger provider
     * @provider
     */
    /**
     * Add a logger provider
     * \@provider
     * @param {?} provider
     * @return {?}
     */
    Logger.prototype.AddProvider = /**
     * Add a logger provider
     * \@provider
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        /** @type {?} */
        var logger = provider.CreateLogger(this.name);
        this.loggers.Add(logger);
    };
    /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    Logger.prototype.MessageFormatter = /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    function (state, error) {
        if (!state && !error)
            // throw new Error(`No message or exception details wer found to create a message for the log.`);
            return '';
        if (!state)
            return error.message;
        if (!error)
            return state.toString();
        return state + "\n" + error;
    };
    return Logger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DefaultLoggerFactory = /** @class */ (function () {
    function DefaultLoggerFactory() {
        this.providers = new List();
        this.loggers = new Dictionary();
    }
    /** Create a logger */
    /**
     * Create a logger
     * @param {?} name
     * @return {?}
     */
    DefaultLoggerFactory.prototype.CreateLogger = /**
     * Create a logger
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var logger = this.loggers.Item(name);
        if (!logger) {
            logger = new Logger(this, name);
            this.loggers.Add(name, logger);
        }
        return logger;
    };
    /**
     * Add an logger provider to the logging system
     * @provider logger provider
     */
    /**
     * Add an logger provider to the logging system
     * \@provider logger provider
     * @param {?} provider
     * @return {?}
     */
    DefaultLoggerFactory.prototype.AddProvider = /**
     * Add an logger provider to the logging system
     * \@provider logger provider
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        var e_1, _a;
        this.providers.Add(provider);
        try {
            for (var _b = __values(this.loggers.Items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.Value.AddProvider(provider);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Get logger providers
     */
    /**
     * Get logger providers
     * @return {?}
     */
    DefaultLoggerFactory.prototype.GetProviders = /**
     * Get logger providers
     * @return {?}
     */
    function () {
        return this.providers;
    };
    DefaultLoggerFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DefaultLoggerFactory.ctorParameters = function () { return []; };
    return DefaultLoggerFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
LoggerBase = /** @class */ (function () {
    function LoggerBase() {
        this.formatter = this.MessageFormatter;
    }
    Object.defineProperty(LoggerBase.prototype, "Name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks if the given LogLevel is enabled.
     */
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    LoggerBase.prototype.IsEnabled = /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    function (level) {
        return true;
    };
    /** Log to Debug level */
    /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Debug = /**
     * Log to Debug level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Debug, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Trace level */
    /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Trace = /**
     * Log to Trace level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Trace, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Info level */
    /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Info = /**
     * Log to Info level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Information, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Warn level */
    /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Warn = /**
     * Log to Warn level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Warning, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Error level */
    /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Error = /**
     * Log to Error level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Error, 0, message, null, this.formatter);
        return this;
    };
    /** Log to Fatal level */
    /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    LoggerBase.prototype.Fatal = /**
     * Log to Fatal level
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.Log(LogLevel.Critical, 0, message, null, this.formatter);
        return this;
    };
    /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    LoggerBase.prototype.MessageFormatter = /**
     * @param {?} state
     * @param {?} error
     * @return {?}
     */
    function (state, error) {
        if (!state && !error)
            // throw new Error(`No message or exception details wer found to create a message for the log.`);
            return '';
        if (!state)
            return error.message;
        if (!error)
            return JSON.stringify(state); // state.toString();
        return state + "\n" + error;
    };
    return LoggerBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DebugLogger = /** @class */ (function (_super) {
    __extends(DebugLogger, _super);
    function DebugLogger(name, filter) {
        var _this = _super.call(this) || this;
        _this.filter = filter;
        _this.Name = name;
        return _this;
    }
    /**
     * Peform log output to console
     * @param level
     * @param eventId
     * @param state
     * @param error
     * @param formatter
     */
    /**
     * Peform log output to console
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    DebugLogger.prototype.Log = /**
     * Peform log output to console
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    function (level, eventId, state, error, formatter) {
        console.log("[" + new Date().toLocaleTimeString() + "] " + this.Name + ": " + level + ", " + this.formatter(state, error));
    };
    return DebugLogger;
}(LoggerBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DebugLoggerProvider = /** @class */ (function () {
    function DebugLoggerProvider(filter) {
        this.filter = filter;
        if (filter == null) {
            filter = function (message, level) {
                return true;
            };
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    DebugLoggerProvider.prototype.CreateLogger = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return new DebugLogger(name, this.filter);
    };
    /**
     * @return {?}
     */
    DebugLoggerProvider.prototype.Dispose = /**
     * @return {?}
     */
    function () {
    };
    return DebugLoggerProvider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Log4JsLogger = /** @class */ (function (_super) {
    __extends(Log4JsLogger, _super);
    function Log4JsLogger(name, log4JsLogger) {
        var _this = _super.call(this) || this;
        _this.log4JsLogger = log4JsLogger;
        _this.Name = name;
        return _this;
    }
    /** Aggregates most logging patterns to a single method. */
    /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    Log4JsLogger.prototype.Log = /**
     * Aggregates most logging patterns to a single method.
     * @param {?} level
     * @param {?} eventId
     * @param {?} state
     * @param {?} error
     * @param {?} formatter
     * @return {?}
     */
    function (level, eventId, state, error, formatter) {
        /** @type {?} */
        var message = this.formatter(state, error);
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
    };
    /**
    * Checks if the given LogLevel is enabled.
    */
    /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    Log4JsLogger.prototype.IsEnabled = /**
     * Checks if the given LogLevel is enabled.
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var rawLevel;
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
    };
    return Log4JsLogger;
}(LoggerBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Angular CLI doesn't support import node module right now, have to use
 * declare
 * https://github.com/angular/angular-cli/issues/3482
 */
var  /**
 * Angular CLI doesn't support import node module right now, have to use
 * declare
 * https://github.com/angular/angular-cli/issues/3482
 */
File = /** @class */ (function () {
    function File() {
    }
    /**
     * Check whether given file is exist.
     * @param filename full file name with path
     */
    /**
     * Check whether given file is exist.
     * @param {?} filename full file name with path
     * @return {?}
     */
    File.Exists = /**
     * Check whether given file is exist.
     * @param {?} filename full file name with path
     * @return {?}
     */
    function (filename) {
        /** @type {?} */
        var existed;
        try {
            existed = fs.existsSync(filename);
        }
        catch (error) {
            console.log(error);
            existed = false;
        }
        return existed;
    };
    /**
     * @param {?} filename
     * @param {?} content
     * @return {?}
     */
    File.Create = /**
     * @param {?} filename
     * @param {?} content
     * @return {?}
     */
    function (filename, content) {
        try {
            fs.writeFileSync(filename, content);
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @param {?} filename
     * @return {?}
     */
    File.Delete = /**
     * @param {?} filename
     * @return {?}
     */
    function (filename) {
        try {
            fs.unlinkSync(filename);
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @param {?} filename
     * @param {?} encoding
     * @return {?}
     */
    File.ReadAllText = /**
     * @param {?} filename
     * @param {?} encoding
     * @return {?}
     */
    function (filename, encoding) {
        /** @type {?} */
        var content;
        try {
            content = fs.readFileSync(filename, encoding);
        }
        catch (error) {
            console.log(error);
            content = undefined;
        }
        return content;
    };
    /**
     * @param {?} source
     * @param {?} target
     * @param {?} overwrite
     * @return {?}
     */
    File.Copy = /**
     * @param {?} source
     * @param {?} target
     * @param {?} overwrite
     * @return {?}
     */
    function (source, target, overwrite) {
        try {
            /** @type {?} */
            var goodToWrite = false;
            /** @type {?} */
            var sourceStream = fs.createReadStream(source);
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
    };
    /**
     * @param {?} filename
     * @return {?}
     */
    File.FindFolder = /**
     * @param {?} filename
     * @return {?}
     */
    function (filename) {
        /** @type {?} */
        var folder = undefined;
        if (filename && this.Exists(filename)) {
            folder = filename.substr(0, filename.lastIndexOf('/'));
            if (String.IsNullOrEmpty(folder)) {
                folder = filename.substr(0, filename.lastIndexOf('\\'));
            }
        }
        return folder;
    };
    return File;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Directory = /** @class */ (function () {
    function Directory() {
    }
    Object.defineProperty(Directory.prototype, "App", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.remote.app;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Directory.prototype.GetUserDataFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('userData');
    };
    /**
     * @return {?}
     */
    Directory.prototype.GetAppDataFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('appData');
    };
    /**
     * @return {?}
     */
    Directory.prototype.GetMyDocumentFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('documents');
    };
    /**
     * @return {?}
     */
    Directory.prototype.GetPictureFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('pictures');
    };
    /** Get current executable file */
    /**
     * Get current executable file
     * @return {?}
     */
    Directory.prototype.GetCurrentFolder = /**
     * Get current executable file
     * @return {?}
     */
    function () {
        return this.App.getPath('exe');
    };
    /** Get temporary folder */
    /**
     * Get temporary folder
     * @return {?}
     */
    Directory.prototype.GetTempFolder = /**
     * Get temporary folder
     * @return {?}
     */
    function () {
        return this.App.getPath('temp');
    };
    /**
     * @return {?}
     */
    Directory.prototype.GetAppName = /**
     * @return {?}
     */
    function () {
        return this.App.getName();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Directory.prototype.ShowItemInFolder = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        electron.remote.shell.showItemInFolder(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Directory.prototype.Exist = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            fs.accessSync(value, fs.F_OK);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Directory.prototype.EnsureFolderExist = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.Exist(value)) {
            try {
                fs.mkdirSync(value);
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    /**
     * @param {?} path1
     * @param {?} path2
     * @return {?}
     */
    Directory.prototype.Combine = /**
     * @param {?} path1
     * @param {?} path2
     * @return {?}
     */
    function (path1, path2) {
        return path.join(path1, path2);
    };
    return Directory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Log4JsLoggerProvider = /** @class */ (function () {
    function Log4JsLoggerProvider(initializer, logFileName) {
        if (logFileName === void 0) { logFileName = 'log.txt'; }
        if (initializer) {
            initializer();
        }
        else {
            try {
                /** @type {?} */
                var directory = new Directory();
                /** @type {?} */
                var folder = directory.GetUserDataFolder();
                directory.EnsureFolderExist(folder);
                /** @type {?} */
                var file = directory.Combine(folder, logFileName);
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
     * @param name logger name
     */
    /**
     * Create logger
     * @param {?} name logger name
     * @return {?}
     */
    Log4JsLoggerProvider.prototype.CreateLogger = /**
     * Create logger
     * @param {?} name logger name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var loggerName = name ? name : 'Default';
        /** @type {?} */
        var log4Logger = log4js.getLogger(loggerName);
        return new Log4JsLogger(loggerName, log4Logger);
    };
    /**
     * @return {?}
     */
    Log4JsLoggerProvider.prototype.Dispose = /**
     * @return {?}
     */
    function () {
    };
    return Log4JsLoggerProvider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extension methods for LoggerFactory
 */
var  /**
 * Extension methods for LoggerFactory
 */
LoggerFactoryExtensions = /** @class */ (function () {
    function LoggerFactoryExtensions() {
    }
    /**
     * Add Debugger to logger
     * @param this ILoggerFactory instance
     */
    /**
     * Add Debugger to logger
     * @this {?}
     * @return {?}
     */
    LoggerFactoryExtensions.AddDebug = /**
     * Add Debugger to logger
     * @this {?}
     * @return {?}
     */
    function () {
        /** @type {?} */
        var provider = new DebugLoggerProvider();
        this.AddProvider(provider);
        return this;
    };
    /**
     * @this {?}
     * @param {?=} initializer
     * @param {?=} logFileName
     * @return {?}
     */
    LoggerFactoryExtensions.AddLog4Js = /**
     * @this {?}
     * @param {?=} initializer
     * @param {?=} logFileName
     * @return {?}
     */
    function (initializer, logFileName) {
        if (logFileName === void 0) { logFileName = 'log.txt'; }
        /** @type {?} */
        var provider = new Log4JsLoggerProvider(initializer, logFileName);
        this.AddProvider(provider);
        return this;
    };
    return LoggerFactoryExtensions;
}());
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
var LoggingExceptionHandler = /** @class */ (function () {
    function LoggingExceptionHandler(loggerFactory) {
        this.loggerFactory = loggerFactory;
        this.logger = loggerFactory.CreateLogger('ExceptionHandler');
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    LoggingExceptionHandler.prototype.Handle = /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) {
        this.logger.Error(exception);
    };
    LoggingExceptionHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoggingExceptionHandler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LoggerFactoryToken,] }] }
    ]; };
    return LoggingExceptionHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(http, exceptionHandler, loggerFactory) {
        this.http = http;
        this.exceptionHandler = exceptionHandler;
        this.OutputDebugging = true;
        this.logger = loggerFactory.CreateLogger('HttpClient');
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    Object.defineProperty(HttpClient.prototype, "ErrorHander", {
        get: /**
         * @return {?}
         */
        function () {
            return this.errorHandler;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.errorHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Post data to given url
     * @param url Post url
     * @param data  post data
     */
    /**
     * Post data to given url
     * @param {?} url Post url
     * @param {?} data  post data
     * @return {?}
     */
    HttpClient.prototype.Post = /**
     * Post data to given url
     * @param {?} url Post url
     * @param {?} data  post data
     * @return {?}
     */
    function (url, data) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            var body = JSON.stringify(data);
            if (self.OutputDebugging) {
                self.logger
                    .Debug("Post data url: " + url)
                    .Debug(body);
            }
            self.http.post(url, body, { headers: self.headers })
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (error) {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    };
    /**
     * Post raw string to given url
     * @param url url to post data
     * @param data data in string format
     */
    /**
     * Post raw string to given url
     * @param {?} url url to post data
     * @param {?} data data in string format
     * @return {?}
     */
    HttpClient.prototype.PostRaw = /**
     * Post raw string to given url
     * @param {?} url url to post data
     * @param {?} data data in string format
     * @return {?}
     */
    function (url, data) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.OutputDebugging) {
                self.logger
                    .Debug("Post data url: " + url)
                    .Debug(data);
            }
            self.http.post(url, data, { headers: self.headers })
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (error) {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    };
    /**
     * Delete reques
     * @param url the url for delete
     */
    /**
     * Delete reques
     * @param {?} url the url for delete
     * @return {?}
     */
    HttpClient.prototype.Delete = /**
     * Delete reques
     * @param {?} url the url for delete
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            self.http.delete(url)
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (error) {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    };
    /**
     * Get data from given url in async mode
     * @param url the url to get data.
     */
    /**
     * Get data from given url in async mode
     * @param {?} url the url to get data.
     * @param {?=} useRaw
     * @return {?}
     */
    HttpClient.prototype.Get = /**
     * Get data from given url in async mode
     * @param {?} url the url to get data.
     * @param {?=} useRaw
     * @return {?}
     */
    function (url, useRaw) {
        if (useRaw === void 0) { useRaw = false; }
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.OutputDebugging) {
                self.logger.Debug("Get data url: " + url);
            }
            self.http.get(url, { headers: self.headers })
                .toPromise()
                .then(function (response) {
                if (useRaw) {
                    resolve(response);
                }
                else {
                    resolve(response.json());
                }
            })
                .catch(function (error) {
                self.exceptionHandler.Handle(error);
                if (self.errorHandler)
                    self.errorHandler(error);
                reject(error);
            });
        });
    };
    /**
     * Create a new header with given token
     * @param token bearer token value
     */
    /**
     * Create a new header with given token
     * @param {?} token bearer token value
     * @return {?}
     */
    HttpClient.prototype.UseToken = /**
     * Create a new header with given token
     * @param {?} token bearer token value
     * @return {?}
     */
    function (token) {
        /** @type {?} */
        var headers = this.CreateDefaultHeader();
        if (token) {
            headers.append('Authorization', "bearer " + token);
        }
        this.headers = headers;
        return this;
    };
    /**
     * User given header or the default header with content type set to json
     * @param headers given header
     */
    /**
     * User given header or the default header with content type set to json
     * @param {?=} headers given header
     * @return {?}
     */
    HttpClient.prototype.UseHeader = /**
     * User given header or the default header with content type set to json
     * @param {?=} headers given header
     * @return {?}
     */
    function (headers) {
        if (headers === void 0) { headers = this.CreateDefaultHeader(); }
        if (!headers)
            throw new Error('Given http header is null.');
        this.headers = headers;
        return this;
    };
    /**
     * @return {?}
     */
    HttpClient.prototype.CreateDefaultHeader = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    HttpClient.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpClient.ctorParameters = function () { return [
        { type: Http },
        { type: LoggingExceptionHandler },
        { type: DefaultLoggerFactory }
    ]; };
    return HttpClient;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ElectronUtil = /** @class */ (function () {
    function ElectronUtil() {
        this.algorithm = 'aes-256-ctr';
        this.password = 'a3b8d9w34';
    }
    Object.defineProperty(ElectronUtil.prototype, "Electron", {
        get: /**
         * @return {?}
         */
        function () {
            return electron;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronUtil.prototype, "App", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.remote.app;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronUtil.prototype, "MainMenu", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.remote.Menu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronUtil.prototype, "IpcClient", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.ipcRenderer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronUtil.prototype, "Remote", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.remote;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetUserDataFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('userData');
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetAppDataFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('appData');
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetMyDocumentFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('documents');
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetPictureFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('pictures');
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetAppName = /**
     * @return {?}
     */
    function () {
        return this.App.getName();
    };
    /**
     * @param {?=} filters
     * @return {?}
     */
    ElectronUtil.prototype.OpenFileDialog = /**
     * @param {?=} filters
     * @return {?}
     */
    function (filters) {
        if (filters === void 0) { filters = null; }
        /** @type {?} */
        var dialog = electron.remote.dialog;
        /** @type {?} */
        var fileName = dialog.showOpenDialog({
            properties: ['openFile'],
            filters: filters
        });
        return fileName.toString();
    };
    /**
     * @param {?=} filters
     * @return {?}
     */
    ElectronUtil.prototype.OpenFilesDialog = /**
     * @param {?=} filters
     * @return {?}
     */
    function (filters) {
        if (filters === void 0) { filters = null; }
        /** @type {?} */
        var dialog = electron.remote.dialog;
        /** @type {?} */
        var fileNames = dialog.showOpenDialog({
            properties: ['openFile', 'multiSelections'],
            filters: filters
        });
        return fileNames;
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.TextFileFilter = /**
     * @return {?}
     */
    function () {
        return [{ name: 'Text Documents', extensions: ['txt', 'cs', 'ts', 'js', 'scss', 'css', 'html', 'htm'] }];
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.ImageFileFilter = /**
     * @return {?}
     */
    function () {
        return [{ name: 'Images', extensions: ['jpg', 'png', 'gif', 'bmp'] }];
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.OpenImageDialog = /**
     * @return {?}
     */
    function () {
        return this.OpenFileDialog(this.ImageFileFilter());
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.OpenImagesDialog = /**
     * @return {?}
     */
    function () {
        return this.OpenFilesDialog(this.ImageFileFilter());
    };
    /**
     * @param {?} menu
     * @return {?}
     */
    ElectronUtil.prototype.SetApplicationMenu = /**
     * @param {?} menu
     * @return {?}
     */
    function (menu) {
        electron.remote.Menu.setApplicationMenu(menu);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ElectronUtil.prototype.OpenExternal = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        electron.remote.shell.openExternal(url);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElectronUtil.prototype.ShowItemInFolder = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        electron.remote.shell.showItemInFolder(path);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileAsync = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            if (!self.Exist(file))
                reject(new Error("File doesn't exist."));
            fs.readFile(file, 'binary', function (error, data) {
                if (error)
                    reject(error);
                /** @type {?} */
                var content = EncodingHelper.decode(data, 'utf8');
                resolve(content);
            });
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileLineByLine = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            var lines = [];
            /** @type {?} */
            var stream = fs.createReadStream(file)
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
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileAsBase64Async = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var fullPath = this.NormalizePath(file.toString());
        console.log('Full path: ' + fullPath);
        return new Promise(function (resolve, reject) {
            if (!self.Exist(fullPath))
                reject(new Error("File doesn't exist.' + fullPath"));
            console.log('File to open ' + fullPath);
            /** @type {?} */
            var data = fs.readFileSync(fullPath, 'base64');
            /** @type {?} */
            var buffer = new Buffer(data, 'base64');
            /** @type {?} */
            var base64Data = buffer.toString('base64');
            resolve(base64Data);
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileAsBase64 = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var fullPath = this.NormalizePath(file.toString());
        if (!self.Exist(fullPath))
            throw Error("File doesn't exist." + fullPath);
        /** @type {?} */
        var data = fs.readFileSync(fullPath, 'base64');
        /** @type {?} */
        var buffer = new Buffer(data, 'base64');
        /** @type {?} */
        var base64Data = buffer.toString('base64');
        return base64Data;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileStream = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return fs.createReadStream(file);
    };
    /**
     * @param {?} file
     * @param {?} data
     * @return {?}
     */
    ElectronUtil.prototype.WriteFileAsync = /**
     * @param {?} file
     * @param {?} data
     * @return {?}
     */
    function (file, data) {
        console.log('Write data to file.');
        return new Promise(function (resolve, reject) {
            fs.writeFile(file, data, function (error) {
                if (error)
                    reject(error);
                resolve(true);
            });
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetMimeType = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        try {
            return Mime.lookup(file);
        }
        catch (error) {
            console.log('Get MIME error: ' + error);
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetFilename = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        try {
            return Path.basename(file);
        }
        catch (error) {
            console.log('Get file name error: ' + error);
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetFilenameWithoutExtension = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var filename = this.GetFilename(file);
        return Path.parse(filename).name;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetFileSize = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var stats = fs.statSync(file);
        return stats['size'];
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetFileSizeString = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        try {
            /** @type {?} */
            var size = this.GetFileSize(file);
            /** @type {?} */
            var sizeString = FileSize(size);
            return sizeString;
        }
        catch (error) {
            console.log('Get file name error: ' + error);
        }
    };
    /**
     * @param {?} size
     * @return {?}
     */
    ElectronUtil.prototype.ConverToFileSizeString = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return FileSize(size);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElectronUtil.prototype.Encrypt = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value)
            return '';
        /** @type {?} */
        var cipher = Crypts.createCipher(this.algorithm, this.password);
        /** @type {?} */
        var crypted = cipher.update(value, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElectronUtil.prototype.Decrypt = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value)
            return '';
        /** @type {?} */
        var decipher = Crypts.createDecipher(this.algorithm, this.password);
        /** @type {?} */
        var dec = decipher.update(value, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElectronUtil.prototype.Exist = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        try {
            fs.accessSync(path, fs.F_OK);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElectronUtil.prototype.EnsureFolderExist = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        if (!this.Exist(path)) {
            try {
                fs.mkdirSync(path);
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    /**
     * @param {?} base
     * @param {?} paths
     * @return {?}
     */
    ElectronUtil.prototype.CombinePath = /**
     * @param {?} base
     * @param {?} paths
     * @return {?}
     */
    function (base, paths) {
        /** @type {?} */
        var value;
        try {
            value = NjPath.join(base, paths);
        }
        catch (error) {
            console.log(error);
        }
        return value;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElectronUtil.prototype.NormalizePath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return NjPath.normalize(path);
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.CreateGuidString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var guid = Guid.New();
        return guid.Value;
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.CreateGuid = /**
     * @return {?}
     */
    function () {
        return Guid.New();
    };
    ElectronUtil.decorators = [
        { type: Injectable }
    ];
    return ElectronUtil;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularServiceProvider = /** @class */ (function () {
    /**
     *
     */
    function AngularServiceProvider(injector) {
        this.injector = injector;
    }
    /**
     * Gets the service object of the specified type.
     */
    /**
     * Gets the service object of the specified type.
     * @param {?} type
     * @return {?}
     */
    AngularServiceProvider.prototype.GetService = /**
     * Gets the service object of the specified type.
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.injector.get(type);
    };
    AngularServiceProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AngularServiceProvider.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return AngularServiceProvider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ServiceLocator = /** @class */ (function () {
    function ServiceLocator() {
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    ServiceLocator.SetLocatorProvider = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        ServiceLocator.currentProvider = provider();
    };
    /**
     * @template T
     * @param {?} token
     * @return {?}
     */
    ServiceLocator.GetService = /**
     * @template T
     * @param {?} token
     * @return {?}
     */
    function (token) {
        return ServiceLocator.currentProvider.get(token);
    };
    ServiceLocator.currentProvider = undefined;
    ServiceLocator.decorators = [
        { type: Injectable }
    ];
    return ServiceLocator;
}());

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
        var regex = /^(\(|\[|'|')/;
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
    var regexp = /\s/;
    /** @type {?} */
    var words = this.split(regexp);
    if (words.length === 1) {
        return words[0].capFirst();
    }
    else if (words.length > 1) {
        /** @type {?} */
        var result = '';
        for (var i = 0; i < words.length; i++) {
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
    var words = this.split(/\s+/);
    if (words.length > num) {
        return words.slice(0, num).join(' ');
    }
    return words.join(' ');
};
String.prototype.StripHtml = function () {
    /** @type {?} */
    var content = this.replace(/<[\/]?([^> ]+)[^>]*>/g, '');
    content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/ig, '');
    content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/ig, '');
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    content = content.replace('&nbsp;', ' ');
    content = content.replace('&amp;', '&');
    return content;
};
String.prototype.EscapeHtml = function () {
    /** @type {?} */
    var content = this.replace(/'/g, '&quot;');
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
String.prototype.Slugify = function (lower) {
    if (lower === void 0) { lower = true; }
    if (!lower) {
        return this.lower().normalize().replace(/[^a-z0-9]/gi, '-');
    }
    return this.normalize().replace(/[^a-z0-9]/gi, '-');
};
String.prototype.HtmlToText = function () {
    /** @type {?} */
    var output = this.replace(/<[^>]*>?/g, '');
    return output;
};
String.prototype.CountWord = function () {
    /** @type {?} */
    var content = this;
    if (!content)
        return 0;
    /** @type {?} */
    var words = '';
    /** @type {?} */
    var symbols = '';
    content.replace(/([\w\s]*)([^\w;,.''{}\[\]+_)(*&\^%$#@!~\/?]*)/g, function (a, b, c) {
        words += b;
        symbols += c;
        return a;
    });
    /** @type {?} */
    var count = words.trim().split(' ').length;
    if (symbols)
        count += symbols.replace(' ', '').split('').length;
    return count;
};
String.prototype.ValidateEmail = function () {
    /** @type {?} */
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    var text = value.toString();
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

var __values$1 = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
    var e_1, _a;
    /** @type {?} */
    var result = null;
    if (predicate) {
        try {
            for (var _b = __values$1(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (predicate(item)) {
                    result = item;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        result = this[0];
    }
    return result;
};
Array.prototype.Max = function () {
    /** @type {?} */
    var max = this.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return max;
};
Array.prototype.Min = function () {
    /** @type {?} */
    var min = this.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return min;
};
Array.prototype.Count = function () {
    return this.length;
};
Array.prototype.Any = function (predicate) {
    var e_2, _a;
    if (predicate) {
        try {
            for (var _b = __values$1(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (predicate(item))
                    return true;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
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
    return this.filter(function (x) {
        return predicate(x);
    });
};
Array.prototype.Select = function (selector) {
    var e_3, _a;
    /** @type {?} */
    var result = [];
    try {
        for (var _b = __values$1(this), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            result.push(selector(item));
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
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
    for (var i = 0; i < this.length; i++) {
        callback(i, this[i]);
    }
};
Array.prototype.Remove = function (item) {
    /** @type {?} */
    var index = this.indexOf(item);
    if (index !== -1) {
        return this.splice(index, 1);
    }
    return null;
};
Array.prototype.Contains = function (partial, strict) {
    for (var i = 0; i < this.length; i++) {
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
    for (var i = 0; i < this.length; i++) {
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
    var items = this;
    if (typeof (items[0]) === 'string' || typeof (items[0]) === 'number' || typeof (items[0]) === 'boolean') {
        for (var i = 0; i < items.length; i++) {
            /** @type {?} */
            var val = items[i];
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
    var placeholder = document.createElement('div');
    placeholder.innerHTML = html;
    return /** @type {?} */ (placeholder.childNodes[0]);
};
NodeList.prototype.ForEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
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
    var el = this;
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
        var _currentNode = node;
        /** @type {?} */
        var nodeList = _currentNode.childNodes;
        for (var i = 0; i < nodeList.length; i++) {
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
    var self = this;
    /** @type {?} */
    var parent = self.parentNode;
    parent.removeChild(self);
    return self;
};
Element.prototype.RemoveEvent = function (event) {
    /** @type {?} */
    var evt = this["on" + event] || this["" + event];
    try {
        this.removeEventListener(event, evt);
    }
    catch (e) { }
    try {
        this.detachEvent("on" + event, evt);
    }
    catch (e) { }
    this["on" + event] = null;
    this["" + event] = null;
    return this;
};
Element.prototype.AddEvent = function (event, callback, overwrite) {
    if (overwrite === void 0) { overwrite = false; }
    if (overwrite) {
        this["on" + event] = callback;
    }
    else {
        this.addEventListener(event, callback);
    }
    return this;
};
Element.prototype.Show = function (t) {
    if (t === void 0) { t = 'block'; }
    /** @type {?} */
    var styles = this.attribute('style');
    if (styles != null && styles !== '') {
        return this.attribute('style', styles.setValueByKey('display', t));
    }
    return this.attribute('style', "display:" + t);
};
Element.prototype.Hide = function () {
    /** @type {?} */
    var styles = this.attribute('style');
    if (styles != null && styles !== '') {
        return this.attribute('style', styles.setValueByKey('display', 'none'));
    }
    return this.attribute('style', "display:none;");
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
    this.className += " " + className;
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
                    var name_1 = this.attribute('name');
                    /** @type {?} */
                    var radios = document.SelectAll("input[type='radio'][name='" + name_1 + "']");
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
            for (var i = 0; i < this.options.length; i++) {
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
                    var name_2 = this.attribute('name');
                    return (/** @type {?} */ (document.SelectOne("input[type='radio'][name='" + name_2 + "']:checked"))).value;
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
    var output = Object.assign({}, target);
    if (IsObject(target) && IsObject(source)) {
        Object.keys(source).forEach(function (key) {
            var _a, _b;
            if (IsObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = MergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
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
    var e_1, _a;
    if (source === undefined && target === undefined) {
        return true;
    }
    if (Object.prototype.toString.call(source) === '[object Array]') {
        /** @type {?} */
        var arrayX = /** @type {?} */ (source);
        /** @type {?} */
        var arrayY = /** @type {?} */ (target);
        if (arrayX.length !== arrayY.length) {
            return false;
        }
        for (var index = 0; index < arrayX.length; index++) {
            console.log(arrayX[index]);
            console.log(arrayY[index]);
            if (CompareProperties(arrayX[index], arrayY[index] === false)) {
                return false;
            }
        }
    }
    else {
        /** @type {?} */
        var names = Object.getOwnPropertyNames(source);
        try {
            // console.log(names);
            for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
                var name_1 = names_1_1.value;
                /** @type {?} */
                var property = Object.getOwnPropertyDescriptor(target, name_1);
                if (!property) {
                    return false;
                }
                else {
                    if (Object.prototype.toString.call(source) === '[object Array]') {
                        if (CompareProperties(property.value, source[name_1] === false)) {
                            return false;
                        }
                    }
                    else if (property.value !== source[name_1] && property.value.toString() !== source[name_1].toString()) {
                        // console.log(`Property ${name} ${typeof property.value}: '${property.value}', '${source[name]}'`);
                        return false;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
            }
            finally { if (e_1) throw e_1.error; }
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
var Delay = function (elapse) {
    return new Promise(function (resolve, reject) {
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
var ActionRepository = /** @class */ (function () {
    function ActionRepository() {
        this.Actions = new List();
    }
    /**
     * @param {?} action
     * @return {?}
     */
    ActionRepository.prototype.Register = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        if (action) {
            this.Actions.Add(action);
        }
        return this;
    };
    /**
     * @param {?} expression
     * @return {?}
     */
    ActionRepository.prototype.Find = /**
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        return this.Actions.FindAll(expression);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ActionRepository.prototype.FindOne = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.Actions.FirstOrDefault(function (x) { return x.Name === name; });
    };
    return ActionRepository;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Action = /** @class */ (function () {
    function Action(delegate) {
        this.delegate = delegate;
    }
    /**
     * @param {?=} args
     * @return {?}
     */
    Action.prototype.Invoke = /**
     * @param {?=} args
     * @return {?}
     */
    function (args) {
        if (this.delegate)
            this.delegate(args);
    };
    return Action;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MessageMediator = /** @class */ (function () {
    function MessageMediator() {
        this.mediators = new Dictionary();
    }
    Object.defineProperty(MessageMediator.prototype, "Mediators", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mediators;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Register an event
     */
    /**
     * Register an event
     * @param {?} topic
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    MessageMediator.prototype.RegisterHandler = /**
     * Register an event
     * @param {?} topic
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    function (topic, id, action) {
        /** @type {?} */
        var values = this.mediators.Item(topic);
        if (values == null) {
            values = new Dictionary();
            this.mediators.Add(topic, values);
        }
        values.Add(id, action);
        return this;
    };
    /**
     * Unregister an event
     */
    /**
     * Unregister an event
     * @param {?} topic
     * @param {?} id
     * @return {?}
     */
    MessageMediator.prototype.UnregisterHandler = /**
     * Unregister an event
     * @param {?} topic
     * @param {?} id
     * @return {?}
     */
    function (topic, id) {
        /** @type {?} */
        var values = this.mediators.Item(topic);
        if (values != null) {
            values.Remove(id);
            if (values.Count === 0) {
                this.mediators.Remove(topic);
            }
        }
        return this;
    };
    /**
     * @template T
     * @param {?} topic
     * @param {?=} message
     * @return {?}
     */
    MessageMediator.prototype.SendMessage = /**
     * @template T
     * @param {?} topic
     * @param {?=} message
     * @return {?}
     */
    function (topic, message) {
        var e_1, _a;
        /** @type {?} */
        var result = true;
        /** @type {?} */
        var values = this.mediators.Item(topic);
        if (values != null) {
            try {
                for (var _b = __values(values.Values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    try {
                        item.Invoke(message);
                    }
                    catch (error) {
                        result = false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return result;
    };
    MessageMediator.decorators = [
        { type: Injectable }
    ];
    return MessageMediator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ComponentCreatorToken = new InjectionToken('./ICommponentCreator');
var ComponentCreator = /** @class */ (function () {
    function ComponentCreator() {
    }
    Object.defineProperty(ComponentCreator.prototype, "ViewContainer", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mViewContainer;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mViewContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentCreator.prototype, "ComponentFactoryResolver", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mComponentFactoryResolver;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mComponentFactoryResolver = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Initialize
    */
    /**
     * Initialize
     * @param {?} viewContainer
     * @param {?} resolver
     * @return {?}
     */
    ComponentCreator.prototype.Initialize = /**
     * Initialize
     * @param {?} viewContainer
     * @param {?} resolver
     * @return {?}
     */
    function (viewContainer, resolver) {
        this.mViewContainer = viewContainer;
        this.mComponentFactoryResolver = resolver;
    };
    /**
     * @param {?} componentType
     * @param {?=} viewContainer
     * @return {?}
     */
    ComponentCreator.prototype.CreateComponent = /**
     * @param {?} componentType
     * @param {?=} viewContainer
     * @return {?}
     */
    function (componentType, viewContainer) {
        try {
            /** @type {?} */
            var factory = this.ComponentFactoryResolver.resolveComponentFactory(componentType);
            /** @type {?} */
            var component = viewContainer ?
                viewContainer.createComponent(factory) :
                this.ViewContainer.createComponent(factory);
            return component;
        }
        catch (error) {
            return null;
        }
    };
    ComponentCreator.decorators = [
        { type: Injectable }
    ];
    return ComponentCreator;
}());

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
var components = [];
/** @type {?} */
var directives = [
    InvokeCommandDirective
];
/** @type {?} */
var providers = [
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
var exportItems = [];
var SystemModule = /** @class */ (function () {
    function SystemModule() {
    }
    SystemModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [directives, components],
                    imports: [CommonModule, HttpModule, JsonpModule],
                    providers: providers,
                    exports: [directives, exportItems]
                },] }
    ];
    return SystemModule;
}());

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

export { XElement, XDocument, XObject, XAttribute, DelegateCommand, CommandRepository, InvokeCommandDirective, CommandDescriptor, CommandDescriptorRepository, CommandDescriptorExtensions, AppSettings, AppSettingItem, OptionRepositoryToken, OptionRepository, ResourceDictionary, ResourceHolder, DefaultLoggerFactory, LogLevel, DebugLogger, DebugLoggerProvider, Log4JsLogger, Log4JsLoggerProvider, LoggerFactoryExtensions, LoggingExceptionHandler, HttpClient, ElectronUtil, Guid, StringBuilder, XmlConverter, Clipboard, JsonToken, WindowSizeWatcherToken, WindowSizeWatcher, Collection, Enumerable, List, Grouping, EnumerableIterator, NamedDictionary, Dictionary, ForEach, Sort, FindAll, FirstOrDefault, IsEmpty, Any, Max, Min, OrderBy, OrderByDescending, Where, Select, ElementAt, GroupBy, ObservableCollection, AngularServiceProvider, ServiceLocator, IsDefined, IsObject, MergeDeep, Clone, CompareProperties, Delay, ActionRepository, Action, MessageMediator, ComponentCreatorToken, ComponentCreator, File, Directory, MessageMediatorToken, LoggerFactoryToken, ExceptionHandlerToken, CommandRepositoryToken, CommandDescriptorRepositoryToken, ActionRepositoryToken, SystemModule, LoggerBase as ɵa };

//# sourceMappingURL=yafeya-system-common.js.map