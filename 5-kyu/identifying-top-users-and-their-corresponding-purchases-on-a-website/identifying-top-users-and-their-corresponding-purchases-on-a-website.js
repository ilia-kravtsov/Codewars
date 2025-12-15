function idBestUsers(...months) {
    if (months.length === 0) return [];
  
    const counts = months.map(m => {
        const map = new Map();
        for (const id of m) map.set(id, (map.get(id) || 0) + 1);
        return map;
    });
​
    const common = new Map();
    for (const id of counts[0].keys()) {
        let total = counts[0].get(id);
        let ok = true;
        for (let i = 1; i < counts.length; i++) {
            if (!counts[i].has(id)) {
                ok = false;
                break;
            }
            total += counts[i].get(id);
        }
        if (ok) common.set(id, total);
    }
​
    if (common.size === 0) return [];
​
    const grouped = new Map();
    for (const [id, total] of common) {
        if (!grouped.has(total)) grouped.set(total, []);
        grouped.get(total).push(id);
    }
​
    return [...grouped.entries()]
        .sort((a, b) => b[0] - a[0])
        .map(([total, ids]) => [total, ids.sort()]);
}
​