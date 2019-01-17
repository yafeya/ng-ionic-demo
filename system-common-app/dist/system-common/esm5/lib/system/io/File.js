/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Angular CLI doesn't support import node module right now, have to use
 * declare
 * https://github.com/angular/angular-cli/issues/3482
 */
var /**
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
 * Angular CLI doesn't support import node module right now, have to use
 * declare
 * https://github.com/angular/angular-cli/issues/3482
 */
export { File };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9pby9GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVFBOzs7OztBQUFBOzs7SUFDSTs7O09BR0c7Ozs7OztJQUNJLFdBQU07Ozs7O0lBQWIsVUFBYyxRQUFnQjs7UUFDMUIsSUFBSSxPQUFPLENBQVU7UUFDckIsSUFBSTtZQUNBLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQztLQUNsQjs7Ozs7O0lBRU0sV0FBTTs7Ozs7SUFBYixVQUFjLFFBQWdCLEVBQUUsT0FBZTtRQUMzQyxJQUFJO1lBQ0EsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdkM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDSjs7Ozs7SUFFTSxXQUFNOzs7O0lBQWIsVUFBYyxRQUFnQjtRQUMxQixJQUFJO1lBQ0EsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNKOzs7Ozs7SUFFTSxnQkFBVzs7Ozs7SUFBbEIsVUFBbUIsUUFBZ0IsRUFBRSxRQUFnQjs7UUFDakQsSUFBSSxPQUFPLENBQVM7UUFDcEIsSUFBSTtZQUNBLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNqRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxPQUFPLENBQUM7S0FDbEI7Ozs7Ozs7SUFFTSxTQUFJOzs7Ozs7SUFBWCxVQUFZLE1BQWMsRUFBRSxNQUFjLEVBQUUsU0FBa0I7UUFDMUQsSUFBSTs7WUFDQSxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7O1lBQ3hCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksU0FBUyxFQUFFO29CQUNYLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO2FBQ0o7aUJBQU07Z0JBQ0gsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN0QjtZQUVELElBQUksV0FBVyxFQUFFO2dCQUNiLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNKOzs7OztJQUVNLGVBQVU7Ozs7SUFBakIsVUFBa0IsUUFBZ0I7O1FBQzlCLElBQUksTUFBTSxHQUFXLFNBQVMsQ0FBQztRQUMvQixJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFDO2dCQUM1QixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzNEO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztLQUNqQjtlQWpGTDtJQWtGQyxDQUFBOzs7Ozs7QUExRUQsZ0JBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgZnM6IGFueTtcclxuLy9pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbi8qKlxyXG4gKiBBbmd1bGFyIENMSSBkb2Vzbid0IHN1cHBvcnQgaW1wb3J0IG5vZGUgbW9kdWxlIHJpZ2h0IG5vdywgaGF2ZSB0byB1c2VcclxuICogZGVjbGFyZSBcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci1jbGkvaXNzdWVzLzM0ODJcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZSB7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIHdoZXRoZXIgZ2l2ZW4gZmlsZSBpcyBleGlzdC5cclxuICAgICAqIEBwYXJhbSBmaWxlbmFtZSBmdWxsIGZpbGUgbmFtZSB3aXRoIHBhdGhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEV4aXN0cyhmaWxlbmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGV4aXN0ZWQ6IGJvb2xlYW47XHJcbiAgICAgICAgdHJ5IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZXhpc3RlZCA9IGZzLmV4aXN0c1N5bmMoZmlsZW5hbWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgZXhpc3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhpc3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ3JlYXRlKGZpbGVuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZW5hbWUsIGNvbnRlbnQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIERlbGV0ZShmaWxlbmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZnMudW5saW5rU3luYyhmaWxlbmFtZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUmVhZEFsbFRleHQoZmlsZW5hbWU6IHN0cmluZywgZW5jb2Rpbmc6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQ6IHN0cmluZztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCBlbmNvZGluZyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBjb250ZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ29weShzb3VyY2U6IHN0cmluZywgdGFyZ2V0OiBzdHJpbmcsIG92ZXJ3cml0ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBnb29kVG9Xcml0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgc291cmNlU3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShzb3VyY2UpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5FeGlzdHModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZzLnVubGlua1N5bmModGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICBnb29kVG9Xcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnb29kVG9Xcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChnb29kVG9Xcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlU3RyZWFtLnBpcGUoZnMuY3JlYXRlV3JpdGVTdHJlYW0odGFyZ2V0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBGaW5kRm9sZGVyKGZpbGVuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZm9sZGVyOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lICYmIHRoaXMuRXhpc3RzKGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICBmb2xkZXIgPSBmaWxlbmFtZS5zdWJzdHIoMCwgZmlsZW5hbWUubGFzdEluZGV4T2YoJy8nKSk7XHJcbiAgICAgICAgICAgIGlmKFN0cmluZy5Jc051bGxPckVtcHR5KGZvbGRlcikpe1xyXG4gICAgICAgICAgICAgICAgZm9sZGVyID0gZmlsZW5hbWUuc3Vic3RyKDAsIGZpbGVuYW1lLmxhc3RJbmRleE9mKCdcXFxcJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb2xkZXI7XHJcbiAgICB9XHJcbn0iXX0=