/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Collection } from './Collection';
/**
 * @template T
 */
var /**
 * @template T
 */
List = /** @class */ (function (_super) {
    tslib_1.__extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Get index of given item */
    /**
     * Get index of given item
     * @param {?} item
     * @return {?}
     */
    List.prototype.IndexOf = /**
     * Get index of given item
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        return this.Items.indexOf(item);
    };
    /** Insert item to given index */
    /**
     * Insert item to given index
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    List.prototype.Insert = /**
     * Insert item to given index
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        if (!item)
            throw new Error("Argument 'item' is null.");
        if (index < 0 || index >= this.Items.length)
            throw new Error("Argument 'index' is out of index");
        this.Items.splice(index, 0, item);
    };
    /** Remove item at given index */
    /**
     * Remove item at given index
     * @param {?} index
     * @return {?}
     */
    List.prototype.RemoveAt = /**
     * Remove item at given index
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index < 0 || index >= this.Items.length)
            throw new Error("Argument 'index' is out of index");
        this.Items.splice(index, 1);
    };
    return List;
}(Collection));
/**
 * @template T
 */
export { List };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb2xsZWN0aW9ucy9MaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUcxQzs7O0FBQUE7SUFBNkIsZ0NBQWE7Ozs7SUFDdEMsOEJBQThCOzs7Ozs7SUFDOUIsc0JBQU87Ozs7O0lBQVAsVUFBUSxJQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUk7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQztJQUNELGlDQUFpQzs7Ozs7OztJQUNqQyxxQkFBTTs7Ozs7O0lBQU4sVUFBTyxLQUFhLEVBQUUsSUFBTztRQUN6QixJQUFJLENBQUMsSUFBSTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNyQztJQUNELGlDQUFpQzs7Ozs7O0lBQ2pDLHVCQUFROzs7OztJQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQy9CO2VBekJMO0VBRzZCLFVBQVUsRUF1QnRDLENBQUE7Ozs7QUF2QkQsZ0JBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4vQ29sbGVjdGlvbic7XHJcbmltcG9ydCB7IElMaXN0IH0gZnJvbSAnLi9JTGlzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdDxUPiBleHRlbmRzIENvbGxlY3Rpb248VD4gaW1wbGVtZW50cyBJTGlzdDxUPiB7XHJcbiAgICAvKiogR2V0IGluZGV4IG9mIGdpdmVuIGl0ZW0gKi9cclxuICAgIEluZGV4T2YoaXRlbTogVCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50ICdpdGVtJyBpcyBudWxsLmApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLkl0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcbiAgICAvKiogSW5zZXJ0IGl0ZW0gdG8gZ2l2ZW4gaW5kZXggKi9cclxuICAgIEluc2VydChpbmRleDogbnVtYmVyLCBpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50ICdpdGVtJyBpcyBudWxsLmApO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5JdGVtcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgJ2luZGV4JyBpcyBvdXQgb2YgaW5kZXhgKTtcclxuXHJcbiAgICAgICAgdGhpcy5JdGVtcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgLyoqIFJlbW92ZSBpdGVtIGF0IGdpdmVuIGluZGV4ICovXHJcbiAgICBSZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLkl0ZW1zLmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCAnaW5kZXgnIGlzIG91dCBvZiBpbmRleGApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB0aGlzLkl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn0iXX0=