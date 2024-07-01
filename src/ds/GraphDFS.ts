export default function dfs(
  graph: number[][],
  startIdx: number,
  targetIdx: number
): number[] | null {
  if (!graph?.length || startIdx >= graph.length || startIdx < 0) {
    return null;
  }

  return depthFirstSearch(graph, startIdx, targetIdx, { [startIdx]: true }, [
    startIdx,
  ]);
}

function depthFirstSearch(
  graph: number[][],
  currentIdx: number,
  targetIdx: number,
  seen: Record<number, true>,
  path: number[]
): number[] | null {
  seen[currentIdx] = true;

  if (currentIdx === targetIdx) {
    return path;
  }

  const adjList = graph[currentIdx];

  for (let vertex of adjList) {
    if (seen[vertex]) {
      continue;
    }

    path.push(vertex);

    const result = depthFirstSearch(graph, vertex, targetIdx, seen, path);

    if (result) {
      return result;
    } else {
      path.pop();
    }
  }

  return null;
}
