

class LocalStorageMap {
    constructor(key) {
        this.key = key;
    }

    get() {
        let item = localStorage.getItem(this.key);
        if(item) {
            return JSON.parse(item);
        } else {
            return {};
        }
    };

    add(key, obj) {
        let item = this.get();
        item[key] = obj;

        localStorage.setItem(this.key, JSON.stringify(item));
    }
}
