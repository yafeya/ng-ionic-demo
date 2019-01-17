/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function ICommand() { }
/** @type {?} */
ICommand.prototype.CanExecute;
/** @type {?} */
ICommand.prototype.Execute;
export class DelegateCommand {
    /**
     * @param {?} canExecute
     * @param {?} action
     */
    constructor(canExecute, action) {
        this.canExecute = canExecute;
        this.action = action;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    CanExecute(param) {
        if (this.canExecute === null)
            return true;
        return this.canExecute(param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    Execute(param) {
        if (this.action) {
            try {
                this.action(param);
            }
            catch (error) {
                throw error;
            }
        }
    }
    /**
     * Create a command from given actions.
     * @param {?} action executed action
     * @param {?=} canExecute can execue action
     * @return {?}
     */
    static From(action, canExecute) {
        if (!canExecute)
            canExecute = (param) => true;
        return new DelegateCommand(canExecute, action);
    }
}
if (false) {
    /** @type {?} */
    DelegateCommand.prototype.canExecute;
    /** @type {?} */
    DelegateCommand.prototype.action;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vY29tbWFuZC9JQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxNQUFNOzs7OztJQUVGLFlBQ1ksWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsV0FBTSxHQUFOLE1BQU07S0FFakI7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUk7WUFDeEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsT0FBUSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSTtnQkFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osTUFBTSxLQUFLLENBQUM7YUFDZjtTQUNKO0tBQ0o7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQTZCLEVBQUUsVUFBcUM7UUFDNUUsSUFBSSxDQUFDLFVBQVU7WUFDWCxVQUFVLEdBQUcsQ0FBQyxLQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztRQUN2QyxPQUFPLElBQUksZUFBZSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNsRDtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1hbmQge1xyXG5cclxuICAgIENhbkV4ZWN1dGUocGFyYW06IGFueSk6IGJvb2xlYW47XHJcblxyXG4gICAgRXhlY3V0ZShwYXJhbTogYW55KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGVnYXRlQ29tbWFuZCBpbXBsZW1lbnRzIElDb21tYW5kIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNhbkV4ZWN1dGU6IChwYXJhbTogYW55KSA9PiBib29sZWFuLFxyXG4gICAgICAgIHByaXZhdGUgYWN0aW9uOiAocGFyYW06IGFueSkgPT4gdm9pZCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBDYW5FeGVjdXRlKHBhcmFtOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5FeGVjdXRlID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gIHRoaXMuY2FuRXhlY3V0ZShwYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgRXhlY3V0ZShwYXJhbTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihwYXJhbSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGNvbW1hbmQgZnJvbSBnaXZlbiBhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIGFjdGlvbiBleGVjdXRlZCBhY3Rpb25cclxuICAgICAqIEBwYXJhbSBjYW5FeGVjdXRlIGNhbiBleGVjdWUgYWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBGcm9tKGFjdGlvbjogKHBhcmFtPzogYW55KSA9PiB2b2lkLCBjYW5FeGVjdXRlPzogKHBhcmFtPzogYW55KSA9PiBib29sZWFuKTogSUNvbW1hbmQge1xyXG4gICAgICAgIGlmICghY2FuRXhlY3V0ZSlcclxuICAgICAgICAgICAgY2FuRXhlY3V0ZSA9IChwYXJhbT86IGFueSkgPT4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gbmV3IERlbGVnYXRlQ29tbWFuZChjYW5FeGVjdXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG59Il19