function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const inDegree: number[] = new Array(n).fill(0);

    for (const [from, to] of edges) {
        inDegree[to]++;
    }

    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            result.push(i);
        }
    }

    return result;
};