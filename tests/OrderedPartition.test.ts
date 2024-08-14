import orderedPartition from '../src/algo/OrderedPartition';

describe('partition', () => {
  test('should handle empty array', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    orderedPartition([], 3);
    expect(consoleSpy).toHaveBeenCalledWith([]);
    consoleSpy.mockRestore();
  });

  test('should handle a single partition', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    orderedPartition([1, 2, 3, 4, 5], 1);
    expect(consoleSpy).toHaveBeenCalledWith('{1 2 3 4 5 }');
    consoleSpy.mockRestore();
  });

  test('should handle maxPartitionCount greater than array length', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    orderedPartition([1, 2, 3, 4, 5], 10);
    expect(consoleSpy).toHaveBeenCalledWith('{1 }');
    expect(consoleSpy).toHaveBeenCalledWith('{2 }');
    expect(consoleSpy).toHaveBeenCalledWith('{3 }');
    expect(consoleSpy).toHaveBeenCalledWith('{4 }');
    expect(consoleSpy).toHaveBeenCalledWith('{5 }');
    consoleSpy.mockRestore();
  });

  test('should partition array into multiple parts correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    orderedPartition([7, 2, 5, 10, 8], 2);
    expect(consoleSpy).toHaveBeenCalledWith('{7 2 5 }');
    expect(consoleSpy).toHaveBeenCalledWith('{10 8 }');
    consoleSpy.mockRestore();
  });

  test('should partition array into multiple parts with different k values', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    orderedPartition([1, 2, 3, 4, 5, 6], 3);
    expect(consoleSpy).toHaveBeenCalledWith('{1 2 3 }');
    expect(consoleSpy).toHaveBeenCalledWith('{4 5 }');
    expect(consoleSpy).toHaveBeenCalledWith('{6 }');
    consoleSpy.mockRestore();
  });

  test('should minimize maximum sum over all partitions', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    orderedPartition([1, 3, 7, 2, 5, 9, 6], 3);
    expect(consoleSpy).toHaveBeenCalledWith('{1 3 7 2 }');
    expect(consoleSpy).toHaveBeenCalledWith('{5 9 }');
    expect(consoleSpy).toHaveBeenCalledWith('{6 }');
    consoleSpy.mockRestore();
  });
});
