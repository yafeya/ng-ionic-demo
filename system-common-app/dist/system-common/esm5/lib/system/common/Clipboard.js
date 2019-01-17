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
export { Clipboard };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpcGJvYXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbW1vbi9DbGlwYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLElBQUE7OztJQUNJOztPQUVHOzs7OztJQUNILGlDQUFhOzs7O0lBQWI7O1FBQ0ksSUFBSSxPQUFPLEdBQWEsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDckQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFdBQVcsSUFBSSxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsS0FBSyxXQUFXLElBQUksQ0FBQyxLQUFLLFdBQVcsRUFBakYsQ0FBaUYsQ0FBQyxDQUFDO0tBQy9HO0lBRUQsb0NBQW9DOzs7OztJQUNwQyw0QkFBUTs7OztJQUFSOztRQUNJLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztRQUUzQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFbkMsT0FBTyxNQUFNLENBQUM7S0FDakI7Ozs7SUFDRCx1Q0FBbUI7OztJQUFuQjtRQUNJLE9BQU8sU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDdkM7SUFDRDs7T0FFRzs7Ozs7SUFDSCwrQkFBVzs7OztJQUFYOztRQUNJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQzs7UUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDUCxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxHQUFHLENBQUM7S0FDZDtJQUNELCtDQUErQzs7Ozs7SUFDL0MsK0JBQVc7Ozs7SUFBWDs7UUFDSSxJQUFJLElBQUksQ0FBTTs7UUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELCtDQUErQzs7Ozs7SUFDL0MscUNBQWlCOzs7O0lBQWpCOztRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7UUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEVBQUU7O1lBQ1AsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7OztJQUNELHlCQUFLOzs7SUFBTDtRQUNJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNyQjtJQUNELHlIQUF5SDs7Ozs7O0lBQ3pILDJCQUFPOzs7OztJQUFQLFVBQVEsSUFBWTtRQUNoQixJQUFJO1lBQ0EsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUNwQixTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUk7O2dCQUVBLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7Z0JBQ3hCLElBQUksWUFBWSxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdCLElBQUksWUFBWSxFQUFFO29CQUNkLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDeEI7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0o7S0FDSjtJQUNEOztPQUVHOzs7OztJQUNILDJCQUFPOzs7O0lBQVA7UUFDSSxPQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMvQjtJQUNEOztPQUVHOzs7OztJQUNILDJCQUFPOzs7O0lBQVA7UUFDSSxPQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMvQjtJQUNEOzs7T0FHRzs7Ozs7O0lBQ0gsMkJBQU87Ozs7O0lBQVAsVUFBUSxLQUFhO1FBQ2pCLE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QztJQUNEOztPQUVHOzs7OztJQUNILDBCQUFNOzs7O0lBQU47UUFDSSxPQUFPLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM5QjtJQUNEOzs7T0FHRzs7Ozs7O0lBQ0gsMEJBQU07Ozs7O0lBQU4sVUFBTyxLQUFhO1FBQ2hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUI7b0JBcEhMO0lBcUhDLENBQUE7QUFsSEQscUJBa0hDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRlY2xhcmUgbGV0IGNsaXBib2FyZDogYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIENsaXBib2FyZCB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBDb250YWluc0ltYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBmb3JtYXRzOiBzdHJpbmdbXSA9IGNsaXBib2FyZC5hdmFpbGFibGVGb3JtYXRzKCk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHMuc29tZSh4ID0+IHggPT09ICdpbWFnZS9wbmcnIHx8IHggPT09ICdpbWFnZS9qcGVnJyB8fCB4ID09PSAnaW1hZ2UvanBnJyB8fCB4ID09PSAnaW1hZ2UvZ2lmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBpbWFnZSBkYXRhIGZyb20gY2xpcGJvYXJkICovXHJcbiAgICBHZXRJbWFnZSgpOiBhbnkge1xyXG4gICAgICAgIGxldCBmb3JtYXRzID0gY2xpcGJvYXJkLmF2YWlsYWJsZUZvcm1hdHMoKTtcclxuXHJcbiAgICAgICAgbGV0IG5hdGl2ZSA9IGNsaXBib2FyZC5yZWFkSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5hdGl2ZTtcclxuICAgIH1cclxuICAgIEdldEF2YWlsYWJsZUZvcm1hdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjbGlwYm9hcmQuYXZhaWxhYmxlRm9ybWF0cygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW1hZ2UgZGF0YSBVUkxcclxuICAgICAqL1xyXG4gICAgR2V0SW1hZ2VVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgICAgbGV0IGltYWdlID0gdGhpcy5HZXRJbWFnZSgpO1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICB1cmwgPSBpbWFnZS50b0RhdGFVUkwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIC8qKiBHZXQgUE5HIGZvcm1hdCBpbWFnZSBlbmNvZGVkIHdpdGggYmFzZTY0ICovXHJcbiAgICBHZXRQbmdJbWFnZSgpOiBhbnkge1xyXG4gICAgICAgIGxldCBkYXRhOiBhbnk7XHJcbiAgICAgICAgbGV0IGltYWdlID0gdGhpcy5HZXRJbWFnZSgpO1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gaW1hZ2UudG9QTkcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICAvKiogR2V0IFBORyBmb3JtYXQgaW1hZ2UgZW5jb2RlZCB3aXRoIGJhc2U2NCAqL1xyXG4gICAgR2V0UG5nQmFzZTY0SW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZGF0YSA9ICcnO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IHRoaXMuR2V0SW1hZ2UoKTtcclxuICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IGltYWdlLnRvUE5HKCk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIENsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNsaXBib2FyZC5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgLyoqICBDbGVhcnMgdGhlIENsaXBib2FyZCBhbmQgdGhlbiBhZGRzIHRleHQgZGF0YSBpbiB0aGUgVGV4dCBvciBVbmljb2RlVGV4dCBmb3JtYXQsIGRlcGVuZGluZyBvbiB0aGUgb3BlcmF0aW5nIHN5c3RlbS4qL1xyXG4gICAgU2V0VGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY2xpcGJvYXJkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcCk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Rm9jdXM6IGFueSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLnNldFNlbGVjdGlvblJhbmdlKDAsIHRlbXAudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZvY3VzLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRleHQgY29uZW50IGZyb20gY2xpcGJvYXJkXHJcbiAgICAgKi9cclxuICAgIEdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2xpcGJvYXJkLnJlYWRUZXh0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBIVE1MIGZyb21hdCB0ZXh0IGNvbnRlbnQgZnJvbSBjbGlwYm9hcmRcclxuICAgICAqL1xyXG4gICAgR2V0SHRtbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjbGlwYm9hcmQucmVhZEhUTUwoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0IEhUTUwgZm9ybWF0IGNvbnRlbnQgdG8gY2xpcGJvYXJkXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgSFRNTCBmb3JtYXQgY29udGVudFxyXG4gICAgICovXHJcbiAgICBTZXRIdG1sKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gY2xpcGJvYXJkLndyaXRlckhUTUwodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgUlRGIGZvcm1hdCB0ZXh0IGZyb20gY2xpcGJvYXJkXHJcbiAgICAgKi9cclxuICAgIEdldFJURigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjbGlwYm9hcmQucmVhZFJURigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgUlRGIGZvcm1hdCBjb250ZW50IHRvIGNsaXBib2FyZFxyXG4gICAgICogQHBhcmFtIHZhbHVlIFJURiBmb3JtYXQgY29udGVudFxyXG4gICAgICovXHJcbiAgICBTZXRSVEYodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNsaXBib2FyZC53cml0ZXJSVEYodmFsdWUpO1xyXG4gICAgfVxyXG59Il19