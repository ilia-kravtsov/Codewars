class FSM {
    constructor(instructions) {
        this.states = {};
        instructions.trim().split('\n').forEach(line => {
            const [name, nexts, output] = line.split(';').map(s => s.trim());
            const [n0, n1] = nexts.split(',').map(s => s.trim());
            this.states[name] = { next0: n0, next1: n1, output: parseInt(output, 10) };
        });
    }
​
    runFSM(start, sequence) {
        let current = start;
        const path = [current];
        for (const inp of sequence) {
            const state = this.states[current];
            current = inp === 0 ? state.next0 : state.next1;
            path.push(current);
        }
        return [current, this.states[current].output, path];
    }
}
​