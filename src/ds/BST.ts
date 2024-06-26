export default class BinarySearchTree<T> {
  root: BinaryNode<T> | null;

  constructor() {
    this.root = null;
  }

  search(value: T) {
    this.searchNode(this.root, value);
  }

  private searchNode(node: BinaryNode<T> | null, target: T): boolean {
    if (!node) {
      return false;
    }

    if (node.value === target) {
      return true;
    }

    if (node.value <= target) {
      return this.searchNode(node.left, target);
    }

    return this.searchNode(node.right, target);
  }

  insert(value: T): void {
    if (!this.root) {
      const newNode = { value } as BinaryNode<T>;
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, value);
  }

  private insertNode(parentNode: BinaryNode<T>, value: T): void {
    if (parentNode.value <= value) {
      if (parentNode.left) {
        this.insertNode(parentNode.left, value);
      } else {
        parentNode.left = { value } as BinaryNode<T>;
      }
    } else {
      if (parentNode.right) {
        this.insertNode(parentNode.right, value);
      } else {
        parentNode.right = { value } as BinaryNode<T>;
      }
    }
  }
}
