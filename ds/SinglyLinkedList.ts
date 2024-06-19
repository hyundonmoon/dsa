interface Node<T> {
    value: T;
    next?: Node<T>;
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode: Node<T> = { value: item };

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;
    }

    insertAt(item: T, idx: number): void {
        const newNode: Node<T> = { value: item };
        let nodeBeforeTargetIdxNode = this.head as Node<T>;

        if (!nodeBeforeTargetIdxNode) {
            this.head = newNode;
            this.length += 1;
            return;
        }

        if (idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length += 1;
            return;
        }

        for (let i = 1; i < idx && !!nodeBeforeTargetIdxNode; i++) {
            nodeBeforeTargetIdxNode = nodeBeforeTargetIdxNode?.next as Node<T>;
        }

        if (!!nodeBeforeTargetIdxNode) {
            newNode.next = nodeBeforeTargetIdxNode.next;
            nodeBeforeTargetIdxNode.next = newNode;
            this.length += 1;
        }
    }

    append(item: T): void {
        const newNode: Node<T> = { value: item };

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    remove(item: T): T | undefined {
        if (!this.head || !this.tail) {
            // same as length === 0
            return;
        }

        let prevNode: Node<T> | undefined;
        let targetNode: Node<T> | undefined = this.head;

        while (targetNode?.value !== item && !!targetNode) {
            prevNode = targetNode;
            targetNode = targetNode.next;
        }

        if (!targetNode) {
            // item not found
            return;
        }

        if (!prevNode) {
            // remove head
            this.head = this.head?.next;

            if (this.tail === targetNode) {
                this.tail = undefined;
            }

            this.length -= 1;
            return targetNode.value;
        }

        // somewhere in the middle or tail

        prevNode.next = targetNode.next;
        if (!prevNode.next) {
            this.tail = undefined;
        }
        this.length -= 1;
        return targetNode.value;
    }

    get(idx: number): T | undefined {
        let current = this.head as Node<T>;

        for (let i = 0; i < idx && !!current; i++) {
            current = current?.next as Node<T>;
        }

        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0 || !this.head || !this.tail) {
            return;
        }

        if (idx === 0) {
            const targetNode = this.head;
            this.head = targetNode?.next;

            if (!this.head) {
                this.tail = undefined;
            }

            this.length -= 1;

            return targetNode?.value;
        }

        let nodeBeforeTargetNode = this.head;

        for (let i = 1; i < idx; i++) {
            nodeBeforeTargetNode = nodeBeforeTargetNode?.next as Node<T>;
        }

        if (!!nodeBeforeTargetNode?.next) {
            const targetNode = nodeBeforeTargetNode.next;
            nodeBeforeTargetNode.next = nodeBeforeTargetNode?.next?.next;

            if (!nodeBeforeTargetNode?.next) {
                this.tail = nodeBeforeTargetNode;
            }

            this.length -= 1;
            return targetNode.value;
        }

        return;
    }
}
