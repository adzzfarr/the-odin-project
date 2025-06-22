import { HashMap } from "./hash-map.js";

const map = new HashMap(0.75, 4); // small initial capacity to quickly trigger expansion

// Inserting entries to trigger expansion
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('d', 4); // Should trigger resize when this is added
map.set('e', 5);

// ✅ Test get(key)
console.log(map.get('a')); // 1
console.log(map.get('e')); // 5
console.log(map.get('z')); // null (not found)

// ✅ Test has(key)
console.log(map.has('c')); // true
console.log(map.has('z')); // false

// ✅ Test remove(key)
console.log(map.remove('b')); // true
console.log(map.has('b'));    // false
console.log(map.get('b'));    // null
console.log(map.length());    // 4 (after removal)

// ✅ Test keys()
console.log(map.keys()); // ['a', 'c', 'd', 'e']

// ✅ Test values()
console.log(map.values()); // [1, 3, 4, 5]

// ✅ Test entries()
console.log(map.entries()); // [['a',1], ['c',3], ['d',4], ['e',5]]

// ✅ Test clear()
map.clear();
console.log(map.length());     // 0
console.log(map.keys());       // []
console.log(map.values());     // []
console.log(map.entries());    // []

// Use small capacity to easily trigger collisions
const collisionMap = new HashMap(0.75, 4);

// These keys are crafted or selected to land in the same bucket
collisionMap.set('ab', 'first');
collisionMap.set('bA', 'second');

// Check that both exist (collision but not overwrite)
console.log(collisionMap.get('ab'));   // 'first'
console.log(collisionMap.get('bA'));   // 'second'
console.log(collisionMap.entries());   // [['ab', 'first'], ['bA', 'second']]
console.log(collisionMap.length());    // 2

// Update one and confirm the other remains unchanged
collisionMap.set('ab', 'updated');
console.log(collisionMap.get('ab'));   // 'updated'
console.log(collisionMap.get('bA'));   // 'second'

// Remove one and confirm the other still exists
collisionMap.remove('bA');
console.log(collisionMap.get('bA'));   // null
console.log(collisionMap.get('ab'));   // 'updated'
console.log(collisionMap.length());    // 1
