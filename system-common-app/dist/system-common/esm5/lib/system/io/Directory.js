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
export { Directory };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlyZWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2lvL0RpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsSUFBQTs7OzBCQUVnQiwwQkFBRzs7Ozs7WUFDWCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDOzs7Ozs7OztJQUcvQixxQ0FBaUI7OztJQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDdkM7Ozs7SUFDRCxvQ0FBZ0I7OztJQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDdEM7Ozs7SUFDRCx1Q0FBbUI7OztJQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDeEM7Ozs7SUFDRCxvQ0FBZ0I7OztJQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDdkM7SUFDRCxrQ0FBa0M7Ozs7O0lBQ2xDLG9DQUFnQjs7OztJQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7SUFDRCwyQkFBMkI7Ozs7O0lBQzNCLGlDQUFhOzs7O0lBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ25DOzs7O0lBQ0QsOEJBQVU7OztJQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzdCOzs7OztJQUNELG9DQUFnQjs7OztJQUFoQixVQUFpQixLQUFhO1FBQzFCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pEOzs7OztJQUNELHlCQUFLOzs7O0lBQUwsVUFBTSxLQUFhO1FBQ2YsSUFBSTtZQUNBLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKOzs7OztJQUVELHFDQUFpQjs7OztJQUFqQixVQUFrQixLQUFhO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUk7Z0JBQ0EsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7U0FDSjtLQUNKOzs7Ozs7SUFDRCwyQkFBTzs7Ozs7SUFBUCxVQUFRLEtBQWEsRUFBRSxLQUFhO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDbEM7b0JBekRMO0lBMERDLENBQUE7QUFyREQscUJBcURDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRlY2xhcmUgdmFyIGVsZWN0cm9uOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGZzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHBhdGg6IGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJlY3Rvcnkge1xyXG5cclxuICAgIHByaXZhdGUgZ2V0IEFwcCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBlbGVjdHJvbi5yZW1vdGUuYXBwO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFVzZXJEYXRhRm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ3VzZXJEYXRhJyk7XHJcbiAgICB9XHJcbiAgICBHZXRBcHBEYXRhRm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ2FwcERhdGEnKTtcclxuICAgIH1cclxuICAgIEdldE15RG9jdW1lbnRGb2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BcHAuZ2V0UGF0aCgnZG9jdW1lbnRzJyk7XHJcbiAgICB9XHJcbiAgICBHZXRQaWN0dXJlRm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ3BpY3R1cmVzJyk7XHJcbiAgICB9XHJcbiAgICAvKiogR2V0IGN1cnJlbnQgZXhlY3V0YWJsZSBmaWxlICovXHJcbiAgICBHZXRDdXJyZW50Rm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ2V4ZScpO1xyXG4gICAgfVxyXG4gICAgLyoqIEdldCB0ZW1wb3JhcnkgZm9sZGVyICovXHJcbiAgICBHZXRUZW1wRm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ3RlbXAnKTtcclxuICAgIH1cclxuICAgIEdldEFwcE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BcHAuZ2V0TmFtZSgpO1xyXG4gICAgfVxyXG4gICAgU2hvd0l0ZW1JbkZvbGRlcih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgZWxlY3Ryb24ucmVtb3RlLnNoZWxsLnNob3dJdGVtSW5Gb2xkZXIodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgRXhpc3QodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZzLmFjY2Vzc1N5bmModmFsdWUsIGZzLkZfT0spO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRW5zdXJlRm9sZGVyRXhpc3QodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5FeGlzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZzLm1rZGlyU3luYyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDb21iaW5lKHBhdGgxOiBzdHJpbmcsIHBhdGgyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aDEsIHBhdGgyKTtcclxuICAgIH1cclxufSJdfQ==