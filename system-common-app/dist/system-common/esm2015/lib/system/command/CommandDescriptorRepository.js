/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { List } from '../collections/List';
import { Injectable } from '@angular/core';
export class CommandDescriptorRepository {
    constructor() {
        this.descriptors = new List();
    }
    /**
     * @return {?}
     */
    get Descriptors() {
        return this.descriptors;
    }
    /**
     * Register a descriptor.
     * @param {?} descriptor
     * @return {?}
     */
    Register(descriptor) {
        if (descriptor != null) {
            this.descriptors.Add(descriptor);
        }
        return this;
    }
    /**
     * Remove a descriptor
     * @param {?} descriptor
     * @return {?}
     */
    Remove(descriptor) {
        if (descriptor !== null)
            this.descriptors.Remove(descriptor);
        return this;
    }
    /**
     * Remove descriptors by given expression
     * @param {?} expression
     * @return {?}
     */
    RemoveRange(expression) {
        if (expression === null) {
            return;
        }
        this.Descriptors.FindAll(expression)
            .ForEach(x => {
            this.descriptors.Remove(x);
        });
    }
}
CommandDescriptorRepository.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    CommandDescriptorRepository.prototype.descriptors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8veWFmZXlhLXN5c3RlbS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL2NvbW1hbmQvQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNOzsyQkFDb0IsSUFBSSxJQUFJLEVBQXNCOzs7OztJQUdwRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDM0I7Ozs7OztJQUlELFFBQVEsQ0FBQyxVQUE4QjtRQUNuQyxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7SUFJRCxNQUFNLENBQUMsVUFBOEI7UUFDakMsSUFBSSxVQUFVLEtBQUssSUFBSTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7SUFJRCxXQUFXLENBQUMsVUFBaUQ7UUFDekQsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ3JCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzthQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QixDQUFDLENBQUM7S0FDVjs7O1lBckNKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5IH0gZnJvbSAnLi9JQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgSUVudW1lcmFibGUgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9JRW51bWVyYWJsZSc7XHJcbmltcG9ydCB7IElDb21tYW5kRGVzY3JpcHRvciB9IGZyb20gJy4vSUNvbW1hbmREZXNjcmlwdG9yJztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL0xpc3QnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kRGVzY3JpcHRvclJlcG9zaXRvcnkgaW1wbGVtZW50cyBJQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5IHtcclxuICAgIHByaXZhdGUgZGVzY3JpcHRvcnMgPSBuZXcgTGlzdDxJQ29tbWFuZERlc2NyaXB0b3I+KCk7XHJcblxyXG5cclxuICAgIGdldCBEZXNjcmlwdG9ycygpOiBJRW51bWVyYWJsZTxJQ29tbWFuZERlc2NyaXB0b3I+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdG9ycztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBkZXNjcmlwdG9yLlxyXG4gICAgICovXHJcbiAgICBSZWdpc3RlcihkZXNjcmlwdG9yOiBJQ29tbWFuZERlc2NyaXB0b3IpOiBJQ29tbWFuZERlc2NyaXB0b3JSZXBvc2l0b3J5IHtcclxuICAgICAgICBpZiAoZGVzY3JpcHRvciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRvcnMuQWRkKGRlc2NyaXB0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBSZW1vdmUgYSBkZXNjcmlwdG9yXHJcbiAgICAqL1xyXG4gICAgUmVtb3ZlKGRlc2NyaXB0b3I6IElDb21tYW5kRGVzY3JpcHRvcik6IElDb21tYW5kRGVzY3JpcHRvclJlcG9zaXRvcnkge1xyXG4gICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0b3JzLlJlbW92ZShkZXNjcmlwdG9yKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGRlc2NyaXB0b3JzIGJ5IGdpdmVuIGV4cHJlc3Npb25cclxuICAgICAqL1xyXG4gICAgUmVtb3ZlUmFuZ2UoZXhwcmVzc2lvbjogKGl0ZW06IElDb21tYW5kRGVzY3JpcHRvcikgPT4gYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChleHByZXNzaW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuRGVzY3JpcHRvcnMuRmluZEFsbChleHByZXNzaW9uKVxyXG4gICAgICAgICAgICAuRm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRvcnMuUmVtb3ZlKHgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==