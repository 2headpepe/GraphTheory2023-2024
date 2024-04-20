function validateBinaryTreeNodes(n, leftChild, rightChild) {
    const childrenSet = new Set([...leftChild, ...rightChild]);
    let rootNode = null;
    for (let i = 0; i < n; i++) {
        if (!childrenSet.has(i)) {
            rootNode = i;
            break;
        }
    }

    if (rootNode === null) {
        return false; 
    }

    const visited = new Set([rootNode]);
    const stack = [rootNode];

    while (stack.length > 0) {
        const node = stack.pop();
        for (const child of [leftChild[node], rightChild[node]]) {
            if (child === -1) continue;

            if (visited.has(child)) {
                return false;
            }

            stack.push(child);
            visited.add(child);
        }
    }

    return visited.size === n;
}