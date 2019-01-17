/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Dictionary } from '../collections/Dictionary';
import { Injectable } from '@angular/core';
var CommandRepository = /** @class */ (function () {
    function CommandRepository() {
        this.Commands = new Dictionary();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    CommandRepository.prototype.GetCommand = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var command = this.Commands.Item(name);
        return command;
    };
    /**
     * @param {?} name
     * @param {?} command
     * @return {?}
     */
    CommandRepository.prototype.Register = /**
     * @param {?} name
     * @param {?} command
     * @return {?}
     */
    function (name, command) {
        if (!name)
            throw new Error('Name value is null.');
        if (!command)
            throw new Error('Command value is null.');
        this.Commands.Add(name, command);
        return this;
    };
    CommandRepository.decorators = [
        { type: Injectable }
    ];
    return CommandRepository;
}());
export { CommandRepository };
if (false) {
    /** @type {?} */
    CommandRepository.prototype.Commands;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vY29tbWFuZC9Db21tYW5kUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozt3QkFLNUIsSUFBSSxVQUFVLEVBQW9COzs7Ozs7SUFFN0Msc0NBQVU7Ozs7SUFBVixVQUFXLElBQVk7O1FBRW5CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLE9BQU8sT0FBTyxDQUFDO0tBQ2xCOzs7Ozs7SUFFRCxvQ0FBUTs7Ozs7SUFBUixVQUFTLElBQVksRUFBRSxPQUFpQjtRQUNwQyxJQUFJLENBQUMsSUFBSTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUU3QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUM7S0FDZjs7Z0JBckJKLFVBQVU7OzRCQUxYOztTQU1hLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb21tYW5kUmVwb3NpdG9yeSB9IGZyb20gJy4vSUNvbW1hbmRSZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgSUNvbW1hbmQgfSBmcm9tICcuL0lDb21tYW5kJztcclxuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL0RpY3Rpb25hcnknO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElDb21tYW5kUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgQ29tbWFuZHMgPSBuZXcgRGljdGlvbmFyeTxzdHJpbmcsIElDb21tYW5kPigpO1xyXG5cclxuICAgIEdldENvbW1hbmQobmFtZTogc3RyaW5nKTogSUNvbW1hbmQge1xyXG5cclxuICAgICAgICBsZXQgY29tbWFuZCA9IHRoaXMuQ29tbWFuZHMuSXRlbShuYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgUmVnaXN0ZXIobmFtZTogc3RyaW5nLCBjb21tYW5kOiBJQ29tbWFuZCk6IElDb21tYW5kUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgaWYgKCFuYW1lKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgdmFsdWUgaXMgbnVsbC4nKTtcclxuICAgICAgICBpZiAoIWNvbW1hbmQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tbWFuZCB2YWx1ZSBpcyBudWxsLicpXHJcblxyXG4gICAgICAgIHRoaXMuQ29tbWFuZHMuQWRkKG5hbWUsIGNvbW1hbmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSJdfQ==