/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class Directory {
    /**
     * @return {?}
     */
    get App() {
        return electron.remote.app;
    }
    /**
     * @return {?}
     */
    GetUserDataFolder() {
        return this.App.getPath('userData');
    }
    /**
     * @return {?}
     */
    GetAppDataFolder() {
        return this.App.getPath('appData');
    }
    /**
     * @return {?}
     */
    GetMyDocumentFolder() {
        return this.App.getPath('documents');
    }
    /**
     * @return {?}
     */
    GetPictureFolder() {
        return this.App.getPath('pictures');
    }
    /**
     * Get current executable file
     * @return {?}
     */
    GetCurrentFolder() {
        return this.App.getPath('exe');
    }
    /**
     * Get temporary folder
     * @return {?}
     */
    GetTempFolder() {
        return this.App.getPath('temp');
    }
    /**
     * @return {?}
     */
    GetAppName() {
        return this.App.getName();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ShowItemInFolder(value) {
        electron.remote.shell.showItemInFolder(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    Exist(value) {
        try {
            fs.accessSync(value, fs.F_OK);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EnsureFolderExist(value) {
        if (!this.Exist(value)) {
            try {
                fs.mkdirSync(value);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    /**
     * @param {?} path1
     * @param {?} path2
     * @return {?}
     */
    Combine(path1, path2) {
        return path.join(path1, path2);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlyZWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2lvL0RpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsTUFBTTs7OztRQUVVLEdBQUc7UUFDWCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDOzs7OztJQUcvQixpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBQ0QsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN0Qzs7OztJQUNELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDeEM7Ozs7SUFDRCxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3ZDOzs7OztJQUVELGdCQUFnQjtRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7Ozs7O0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkM7Ozs7SUFDRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzdCOzs7OztJQUNELGdCQUFnQixDQUFDLEtBQWE7UUFDMUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakQ7Ozs7O0lBQ0QsS0FBSyxDQUFDLEtBQWE7UUFDZixJQUFJO1lBQ0EsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0tBQ0o7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixJQUFJO2dCQUNBLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1NBQ0o7S0FDSjs7Ozs7O0lBQ0QsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDbEM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kZWNsYXJlIHZhciBlbGVjdHJvbjogYW55O1xyXG5kZWNsYXJlIHZhciBmczogYW55O1xyXG5kZWNsYXJlIHZhciBwYXRoOiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlyZWN0b3J5IHtcclxuXHJcbiAgICBwcml2YXRlIGdldCBBcHAoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gZWxlY3Ryb24ucmVtb3RlLmFwcDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRVc2VyRGF0YUZvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkFwcC5nZXRQYXRoKCd1c2VyRGF0YScpO1xyXG4gICAgfVxyXG4gICAgR2V0QXBwRGF0YUZvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkFwcC5nZXRQYXRoKCdhcHBEYXRhJyk7XHJcbiAgICB9XHJcbiAgICBHZXRNeURvY3VtZW50Rm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ2RvY3VtZW50cycpO1xyXG4gICAgfVxyXG4gICAgR2V0UGljdHVyZUZvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkFwcC5nZXRQYXRoKCdwaWN0dXJlcycpO1xyXG4gICAgfVxyXG4gICAgLyoqIEdldCBjdXJyZW50IGV4ZWN1dGFibGUgZmlsZSAqL1xyXG4gICAgR2V0Q3VycmVudEZvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkFwcC5nZXRQYXRoKCdleGUnKTtcclxuICAgIH1cclxuICAgIC8qKiBHZXQgdGVtcG9yYXJ5IGZvbGRlciAqL1xyXG4gICAgR2V0VGVtcEZvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkFwcC5nZXRQYXRoKCd0ZW1wJyk7XHJcbiAgICB9XHJcbiAgICBHZXRBcHBOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldE5hbWUoKTtcclxuICAgIH1cclxuICAgIFNob3dJdGVtSW5Gb2xkZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGVsZWN0cm9uLnJlbW90ZS5zaGVsbC5zaG93SXRlbUluRm9sZGVyKHZhbHVlKTtcclxuICAgIH1cclxuICAgIEV4aXN0KHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmcy5hY2Nlc3NTeW5jKHZhbHVlLCBmcy5GX09LKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEVuc3VyZUZvbGRlckV4aXN0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuRXhpc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmModmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ29tYmluZShwYXRoMTogc3RyaW5nLCBwYXRoMjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgxLCBwYXRoMik7XHJcbiAgICB9XHJcbn0iXX0=