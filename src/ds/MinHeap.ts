export default class MinHeap {
  private data: number[] = [];

  get length(): number {
    return this.data.length;
  }

  get items(): number[] {
    return this.data;
  }

  insert(value: number): void {
    this.data.push(value);
    this.bubbleUp(this.length - 1);
  }

  delete(): number | undefined {
    // deletes smallest item in the heap
    const returnValue = this.data[0];
    const temp = this.data.pop();

    if (returnValue === undefined || temp === undefined) {
      return undefined;
    }

    if (this.length > 0) {
      this.data[0] = temp;
      this.bubbleDown(0);
    }

    return returnValue;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private bubbleUp(index: number): void {
    if (index === 0 || index >= this.length) {
      return;
    }

    const parentIdx = this.getParentIndex(index);
    const parentValue = this.data[parentIdx];

    const value = this.data[index];

    if (value >= parentValue) {
      return;
    }

    this.swap(index, parentIdx);
    this.bubbleUp(parentIdx);
  }

  private bubbleDown(index: number) {
    if (index < 0 || index >= this.length) {
      return;
    }

    const leftChildIdx = this.getLeftChildIndex(index);
    const rightChildIdx = this.getRightChildIndex(index);

    if (leftChildIdx >= this.length) {
      return;
    }

    const leftChildValue = this.data[leftChildIdx];
    const rightChildValue = this.data[rightChildIdx];
    let targetChildIdx: number;

    if (rightChildValue === undefined || rightChildValue > leftChildValue) {
      targetChildIdx = leftChildIdx;
    } else {
      targetChildIdx = rightChildIdx;
    }

    const value = this.data[index];
    const targetChildValue = this.data[targetChildIdx];

    if (value <= targetChildValue) {
      return;
    }

    this.swap(index, targetChildIdx);
    this.bubbleDown(targetChildIdx);
  }

  private swap(a: number, b: number): void {
    if (this.data[a] === undefined || this.data[b] === undefined) {
      return;
    }

    const temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;
  }
}
