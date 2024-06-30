class Trie {
  root: TrieNode;

  constructor() {
    this.root = { children: {} };
  }

  search(word: string): TrieNode | null {
    if (!word) {
      return null;
    }

    let currentNode = this.root;

    for (let char of word) {
      if (!currentNode.children[char]) {
        return null;
      }
      currentNode = currentNode.children[char];
    }

    return currentNode;
  }

  insert(word: string): void {
    if (!word) {
      return;
    }

    let currentNode = this.root;

    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = { children: {} };
      }
      currentNode = currentNode.children[char];
    }

    if (!currentNode.children['*']) {
      // might already exist
      currentNode.children['*'] = { children: {} };
    }
  }

  listAllWordsThatBeginWith(word: string): string[] {
    const words: string[] = [];
    const rootNode = this.search(word);

    if (rootNode) {
      this.traverse(rootNode, word, words);
    }

    return words;
  }

  delete(word: string): void {
    this.deleteRecursive(word, 0, this.root);
  }

  private deleteRecursive(
    word: string,
    index: number,
    targetNode: TrieNode
  ): TrieNode | null {
    // edge case: target node doesn't exist or index is somehow bigger than or equal to word.length
    if (!targetNode || index >= word.length) {
      return null;
    }

    // base case
    // reached the last character of the word
    // delete the asterisk from its child
    // if children is empty, return null
    // else return targetNode
    if (word.length - 1 === index) {
      delete targetNode.children['*'];
      return this.hasChildren(targetNode) ? targetNode : null;
    }

    const targetChar = word[index];
    const newTargetNode = targetNode.children[targetChar];

    if (newTargetNode) {
      // has yet to reach last character of the word
      // recursively call this function with updated index and targetNode
      const result = this.deleteRecursive(word, index + 1, newTargetNode);

      // if result is null, it means newTargetNode no longer has any children
      // if that is the case, delete that newTargetNode from targetNode's children
      // if targetNode no longer has any children, return null
      // else return targetNode
      if (!result) {
        delete targetNode.children[targetChar];
        return this.hasChildren(targetNode) ? targetNode : null;
      }

      return targetNode;
    }

    return null;
  }

  private hasChildren(node: TrieNode): boolean {
    return !!node && Object.keys(node.children).length > 0;
  }

  private traverse(node: TrieNode, word: string, words: string[]): void {
    for (let [char, childNode] of Object.entries(node.children)) {
      if (char === '*') {
        words.push(word);
      } else {
        this.traverse(childNode, word + char, words);
      }
    }
  }
}
