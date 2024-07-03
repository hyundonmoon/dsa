interface GraphEdge {
  to: number;
  weight: number;
}
type WeightedAdjacencyList = GraphEdge[][];

export default function dijkstra(
  source: number,
  destination: number,
  arr: WeightedAdjacencyList
): number[] {
  if (!arr?.length || source >= arr.length || destination >= arr.length) {
    return [];
  }

  if (source === destination) {
    return [source];
  }

  const distances: number[] = new Array(arr.length).fill(Infinity);
  const cameFrom: number[] = new Array(arr.length).fill(-1);
  const seenStatus: boolean[] = new Array(arr.length).fill(false);

  let currentVertex = source;
  distances[currentVertex] = 0;

  while (currentVertex !== undefined && currentVertex >= 0) {
    // 1) set current as seen
    seenStatus[currentVertex] = true;

    // 2) loop over current's adjacent edges
    const adjacentEdges = arr[currentVertex];
    for (let i = 0; i < adjacentEdges.length; i++) {
      const edge = adjacentEdges[i];

      if (seenStatus[edge.to]) {
        // if the vertex at the end of this edge has already been seen,
        // the shortest path to that vertex is already known
        // so there's no need to check that vertex again
        continue;
      }

      const distanceViaThisEdge = distances[currentVertex] + edge.weight;

      if (distanceViaThisEdge < distances[edge.to]) {
        // if the distance to a vertex is shorter via this edge, update cameFrom and distances
        distances[edge.to] = distanceViaThisEdge;
        cameFrom[edge.to] = currentVertex;
      }
    }

    // 3) find the next unseen vertex with the shortest distance
    let nextVertex = -1;
    let minDistanceToNextVertex = Infinity;

    for (let j = 0; j < seenStatus.length; j++) {
      if (seenStatus[j]) {
        continue;
      }

      if (distances[j] < minDistanceToNextVertex) {
        nextVertex = j;
        minDistanceToNextVertex = distances[nextVertex];
      }
    }

    if (nextVertex === -1) {
      break;
    }

    currentVertex = nextVertex;
  }

  if (cameFrom[destination] === -1) {
    // path not found, return empty array
    return [];
  }

  const path = [destination];
  let traverseIdx = destination;

  while (cameFrom[traverseIdx] !== source) {
    path.push(cameFrom[traverseIdx]);
    traverseIdx = cameFrom[traverseIdx];
  }

  path.push(source);
  return path.reverse();
}
