function solve(arr) {
    const times = [...new Set(arr.map(t => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
    }))].sort((a, b) => a - b);
​
    let maxGap = 0;
    for (let i = 0; i < times.length; i++) {
        const current = times[i];
        const next = (i === times.length - 1) 
            ? times[0] + 1440 
            : times[i + 1];
        const gap = next - current - 1;
        if (gap > maxGap) maxGap = gap;
    }
​
    const hh = Math.floor(maxGap / 60).toString().padStart(2, '0');
    const mm = (maxGap % 60).toString().padStart(2, '0');
    return `${hh}:${mm}`;
}