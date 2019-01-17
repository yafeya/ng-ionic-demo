/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { XObject } from './XObject';
export class XElement extends XObject {
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
if (false) {
    /** @type {?} */
    XElement.prototype.Elements;
    /** @type {?} */
    XElement.prototype.Attributes;
    /** @type {?} */
    XElement.prototype.Parent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0veG1sL1hFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBSXBDLE1BQU0sZUFBZ0IsU0FBUSxPQUFPOzs7OztJQUtqQyxZQUFZLElBQVksRUFBRSxRQUFhLElBQUk7UUFDdkMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFMSyxFQUFFOzBCQUNFLEVBQUU7S0FLakM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQWlCO1FBQ3pCLElBQUksQ0FBQyxPQUFPO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQztLQUNmOzs7OztJQUNELGVBQWUsQ0FBQyxTQUFxQjtRQUNqQyxJQUFJLENBQUMsU0FBUztZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEM7Ozs7O0lBQ0QsWUFBWSxDQUFDLEdBQWdCOztRQUN6QixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ3ZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLO1lBQ2pDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0tBQ2xCOzs7OztJQUVELFdBQVcsQ0FBQyxPQUE2QjtRQUVyQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUs7Z0JBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzFCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBYT2JqZWN0IH0gZnJvbSAnLi9YT2JqZWN0JztcclxuaW1wb3J0IHsgWEF0dHJpYnV0ZSB9IGZyb20gJy4vWEF0dHJpYnV0ZSc7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9jb21tb24vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFhFbGVtZW50IGV4dGVuZHMgWE9iamVjdCB7XHJcbiAgICBFbGVtZW50czogQXJyYXk8WEVsZW1lbnQ+ID0gW107XHJcbiAgICBBdHRyaWJ1dGVzOiBBcnJheTxYQXR0cmlidXRlPiA9IFtdO1xyXG4gICAgUGFyZW50OiBYRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEFwcGVuZENoaWxkKGVsZW1lbnQ6IFhFbGVtZW50KTogWEVsZW1lbnQge1xyXG4gICAgICAgIGlmICghZWxlbWVudClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlbGVtZW50IGlzIG51bGwuJyk7XHJcblxyXG4gICAgICAgIHRoaXMuRWxlbWVudHMucHVzaChlbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LkRvY3VtZW50ID0gdGhpcy5Eb2N1bWVudDtcclxuICAgICAgICBlbGVtZW50LlBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgQXBwZW5kQXR0cmlidXRlKGF0dHJpYnV0ZTogWEF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGlmICghYXR0cmlidXRlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSBpcyBudWxsLicpO1xyXG5cclxuICAgICAgICB0aGlzLkF0dHJpYnV0ZXMucHVzaChhdHRyaWJ1dGUpO1xyXG4gICAgICAgIGF0dHJpYnV0ZS5Eb2N1bWVudCA9IHRoaXMuRG9jdW1lbnQ7XHJcbiAgICB9XHJcbiAgICBUb1htbEVsZW1lbnQoZG9jOiBYTUxEb2N1bWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvYy5jcmVhdGVFbGVtZW50KHRoaXMuTmFtZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuTmFtZSA9PSBcImJhc2U2NFwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5WYWx1ZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5WYWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5BdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUuTmFtZSwgYXR0cmlidXRlLlZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLlRvWG1sRWxlbWVudChkb2MpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgVG9YbWxTdHJpbmcoYnVpbGRlcjogQ29tbW9uLlN0cmluZ0J1aWxkZXIpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBidWlsZGVyLkFwcGVuZCgnPCcgKyB0aGlzLk5hbWUgKyAnPicpO1xyXG4gICAgICAgIGlmICh0aGlzLlZhbHVlKSB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kKHRoaXMuVmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLlRvWG1sU3RyaW5nKGJ1aWxkZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1aWxkZXIuQXBwZW5kKCc8LycgKyB0aGlzLk5hbWUgKyAnPicpO1xyXG4gICAgICAgIHJldHVybiBidWlsZGVyLkJ1aWxkKCk7XHJcbiAgICB9XHJcbn1cclxuIl19