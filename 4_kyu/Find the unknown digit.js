/*
function solveExpression(exp) {
    for (let d = 0; d <= 9; d++) {
        if (exp.includes(d.toString())) continue; 
        let testExp = exp.replace(/\?/g, d);
        let match = testExp.match(/(-?\d+)([+\-*])(-?\d+)=(-?\d+)/);
        if (!match) continue;
        let [, left, op, right, result] = match.map(x => (isNaN(x) ? x : Number(x)));
        if (/\b0\d/.test(testExp.replace(/[=+\-*]/g, ' '))) continue;
        if ((op === '+' && left + right === result) ||
            (op === '-' && left - right === result) ||
            (op === '*' && left * right === result)) {
            return d;
        }
    }
    return -1;
}
*/

function solveExpression(exp) {
    for (let d = 0; d <= 9; d++) {
        if (exp.includes(d.toString())) continue; 
        let testExp = exp.replace(/\?/g, d);
        let match = testExp.match(/(-?\d+)([+\-*])(-?\d+)=(-?\d+)/);
        if (!match) continue;
        let [, left, op, right, result] = match.map(x => (isNaN(x) ? x : Number(x)));
        if (/\b0\d/.test(testExp.replace(/[=+\-*]/g, ' '))) continue;
        if ((op === '+' && left + right === result) ||
            (op === '-' && left - right === result) ||
            (op === '*' && left * right === result)) {
            return d;
        }
    }
    return -1;
}