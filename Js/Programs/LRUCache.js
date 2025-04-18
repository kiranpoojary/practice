class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return;
    else {
      const val = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, val);
      return val;
    }
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // remove least recently used
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
    return value;
  }

  show() {
    return this.cache;
  }
}

const mycache = new LRUCache(3);
console.log(mycache.show());
console.log(mycache.get("name"));
mycache.put("fname", "Kiran");
mycache.put("lname", "Poojari");
mycache.put("age", "27");
console.log(mycache.show());
console.log(mycache.get("lname"));
console.log(mycache.show());
mycache.put("city", "Kundapura");
console.log(mycache.show());
