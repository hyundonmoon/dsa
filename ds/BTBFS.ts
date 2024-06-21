import Queue from "./Queue";

export default function bfs(
    rootNode: BinaryNode<number>,
    needle: number,
): boolean {
    const queue = new Queue<BinaryNode<number>>();
    queue.enqueue(rootNode);

    let found = false;

    while (queue.length) {
        const node = queue.dequeue();

        if (!node) {
            continue;
        }

        if (node.value === needle) {
            found = true;
            break;
        }

        if (node.left) {
            queue.enqueue(node.left);
        }

        if (node.right) {
            queue.enqueue(node.right);
        }
    }

    return found;
}
