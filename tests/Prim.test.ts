import PrimMST from '../src/algo/PrimMST';

describe('PrimMST', () => {
  it('should calculate the correct total weight for a small graph', () => {
    const graph = [
      [
        { to: 1, weight: 2 },
        { to: 3, weight: 6 },
      ],
      [
        { to: 0, weight: 2 },
        { to: 2, weight: 3 },
        { to: 3, weight: 8 },
        { to: 4, weight: 5 },
      ],
      [
        { to: 1, weight: 3 },
        { to: 4, weight: 7 },
      ],
      [
        { to: 0, weight: 6 },
        { to: 1, weight: 8 },
        { to: 4, weight: 9 },
      ],
      [
        { to: 1, weight: 5 },
        { to: 2, weight: 7 },
        { to: 3, weight: 9 },
      ],
    ];

    const { treeWeight } = PrimMST(graph);

    const expectedWeight = 16;

    expect(treeWeight).toBe(expectedWeight);
  });

  it('should handle a graph with a single node', () => {
    const graph = [[]];

    const { treeWeight } = PrimMST(graph);

    const expectedWeight = 0;

    expect(treeWeight).toBe(expectedWeight);
  });

  it('should handle a graph with two connected nodes', () => {
    const graph = [[{ to: 1, weight: 10 }], [{ to: 0, weight: 10 }]];

    const { treeWeight } = PrimMST(graph);

    const expectedWeight = 10;

    expect(treeWeight).toBe(expectedWeight);
  });

  it('should handle a larger graph', () => {
    const graph = [
      [
        { to: 1, weight: 4 },
        { to: 7, weight: 8 },
      ],
      [
        { to: 0, weight: 4 },
        { to: 2, weight: 8 },
        { to: 7, weight: 11 },
      ],
      [
        { to: 1, weight: 8 },
        { to: 3, weight: 7 },
        { to: 5, weight: 4 },
        { to: 8, weight: 2 },
      ],
      [
        { to: 2, weight: 7 },
        { to: 4, weight: 9 },
        { to: 5, weight: 14 },
      ],
      [
        { to: 3, weight: 9 },
        { to: 5, weight: 10 },
      ],
      [
        { to: 2, weight: 4 },
        { to: 3, weight: 14 },
        { to: 4, weight: 10 },
        { to: 6, weight: 2 },
      ],
      [
        { to: 5, weight: 2 },
        { to: 7, weight: 1 },
        { to: 8, weight: 6 },
      ],
      [
        { to: 0, weight: 8 },
        { to: 1, weight: 11 },
        { to: 6, weight: 1 },
        { to: 8, weight: 7 },
      ],
      [
        { to: 2, weight: 2 },
        { to: 6, weight: 6 },
        { to: 7, weight: 7 },
      ],
    ];

    const { treeWeight } = PrimMST(graph);

    const expectedWeight = 37;

    expect(treeWeight).toBe(expectedWeight);
  });
});
