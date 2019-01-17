/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { AppSettingItem } from './AppSettingItem';
import * as Collections from '../collections/index';
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.Items = new Collections.NamedDictionary();
    }
    Object.defineProperty(AppSettings.prototype, "SettingItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this.Items.Values();
        },
        enumerable: true,
        configurable: true
    });
    /** Get a setting item by name. */
    /**
     * Get a setting item by name.
     * @param {?} name
     * @param {?=} defaultValue
     * @return {?}
     */
    AppSettings.prototype.GetItem = /**
     * Get a setting item by name.
     * @param {?} name
     * @param {?=} defaultValue
     * @return {?}
     */
    function (name, defaultValue) {
        if (!name)
            throw new Error('Given name is null.');
        /** @type {?} */
        var item = this.Items.Item(name);
        if (!item && defaultValue != null) {
            item = new AppSettingItem();
            item.Name = name;
            item.Value = defaultValue;
            this.Items.Add(name, item);
        }
        return item;
    };
    /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     */
    /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     * @param {?} item
     * @return {?}
     */
    AppSettings.prototype.AddItem = /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item && item.Name) {
            /** @type {?} */
            var existing = this.GetItem(item.Name);
            if (existing) {
                existing.Value = item.Value;
            }
            else {
                this.Items.Add(item.Name, item);
            }
        }
        return this;
    };
    /**
     * Set setting item value
     */
    /**
     * Set setting item value
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    AppSettings.prototype.SetValue = /**
     * Set setting item value
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        /** @type {?} */
        var item = this.GetItem(name);
        if (!item) {
            item = new AppSettingItem();
            item.Name = name;
            this.Items.Add(name, item);
        }
        item.Value = value;
        return this;
    };
    return AppSettings;
}());
export { AppSettings };
if (false) {
    /** @type {?} */
    AppSettings.prototype.Items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwU2V0dGluZ3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vc2V0dGluZ3MvQXBwU2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEtBQUssV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBRXBELElBQUE7O3FCQUNvQixJQUFJLFdBQVcsQ0FBQyxlQUFlLEVBQWtCOztJQUVqRSxzQkFBSSxxQ0FBWTs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM5Qjs7O09BQUE7SUFFRCxrQ0FBa0M7Ozs7Ozs7SUFDbEMsNkJBQU87Ozs7OztJQUFQLFVBQVEsSUFBWSxFQUFFLFlBQWtCO1FBQ3BDLElBQUksQ0FBQyxJQUFJO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztRQUUzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFDL0IsSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNEOzs7T0FHRzs7Ozs7OztJQUNILDZCQUFPOzs7Ozs7SUFBUCxVQUFRLElBQW9CO1FBQ3hCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7O1lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksUUFBUSxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0Q7O09BRUc7Ozs7Ozs7SUFDSCw4QkFBUTs7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsS0FBVTs7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7S0FDZjtzQkFwREw7SUFxREMsQ0FBQTtBQWpERCx1QkFpREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBTZXR0aW5nSXRlbSB9IGZyb20gJy4vQXBwU2V0dGluZ0l0ZW0nO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFNldHRpbmdzIHtcclxuICAgIHByaXZhdGUgSXRlbXMgPSBuZXcgQ29sbGVjdGlvbnMuTmFtZWREaWN0aW9uYXJ5PEFwcFNldHRpbmdJdGVtPigpO1xyXG5cclxuICAgIGdldCBTZXR0aW5nSXRlbXMoKTogQXBwU2V0dGluZ0l0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuSXRlbXMuVmFsdWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhIHNldHRpbmcgaXRlbSBieSBuYW1lLiAqL1xyXG4gICAgR2V0SXRlbShuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IEFwcFNldHRpbmdJdGVtIHtcclxuICAgICAgICBpZiAoIW5hbWUpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gbmFtZSBpcyBudWxsLicpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuSXRlbXMuSXRlbShuYW1lKTtcclxuICAgICAgICBpZiAoIWl0ZW0gJiYgZGVmYXVsdFZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ldyBBcHBTZXR0aW5nSXRlbSgpO1xyXG4gICAgICAgICAgICBpdGVtLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBpdGVtLlZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1zLkFkZChuYW1lLCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICAvKiogXHJcbiAgICAgKiBBZGQgYSBzZXR0aW5nIGl0ZW0sIGlmIHRoZXJlIGlzIGFuIGl0ZW0gd2l0aCBzYW1lIG5hbWUsIHRoYXQgaXRlbSB3aWxsXHJcbiAgICAgKiBiZSB1cGRhdGVkLlxyXG4gICAgICovXHJcbiAgICBBZGRJdGVtKGl0ZW06IEFwcFNldHRpbmdJdGVtKTogQXBwU2V0dGluZ3Mge1xyXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0uTmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmcgPSB0aGlzLkdldEl0ZW0oaXRlbS5OYW1lKTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy5WYWx1ZSA9IGl0ZW0uVmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkl0ZW1zLkFkZChpdGVtLk5hbWUsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIFxyXG4gICAgICogU2V0IHNldHRpbmcgaXRlbSB2YWx1ZSBcclxuICAgICAqL1xyXG4gICAgU2V0VmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogQXBwU2V0dGluZ3Mge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5HZXRJdGVtKG5hbWUpO1xyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtID0gbmV3IEFwcFNldHRpbmdJdGVtKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uTmFtZSA9IG5hbWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuSXRlbXMuQWRkKG5hbWUsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtLlZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iXX0=