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
export { XmlConverter };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWG1sQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbW1vbi9YbWxDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLElBQUE7OztJQUVJLDBCQUEwQjs7Ozs7O0lBQzFCLDZCQUFNOzs7OztJQUFOLFVBQU8sR0FBUTs7UUFDWCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCO3VCQVRMO0lBVUMsQ0FBQTtBQVBELHdCQU9DIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRlY2xhcmUgdmFyIFhtbDJKczogYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIFhtbENvbnZlcnRlciB7XHJcblxyXG4gICAgLyoqIENvbnZlcnQgWG1sIHRvIEpzb24gKi9cclxuICAgIFRvSnNvbih4bWw6IGFueSk6IGFueSB7XHJcbiAgICAgICAgbGV0IHBhcnNlciA9IFhtbDJKcy5QYXJzZXIoKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VyLnRvSnNvbih4bWwpO1xyXG4gICAgfVxyXG59Il19