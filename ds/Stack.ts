interface Node<T> {
    value: T;
    next?: Node<T>;
}

export default class Stack<T> {
    public length: number;
    private top?: Node<T>;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const newNode = { value: item, next: this.top } as Node<T>;
        this.top = newNode;
        this.length += 1;
    }

    pop(): T | undefined {
        if (!this.top) {
            return;
        }

        const popped = this.top;
        this.top = popped?.next;
        this.length -= 1;

        return popped?.value;
    }

    peek(): T | undefined {
        return this.top?.value;
    }
}
