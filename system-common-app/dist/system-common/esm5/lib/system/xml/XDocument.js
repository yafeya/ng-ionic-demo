/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as Common from '../common/index';
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
        var builder = new Common.StringBuilder();
        /** @type {?} */
        var content = this.Root.ToXmlString(builder);
        return content;
    };
    return XDocument;
}());
export { XDocument };
if (false) {
    /** @type {?} */
    XDocument.prototype.mRoot;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY3VtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL3htbC9YRG9jdW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFMUMsSUFBQTs7O0lBSUksc0JBQUksMkJBQUk7Ozs7UUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjs7Ozs7UUFDRCxVQUFTLEtBQWM7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzlCOzs7T0FKQTs7OztJQU1ELHlCQUFLOzs7SUFBTDs7UUFDSSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRS9ELEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxPQUFPLEdBQUcsQ0FBQztLQUNkOzs7O0lBRUQsa0NBQWM7OztJQUFkOztRQUNJLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDOztRQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QyxPQUFPLE9BQU8sQ0FBQztLQUNsQjtvQkEzQkw7SUE0QkMsQ0FBQTtBQXpCRCxxQkF5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBYRWxlbWVudCB9IGZyb20gJy4vWEVsZW1lbnQnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBYRG9jdW1lbnQge1xyXG5cclxuICAgIHByaXZhdGUgbVJvb3Q6IFhFbGVtZW50O1xyXG5cclxuICAgIGdldCBSb290KCk6IFhFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tUm9vdDtcclxuICAgIH1cclxuICAgIHNldCBSb290KHZhbHVlOlhFbGVtZW50KXtcclxuICAgICAgICB0aGlzLm1Sb290ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5tUm9vdC5Eb2N1bWVudCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgQnVpbGQoKTogWE1MRG9jdW1lbnQgeyAgICAgICAgXHJcbiAgICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KFwiXCIsIFwiXCIsIG51bGwpO1xyXG5cclxuICAgICAgICBkb2MuYXBwZW5kQ2hpbGQodGhpcy5Sb290LlRvWG1sRWxlbWVudChkb2MpKTtcclxuICAgICAgICByZXR1cm4gZG9jO1xyXG4gICAgfVxyXG5cclxuICAgIEJ1aWxkWG1sU3RyaW5nKCk6c3RyaW5ne1xyXG4gICAgICAgIGxldCBidWlsZGVyID0gbmV3IENvbW1vbi5TdHJpbmdCdWlsZGVyKCk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLlJvb3QuVG9YbWxTdHJpbmcoYnVpbGRlcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfVxyXG59Il19