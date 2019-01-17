/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { XObject } from './XObject';
var XElement = /** @class */ (function (_super) {
    tslib_1.__extends(XElement, _super);
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
export { XElement };
if (false) {
    /** @type {?} */
    XElement.prototype.Elements;
    /** @type {?} */
    XElement.prototype.Attributes;
    /** @type {?} */
    XElement.prototype.Parent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0veG1sL1hFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUlwQyxJQUFBO0lBQThCLG9DQUFPO0lBS2pDLGtCQUFZLElBQVksRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQTNDLFlBQ0ksa0JBQU0sSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUNyQjt5QkFOMkIsRUFBRTsyQkFDRSxFQUFFOztLQUtqQzs7Ozs7SUFFRCw4QkFBVzs7OztJQUFYLFVBQVksT0FBaUI7UUFDekIsSUFBSSxDQUFDLE9BQU87WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXRCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7O0lBQ0Qsa0NBQWU7Ozs7SUFBZixVQUFnQixTQUFxQjtRQUNqQyxJQUFJLENBQUMsU0FBUztZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEM7Ozs7O0lBQ0QsK0JBQVk7Ozs7SUFBWixVQUFhLEdBQWdCOztRQUN6QixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ3ZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLO1lBQ2pDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0tBQ2xCOzs7OztJQUVELDhCQUFXOzs7O0lBQVgsVUFBWSxPQUE2QjtRQUVyQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUs7Z0JBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzFCO21CQTlETDtFQUk4QixPQUFPLEVBMkRwQyxDQUFBO0FBM0RELG9CQTJEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFhPYmplY3QgfSBmcm9tICcuL1hPYmplY3QnO1xyXG5pbXBvcnQgeyBYQXR0cmlidXRlIH0gZnJvbSAnLi9YQXR0cmlidXRlJztcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgWEVsZW1lbnQgZXh0ZW5kcyBYT2JqZWN0IHtcclxuICAgIEVsZW1lbnRzOiBBcnJheTxYRWxlbWVudD4gPSBbXTtcclxuICAgIEF0dHJpYnV0ZXM6IEFycmF5PFhBdHRyaWJ1dGU+ID0gW107XHJcbiAgICBQYXJlbnQ6IFhFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQXBwZW5kQ2hpbGQoZWxlbWVudDogWEVsZW1lbnQpOiBYRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2VsZW1lbnQgaXMgbnVsbC4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5FbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnQuRG9jdW1lbnQgPSB0aGlzLkRvY3VtZW50O1xyXG4gICAgICAgIGVsZW1lbnQuUGFyZW50ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBBcHBlbmRBdHRyaWJ1dGUoYXR0cmlidXRlOiBYQXR0cmlidXRlKSB7XHJcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIGlzIG51bGwuJyk7XHJcblxyXG4gICAgICAgIHRoaXMuQXR0cmlidXRlcy5wdXNoKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgYXR0cmlidXRlLkRvY3VtZW50ID0gdGhpcy5Eb2N1bWVudDtcclxuICAgIH1cclxuICAgIFRvWG1sRWxlbWVudChkb2M6IFhNTERvY3VtZW50KTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQodGhpcy5OYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5WYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5OYW1lID09IFwiYmFzZTY0XCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlZhbHVlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLlZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5OYW1lLCBhdHRyaWJ1dGUuVmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLkVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQuVG9YbWxFbGVtZW50KGRvYykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBUb1htbFN0cmluZyhidWlsZGVyOiBDb21tb24uU3RyaW5nQnVpbGRlcik6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGJ1aWxkZXIuQXBwZW5kKCc8JyArIHRoaXMuTmFtZSArICc+Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMuVmFsdWUpIHtcclxuICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQodGhpcy5WYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuVG9YbWxTdHJpbmcoYnVpbGRlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnVpbGRlci5BcHBlbmQoJzwvJyArIHRoaXMuTmFtZSArICc+Jyk7XHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkZXIuQnVpbGQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=