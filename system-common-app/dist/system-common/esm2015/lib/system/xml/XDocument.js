/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as Common from '../common/index';
export class XDocument {
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
        let builder = new Common.StringBuilder();
        /** @type {?} */
        let content = this.Root.ToXmlString(builder);
        return content;
    }
}
if (false) {
    /** @type {?} */
    XDocument.prototype.mRoot;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY3VtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL3htbC9YRG9jdW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFMUMsTUFBTTs7OztJQUlGLElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNyQjs7Ozs7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUFjO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztLQUM5Qjs7OztJQUVELEtBQUs7O1FBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUvRCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxHQUFHLENBQUM7S0FDZDs7OztJQUVELGNBQWM7O1FBQ1YsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7O1FBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLE9BQU8sT0FBTyxDQUFDO0tBQ2xCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBYRWxlbWVudCB9IGZyb20gJy4vWEVsZW1lbnQnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBYRG9jdW1lbnQge1xyXG5cclxuICAgIHByaXZhdGUgbVJvb3Q6IFhFbGVtZW50O1xyXG5cclxuICAgIGdldCBSb290KCk6IFhFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tUm9vdDtcclxuICAgIH1cclxuICAgIHNldCBSb290KHZhbHVlOlhFbGVtZW50KXtcclxuICAgICAgICB0aGlzLm1Sb290ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5tUm9vdC5Eb2N1bWVudCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgQnVpbGQoKTogWE1MRG9jdW1lbnQgeyAgICAgICAgXHJcbiAgICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KFwiXCIsIFwiXCIsIG51bGwpO1xyXG5cclxuICAgICAgICBkb2MuYXBwZW5kQ2hpbGQodGhpcy5Sb290LlRvWG1sRWxlbWVudChkb2MpKTtcclxuICAgICAgICByZXR1cm4gZG9jO1xyXG4gICAgfVxyXG5cclxuICAgIEJ1aWxkWG1sU3RyaW5nKCk6c3RyaW5ne1xyXG4gICAgICAgIGxldCBidWlsZGVyID0gbmV3IENvbW1vbi5TdHJpbmdCdWlsZGVyKCk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLlJvb3QuVG9YbWxTdHJpbmcoYnVpbGRlcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfVxyXG59Il19