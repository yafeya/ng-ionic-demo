/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommandDescriptorRepository } from './CommandDescriptorRepository';
var CommandDescriptorExtensions = /** @class */ (function () {
    function CommandDescriptorExtensions() {
    }
    /**
     * Get descriptors by group
     * @param this command descriptor repository
     * @param group group name
     */
    /**
     * Get descriptors by group
     * @this {?}
     * @param {?} group group name
     * @return {?}
     */
    CommandDescriptorExtensions.GetDescriptorsByGroup = /**
     * Get descriptors by group
     * @this {?}
     * @param {?} group group name
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var repo = this;
        return repo.Descriptors.Where(function (x) { return x.Group === group; });
    };
    return CommandDescriptorExtensions;
}());
export { CommandDescriptorExtensions };
CommandDescriptorRepository.prototype.GetDescriptorsByGroup = CommandDescriptorExtensions.GetDescriptorsByGroup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZERlc2NyaXB0b3JFeHRlbnNpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbW1hbmQvQ29tbWFuZERlc2NyaXB0b3JFeHRlbnNpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUc1RSxJQUFBOzs7SUFDSTs7OztPQUlHOzs7Ozs7O0lBQ0ksaURBQXFCOzs7Ozs7SUFBNUIsVUFBaUUsS0FBYTs7UUFDMUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN2RTtzQ0FmTDtJQWdCQyxDQUFBO0FBVkQsdUNBVUM7QUF3QkQsMkJBQTJCLENBQUMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUVudW1lcmFibGUgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9JRW51bWVyYWJsZSc7XHJcbmltcG9ydCB7IElDb21tYW5kRGVzY3JpcHRvciB9IGZyb20gJy4vSUNvbW1hbmREZXNjcmlwdG9yJztcclxuaW1wb3J0IHsgSUNvbW1hbmREZXNjcmlwdG9yUmVwb3NpdG9yeSB9IGZyb20gJy4vSUNvbW1hbmREZXNjcmlwdG9yUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IENvbW1hbmREZXNjcmlwdG9yUmVwb3NpdG9yeSB9IGZyb20gJy4vQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5JztcclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1hbmREZXNjcmlwdG9yRXh0ZW5zaW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBkZXNjcmlwdG9ycyBieSBncm91cFxyXG4gICAgICogQHBhcmFtIHRoaXMgY29tbWFuZCBkZXNjcmlwdG9yIHJlcG9zaXRvcnlcclxuICAgICAqIEBwYXJhbSBncm91cCBncm91cCBuYW1lXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBHZXREZXNjcmlwdG9yc0J5R3JvdXAodGhpczogSUNvbW1hbmREZXNjcmlwdG9yUmVwb3NpdG9yeSwgZ3JvdXA6IHN0cmluZyk6IElFbnVtZXJhYmxlPElDb21tYW5kRGVzY3JpcHRvcj4ge1xyXG4gICAgICAgIGxldCByZXBvID0gdGhpcztcclxuICAgICAgICByZXR1cm4gcmVwby5EZXNjcmlwdG9ycy5XaGVyZSgoeCkgPT4geyByZXR1cm4geC5Hcm91cCA9PT0gZ3JvdXA7IH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIG1vZHVsZSAnLi9JQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5JyB7XHJcbiAgICBpbnRlcmZhY2UgSUNvbW1hbmREZXNjcmlwdG9yUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IGRlc2NyaXB0b3JzIGJ5IGdyb3VwXHJcbiAgICAgICAgICogQHBhcmFtIHRoaXMgY29tbWFuZCBkZXNjcmlwdG9yIHJlcG9zaXRvcnlcclxuICAgICAgICAgKiBAcGFyYW0gZ3JvdXAgZ3JvdXAgbmFtZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEdldERlc2NyaXB0b3JzQnlHcm91cDogKGdyb3VwOiBzdHJpbmcpID0+IElFbnVtZXJhYmxlPElDb21tYW5kRGVzY3JpcHRvcj47XHJcbiAgICB9XHJcbn1cclxuZGVjbGFyZSBtb2R1bGUgJy4vQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5JyB7XHJcbiAgICBpbnRlcmZhY2UgQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgZGVzY3JpcHRvcnMgYnkgZ3JvdXBcclxuICAgICAgICAgKiBAcGFyYW0gdGhpcyBjb21tYW5kIGRlc2NyaXB0b3IgcmVwb3NpdG9yeVxyXG4gICAgICAgICAqIEBwYXJhbSBncm91cCBncm91cCBuYW1lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgR2V0RGVzY3JpcHRvcnNCeUdyb3VwOiAoZ3JvdXA6IHN0cmluZykgPT4gSUVudW1lcmFibGU8SUNvbW1hbmREZXNjcmlwdG9yPjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkNvbW1hbmREZXNjcmlwdG9yUmVwb3NpdG9yeS5wcm90b3R5cGUuR2V0RGVzY3JpcHRvcnNCeUdyb3VwID0gQ29tbWFuZERlc2NyaXB0b3JFeHRlbnNpb25zLkdldERlc2NyaXB0b3JzQnlHcm91cDsiXX0=