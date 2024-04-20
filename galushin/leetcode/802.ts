function eventualSafeNodes(graph: number[][]): number[] {
    const n = graph.length;
    const visited: boolean[] = new Array(n).fill(false);
    const safe: boolean[] = new Array(n).fill(false);
    const result: number[] = [];

    function dfs(node: number): boolean {
        if (visited[node]) {
            return safe[node];
        }

        visited[node] = true;

        for (const next of graph[node]) {
            if (!dfs(next)) {
                return false;
            }
        }

        safe[node] = true;
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            result.push(i);
        }
    }

    return result;
};