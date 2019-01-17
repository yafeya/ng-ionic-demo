/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Collection } from './Collection';
/**
 * @template T
 */
export class List extends Collection {
    /**
     * Get index of given item
     * @param {?} item
     * @return {?}
     */
    IndexOf(item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        return this.Items.indexOf(item);
    }
    /**
     * Insert item to given index
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    Insert(index, item) {
        if (!item)
            throw new Error(`Argument 'item' is null.`);
        if (index < 0 || index >= this.Items.length)
            throw new Error(`Argument 'index' is out of index`);
        this.Items.splice(index, 0, item);
    }
    /**
     * Remove item at given index
     * @param {?} index
     * @return {?}
     */
    RemoveAt(index) {
        if (index < 0 || index >= this.Items.length)
            throw new Error(`Argument 'index' is out of index`);
        this.Items.splice(index, 1);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb2xsZWN0aW9ucy9MaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBRzFDLE1BQU0sV0FBZSxTQUFRLFVBQWE7Ozs7OztJQUV0QyxPQUFPLENBQUMsSUFBTztRQUNYLElBQUksQ0FBQyxJQUFJO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkM7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLElBQU87UUFDekIsSUFBSSxDQUFDLElBQUk7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDckM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDL0I7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL0NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBJTGlzdCB9IGZyb20gJy4vSUxpc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3Q8VD4gZXh0ZW5kcyBDb2xsZWN0aW9uPFQ+IGltcGxlbWVudHMgSUxpc3Q8VD4ge1xyXG4gICAgLyoqIEdldCBpbmRleCBvZiBnaXZlbiBpdGVtICovXHJcbiAgICBJbmRleE9mKGl0ZW06IFQpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCAnaXRlbScgaXMgbnVsbC5gKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5JdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgLyoqIEluc2VydCBpdGVtIHRvIGdpdmVuIGluZGV4ICovXHJcbiAgICBJbnNlcnQoaW5kZXg6IG51bWJlciwgaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCAnaXRlbScgaXMgbnVsbC5gKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuSXRlbXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50ICdpbmRleCcgaXMgb3V0IG9mIGluZGV4YCk7XHJcblxyXG4gICAgICAgIHRoaXMuSXRlbXMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcclxuICAgIH1cclxuICAgIC8qKiBSZW1vdmUgaXRlbSBhdCBnaXZlbiBpbmRleCAqL1xyXG4gICAgUmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5JdGVtcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgJ2luZGV4JyBpcyBvdXQgb2YgaW5kZXhgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59Il19