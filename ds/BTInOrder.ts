interface BinaryNode<T> {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
}

function walk(node: BinaryNode<number> | null, path: number[]): void {
    if (!node) {
        return;
    }

    walk(node.left, path);
    path.push(node.value);
    walk(node.right, path);
}

export default function in_order_search(node: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(node, path);
    return path;
}
