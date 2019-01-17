/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IOptionDescriptor() { }
/**
 * Gets or sets an id for the descriptor
 * @type {?}
 */
IOptionDescriptor.prototype.Id;
/**
 * gets or sets the header
 * @type {?}
 */
IOptionDescriptor.prototype.Header;
/**
 * Gets or sets the url to option editor
 * @type {?}
 */
IOptionDescriptor.prototype.Url;
/**
 * gets or sets an icons show in front of the header
 * @type {?|undefined}
 */
IOptionDescriptor.prototype.Icon;
/**
 * gets or sets a group it belong to
 * @type {?|undefined}
 */
IOptionDescriptor.prototype.Group;
/**
 *
 * @type {?|undefined}
 */
IOptionDescriptor.prototype.Platform;
/**
 * gets or sets an order
 * @type {?|undefined}
 */
IOptionDescriptor.prototype.Order;
/**
 * gets or sets whether related options were changed
 * @type {?|undefined}
 */
IOptionDescriptor.prototype.IsDirty;
/**
 * gets or sets a value indicate it is active
 * @type {?|undefined}
 */
IOptionDescriptor.prototype.IsActive;
/**
 * gets or sets the data context
 * @type {?|undefined}
 */
IOptionDescriptor.prototype.DataContext;
/**
 * gets or sets a tag value
 * @type {?|undefined}
 */
IOptionDescriptor.prototype.Tag;
/**
 * @record
 */
export function IOptionEditor() { }
/**
 * gets or sets the title of editor
 * @type {?}
 */
IOptionEditor.prototype.Title;
/**
 * gets or sets a value indicate wheter the option was changed
 * @type {?}
 */
IOptionEditor.prototype.IsDirty;
/**
 * Submi changes and return a value indicate whether submit successfuly
 * @type {?}
 */
IOptionEditor.prototype.Submit;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSU9wdGlvbkRlc2NyaXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vc2V0dGluZ3MvSU9wdGlvbkRlc2NyaXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbkRlc2NyaXB0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYW4gaWQgZm9yIHRoZSBkZXNjcmlwdG9yXHJcbiAgICAgKi9cclxuICAgIElkOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGdldHMgb3Igc2V0cyB0aGUgaGVhZGVyIFxyXG4gICAgICovXHJcbiAgICBIZWFkZXI6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB1cmwgdG8gb3B0aW9uIGVkaXRvclxyXG4gICAgICovXHJcbiAgICBVcmw6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyBvciBzZXRzIGFuIGljb25zIHNob3cgaW4gZnJvbnQgb2YgdGhlIGhlYWRlclxyXG4gICAgICovXHJcbiAgICBJY29uPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRzIG9yIHNldHMgYSBncm91cCBpdCBiZWxvbmcgdG9cclxuICAgICAqL1xyXG4gICAgR3JvdXA/OiBzdHJpbmc7XHJcbiAgICAvKiogKi9cclxuICAgIFBsYXRmb3JtPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRzIG9yIHNldHMgYW4gb3JkZXJcclxuICAgICAqL1xyXG4gICAgT3JkZXI/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIGdldHMgb3Igc2V0cyB3aGV0aGVyIHJlbGF0ZWQgb3B0aW9ucyB3ZXJlIGNoYW5nZWQgXHJcbiAgICAgKi9cclxuICAgIElzRGlydHk/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRzIG9yIHNldHMgYSB2YWx1ZSBpbmRpY2F0ZSBpdCBpcyBhY3RpdmVcclxuICAgICAqL1xyXG4gICAgSXNBY3RpdmU/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRzIG9yIHNldHMgdGhlIGRhdGEgY29udGV4dFxyXG4gICAgICovXHJcbiAgICBEYXRhQ29udGV4dD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyBvciBzZXRzIGEgdGFnIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIFRhZz86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uRWRpdG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyBvciBzZXRzIHRoZSB0aXRsZSBvZiBlZGl0b3JcclxuICAgICAqL1xyXG4gICAgVGl0bGU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyBvciBzZXRzIGEgdmFsdWUgaW5kaWNhdGUgd2hldGVyIHRoZSBvcHRpb24gd2FzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgSXNEaXJ0eTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1Ym1pIGNoYW5nZXMgYW5kIHJldHVybiBhIHZhbHVlIGluZGljYXRlIHdoZXRoZXIgc3VibWl0IHN1Y2Nlc3NmdWx5IFxyXG4gICAgICovXHJcbiAgICBTdWJtaXQoKTogUHJvbWlzZTx7IFN1Y2Nlc3M6IGJvb2xlYW4sIE1lc3NhZ2U6IHN0cmluZywgRGF0YTogYW55IH0+O1xyXG59XHJcblxyXG4iXX0=