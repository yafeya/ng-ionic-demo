/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Angular CLI doesn't support import node module right now, have to use
 * declare
 * https://github.com/angular/angular-cli/issues/3482
 */
export class File {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9pby9GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVFBLE1BQU07Ozs7OztJQUtGLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBZ0I7O1FBQzFCLElBQUksT0FBTyxDQUFVO1FBQ3JCLElBQUk7WUFDQSxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxPQUFPLENBQUM7S0FDbEI7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBZ0IsRUFBRSxPQUFlO1FBQzNDLElBQUk7WUFDQSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN2QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNKOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBZ0I7UUFDMUIsSUFBSTtZQUNBLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDSjs7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFnQixFQUFFLFFBQWdCOztRQUNqRCxJQUFJLE9BQU8sQ0FBUztRQUNwQixJQUFJO1lBQ0EsT0FBTyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sR0FBRyxTQUFTLENBQUM7U0FDdkI7UUFDRCxPQUFPLE9BQU8sQ0FBQztLQUNsQjs7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBYyxFQUFFLE1BQWMsRUFBRSxTQUFrQjtRQUMxRCxJQUFJOztZQUNBLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQzs7WUFDeEIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckIsSUFBSSxTQUFTLEVBQUU7b0JBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDdEI7YUFDSjtpQkFBTTtnQkFDSCxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsSUFBSSxXQUFXLEVBQUU7Z0JBQ2IsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuRDtTQUNKO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0tBQ0o7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFnQjs7UUFDOUIsSUFBSSxNQUFNLEdBQVcsU0FBUyxDQUFDO1FBQy9CLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbkMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUM7Z0JBQzVCLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDM0Q7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBmczogYW55O1xyXG4vL2ltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuLyoqXHJcbiAqIEFuZ3VsYXIgQ0xJIGRvZXNuJ3Qgc3VwcG9ydCBpbXBvcnQgbm9kZSBtb2R1bGUgcmlnaHQgbm93LCBoYXZlIHRvIHVzZVxyXG4gKiBkZWNsYXJlIFxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLWNsaS9pc3N1ZXMvMzQ4MlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgd2hldGhlciBnaXZlbiBmaWxlIGlzIGV4aXN0LlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lIGZ1bGwgZmlsZSBuYW1lIHdpdGggcGF0aFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRXhpc3RzKGZpbGVuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgZXhpc3RlZDogYm9vbGVhbjtcclxuICAgICAgICB0cnkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBleGlzdGVkID0gZnMuZXhpc3RzU3luYyhmaWxlbmFtZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBleGlzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleGlzdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDcmVhdGUoZmlsZW5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlbmFtZSwgY29udGVudCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgRGVsZXRlKGZpbGVuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmcy51bmxpbmtTeW5jKGZpbGVuYW1lKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBSZWFkQWxsVGV4dChmaWxlbmFtZTogc3RyaW5nLCBlbmNvZGluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY29udGVudDogc3RyaW5nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsIGVuY29kaW5nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDb3B5KHNvdXJjZTogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGdvb2RUb1dyaXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBzb3VyY2VTdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHNvdXJjZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkV4aXN0cyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcndyaXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnMudW5saW5rU3luYyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdvb2RUb1dyaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdvb2RUb1dyaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGdvb2RUb1dyaXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VTdHJlYW0ucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbSh0YXJnZXQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEZpbmRGb2xkZXIoZmlsZW5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBmb2xkZXI6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgJiYgdGhpcy5FeGlzdHMoZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIGZvbGRlciA9IGZpbGVuYW1lLnN1YnN0cigwLCBmaWxlbmFtZS5sYXN0SW5kZXhPZignLycpKTtcclxuICAgICAgICAgICAgaWYoU3RyaW5nLklzTnVsbE9yRW1wdHkoZm9sZGVyKSl7XHJcbiAgICAgICAgICAgICAgICBmb2xkZXIgPSBmaWxlbmFtZS5zdWJzdHIoMCwgZmlsZW5hbWUubGFzdEluZGV4T2YoJ1xcXFwnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvbGRlcjtcclxuICAgIH1cclxufSJdfQ==