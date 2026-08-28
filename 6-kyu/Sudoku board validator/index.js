function validateSudoku(board) {
    for (let row of board) {
        const numbers = new Set(row);
​
        if (numbers.size !== 9 || numbers.has(0)) {
            return false;
        }
    }
​
    for (let col = 0; col < 9; col++) {
        const numbers = new Set();
​
        for (let row = 0; row < 9; row++) {
            numbers.add(board[row][col]);
        }
​
        if (numbers.size !== 9 || numbers.has(0)) {
            return false;
        }
    }
​
    for (let startRow = 0; startRow < 9; startRow += 3) {
        for (let startCol = 0; startCol < 9; startCol += 3) {
            const numbers = new Set();
​
            for (let row = startRow; row < startRow + 3; row++) {
                for (let col = startCol; col < startCol + 3; col++) {
                    numbers.add(board[row][col]);
                }
            }
​
            if (numbers.size !== 9 || numbers.has(0)) {
                return false;
            }
        }
    }
​
    return true;
}