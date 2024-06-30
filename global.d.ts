declare interface BinaryNode<T> {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

declare interface TrieNode {
  children: Record<string, TrieNode>;
}
