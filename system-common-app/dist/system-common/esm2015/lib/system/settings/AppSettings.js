/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { AppSettingItem } from './AppSettingItem';
import * as Collections from '../collections/index';
export class AppSettings {
    constructor() {
        this.Items = new Collections.NamedDictionary();
    }
    /**
     * @return {?}
     */
    get SettingItems() {
        return this.Items.Values();
    }
    /**
     * Get a setting item by name.
     * @param {?} name
     * @param {?=} defaultValue
     * @return {?}
     */
    GetItem(name, defaultValue) {
        if (!name)
            throw new Error('Given name is null.');
        /** @type {?} */
        let item = this.Items.Item(name);
        if (!item && defaultValue != null) {
            item = new AppSettingItem();
            item.Name = name;
            item.Value = defaultValue;
            this.Items.Add(name, item);
        }
        return item;
    }
    /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     * @param {?} item
     * @return {?}
     */
    AddItem(item) {
        if (item && item.Name) {
            /** @type {?} */
            let existing = this.GetItem(item.Name);
            if (existing) {
                existing.Value = item.Value;
            }
            else {
                this.Items.Add(item.Name, item);
            }
        }
        return this;
    }
    /**
     * Set setting item value
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    SetValue(name, value) {
        /** @type {?} */
        let item = this.GetItem(name);
        if (!item) {
            item = new AppSettingItem();
            item.Name = name;
            this.Items.Add(name, item);
        }
        item.Value = value;
        return this;
    }
}
if (false) {
    /** @type {?} */
    AppSettings.prototype.Items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwU2V0dGluZ3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly95YWZleWEtc3lzdGVtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zeXN0ZW0vc2V0dGluZ3MvQXBwU2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEtBQUssV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE1BQU07O3FCQUNjLElBQUksV0FBVyxDQUFDLGVBQWUsRUFBa0I7Ozs7O0lBRWpFLElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUM5Qjs7Ozs7OztJQUdELE9BQU8sQ0FBQyxJQUFZLEVBQUUsWUFBa0I7UUFDcEMsSUFBSSxDQUFDLElBQUk7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7O1FBRTNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtZQUMvQixJQUFJLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0lBS0QsT0FBTyxDQUFDLElBQW9CO1FBQ3hCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7O1lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksUUFBUSxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0lBSUQsUUFBUSxDQUFDLElBQVksRUFBRSxLQUFVOztRQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxJQUFJLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztLQUNmO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBTZXR0aW5nSXRlbSB9IGZyb20gJy4vQXBwU2V0dGluZ0l0ZW0nO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcclxuaW1wb3J0ICogYXMgQ29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFNldHRpbmdzIHtcclxuICAgIHByaXZhdGUgSXRlbXMgPSBuZXcgQ29sbGVjdGlvbnMuTmFtZWREaWN0aW9uYXJ5PEFwcFNldHRpbmdJdGVtPigpO1xyXG5cclxuICAgIGdldCBTZXR0aW5nSXRlbXMoKTogQXBwU2V0dGluZ0l0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuSXRlbXMuVmFsdWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhIHNldHRpbmcgaXRlbSBieSBuYW1lLiAqL1xyXG4gICAgR2V0SXRlbShuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IEFwcFNldHRpbmdJdGVtIHtcclxuICAgICAgICBpZiAoIW5hbWUpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gbmFtZSBpcyBudWxsLicpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuSXRlbXMuSXRlbShuYW1lKTtcclxuICAgICAgICBpZiAoIWl0ZW0gJiYgZGVmYXVsdFZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ldyBBcHBTZXR0aW5nSXRlbSgpO1xyXG4gICAgICAgICAgICBpdGVtLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBpdGVtLlZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1zLkFkZChuYW1lLCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICAvKiogXHJcbiAgICAgKiBBZGQgYSBzZXR0aW5nIGl0ZW0sIGlmIHRoZXJlIGlzIGFuIGl0ZW0gd2l0aCBzYW1lIG5hbWUsIHRoYXQgaXRlbSB3aWxsXHJcbiAgICAgKiBiZSB1cGRhdGVkLlxyXG4gICAgICovXHJcbiAgICBBZGRJdGVtKGl0ZW06IEFwcFNldHRpbmdJdGVtKTogQXBwU2V0dGluZ3Mge1xyXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0uTmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmcgPSB0aGlzLkdldEl0ZW0oaXRlbS5OYW1lKTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy5WYWx1ZSA9IGl0ZW0uVmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkl0ZW1zLkFkZChpdGVtLk5hbWUsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIFxyXG4gICAgICogU2V0IHNldHRpbmcgaXRlbSB2YWx1ZSBcclxuICAgICAqL1xyXG4gICAgU2V0VmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogQXBwU2V0dGluZ3Mge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5HZXRJdGVtKG5hbWUpO1xyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtID0gbmV3IEFwcFNldHRpbmdJdGVtKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uTmFtZSA9IG5hbWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuSXRlbXMuQWRkKG5hbWUsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtLlZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iXX0=