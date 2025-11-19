function check1800(str) {
    const map = {
        A: '2', B: '2', C: '2',
        D: '3', E: '3', F: '3',
        G: '4', H: '4', I: '4',
        J: '5', K: '5', L: '5',
        M: '6', N: '6', O: '6',
        P: '7', Q: '7', R: '7', S: '7',
        T: '8', U: '8', V: '8',
        W: '9', X: '9', Y: '9', Z: '9'
    };
​
    function toDigits(w) {
        return w.split('').map(c => map[c]).join('');
    }
​
    const target = str.replace('1-800-', '');
    const digits = toDigits(target);
​
    const res = new Set();
​
    const words3 = [];
    const words4 = [];
​
    for (const w of Preloaded.WORDS) {
        if (w.length === 3) words3.push(w);
        else if (w.length === 4) words4.push(w);
    }
​
    const map3 = new Map();
    const map4 = new Map();
​
    for (const w of words3) {
        const d = toDigits(w);
        if (!map3.has(d)) map3.set(d, []);
        map3.get(d).push(w);
    }
​
    for (const w of words4) {
        const d = toDigits(w);
        if (!map4.has(d)) map4.set(d, []);
        map4.get(d).push(w);
    }
​
    const d1 = digits.slice(0, 3);
    const d2 = digits.slice(3);
    const d1a = digits.slice(0, 4);
    const d2a = digits.slice(4);
​
    if (map3.has(d1) && map4.has(d2)) {
        for (const a of map3.get(d1))
            for (const b of map4.get(d2))
                res.add(`1-800-${a}-${b}`);
    }
​
    if (map4.has(d1a) && map3.has(d2a)) {
        for (const a of map4.get(d1a))
            for (const b of map3.get(d2a))
                res.add(`1-800-${a}-${b}`);
    }
​
    return res;
}
​