import Queue from './Queue';

export default function bfs(
  graph: number[][],
  source: number,
  needle: number
): number[] | null {
  if (!graph?.length || source >= graph.length || needle >= graph.length) {
    return null;
  }

  if (source === needle) {
    return [source];
  }

  const queue = new Queue<number>();
  queue.enqueue(source);

  const seen = Array.from({ length: graph.length }).fill(false) as boolean[];
  const reachedFrom = Array.from({ length: graph.length }).fill(-1) as number[];

  while (!queue.isEmpty) {
    const currentIdx = queue.dequeue() as number;
    const currentIdxRow = graph[currentIdx];

    seen[currentIdx] = true;

    if (currentIdx === needle) {
      break;
    }

    for (let i = 0; i < currentIdxRow.length; i++) {
      const adjacentFlag = currentIdxRow[i];
      if (adjacentFlag === 0 || seen[i]) {
        continue;
      }

      seen[i] = true;
      reachedFrom[i] = currentIdx;
      queue.enqueue(i);
    }
  }

  if (reachedFrom[needle] === -1) {
    return null;
  }

  const result: number[] = [needle];

  let idx = needle;

  while (idx !== source) {
    result.push(reachedFrom[idx]);
    idx = reachedFrom[idx];
  }

  return result.reverse();
}
