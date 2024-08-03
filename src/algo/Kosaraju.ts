export interface Graph {
  [vertex: number]: number[];
}

interface VisitedMap {
  [vertex: number]: boolean;
}

function graphDFS(
  graph: Graph,
  source: number,
  explorationFinishOrder: number[],
  visited: VisitedMap
): void {
  visited[source] = true;

  for (let vertex of graph[source]) {
    if (!visited[vertex]) {
      graphDFS(graph, vertex, explorationFinishOrder, visited);
    }
  }

  explorationFinishOrder.push(source);
}

function transposedGraphDFS(
  graph: Graph,
  source: number,
  connectedComponents: number[],
  visited: VisitedMap
): void {
  visited[source] = true;
  connectedComponents.push(source);

  for (let adjVertex of graph[source]) {
    if (!visited[adjVertex]) {
      transposedGraphDFS(graph, adjVertex, connectedComponents, visited);
    }
  }
}

function transposeGraph(graph: Graph): Graph {
  const newGraph = {} as Graph;

  for (let vertex of Object.keys(graph)) {
    newGraph[+vertex] = [];
  }

  for (let [vertex, adjVertices] of Object.entries(graph)) {
    for (let adjVertex of adjVertices) {
      newGraph[adjVertex].push(+vertex);
    }
  }

  return newGraph;
}

export default function kosaraju(graph: Graph): number[][] {
  const visitedMap: VisitedMap = {};
  const explorationFinishOrder: number[] = [];
  const stronglyConnectedComponentsArray: number[][] = [];

  for (let vertex of Object.keys(graph)) {
    if (!visitedMap[+vertex]) {
      graphDFS(graph, +vertex, explorationFinishOrder, visitedMap);
    }
  }

  const transposedGraph = transposeGraph(graph);

  // reset visitedMap
  for (let vertex of Object.keys(graph)) {
    visitedMap[+vertex] = false;
  }

  while (explorationFinishOrder.length) {
    const nextVertex = explorationFinishOrder.pop();

    if (nextVertex !== undefined && !visitedMap[nextVertex]) {
      const stronglyConnectedComponent: number[] = [];

      transposedGraphDFS(
        transposedGraph,
        nextVertex,
        stronglyConnectedComponent,
        visitedMap
      );

      stronglyConnectedComponentsArray.push(stronglyConnectedComponent);
    }
  }

  return stronglyConnectedComponentsArray;
}

const graph: Graph = {
  0: [1],
  1: [2],
  2: [3],
  3: [4],
  4: [],
};

const results = kosaraju(graph);
console.log(results);
