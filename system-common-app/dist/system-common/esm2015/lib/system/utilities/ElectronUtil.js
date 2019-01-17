/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as Common from '../common/index';
export class ElectronUtil {
    constructor() {
        this.algorithm = 'aes-256-ctr';
        this.password = 'a3b8d9w34';
    }
    /**
     * @return {?}
     */
    get Electron() {
        return electron;
    }
    /**
     * @return {?}
     */
    get App() {
        return electron.remote.app;
    }
    /**
     * @return {?}
     */
    get MainMenu() {
        return electron.remote.Menu;
    }
    /**
     * @return {?}
     */
    get IpcClient() {
        return electron.ipcRenderer;
    }
    /**
     * @return {?}
     */
    get Remote() {
        return electron.remote;
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
     * @return {?}
     */
    GetAppName() {
        return this.App.getName();
    }
    /**
     * @param {?=} filters
     * @return {?}
     */
    OpenFileDialog(filters = null) {
        /** @type {?} */
        let dialog = electron.remote.dialog;
        /** @type {?} */
        let fileName = dialog.showOpenDialog({
            properties: ['openFile'],
            filters: filters
        });
        return fileName.toString();
    }
    /**
     * @param {?=} filters
     * @return {?}
     */
    OpenFilesDialog(filters = null) {
        /** @type {?} */
        let dialog = electron.remote.dialog;
        /** @type {?} */
        let fileNames = dialog.showOpenDialog({
            properties: ['openFile', 'multiSelections'],
            filters: filters
        });
        return fileNames;
    }
    /**
     * @return {?}
     */
    TextFileFilter() {
        return [{ name: 'Text Documents', extensions: ['txt', 'cs', 'ts', 'js', 'scss', 'css', 'html', 'htm'] }];
    }
    /**
     * @return {?}
     */
    ImageFileFilter() {
        return [{ name: 'Images', extensions: ['jpg', 'png', 'gif', 'bmp'] }];
    }
    /**
     * @return {?}
     */
    OpenImageDialog() {
        return this.OpenFileDialog(this.ImageFileFilter());
    }
    /**
     * @return {?}
     */
    OpenImagesDialog() {
        return this.OpenFilesDialog(this.ImageFileFilter());
    }
    /**
     * @param {?} menu
     * @return {?}
     */
    SetApplicationMenu(menu) {
        electron.remote.Menu.setApplicationMenu(menu);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    OpenExternal(url) {
        electron.remote.shell.openExternal(url);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ShowItemInFolder(path) {
        electron.remote.shell.showItemInFolder(path);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileAsync(file) {
        /** @type {?} */
        let self = this;
        return new Promise(function (resolve, reject) {
            if (!self.Exist(file))
                reject(new Error(`File doesn't exist.`));
            fs.readFile(file, 'binary', (error, data) => {
                if (error)
                    reject(error);
                /** @type {?} */
                let content = EncodingHelper.decode(data, 'utf8');
                resolve(content);
            });
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileLineByLine(file) {
        /** @type {?} */
        let self = this;
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            let lines = [];
            /** @type {?} */
            let stream = fs.createReadStream(file)
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
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileAsBase64Async(file) {
        /** @type {?} */
        let self = this;
        /** @type {?} */
        let fullPath = this.NormalizePath(file.toString());
        console.log('Full path: ' + fullPath);
        return new Promise(function (resolve, reject) {
            if (!self.Exist(fullPath))
                reject(new Error(`File doesn't exist.' + fullPath`));
            console.log('File to open ' + fullPath);
            /** @type {?} */
            let data = fs.readFileSync(fullPath, 'base64');
            /** @type {?} */
            let buffer = new Buffer(data, 'base64');
            /** @type {?} */
            let base64Data = buffer.toString('base64');
            resolve(base64Data);
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileAsBase64(file) {
        /** @type {?} */
        let self = this;
        /** @type {?} */
        let fullPath = this.NormalizePath(file.toString());
        if (!self.Exist(fullPath))
            throw Error(`File doesn't exist.${fullPath}`);
        /** @type {?} */
        let data = fs.readFileSync(fullPath, 'base64');
        /** @type {?} */
        let buffer = new Buffer(data, 'base64');
        /** @type {?} */
        let base64Data = buffer.toString('base64');
        return base64Data;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ReadFileStream(file) {
        return fs.createReadStream(file);
    }
    /**
     * @param {?} file
     * @param {?} data
     * @return {?}
     */
    WriteFileAsync(file, data) {
        console.log('Write data to file.');
        /** @type {?} */
        let self = this;
        return new Promise(function (resolve, reject) {
            fs.writeFile(file, data, (error) => {
                if (error)
                    reject(error);
                resolve(true);
            });
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetMimeType(file) {
        try {
            return Mime.lookup(file);
        }
        catch (error) {
            console.log('Get MIME error: ' + error);
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetFilename(file) {
        try {
            return Path.basename(file);
        }
        catch (error) {
            console.log('Get file name error: ' + error);
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetFilenameWithoutExtension(file) {
        /** @type {?} */
        let filename = this.GetFilename(file);
        return Path.parse(filename).name;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetFileSize(file) {
        /** @type {?} */
        let stats = fs.statSync(file);
        return stats['size'];
    }
    /**
     * @param {?} file
     * @return {?}
     */
    GetFileSizeString(file) {
        try {
            /** @type {?} */
            let size = this.GetFileSize(file);
            /** @type {?} */
            let sizeString = FileSize(size);
            return sizeString;
        }
        catch (error) {
            console.log('Get file name error: ' + error);
        }
    }
    /**
     * @param {?} size
     * @return {?}
     */
    ConverToFileSizeString(size) {
        return FileSize(size);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    Encrypt(value) {
        if (!value)
            return '';
        /** @type {?} */
        let cipher = Crypts.createCipher(this.algorithm, this.password);
        /** @type {?} */
        let crypted = cipher.update(value, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    Decrypt(value) {
        if (!value)
            return '';
        /** @type {?} */
        let decipher = Crypts.createDecipher(this.algorithm, this.password);
        /** @type {?} */
        let dec = decipher.update(value, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    Exist(path) {
        try {
            fs.accessSync(path, fs.F_OK);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * @param {?} path
     * @return {?}
     */
    EnsureFolderExist(path) {
        if (!this.Exist(path)) {
            try {
                fs.mkdirSync(path);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    /**
     * @param {?} base
     * @param {?} paths
     * @return {?}
     */
    CombinePath(base, paths) {
        /** @type {?} */
        let value;
        try {
            value = NjPath.join(base, paths);
        }
        catch (error) {
            console.log(error);
        }
        return value;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    NormalizePath(path) {
        return NjPath.normalize(path);
    }
    /**
     * @return {?}
     */
    CreateGuidString() {
        /** @type {?} */
        let guid = Common.Guid.New();
        return guid.Value;
    }
    /**
     * @return {?}
     */
    CreateGuid() {
        return Common.Guid.New();
    }
}
ElectronUtil.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ElectronUtil.prototype.algorithm;
    /** @type {?} */
    ElectronUtil.prototype.password;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25VdGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL3V0aWxpdGllcy9FbGVjdHJvblV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQWUxQyxNQUFNOzt5QkFDVSxhQUFhO3dCQUNkLFdBQVc7Ozs7O0lBRXRCLElBQUksUUFBUTtRQUNSLE9BQU8sUUFBUSxDQUFDO0tBQ25COzs7O0lBQ0QsSUFBSSxHQUFHO1FBQ0gsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUM5Qjs7OztJQUNELElBQUksUUFBUTtRQUNSLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDL0I7Ozs7SUFDRCxJQUFJLFNBQVM7UUFDVCxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUM7S0FDL0I7Ozs7SUFDRCxJQUFJLE1BQU07UUFDTixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7S0FDMUI7Ozs7SUFDRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBQ0QsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN0Qzs7OztJQUNELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDeEM7Ozs7SUFDRCxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBQ0QsVUFBVTtRQUNOLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxP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T0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKOzs7OztJQUVELGlCQUFpQixDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSTtnQkFDQSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtTQUNKO0tBQ0o7Ozs7OztJQUVELFdBQVcsQ0FBQyxJQUFZLEVBQUUsS0FBYTs7UUFDbkMsSUFBSSxLQUFLLENBQVM7UUFDbEIsSUFBSTtZQUNBLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2hCOzs7OztJQUNELGFBQWEsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELGdCQUFnQjs7UUFDWixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNyQjs7OztJQUNELFVBQVU7UUFDTixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDNUI7OztZQXhQSixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcclxuXHJcbmRlY2xhcmUgbGV0IGVsZWN0cm9uOiBhbnk7XHJcbmRlY2xhcmUgbGV0IGZzOiBhbnk7XHJcbmRlY2xhcmUgbGV0IENyeXB0czogYW55O1xyXG5kZWNsYXJlIGxldCBOalBhdGg6IGFueTtcclxuZGVjbGFyZSBsZXQgTWltZTogYW55O1xyXG5kZWNsYXJlIGxldCBQYXRoOiBhbnk7XHJcbmRlY2xhcmUgbGV0IEZpbGVTaXplOiBhbnk7XHJcbmRlY2xhcmUgbGV0IEV2ZW50U3RyZWFtOiBhbnk7XHJcbmRlY2xhcmUgbGV0IEVuY29kaW5nSGVscGVyOiBhbnk7XHJcbmRlY2xhcmUgY29uc3QgQnVmZmVyOiBhbnk7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWxlY3Ryb25VdGlsIHtcclxuICAgIGFsZ29yaXRobSA9ICdhZXMtMjU2LWN0cic7XHJcbiAgICBwYXNzd29yZCA9ICdhM2I4ZDl3MzQnO1xyXG5cclxuICAgIGdldCBFbGVjdHJvbigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBlbGVjdHJvbjtcclxuICAgIH1cclxuICAgIGdldCBBcHAoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gZWxlY3Ryb24ucmVtb3RlLmFwcDtcclxuICAgIH1cclxuICAgIGdldCBNYWluTWVudSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBlbGVjdHJvbi5yZW1vdGUuTWVudTtcclxuICAgIH1cclxuICAgIGdldCBJcGNDbGllbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gZWxlY3Ryb24uaXBjUmVuZGVyZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgUmVtb3RlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZWN0cm9uLnJlbW90ZTtcclxuICAgIH1cclxuICAgIEdldFVzZXJEYXRhRm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ3VzZXJEYXRhJyk7XHJcbiAgICB9XHJcbiAgICBHZXRBcHBEYXRhRm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ2FwcERhdGEnKTtcclxuICAgIH1cclxuICAgIEdldE15RG9jdW1lbnRGb2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BcHAuZ2V0UGF0aCgnZG9jdW1lbnRzJyk7XHJcbiAgICB9XHJcbiAgICBHZXRQaWN0dXJlRm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldFBhdGgoJ3BpY3R1cmVzJyk7XHJcbiAgICB9XHJcbiAgICBHZXRBcHBOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwLmdldE5hbWUoKTtcclxuICAgIH1cclxuICAgIE9wZW5GaWxlRGlhbG9nKGZpbHRlcnM6IGFueSA9IG51bGwpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSBlbGVjdHJvbi5yZW1vdGUuZGlhbG9nO1xyXG4gICAgICAgIGxldCBmaWxlTmFtZSA9IGRpYWxvZy5zaG93T3BlbkRpYWxvZyh7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFsnb3BlbkZpbGUnXSxcclxuICAgICAgICAgICAgZmlsdGVyczogZmlsdGVyc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaWxlTmFtZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgT3BlbkZpbGVzRGlhbG9nKGZpbHRlcnM6IGFueSA9IG51bGwpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IGVsZWN0cm9uLnJlbW90ZS5kaWFsb2c7XHJcbiAgICAgICAgbGV0IGZpbGVOYW1lcyA9IGRpYWxvZy5zaG93T3BlbkRpYWxvZyh7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFsnb3BlbkZpbGUnLCAnbXVsdGlTZWxlY3Rpb25zJ10sXHJcbiAgICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnNcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmlsZU5hbWVzO1xyXG4gICAgfVxyXG4gICAgVGV4dEZpbGVGaWx0ZXIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gW3sgbmFtZTogJ1RleHQgRG9jdW1lbnRzJywgZXh0ZW5zaW9uczogWyd0eHQnLCAnY3MnLCAndHMnLCAnanMnLCAnc2NzcycsICdjc3MnLCAnaHRtbCcsICdodG0nXSB9XTtcclxuICAgIH1cclxuICAgIEltYWdlRmlsZUZpbHRlcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBbeyBuYW1lOiAnSW1hZ2VzJywgZXh0ZW5zaW9uczogWydqcGcnLCAncG5nJywgJ2dpZicsICdibXAnXSB9XTtcclxuICAgIH1cclxuICAgIE9wZW5JbWFnZURpYWxvZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLk9wZW5GaWxlRGlhbG9nKHRoaXMuSW1hZ2VGaWxlRmlsdGVyKCkpO1xyXG4gICAgfVxyXG4gICAgT3BlbkltYWdlc0RpYWxvZygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuT3BlbkZpbGVzRGlhbG9nKHRoaXMuSW1hZ2VGaWxlRmlsdGVyKCkpO1xyXG4gICAgfVxyXG4gICAgU2V0QXBwbGljYXRpb25NZW51KG1lbnU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGVsZWN0cm9uLnJlbW90ZS5NZW51LnNldEFwcGxpY2F0aW9uTWVudShtZW51KTtcclxuICAgIH1cclxuXHJcbiAgICBPcGVuRXh0ZXJuYWwodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBlbGVjdHJvbi5yZW1vdGUuc2hlbGwub3BlbkV4dGVybmFsKHVybCk7XHJcbiAgICB9XHJcbiAgICBTaG93SXRlbUluRm9sZGVyKHBhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGVsZWN0cm9uLnJlbW90ZS5zaGVsbC5zaG93SXRlbUluRm9sZGVyKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWRGaWxlQXN5bmMoZmlsZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLkV4aXN0KGZpbGUpKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgRmlsZSBkb2Vzbid0IGV4aXN0LmApKTtcclxuXHJcbiAgICAgICAgICAgIGZzLnJlYWRGaWxlKGZpbGUsICdiaW5hcnknLCAoZXJyb3IsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gRW5jb2RpbmdIZWxwZXIuZGVjb2RlKGRhdGEsICd1dGY4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgUmVhZEZpbGVMaW5lQnlMaW5lKGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoRXZlbnRTdHJlYW0uc3BsaXQoKSlcclxuICAgICAgICAgICAgICAgIC5waXBlKEV2ZW50U3RyZWFtLm1hcFN5bmMoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnBhdXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdSZWFkIGZpbGUgZXJyb3IuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShsaW5lcy5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBSZWFkRmlsZUFzQmFzZTY0QXN5bmMoZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZ1bGxQYXRoID0gdGhpcy5Ob3JtYWxpemVQYXRoKGZpbGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Z1bGwgcGF0aDogJyArIGZ1bGxQYXRoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuRXhpc3QoZnVsbFBhdGgpKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgRmlsZSBkb2Vzbid0IGV4aXN0LicgKyBmdWxsUGF0aGApKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWxlIHRvIG9wZW4gJyArIGZ1bGxQYXRoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAnYmFzZTY0Jyk7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKGRhdGEsICdiYXNlNjQnKTtcclxuICAgICAgICAgICAgbGV0IGJhc2U2NERhdGEgPSBidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgICAgICAgICByZXNvbHZlKGJhc2U2NERhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgUmVhZEZpbGVBc0Jhc2U2NChmaWxlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZnVsbFBhdGggPSB0aGlzLk5vcm1hbGl6ZVBhdGgoZmlsZS50b1N0cmluZygpKTtcclxuICAgICAgICBpZiAoIXNlbGYuRXhpc3QoZnVsbFBhdGgpKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgRmlsZSBkb2Vzbid0IGV4aXN0LiR7ZnVsbFBhdGh9YCk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAnYmFzZTY0Jyk7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoZGF0YSwgJ2Jhc2U2NCcpO1xyXG4gICAgICAgIGxldCBiYXNlNjREYXRhID0gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKTtcclxuICAgICAgICByZXR1cm4gYmFzZTY0RGF0YTtcclxuXHJcbiAgICB9XHJcbiAgICBSZWFkRmlsZVN0cmVhbShmaWxlOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIFdyaXRlRmlsZUFzeW5jKGZpbGU6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnV3JpdGUgZGF0YSB0byBmaWxlLicpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGZpbGUsIGRhdGEsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBHZXRNaW1lVHlwZShmaWxlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNaW1lLmxvb2t1cChmaWxlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0IE1JTUUgZXJyb3I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgR2V0RmlsZW5hbWUoZmlsZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gUGF0aC5iYXNlbmFtZShmaWxlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0IGZpbGUgbmFtZSBlcnJvcjogJyArIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBHZXRGaWxlbmFtZVdpdGhvdXRFeHRlbnNpb24oZmlsZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLkdldEZpbGVuYW1lKGZpbGUpO1xyXG4gICAgICAgIHJldHVybiBQYXRoLnBhcnNlKGZpbGVuYW1lKS5uYW1lO1xyXG4gICAgfVxyXG4gICAgR2V0RmlsZVNpemUoZmlsZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3RhdHMgPSBmcy5zdGF0U3luYyhmaWxlKTtcclxuICAgICAgICByZXR1cm4gc3RhdHNbJ3NpemUnXTtcclxuICAgIH1cclxuICAgIEdldEZpbGVTaXplU3RyaW5nKGZpbGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSB0aGlzLkdldEZpbGVTaXplKGZpbGUpO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZVN0cmluZyA9IEZpbGVTaXplKHNpemUpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2l6ZVN0cmluZztcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0IGZpbGUgbmFtZSBlcnJvcjogJyArIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDb252ZXJUb0ZpbGVTaXplU3RyaW5nKHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZpbGVTaXplKHNpemUpO1xyXG4gICAgfVxyXG4gICAgRW5jcnlwdCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgbGV0IGNpcGhlciA9IENyeXB0cy5jcmVhdGVDaXBoZXIodGhpcy5hbGdvcml0aG0sIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgICAgIGxldCBjcnlwdGVkID0gY2lwaGVyLnVwZGF0ZSh2YWx1ZSwgJ3V0ZjgnLCAnaGV4Jyk7XHJcbiAgICAgICAgY3J5cHRlZCArPSBjaXBoZXIuZmluYWwoJ2hleCcpO1xyXG4gICAgICAgIHJldHVybiBjcnlwdGVkO1xyXG4gICAgfVxyXG4gICAgRGVjcnlwdCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgbGV0IGRlY2lwaGVyID0gQ3J5cHRzLmNyZWF0ZURlY2lwaGVyKHRoaXMuYWxnb3JpdGhtLCB0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAgIGxldCBkZWMgPSBkZWNpcGhlci51cGRhdGUodmFsdWUsICdoZXgnLCAndXRmOCcpXHJcbiAgICAgICAgZGVjICs9IGRlY2lwaGVyLmZpbmFsKCd1dGY4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGRlYztcclxuICAgIH1cclxuXHJcbiAgICBFeGlzdChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmcy5hY2Nlc3NTeW5jKHBhdGgsIGZzLkZfT0spO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRW5zdXJlRm9sZGVyRXhpc3QocGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLkV4aXN0KHBhdGgpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMocGF0aCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ29tYmluZVBhdGgoYmFzZTogc3RyaW5nLCBwYXRoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdmFsdWU6IHN0cmluZztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE5qUGF0aC5qb2luKGJhc2UsIHBhdGhzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIE5vcm1hbGl6ZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gTmpQYXRoLm5vcm1hbGl6ZShwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBDcmVhdGVHdWlkU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGd1aWQgPSBDb21tb24uR3VpZC5OZXcoKTtcclxuICAgICAgICByZXR1cm4gZ3VpZC5WYWx1ZTtcclxuICAgIH1cclxuICAgIENyZWF0ZUd1aWQoKTogQ29tbW9uLkd1aWQge1xyXG4gICAgICAgIHJldHVybiBDb21tb24uR3VpZC5OZXcoKTtcclxuICAgIH1cclxufSJdfQ==