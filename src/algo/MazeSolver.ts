interface Point {
  x: number;
  y: number;
}

const directions: Point[] = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
];

function walk(
  point: Point,
  maze: string[],
  wall: string,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  if (
    // off the map
    point.x < 0 ||
    point.x >= maze[0].length ||
    point.y < 0 ||
    point.y >= maze.length ||
    // on a wall
    maze[point.y][point.x] === wall ||
    // been here before
    seen[point.y][point.x]
  ) {
    return false;
  }

  path.push(point);
  seen[point.y][point.x] = true;

  if (point.x === end.x && point.y === end.y) {
    return true;
  }

  for (let { x, y } of directions) {
    const newPoint: Point = { x: point.x + x, y: point.y + y };

    if (walk(newPoint, maze, wall, end, seen, path)) {
      return true;
    }
  }

  path.pop();
  return false;
}

// returns empty path if there is no path
// otherwise returns list of coordinates from the start coordinate to the end coordinate
export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const path: Point[] = [];
  const seen: boolean[][] = [];

  for (let row of maze) {
    seen.push(Array.from({ length: row.length }, () => false));
  }

  walk(start, maze, wall, end, seen, path);

  return path;
}
