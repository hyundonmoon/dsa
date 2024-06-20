interface Node<T> {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item } as Node<T>;

        if (!!this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return;
        }

        const targetNode = this.head;

        this.head = this.head?.next;
        if (!this.head) {
            this.tail = undefined;
        }
        this.length -= 1;

        return targetNode?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
