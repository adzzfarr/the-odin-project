import { Node, LinkedList } from "../linked-list/classes.js"

export class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(capacity);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    } 

    set(key, value) {
        const hashCode = this.hash(key);

        if (!this.buckets[hashCode]) {
            // If the bucket does not contain anything
            this.buckets[hashCode] = new LinkedList();
            // Store the key and value as an array, which is the data type stored in the node of the linked list
            this.buckets[hashCode].append([key, value]);
            // Increment size
            this.size++;
        } else {
            // If the bucket already has data, check if the key already exists
            // We cannot use LinkedList.contains([key, value]) because [key, value] is an array. Arrays are compared by reference and not by value so even if the actual key and value is the same it would still return false.
            let current = this.buckets[hashCode].head;
            while (current) {
                const keyValuePair = current.value;
                if (keyValuePair[0] === key) {
                    // If key exists, update the value
                    keyValuePair[1] = value;
                    return;
                }
                current = current.nextNode;
            }

            // If key does not exist, add it to the bucket   
            this.buckets[hashCode].append([key, value]); 
            this.size++;     

            // Calculate growth threshold
            const growthThreshold = parseInt(this.capacity * this.loadFactor);

            // Double capacity if there are too many entries
            if (this.size > growthThreshold) {
                this.capacity *= 2;
                const oldBuckets = Array.from(this.buckets);

                this.buckets = new Array(this.capacity);
                this.size = 0;
                for (let bucket of oldBuckets) {
                    if (!bucket) continue;

                    let current = bucket.head;
                    while (current) {
                        this.set(...current.value);
                        current = current.nextNode;
                    }
                }
            }
        }
    }

    get(key) {
        const hashCode = this.hash(key);
        const bucket = this.buckets[hashCode];

        if (!bucket) return null;

        let current = bucket.head;
        while (current) {
            const keyValuePair = current.value;
            if (keyValuePair[0] === key) return keyValuePair[1];
            current = current.nextNode;
        }

        return null;
    }

    has(key) {
        const hashCode = this.hash(key);
        const bucket = this.buckets[hashCode];

        if (!bucket) return false;

        let current = bucket.head;
        while (current) {
            const keyValuePair = current.value;
            if (keyValuePair[0] === key) return true;
            current = current.nextNode;
        }

        return false;
    }

    remove(key) {
        const hashCode = this.hash(key);
        const bucket = this.buckets[hashCode];

        if (!bucket || !this.has(key)) return false;

        let currentNode = bucket.head;
        let currentIndex = 0;
        while (currentNode) {
            const keyValuePair = currentNode.value;
            if (keyValuePair[0] === key) {
                this.buckets[hashCode].removeAt(currentIndex);
                this.size--;
                return true;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    keys() {
        let keys = [];

        for (let bucket of this.buckets) {
            if (bucket) {
                let current = bucket.head;
                while (current) {
                    keys.push(current.value[0]);
                    current = current.nextNode;
                } 
            }
        }

        return keys;
    }

    values() {
        let values = [];

        for (let bucket of this.buckets) {
            if (bucket) {
                let current = bucket.head;
                while (current) {
                    values.push(current.value[1]);
                    current = current.nextNode;
                } 
            }
        }

        return values;
    }

    entries() {
        let entries = [];

        for (let bucket of this.buckets) {
            if (bucket) {
                let current = bucket.head;
                while (current) {
                    entries.push(current.value);
                    current = current.nextNode;
                } 
            }
        }

        return entries;
    }
}