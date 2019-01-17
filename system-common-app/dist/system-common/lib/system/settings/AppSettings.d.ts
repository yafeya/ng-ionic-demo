import { AppSettingItem } from './AppSettingItem';
export declare class AppSettings {
    private Items;
    readonly SettingItems: AppSettingItem[];
    /** Get a setting item by name. */
    GetItem(name: string, defaultValue?: any): AppSettingItem;
    /**
     * Add a setting item, if there is an item with same name, that item will
     * be updated.
     */
    AddItem(item: AppSettingItem): AppSettings;
    /**
     * Set setting item value
     */
    SetValue(name: string, value: any): AppSettings;
}
