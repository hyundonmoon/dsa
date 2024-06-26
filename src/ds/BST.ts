export default class BinarySearchTree<T> {
  root: BinaryNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode: BinaryNode<T> = { value, left: null, right: null };

    if (!this.root) {
      this.root = newNode;
      return;
    }

    // recursive
    // this.insertNodeRecursive(this.root, value);

    // iterative
    this.insertNodeIterative(this.root, value);
  }

  private insertNodeRecursive(parent: BinaryNode<T>, value: T): void {
    // inserts node using recursion
    if (value > parent.value) {
      if (!!parent.right) {
        this.insertNodeRecursive(parent.right, value);
      } else {
        parent.right = { value, left: null, right: null };
      }
    } else {
      if (!!parent.left) {
        this.insertNodeRecursive(parent.left, value);
      } else {
        parent.left = { value, left: null, right: null };
      }
    }
  }

  private insertNodeIterative(startingPoint: BinaryNode<T>, value: T): void {
    let curr = startingPoint;

    while (curr) {
      if (value > curr.value) {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = { value, left: null, right: null } as BinaryNode<T>;
          break;
        }
      } else {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = { value, left: null, right: null } as BinaryNode<T>;
          break;
        }
      }
    }

    return;
  }

  delete(value: T): void {
    if (!this.root) {
      return;
    }

    this.root = this.deleteNodeRecursive(this.root, value);
  }

  private deleteNodeRecursive(
    node: BinaryNode<T> | null,
    value: T
  ): BinaryNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value > node.value) {
      node.right = this.deleteNodeRecursive(node?.right, value);
      return node;
    }

    if (value < node.value) {
      node.left = this.deleteNodeRecursive(node?.left, value);
      return node;
    }

    // target node/value found
    if (node.left === null && node.right === null) {
      // node has no child nodes -> no cleanup required, return immediately
      return null;
    }

    if (!!node.left && !!node.right) {
      // node has two child nodes
      // -> find the largest node among the node.left subtree,
      // -> delete that node from its position,
      // -> then replace this node with that node
      const replacementNode = this.findLargestNode(node?.left);
      if (replacementNode) {
        replacementNode.left = this.deleteNodeRecursive(
          node.left,
          replacementNode.value
        );
        replacementNode.right = node.right;
      }

      return replacementNode;
    }

    // node has one child node
    return node?.left || node?.right;
  }

  private findLargestNode(node: BinaryNode<T> | null): BinaryNode<T> | null {
    if (node === null) {
      return null;
    }

    let curr = node;

    while (curr.right) {
      curr = curr.right;
    }

    return curr;
  }

  search(value: T): boolean {
    if (!this.root) {
      return false;
    }

    // recursive
    // return this.searchNodeRecursive(this.root, value);

    // iterative
    return this.searchNodeIterative(this.root, value);
  }

  private searchNodeIterative(
    startingPoint: BinaryNode<T> | null,
    value: T
  ): boolean {
    let curr: BinaryNode<T> | null = startingPoint;

    while (curr && curr.value !== value) {
      if (curr.value >= value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return curr?.value === value;
  }

  private searchNodeRecursive(node: BinaryNode<T> | null, value: T): boolean {
    if (!node) {
      return false;
    }

    if (node?.value === value) {
      return true;
    }

    if (value > node.value) {
      return this.searchNodeRecursive(node?.right, value);
    }

    return this.searchNodeRecursive(node?.left, value);
  }
}
