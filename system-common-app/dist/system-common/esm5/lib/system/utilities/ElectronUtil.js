/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as Common from '../common/index';
var ElectronUtil = /** @class */ (function () {
    function ElectronUtil() {
        this.algorithm = 'aes-256-ctr';
        this.password = 'a3b8d9w34';
    }
    Object.defineProperty(ElectronUtil.prototype, "Electron", {
        get: /**
         * @return {?}
         */
        function () {
            return electron;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronUtil.prototype, "App", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.remote.app;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronUtil.prototype, "MainMenu", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.remote.Menu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronUtil.prototype, "IpcClient", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.ipcRenderer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronUtil.prototype, "Remote", {
        get: /**
         * @return {?}
         */
        function () {
            return electron.remote;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetUserDataFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('userData');
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetAppDataFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('appData');
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetMyDocumentFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('documents');
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetPictureFolder = /**
     * @return {?}
     */
    function () {
        return this.App.getPath('pictures');
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.GetAppName = /**
     * @return {?}
     */
    function () {
        return this.App.getName();
    };
    /**
     * @param {?=} filters
     * @return {?}
     */
    ElectronUtil.prototype.OpenFileDialog = /**
     * @param {?=} filters
     * @return {?}
     */
    function (filters) {
        if (filters === void 0) { filters = null; }
        /** @type {?} */
        var dialog = electron.remote.dialog;
        /** @type {?} */
        var fileName = dialog.showOpenDialog({
            properties: ['openFile'],
            filters: filters
        });
        return fileName.toString();
    };
    /**
     * @param {?=} filters
     * @return {?}
     */
    ElectronUtil.prototype.OpenFilesDialog = /**
     * @param {?=} filters
     * @return {?}
     */
    function (filters) {
        if (filters === void 0) { filters = null; }
        /** @type {?} */
        var dialog = electron.remote.dialog;
        /** @type {?} */
        var fileNames = dialog.showOpenDialog({
            properties: ['openFile', 'multiSelections'],
            filters: filters
        });
        return fileNames;
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.TextFileFilter = /**
     * @return {?}
     */
    function () {
        return [{ name: 'Text Documents', extensions: ['txt', 'cs', 'ts', 'js', 'scss', 'css', 'html', 'htm'] }];
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.ImageFileFilter = /**
     * @return {?}
     */
    function () {
        return [{ name: 'Images', extensions: ['jpg', 'png', 'gif', 'bmp'] }];
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.OpenImageDialog = /**
     * @return {?}
     */
    function () {
        return this.OpenFileDialog(this.ImageFileFilter());
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.OpenImagesDialog = /**
     * @return {?}
     */
    function () {
        return this.OpenFilesDialog(this.ImageFileFilter());
    };
    /**
     * @param {?} menu
     * @return {?}
     */
    ElectronUtil.prototype.SetApplicationMenu = /**
     * @param {?} menu
     * @return {?}
     */
    function (menu) {
        electron.remote.Menu.setApplicationMenu(menu);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ElectronUtil.prototype.OpenExternal = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        electron.remote.shell.openExternal(url);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElectronUtil.prototype.ShowItemInFolder = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        electron.remote.shell.showItemInFolder(path);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileAsync = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            if (!self.Exist(file))
                reject(new Error("File doesn't exist."));
            fs.readFile(file, 'binary', function (error, data) {
                if (error)
                    reject(error);
                /** @type {?} */
                var content = EncodingHelper.decode(data, 'utf8');
                resolve(content);
            });
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileLineByLine = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            var lines = [];
            /** @type {?} */
            var stream = fs.createReadStream(file)
                .pipe(EventStream.split())
                .pipe(EventStream.mapSync(function (line) {
                stream.pause();
                lines.push(line);
                stream.resume();
            })
                .on('error', function () {
                reject('Read file error.');
            })
                .on('end', function () {
                resolve(lines.join(''));
            }));
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileAsBase64Async = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var fullPath = this.NormalizePath(file.toString());
        console.log('Full path: ' + fullPath);
        return new Promise(function (resolve, reject) {
            if (!self.Exist(fullPath))
                reject(new Error("File doesn't exist.' + fullPath"));
            console.log('File to open ' + fullPath);
            /** @type {?} */
            var data = fs.readFileSync(fullPath, 'base64');
            /** @type {?} */
            var buffer = new Buffer(data, 'base64');
            /** @type {?} */
            var base64Data = buffer.toString('base64');
            resolve(base64Data);
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileAsBase64 = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var fullPath = this.NormalizePath(file.toString());
        if (!self.Exist(fullPath))
            throw Error("File doesn't exist." + fullPath);
        /** @type {?} */
        var data = fs.readFileSync(fullPath, 'base64');
        /** @type {?} */
        var buffer = new Buffer(data, 'base64');
        /** @type {?} */
        var base64Data = buffer.toString('base64');
        return base64Data;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.ReadFileStream = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return fs.createReadStream(file);
    };
    /**
     * @param {?} file
     * @param {?} data
     * @return {?}
     */
    ElectronUtil.prototype.WriteFileAsync = /**
     * @param {?} file
     * @param {?} data
     * @return {?}
     */
    function (file, data) {
        console.log('Write data to file.');
        /** @type {?} */
        var self = this;
        return new Promise(function (resolve, reject) {
            fs.writeFile(file, data, function (error) {
                if (error)
                    reject(error);
                resolve(true);
            });
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetMimeType = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        try {
            return Mime.lookup(file);
        }
        catch (error) {
            console.log('Get MIME error: ' + error);
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetFilename = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        try {
            return Path.basename(file);
        }
        catch (error) {
            console.log('Get file name error: ' + error);
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetFilenameWithoutExtension = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var filename = this.GetFilename(file);
        return Path.parse(filename).name;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetFileSize = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var stats = fs.statSync(file);
        return stats['size'];
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElectronUtil.prototype.GetFileSizeString = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        try {
            /** @type {?} */
            var size = this.GetFileSize(file);
            /** @type {?} */
            var sizeString = FileSize(size);
            return sizeString;
        }
        catch (error) {
            console.log('Get file name error: ' + error);
        }
    };
    /**
     * @param {?} size
     * @return {?}
     */
    ElectronUtil.prototype.ConverToFileSizeString = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return FileSize(size);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElectronUtil.prototype.Encrypt = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value)
            return '';
        /** @type {?} */
        var cipher = Crypts.createCipher(this.algorithm, this.password);
        /** @type {?} */
        var crypted = cipher.update(value, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElectronUtil.prototype.Decrypt = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value)
            return '';
        /** @type {?} */
        var decipher = Crypts.createDecipher(this.algorithm, this.password);
        /** @type {?} */
        var dec = decipher.update(value, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElectronUtil.prototype.Exist = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        try {
            fs.accessSync(path, fs.F_OK);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElectronUtil.prototype.EnsureFolderExist = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        if (!this.Exist(path)) {
            try {
                fs.mkdirSync(path);
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    /**
     * @param {?} base
     * @param {?} paths
     * @return {?}
     */
    ElectronUtil.prototype.CombinePath = /**
     * @param {?} base
     * @param {?} paths
     * @return {?}
     */
    function (base, paths) {
        /** @type {?} */
        var value;
        try {
            value = NjPath.join(base, paths);
        }
        catch (error) {
            console.log(error);
        }
        return value;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElectronUtil.prototype.NormalizePath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return NjPath.normalize(path);
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.CreateGuidString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var guid = Common.Guid.New();
        return guid.Value;
    };
    /**
     * @return {?}
     */
    ElectronUtil.prototype.CreateGuid = /**
     * @return {?}
     */
    function () {
        return Common.Guid.New();
    };
    ElectronUtil.decorators = [
        { type: Injectable }
    ];
    return ElectronUtil;
}());
export { ElectronUtil };
if (false) {
    /** @type {?} */
    ElectronUtil.prototype.algorithm;
    /** @type {?} */
    ElectronUtil.prototype.password;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25VdGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL3V0aWxpdGllcy9FbGVjdHJvblV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQzs7O3lCQWdCMUIsYUFBYTt3QkFDZCxXQUFXOztJQUV0QixzQkFBSSxrQ0FBUTs7OztRQUFaO1lBQ0ksT0FBTyxRQUFRLENBQUM7U0FDbkI7OztPQUFBO0lBQ0Qsc0JBQUksNkJBQUc7Ozs7UUFBUDtZQUNJLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDOUI7OztPQUFBO0lBQ0Qsc0JBQUksa0NBQVE7Ozs7UUFBWjtZQUNJLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDL0I7OztPQUFBO0lBQ0Qsc0JBQUksbUNBQVM7Ozs7UUFBYjtZQUNJLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUMvQjs7O09BQUE7SUFDRCxzQkFBSSxnQ0FBTTs7OztRQUFWO1lBQ0ksT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQzFCOzs7T0FBQTs7OztJQUNELHdDQUFpQjs7O0lBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN2Qzs7OztJQUNELHVDQUFnQjs7O0lBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN0Qzs7OztJQUNELDBDQUFtQjs7O0lBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN4Qzs7OztJQUNELHVDQUFnQjs7O0lBQWhCO1FBQ0ksT0FBTyxJ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Q0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELHVDQUFnQjs7O0lBQWhCOztRQUNJLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBQ0QsaUNBQVU7OztJQUFWO1FBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQzVCOztnQkF4UEosVUFBVTs7dUJBZlg7O1NBZ0JhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9jb21tb24vaW5kZXgnO1xyXG5cclxuZGVjbGFyZSBsZXQgZWxlY3Ryb246IGFueTtcclxuZGVjbGFyZSBsZXQgZnM6IGFueTtcclxuZGVjbGFyZSBsZXQgQ3J5cHRzOiBhbnk7XHJcbmRlY2xhcmUgbGV0IE5qUGF0aDogYW55O1xyXG5kZWNsYXJlIGxldCBNaW1lOiBhbnk7XHJcbmRlY2xhcmUgbGV0IFBhdGg6IGFueTtcclxuZGVjbGFyZSBsZXQgRmlsZVNpemU6IGFueTtcclxuZGVjbGFyZSBsZXQgRXZlbnRTdHJlYW06IGFueTtcclxuZGVjbGFyZSBsZXQgRW5jb2RpbmdIZWxwZXI6IGFueTtcclxuZGVjbGFyZSBjb25zdCBCdWZmZXI6IGFueTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbGVjdHJvblV0aWwge1xyXG4gICAgYWxnb3JpdGhtID0gJ2Flcy0yNTYtY3RyJztcclxuICAgIHBhc3N3b3JkID0gJ2EzYjhkOXczNCc7XHJcblxyXG4gICAgZ2V0IEVsZWN0cm9uKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZWN0cm9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IEFwcCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBlbGVjdHJvbi5yZW1vdGUuYXBwO1xyXG4gICAgfVxyXG4gICAgZ2V0IE1haW5NZW51KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZWN0cm9uLnJlbW90ZS5NZW51O1xyXG4gICAgfVxyXG4gICAgZ2V0IElwY0NsaWVudCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBlbGVjdHJvbi5pcGNSZW5kZXJlcjtcclxuICAgIH1cclxuICAgIGdldCBSZW1vdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gZWxlY3Ryb24ucmVtb3RlO1xyXG4gICAgfVxyXG4gICAgR2V0VXNlckRhdGFGb2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BcHAuZ2V0UGF0aCgndXNlckRhdGEnKTtcclxuICAgIH1cclxuICAgIEdldEFwcERhdGFGb2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BcHAuZ2V0UGF0aCgnYXBwRGF0YScpO1xyXG4gICAgfVxyXG4gICAgR2V0TXlEb2N1bWVudEZvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkFwcC5nZXRQYXRoKCdkb2N1bWVudHMnKTtcclxuICAgIH1cclxuICAgIEdldFBpY3R1cmVGb2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BcHAuZ2V0UGF0aCgncGljdHVyZXMnKTtcclxuICAgIH1cclxuICAgIEdldEFwcE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BcHAuZ2V0TmFtZSgpO1xyXG4gICAgfVxyXG4gICAgT3BlbkZpbGVEaWFsb2coZmlsdGVyczogYW55ID0gbnVsbCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IGVsZWN0cm9uLnJlbW90ZS5kaWFsb2c7XHJcbiAgICAgICAgbGV0IGZpbGVOYW1lID0gZGlhbG9nLnNob3dPcGVuRGlhbG9nKHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogWydvcGVuRmlsZSddLFxyXG4gICAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVOYW1lLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBPcGVuRmlsZXNEaWFsb2coZmlsdGVyczogYW55ID0gbnVsbCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gZWxlY3Ryb24ucmVtb3RlLmRpYWxvZztcclxuICAgICAgICBsZXQgZmlsZU5hbWVzID0gZGlhbG9nLnNob3dPcGVuRGlhbG9nKHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogWydvcGVuRmlsZScsICdtdWx0aVNlbGVjdGlvbnMnXSxcclxuICAgICAgICAgICAgZmlsdGVyczogZmlsdGVyc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaWxlTmFtZXM7XHJcbiAgICB9XHJcbiAgICBUZXh0RmlsZUZpbHRlcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBbeyBuYW1lOiAnVGV4dCBEb2N1bWVudHMnLCBleHRlbnNpb25zOiBbJ3R4dCcsICdjcycsICd0cycsICdqcycsICdzY3NzJywgJ2NzcycsICdodG1sJywgJ2h0bSddIH1dO1xyXG4gICAgfVxyXG4gICAgSW1hZ2VGaWxlRmlsdGVyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIFt7IG5hbWU6ICdJbWFnZXMnLCBleHRlbnNpb25zOiBbJ2pwZycsICdwbmcnLCAnZ2lmJywgJ2JtcCddIH1dO1xyXG4gICAgfVxyXG4gICAgT3BlbkltYWdlRGlhbG9nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuT3BlbkZpbGVEaWFsb2codGhpcy5JbWFnZUZpbGVGaWx0ZXIoKSk7XHJcbiAgICB9XHJcbiAgICBPcGVuSW1hZ2VzRGlhbG9nKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5PcGVuRmlsZXNEaWFsb2codGhpcy5JbWFnZUZpbGVGaWx0ZXIoKSk7XHJcbiAgICB9XHJcbiAgICBTZXRBcHBsaWNhdGlvbk1lbnUobWVudTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgZWxlY3Ryb24ucmVtb3RlLk1lbnUuc2V0QXBwbGljYXRpb25NZW51KG1lbnUpO1xyXG4gICAgfVxyXG5cclxuICAgIE9wZW5FeHRlcm5hbCh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGVsZWN0cm9uLnJlbW90ZS5zaGVsbC5vcGVuRXh0ZXJuYWwodXJsKTtcclxuICAgIH1cclxuICAgIFNob3dJdGVtSW5Gb2xkZXIocGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgZWxlY3Ryb24ucmVtb3RlLnNoZWxsLnNob3dJdGVtSW5Gb2xkZXIocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhZEZpbGVBc3luYyhmaWxlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuRXhpc3QoZmlsZSkpXHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBGaWxlIGRvZXNuJ3QgZXhpc3QuYCkpO1xyXG5cclxuICAgICAgICAgICAgZnMucmVhZEZpbGUoZmlsZSwgJ2JpbmFyeScsIChlcnJvciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBFbmNvZGluZ0hlbHBlci5kZWNvZGUoZGF0YSwgJ3V0ZjgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBSZWFkRmlsZUxpbmVCeUxpbmUoZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IGxpbmVzID0gW107XHJcbiAgICAgICAgICAgIGxldCBzdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAucGlwZShFdmVudFN0cmVhbS5zcGxpdCgpKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoRXZlbnRTdHJlYW0ubWFwU3luYyhcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW0ucGF1c2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW0ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAub24oJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ1JlYWQgZmlsZSBlcnJvci4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGxpbmVzLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFJlYWRGaWxlQXNCYXNlNjRBc3luYyhmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZnVsbFBhdGggPSB0aGlzLk5vcm1hbGl6ZVBhdGgoZmlsZS50b1N0cmluZygpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRnVsbCBwYXRoOiAnICsgZnVsbFBhdGgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5FeGlzdChmdWxsUGF0aCkpXHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBGaWxlIGRvZXNuJ3QgZXhpc3QuJyArIGZ1bGxQYXRoYCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgdG8gb3BlbiAnICsgZnVsbFBhdGgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICdiYXNlNjQnKTtcclxuICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoZGF0YSwgJ2Jhc2U2NCcpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZTY0RGF0YSA9IGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYmFzZTY0RGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBSZWFkRmlsZUFzQmFzZTY0KGZpbGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBmdWxsUGF0aCA9IHRoaXMuTm9ybWFsaXplUGF0aChmaWxlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGlmICghc2VsZi5FeGlzdChmdWxsUGF0aCkpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBGaWxlIGRvZXNuJ3QgZXhpc3QuJHtmdWxsUGF0aH1gKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICdiYXNlNjQnKTtcclxuICAgICAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcihkYXRhLCAnYmFzZTY0Jyk7XHJcbiAgICAgICAgbGV0IGJhc2U2NERhdGEgPSBidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgICAgIHJldHVybiBiYXNlNjREYXRhO1xyXG5cclxuICAgIH1cclxuICAgIFJlYWRGaWxlU3RyZWFtKGZpbGU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgV3JpdGVGaWxlQXN5bmMoZmlsZTogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdXcml0ZSBkYXRhIHRvIGZpbGUuJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmcy53cml0ZUZpbGUoZmlsZSwgZGF0YSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEdldE1pbWVUeXBlKGZpbGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIE1pbWUubG9va3VwKGZpbGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXQgTUlNRSBlcnJvcjogJyArIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBHZXRGaWxlbmFtZShmaWxlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQYXRoLmJhc2VuYW1lKGZpbGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXQgZmlsZSBuYW1lIGVycm9yOiAnICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEdldEZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbihmaWxlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuR2V0RmlsZW5hbWUoZmlsZSk7XHJcbiAgICAgICAgcmV0dXJuIFBhdGgucGFyc2UoZmlsZW5hbWUpLm5hbWU7XHJcbiAgICB9XHJcbiAgICBHZXRGaWxlU2l6ZShmaWxlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdGF0cyA9IGZzLnN0YXRTeW5jKGZpbGUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0c1snc2l6ZSddO1xyXG4gICAgfVxyXG4gICAgR2V0RmlsZVNpemVTdHJpbmcoZmlsZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuR2V0RmlsZVNpemUoZmlsZSk7XHJcbiAgICAgICAgICAgIGxldCBzaXplU3RyaW5nID0gRmlsZVNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzaXplU3RyaW5nO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXQgZmlsZSBuYW1lIGVycm9yOiAnICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbnZlclRvRmlsZVNpemVTdHJpbmcoc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gRmlsZVNpemUoc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBFbmNyeXB0KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICBsZXQgY2lwaGVyID0gQ3J5cHRzLmNyZWF0ZUNpcGhlcih0aGlzLmFsZ29yaXRobSwgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAgICAgbGV0IGNyeXB0ZWQgPSBjaXBoZXIudXBkYXRlKHZhbHVlLCAndXRmOCcsICdoZXgnKTtcclxuICAgICAgICBjcnlwdGVkICs9IGNpcGhlci5maW5hbCgnaGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGNyeXB0ZWQ7XHJcbiAgICB9XHJcbiAgICBEZWNyeXB0KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICBsZXQgZGVjaXBoZXIgPSBDcnlwdHMuY3JlYXRlRGVjaXBoZXIodGhpcy5hbGdvcml0aG0sIHRoaXMucGFzc3dvcmQpXHJcbiAgICAgICAgbGV0IGRlYyA9IGRlY2lwaGVyLnVwZGF0ZSh2YWx1ZSwgJ2hleCcsICd1dGY4JylcclxuICAgICAgICBkZWMgKz0gZGVjaXBoZXIuZmluYWwoJ3V0ZjgnKTtcclxuICAgICAgICByZXR1cm4gZGVjO1xyXG4gICAgfVxyXG5cclxuICAgIEV4aXN0KHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZzLmFjY2Vzc1N5bmMocGF0aCwgZnMuRl9PSyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBFbnN1cmVGb2xkZXJFeGlzdChwYXRoOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuRXhpc3QocGF0aCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZzLm1rZGlyU3luYyhwYXRoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDb21iaW5lUGF0aChiYXNlOiBzdHJpbmcsIHBhdGhzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gTmpQYXRoLmpvaW4oYmFzZSwgcGF0aHMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgTm9ybWFsaXplUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBOalBhdGgubm9ybWFsaXplKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUd1aWRTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZ3VpZCA9IENvbW1vbi5HdWlkLk5ldygpO1xyXG4gICAgICAgIHJldHVybiBndWlkLlZhbHVlO1xyXG4gICAgfVxyXG4gICAgQ3JlYXRlR3VpZCgpOiBDb21tb24uR3VpZCB7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5HdWlkLk5ldygpO1xyXG4gICAgfVxyXG59Il19