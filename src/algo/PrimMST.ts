interface EdgeNode {
  to: number;
  weight: number;
}

type Graph = EdgeNode[][];

export default function PrimMST(graph: Graph, start = 0) {
  const numVertices = graph.length;
  const inTree = Array.from({ length: numVertices }).fill(false) as boolean[];
  const distance = Array.from({ length: numVertices }).fill(
    Infinity
  ) as number[];
  const parent = Array.from({ length: numVertices }).fill(-1) as number[];
  let treeWeight = 0;
  let currentVertex: number;

  // initialize starting point
  distance[start] = 0;
  currentVertex = start;

  while (!inTree[currentVertex]) {
    inTree[currentVertex] = true;
    treeWeight += distance[currentVertex];

    const edges = graph[currentVertex];

    for (let edge of edges) {
      const { to, weight } = edge;

      if (distance[to] > weight && !inTree[to]) {
        distance[to] = weight;
        parent[to] = currentVertex;
      }
    }

    let distanceToNextVertex = Infinity;
    for (let i = 0; i < graph.length; i++) {
      if (!inTree[i] && distanceToNextVertex > distance[i]) {
        currentVertex = i;
        distanceToNextVertex = distance[i];
      }
    }

    // if statement not strictly necessary, but added for a little more clarity
    if (distanceToNextVertex === Infinity) break;
  }

  return { parent, treeWeight };
}
