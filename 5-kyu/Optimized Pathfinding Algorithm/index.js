function getNumberOfReachableFields(grid, rows, columns, startRow, startColumn) {
    let reachable = new Array(columns).fill(false);

    reachable[startColumn] = true;

    let row = startRow;

    while (row < rows) {
        const expanded = new Array(columns).fill(false);

        let c = 0;
        while (c < columns) {
            if (!grid[row][c]) {
                c++;
                continue;
            }

            let left = c;
            while (c < columns && grid[row][c]) c++;
            let right = c - 1;

            let active = false;
            for (let i = left; i <= right; i++) {
                if (reachable[i]) {
                    active = true;
                    break;
                }
            }

            if (active) {
                for (let i = left; i <= right; i++) {
                    expanded[i] = true;
                }
            }
        }

        if (row === rows - 1) {
            let count = 0;
            for (let i = 0; i < columns; i++) {
                if (expanded[i]) count++;
            }
            return count;
        }

        const nextReachable = new Array(columns).fill(false);

        for (let i = 0; i < columns; i++) {
            if (expanded[i] && grid[row + 1][i]) {
                nextReachable[i] = true;
            }
        }

        reachable = nextReachable;
        row++;
    }

    return 0;
}