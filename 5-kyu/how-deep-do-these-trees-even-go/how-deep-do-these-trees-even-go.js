function arrayDeepness(arr) {
    const depths = [];
​
    function dfs(node, depth) {
        for (const item of node) {
            if (Array.isArray(item)) {
                dfs(item, depth + 1);
            } else {
                depths.push(depth);
            }
        }
    }
​
    dfs(arr, 1);
​
    if (depths.length === 0) {
        return { min: 0, max: 0, mean: 0 };
    }
​
    const min = Math.min(...depths);
    const max = Math.max(...depths);
    const mean = depths.reduce((sum, d) => sum + d, 0) / depths.length;
​
    return { min, max, mean };
}