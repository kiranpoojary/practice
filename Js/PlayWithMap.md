
### **Features of JavaScript `Map`**

1. **Key-Value Storage** – Stores unique key-value pairs.
2. **Preserves Insertion Order** – Keys are iterated in the order they were added.
3. **Flexible Key Types** – Can use any data type (objects, functions, etc.) as keys.
4. **Efficient Lookups** – Provides O(1) time complexity for `.get()` and `.set()`.
5. **Iterable** – Can be looped using `.forEach()`, `for...of`, or `.entries()`.
6. **Size Property** – `.size` returns the number of elements.
7. **No Key Duplication** – Each key is unique, values can be updated.

---

### **JavaScript `Map` Methods**

| Method                | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| `set(key, value)`   | Adds or updates an entry with the given key and value.           |
| `get(key)`          | Retrieves the value associated with the given key.               |
| `has(key)`          | Returns `true`if the key exists, else `false`.               |
| `delete(key)`       | Removes the key-value pair from the map.                         |
| `clear()`           | Removes all entries from the map.                                |
| `size`              | Returns the number of key-value pairs in the map.                |
| `keys()`            | Returns an iterator of all keys in insertion order.              |
| `values()`          | Returns an iterator of all values in insertion order.            |
| `entries()`         | Returns an iterator of `[key, value]`pairs in insertion order. |
| `forEach(callback)` | Iterates over each key-value pair in the map.                    |



```javascript
const mp = new Map();
console.log("\n------- undefined if no key present ---------");

console.log(mp.get("name")); // undefined

// key/value Pair
console.log("\n------- key/value Pair ---------");

mp.set("fname", "Kiran");
console.log("First Name:", mp.get("fname")); // Kiran
mp.set("lname", "Poojari");
mp.set("age", 30);
console.log("Age:", mp.get("age")); // 30
mp.set("age", 27);
console.log("Age:", mp.get("age")); // 27

// Keeps the insertion order
console.log("\n------- Keeps the insertion order ---------");

console.log(mp); // Map(3) { 'fname' => 'Kiran', 'lname' => 'Poojari', 'age' => 27 }

// key/value Pair
console.log("\n------- size Property ---------");
console.log(`Map size is :${mp.size}`);

// Iterable
console.log("\n------- Iterable ---------");
console.log("----forEach-----");
mp.forEach((value, key) => console.log(`${key}:${value}`));
console.log("----forof-----");
for (const val of mp) {
  console.log("Value :", val);
}
for (const [key, value] of mp) {
  console.log(`${key}:${value}`);
}
console.log("----entries()-----");
const mpItr = mp.entries();
console.log(mpItr.next());
console.log(mpItr.next());
console.log(mpItr.next());
console.log(mpItr.next());

console.log("----for with entries()-----");
const mpItr2 = mp.entries();
for (let i = 0; i < mp.size; i++) {
  const [k, v] = mpItr2.next().value;
  console.log(`${k}:${v}`);
}

console.log("\n------- .has(key) ---------");

console.log(`has key fname :`, mp.has("fname")); // true
console.log(`has key name  :`, mp.has("name")); // false

console.log("\n------- .delete(key) ---------");
mp.delete("fname");
console.log(`.has("fname")              :`, mp.has("fname")); // false
console.log(`map after .delete("fname") : `, mp);

console.log("\n------- .keys() ---------");
console.log(mp.keys()); //[Map Iterator] { 'lname', 'age' }
const keyItr = mp.keys();
console.log(keyItr.next()); // { value: 'lname', done: false }
console.log(keyItr.next()); // { value: 'age', done: false }

console.log("\n------- .clear() ---------");
console.log("Before clear :", mp); // Before clear : Map(2) { 'lname' => 'Poojari', 'age' => 27 }
mp.clear();
console.log("After clear  :", mp); // After clear  : Map(0) {}


```
