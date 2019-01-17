/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Enumerable } from './Enumerable';
import { KeyValuePair } from './KeyValuePair';
/**
 * @template TKey, TValue
 */
export class Dictionary extends Enumerable {
    constructor() {
        super(...arguments);
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Add(key, value) {
        this.map.set(key, value);
        this.Items.Add(new KeyValuePair(key, value));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    ContainsKey(key) {
        return this.map.has(key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Item(key) {
        return this.map.get(key);
    }
    /**
     * @return {?}
     */
    Keys() {
        /** @type {?} */
        let keys = [];
        this.map.forEach((value, key) => {
            keys.push(key);
        });
        return keys;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Remove(key) {
        /** @type {?} */
        let item = this.Items.FirstOrDefault(x => x.Key === key);
        if (item)
            this.Items.Remove(item);
        return this.map.delete(key);
    }
    /**
     * @return {?}
     */
    Values() {
        /** @type {?} */
        let values = [];
        this.map.forEach((value, key) => {
            values.push(value);
        });
        return values;
    }
}
if (false) {
    /** @type {?} */
    Dictionary.prototype.map;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb2xsZWN0aW9ucy9EaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU5QyxNQUFNLGlCQUFnQyxTQUFRLFVBQXNDOzs7bUJBQ2xFLElBQUksR0FBRyxFQUFnQjs7Ozs7OztJQUVyQyxHQUFHLENBQUMsR0FBUyxFQUFFLEtBQWE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2hEOzs7OztJQUNELFdBQVcsQ0FBQyxHQUFTO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7Ozs7O0lBSUQsSUFBSSxDQUFDLEdBQVM7UUFDVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7O0lBQ0QsSUFBSTs7UUFDQSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFFZCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCLENBQUMsQ0FBQTtRQUNGLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7O0lBQ0QsTUFBTSxDQUFDLEdBQVM7O1FBRVosSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSTtZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0I7Ozs7SUFDRCxNQUFNOztRQUNGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGljdGlvbmFyeSB9IGZyb20gJy4vSURpY3Rpb25hcnknO1xyXG5pbXBvcnQgeyBFbnVtZXJhYmxlIH0gZnJvbSAnLi9FbnVtZXJhYmxlJztcclxuaW1wb3J0IHsgS2V5VmFsdWVQYWlyIH0gZnJvbSAnLi9LZXlWYWx1ZVBhaXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnk8VEtleSwgVFZhbHVlPiBleHRlbmRzIEVudW1lcmFibGU8S2V5VmFsdWVQYWlyPFRLZXksIFRWYWx1ZT4+IGltcGxlbWVudHMgSURpY3Rpb25hcnk8VEtleSwgVFZhbHVlPiB7XHJcbiAgICBwcml2YXRlIG1hcCA9IG5ldyBNYXA8VEtleSwgVFZhbHVlPigpO1xyXG5cclxuICAgIEFkZChrZXk6IFRLZXksIHZhbHVlOiBUVmFsdWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hcC5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5JdGVtcy5BZGQobmV3IEtleVZhbHVlUGFpcihrZXksIHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBDb250YWluc0tleShrZXk6IFRLZXkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSk7XHJcbiAgICB9XHJcbiAgICAvLyBDb3VudCgpOiBudW1iZXIge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLml0ZW1zLnNpemU7XHJcbiAgICAvLyB9XHJcbiAgICBJdGVtKGtleTogVEtleSk6IFRWYWx1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpO1xyXG4gICAgfVxyXG4gICAgS2V5cygpOiBUS2V5W10ge1xyXG4gICAgICAgIGxldCBrZXlzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMubWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxuICAgIFJlbW92ZShrZXk6IFRLZXkpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLkl0ZW1zLkZpcnN0T3JEZWZhdWx0KHggPT4geC5LZXkgPT09IGtleSk7XHJcbiAgICAgICAgaWYgKGl0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuSXRlbXMuUmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIFZhbHVlcygpOiBUVmFsdWVbXSB7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxufSJdfQ==