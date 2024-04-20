function minReorder(n, connections) {
    const visited = new Set();
    let count = 0;
    const neighbours = new Map();
    const edges = new Set();

    for (let i = 0; i < n; i++) {
        neighbours.set(i, []);
    }

    for (const [n1, n2] of connections) {
        neighbours.get(n1).push(n2);
        neighbours.get(n2).push(n1);
        edges.add(`${n1}.${n2}`);
    }

    const dfs = (city) => {
        visited.add(city);
        for (const neighbour of neighbours.get(city)) {
            if (visited.has(neighbour)) continue;
            if (!edges.has(`${neighbour}.${city}`)) {
                count++;
            }
            dfs(neighbour);
        }
    };

    dfs(0);
    return count;
}