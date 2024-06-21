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
    walk(node.right, path);
    path.push(node.value);
}

export default function post_order_search(node: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(node, path);
    return path;
}
