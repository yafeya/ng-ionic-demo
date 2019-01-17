/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as Collections from '../collections/index';
/**
 * @record
 */
export function IActionRepository() { }
/** @type {?} */
IActionRepository.prototype.Actions;
/** @type {?} */
IActionRepository.prototype.Register;
/** @type {?} */
IActionRepository.prototype.Find;
/** @type {?} */
IActionRepository.prototype.FindOne;
var ActionRepository = /** @class */ (function () {
    function ActionRepository() {
        this.Actions = new Collections.List();
    }
    /**
     * @param {?} action
     * @return {?}
     */
    ActionRepository.prototype.Register = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        if (action) {
            this.Actions.Add(action);
        }
        return this;
    };
    /**
     * @param {?} expression
     * @return {?}
     */
    ActionRepository.prototype.Find = /**
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        return this.Actions.FindAll(expression);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ActionRepository.prototype.FindOne = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.Actions.FirstOrDefault(function (x) { return x.Name === name; });
    };
    return ActionRepository;
}());
export { ActionRepository };
if (false) {
    /** @type {?} */
    ActionRepository.prototype.Actions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uUmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9hY3Rpb24vQWN0aW9uUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFwRCxJQUFBOzt1QkFDdUIsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFXOzs7Ozs7SUFFbEQsbUNBQVE7Ozs7SUFBUixVQUFTLE1BQWU7UUFDcEIsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7O0lBRUQsK0JBQUk7Ozs7SUFBSixVQUFLLFVBQXdDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDM0M7Ozs7O0lBRUQsa0NBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQzVEOzJCQTlCTDtJQStCQyxDQUFBO0FBakJELDRCQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vQWN0aW9uJztcclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gJy4vSUFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb25SZXBvc2l0b3J5IHtcclxuICAgIHJlYWRvbmx5IEFjdGlvbnM6IENvbGxlY3Rpb25zLkxpc3Q8SUFjdGlvbj47XHJcblxyXG4gICAgUmVnaXN0ZXIoYWN0aW9uOiBJQWN0aW9uKTogSUFjdGlvblJlcG9zaXRvcnk7XHJcbiAgICBGaW5kKGV4cHJlc3Npb246IChhY3Rpb246IElBY3Rpb24pID0+IGJvb2xlYW4pOiBDb2xsZWN0aW9ucy5JRW51bWVyYWJsZTxJQWN0aW9uPjtcclxuICAgIEZpbmRPbmUobmFtZTogc3RyaW5nKTogSUFjdGlvbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25SZXBvc2l0b3J5IGltcGxlbWVudHMgSUFjdGlvblJlcG9zaXRvcnkge1xyXG4gICAgcmVhZG9ubHkgQWN0aW9ucyA9IG5ldyBDb2xsZWN0aW9ucy5MaXN0PElBY3Rpb24+KCk7XHJcblxyXG4gICAgUmVnaXN0ZXIoYWN0aW9uOiBJQWN0aW9uKTogQWN0aW9uUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgaWYgKGFjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLkFjdGlvbnMuQWRkKGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIEZpbmQoZXhwcmVzc2lvbjogKGFjdGlvbjogSUFjdGlvbikgPT4gYm9vbGVhbik6IENvbGxlY3Rpb25zLklFbnVtZXJhYmxlPElBY3Rpb24+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BY3Rpb25zLkZpbmRBbGwoZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgRmluZE9uZShuYW1lOiBzdHJpbmcpOiBJQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BY3Rpb25zLkZpcnN0T3JEZWZhdWx0KHggPT4geC5OYW1lID09PSBuYW1lKTtcclxuICAgIH1cclxufSJdfQ==