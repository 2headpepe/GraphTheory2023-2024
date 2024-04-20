class Cell {
    constructor(public row: number, public col: number, public time: number) {}
}

function minimumTime(grid: number[][]): number {
    if(grid[0][1] > 1 && grid[1][0] > 1){
        return -1;
    }
    const m = grid.length;
    const n = grid[0].length;

    const visited: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));

    const directions: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const queue = new MinPriorityQueue();

    queue.enqueue(new Cell(0, 0, grid[0][0]), 0);

    while (queue.size() > 0) {
        const cell = queue.dequeue().element;

        if (cell.row === m - 1 && cell.col === n - 1) {
            return cell.time;
        }
        // visited[cell.row][cell.col] = true;

        for (const [dx, dy] of directions) {
            const newRow = cell.row + dx;
            const newCol = cell.col + dy;

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && !visited[newRow][newCol]) {
                let newTime = Math.max(cell.time+1, grid[newRow][newCol]);
                if(cell.time + 1 <  grid[newRow][newCol]){
                    newTime = grid[newRow][newCol] + (grid[newRow][newCol] - cell.time - 1)%2
                }
                visited[newRow][newCol] = true;
                queue.enqueue(new Cell(newRow, newCol, newTime), newTime);
                // console.log(queue);
            }
        }

    }
    return -1;
}
// [[0,2,4],
//  [3,2,1],
//  [1,0,4]]