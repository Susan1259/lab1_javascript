// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next; 
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
    }

    insertFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head; 
        this.head = newNode; 
    }

    size() {
        let count = 0; 
        let node = this.head; 

        while (node) {
            count++; 
            node = node.next; 
        }
        return count; 
    }

    getFirst() {
        return this.head; 
    }

    getLast() {
        if (!this.head) return null; 

        let node = this.head;
        while (node) {
            if (!node.next) return node; 
            node = node.next;
        }
    }

    clear() {
        this.head = null; 
    }

    removeFirst() {
        if (!this.head) return; 
        this.head = this.head.next; 
    }

    removeLast() {
        if (!this.head) return; 

        if (!this.head.next) {
            this.head = null; 
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node) {
            if (!node.next) {
                previous.next = null; 
                return;
            }
            previous = node; 
            node = node.next;
        }
    }

    insertLast(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode; 
            return;
        }

        const lastNode = this.getLast(); 
        lastNode.next = newNode; 
    }

    getAt(index) {
        let counter = 0; 
        let node = this.head; 

        while (node) {
            if (counter === index) return node;
            counter++; 
            node = node.next; 
        }
        return null; 
    }

    removeAt(index) {
        if (!this.head) return; 

        if (index === 0) {
            this.removeFirst(); 
            return;
        }

        let previous = this.getAt(index - 1); 
        if (!previous || !previous.next) return; 

        previous.next = previous.next.next; 
    }

    insertAt(data, index) {
        if (index === 0) {
            this.insertFirst(data); 
            return;
        }

        const previous = this.getAt(index - 1); 
        if (!previous) {
            this.insertLast(data); 
            return;
        }

        const newNode = new Node(data);
        newNode.next = previous.next; 
        previous.next = newNode; 
    }

    forEach(fn) {
        let node = this.head; 

        while (node) {
            fn(node); 
            node = node.next; 
        }
    }

    *[Symbol.iterator]() {
        let node = this.head; 

        while (node) {
            yield node; 
            node = node.next; 
        }
    }
}

module.exports = { Node, LinkedList };
