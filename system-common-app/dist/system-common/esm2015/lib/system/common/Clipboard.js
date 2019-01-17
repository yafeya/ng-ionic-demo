/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class Clipboard {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpcGJvYXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbW1vbi9DbGlwYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU07Ozs7O0lBSUYsYUFBYTs7UUFDVCxJQUFJLE9BQU8sR0FBYSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNyRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssV0FBVyxJQUFJLENBQUMsS0FBSyxZQUFZLElBQUksQ0FBQyxLQUFLLFdBQVcsSUFBSSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUM7S0FDL0c7Ozs7O0lBR0QsUUFBUTs7UUFDSixJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7UUFFM0MsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRW5DLE9BQU8sTUFBTSxDQUFDO0tBQ2pCOzs7O0lBQ0QsbUJBQW1CO1FBQ2YsT0FBTyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN2Qzs7Ozs7SUFJRCxXQUFXOztRQUNQLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQzs7UUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDUCxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxHQUFHLENBQUM7S0FDZDs7Ozs7SUFFRCxXQUFXOztRQUNQLElBQUksSUFBSSxDQUFNOztRQUNkLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7OztJQUVELGlCQUFpQjs7UUFDYixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7O1FBQ2QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksS0FBSyxFQUFFOztZQUNQLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7SUFDRCxLQUFLO1FBQ0QsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3JCOzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNoQixJQUFJO1lBQ0EsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUNwQixTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUk7O2dCQUVBLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7Z0JBQ3hCLElBQUksWUFBWSxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdCLElBQUksWUFBWSxFQUFFO29CQUNkLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDeEI7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0o7S0FDSjs7Ozs7SUFJRCxPQUFPO1FBQ0gsT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDL0I7Ozs7O0lBSUQsT0FBTztRQUNILE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQy9COzs7Ozs7SUFLRCxPQUFPLENBQUMsS0FBYTtRQUNqQixPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7O0lBSUQsTUFBTTtRQUNGLE9BQU8sU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzlCOzs7Ozs7SUFLRCxNQUFNLENBQUMsS0FBYTtRQUNoQixTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzlCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGVjbGFyZSBsZXQgY2xpcGJvYXJkOiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIENvbnRhaW5zSW1hZ2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHM6IHN0cmluZ1tdID0gY2xpcGJvYXJkLmF2YWlsYWJsZUZvcm1hdHMoKTtcclxuICAgICAgICByZXR1cm4gZm9ybWF0cy5zb21lKHggPT4geCA9PT0gJ2ltYWdlL3BuZycgfHwgeCA9PT0gJ2ltYWdlL2pwZWcnIHx8IHggPT09ICdpbWFnZS9qcGcnIHx8IHggPT09ICdpbWFnZS9naWYnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IGltYWdlIGRhdGEgZnJvbSBjbGlwYm9hcmQgKi9cclxuICAgIEdldEltYWdlKCk6IGFueSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHMgPSBjbGlwYm9hcmQuYXZhaWxhYmxlRm9ybWF0cygpO1xyXG5cclxuICAgICAgICBsZXQgbmF0aXZlID0gY2xpcGJvYXJkLnJlYWRJbWFnZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmF0aXZlO1xyXG4gICAgfVxyXG4gICAgR2V0QXZhaWxhYmxlRm9ybWF0cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIGNsaXBib2FyZC5hdmFpbGFibGVGb3JtYXRzKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBpbWFnZSBkYXRhIFVSTFxyXG4gICAgICovXHJcbiAgICBHZXRJbWFnZVVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgICBsZXQgaW1hZ2UgPSB0aGlzLkdldEltYWdlKCk7XHJcbiAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgIHVybCA9IGltYWdlLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgLyoqIEdldCBQTkcgZm9ybWF0IGltYWdlIGVuY29kZWQgd2l0aCBiYXNlNjQgKi9cclxuICAgIEdldFBuZ0ltYWdlKCk6IGFueSB7XHJcbiAgICAgICAgbGV0IGRhdGE6IGFueTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSB0aGlzLkdldEltYWdlKCk7XHJcbiAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBpbWFnZS50b1BORygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIC8qKiBHZXQgUE5HIGZvcm1hdCBpbWFnZSBlbmNvZGVkIHdpdGggYmFzZTY0ICovXHJcbiAgICBHZXRQbmdCYXNlNjRJbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBkYXRhID0gJyc7XHJcbiAgICAgICAgbGV0IGltYWdlID0gdGhpcy5HZXRJbWFnZSgpO1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICBsZXQgYnVmZmVyID0gaW1hZ2UudG9QTkcoKTtcclxuICAgICAgICAgICAgZGF0YSA9IGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgQ2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgY2xpcGJvYXJkLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICAvKiogIENsZWFycyB0aGUgQ2xpcGJvYXJkIGFuZCB0aGVuIGFkZHMgdGV4dCBkYXRhIGluIHRoZSBUZXh0IG9yIFVuaWNvZGVUZXh0IGZvcm1hdCwgZGVwZW5kaW5nIG9uIHRoZSBvcGVyYXRpbmcgc3lzdGVtLiovXHJcbiAgICBTZXRUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjbGlwYm9hcmQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuICAgICAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGb2N1czogYW55ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRlbXAuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRlbXAuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGVtcC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Rm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Rm9jdXMuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGV4dCBjb25lbnQgZnJvbSBjbGlwYm9hcmRcclxuICAgICAqL1xyXG4gICAgR2V0VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjbGlwYm9hcmQucmVhZFRleHQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IEhUTUwgZnJvbWF0IHRleHQgY29udGVudCBmcm9tIGNsaXBib2FyZFxyXG4gICAgICovXHJcbiAgICBHZXRIdG1sKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNsaXBib2FyZC5yZWFkSFRNTCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgSFRNTCBmb3JtYXQgY29udGVudCB0byBjbGlwYm9hcmRcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBIVE1MIGZvcm1hdCBjb250ZW50XHJcbiAgICAgKi9cclxuICAgIFNldEh0bWwodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiBjbGlwYm9hcmQud3JpdGVySFRNTCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBSVEYgZm9ybWF0IHRleHQgZnJvbSBjbGlwYm9hcmRcclxuICAgICAqL1xyXG4gICAgR2V0UlRGKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNsaXBib2FyZC5yZWFkUlRGKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldCBSVEYgZm9ybWF0IGNvbnRlbnQgdG8gY2xpcGJvYXJkXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgUlRGIGZvcm1hdCBjb250ZW50XHJcbiAgICAgKi9cclxuICAgIFNldFJURih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY2xpcGJvYXJkLndyaXRlclJURih2YWx1ZSk7XHJcbiAgICB9XHJcbn0iXX0=