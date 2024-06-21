interface Node<T> {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;

        if (!this.head) {
            // no element in the list
            this.head = newNode;
            this.tail = newNode;
        } else if (this.head === this.tail) {
            // only one element in the list
            newNode.next = this.tail;
            this.tail.prev = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length += 1;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error(`Can't insert at index ${idx}`);
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        const curr = this.getAt(idx);

        if (curr) {
            const newNode = { value: item } as Node<T>;
            newNode.prev = curr.prev;
            newNode.next = curr;

            if (curr.prev) {
                curr.prev.next = newNode;
            }

            curr.prev = newNode;
            this.length += 1;
        }
    }

    append(item: T): void {
        const newNode = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length += 1;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }

        let curr = this.head;

        while (curr?.value !== item && !!curr) {
            curr = curr?.next as Node<T>;
        }

        if (!curr) {
            return;
        }

        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        let target = this.getAt(idx);

        if (!target) {
            return;
        }

        return this.removeNode(target);
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;

        for (let i = 1; i <= idx && !!curr; i++) {
            curr = curr.next;
        }

        return curr;
    }

    private removeNode(node: Node<T>): T {
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        this.length -= 1;
        return node.value;
    }
}
