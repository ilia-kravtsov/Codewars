/*
Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
*/

function whoIsWinner(piecesPositionList) {
    const rows = 6, cols = 7;
    const board = Array.from({ length: rows }, () => Array(cols).fill(null));
    const colMap = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
    
    function checkWinner(row, col, color) {
        const directions = [
            [[0, 1], [0, -1]], 
            [[1, 0], [-1, 0]], 
            [[1, 1], [-1, -1]], 
            [[1, -1], [-1, 1]]  
        ];
        
        for (const [[dx1, dy1], [dx2, dy2]] of directions) {
            let count = 1;
            for (const [dx, dy] of [[dx1, dy1], [dx2, dy2]]) {
                let r = row + dx, c = col + dy;
                while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === color) {
                    count++;
                    r += dx;
                    c += dy;
                }
            }
            if (count >= 4) return true;
        }
        return false;
    }
    
    for (const move of piecesPositionList) {
        const [colLetter, color] = move.split('_');
        const col = colMap[colLetter];
        
        for (let row = rows - 1; row >= 0; row--) {
            if (!board[row][col]) {
                board[row][col] = color;
                if (checkWinner(row, col, color)) return color;
                break;
            }
        }
    }
    
    return "Draw";
}