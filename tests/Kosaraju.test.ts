import kosaraju from '../src/algo/Kosaraju';
import { Graph } from '../src/algo/Kosaraju';

describe("Kosaraju's Algorithm", () => {
  test('should find SCCs in a simple graph', () => {
    const graph: Graph = {
      0: [1],
      1: [2],
      2: [0, 3],
      3: [4],
      4: [],
    };

    const expectedSCCs = [[4], [3], [0, 2, 1]];

    const sccs = kosaraju(graph);

    // Ensure SCCs match the expected results, order within SCCs doesn't matter
    expect(sccs).toEqual(expect.arrayContaining(expectedSCCs));
  });

  test('should find SCCs in a disconnected graph', () => {
    const graph: Graph = {
      0: [1],
      1: [0],
      2: [3],
      3: [2],
      4: [],
    };

    const expectedSCCs = [[4], [2, 3], [0, 1]];

    const sccs = kosaraju(graph);

    expect(sccs).toEqual(expect.arrayContaining(expectedSCCs));
  });

  test('should find SCCs in a graph with a single vertex', () => {
    const graph: Graph = {
      0: [],
    };

    const expectedSCCs = [[0]];

    const sccs = kosaraju(graph);

    expect(sccs).toEqual(expectedSCCs);
  });

  test('should find SCCs in a fully connected graph', () => {
    const graph: Graph = {
      0: [1, 2],
      1: [2],
      2: [0],
    };

    const expectedSCCs = [[0, 2, 1]];

    const sccs = kosaraju(graph);

    expect(sccs).toEqual(expectedSCCs);
  });

  test('should find SCCs in a linear graph', () => {
    const graph: Graph = {
      0: [1],
      1: [2],
      2: [3],
      3: [4],
      4: [],
    };

    const expectedSCCs = [[0], [1], [2], [3], [4]];

    const sccs = kosaraju(graph);

    expect(sccs).toEqual(expectedSCCs);
  });
});
