export class Node {
    constructor(data = null, next = null) {
        this.value = data;
        this.nextNode = next;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        let count = 0
        let currNode = this.head

        while(currNode) {
            count++;
            currNode = currNode.nextNode;
        }

        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let currNode = this.head;

        if (index === 0) return currNode;
        if (index < 0 || index >= this.size()) return null;

        for (let i = 0; i < index; i++) {
            currNode = currNode.nextNode;
        }

        return currNode;
    }

    pop() {
        let currNode = this.head;

        if (!this.head) return;

        if (!this.head.nextNode) {
            this.head = null;
            this.tail = null;
            return;
        }

        while(currNode.nextNode.nextNode) {
            currNode = currNode.nextNode;
        }

        currNode.nextNode = null;
        this.tail = currNode;
    }

    contains(value) {
        if (!this.head) return false;

        let currNode = this.head;
        
        while(currNode) {
            if (currNode.value === value) {
                return true;
            }
            currNode = currNode.nextNode;
        }

        return false;
    }

    find(value) {
        if (!this.head) return null;

        let currNode = this.head;
        let currIndex = 0;

        while(currNode) {
            if (currNode.value === value) {
                return currIndex;
            }
            currNode = currNode.nextNode;
            currIndex++;
        }

        return null;
    }

    toString() {
        let string = '';

        let currNode = this.head;

        while(currNode) {
            const currNodeString = `( ${currNode.value.toString()} ) -> `;
            string += currNodeString;
            currNode = currNode.nextNode;
        }
        string += 'null';

        return string;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size()) return;

        if (index === 0) {
            this.prepend(value);
            return
        }

        if (index === this.size()) {
            this.append(value);
            return;
        }

        let currNode = this.head;
        let currIndex = 0;

        while (currIndex < index - 1) {
            currNode = currNode.nextNode;
            currIndex++;
        }

        const newNode = new Node(value, currNode.nextNode);
        currNode.nextNode = newNode;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size() || !this.head) return;

        if (!this.head.nextNode) {
            this.head = null;
            this.tail = null;
            return;
        } 

        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }

        if (index === this.size() - 1) {
            this.pop();
            return; 
        }

        let currNode = this.head;
        let currIndex = 0;

        while (currIndex < index - 1) {
            currNode = currNode.nextNode;
            currIndex++;
        }

        currNode.nextNode = currNode.nextNode.nextNode;
    }
}