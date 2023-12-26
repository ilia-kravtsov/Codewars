// Is the King in check ?

/*
You have to write a function that takes for input a 8x8 chessboard in the form of a bi-dimensional array of chars (or strings of length 1, depending on the language) and returns a boolean indicating whether the king is in check.

The array will include 64 squares which can contain the following characters :

'♔' for the black King;
'♛' for a white Queen;
'♝' for a white Bishop;
'♞' for a white Knight;
'♜' for a white Rook;
'♟' for a white Pawn;
' ' (a space) if there is no piece on that square.
Note : these are actually inverted-color chess Unicode characters because the codewars dark theme makes the white appear black and vice versa. Use the characters shown above.

There will always be exactly one king, which is the black king, whereas all the other pieces are white.
The board is oriented from Black's perspective.
Remember that pawns can only move and take forward.
Also be careful with the pieces' lines of sight ;-) .

The input will always be valid, no need to validate it. To help you visualize the position, tests will print a chessboard to show you the problematic cases. Looking like this :

|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♜ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♔ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|

test cases: 

it("should work with a check by pawn", function () {
		doTest(true, [
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', '♟', ' ', ' ', ' ', ' '],
			[' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
		]);
	});

	it("should work with a check by bishop", function () {
		doTest(true, [
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', '♝'],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			['♔', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
		]);
	});

	it("should work with a check by rook", function () {
		doTest(true, [
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', '♔', ' ', ' ', '♜', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
		]);
	});

	it("should work with a check by knight", function () {
		doTest(true, [
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', '♔', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			['♞', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
		]);
	});

	it("should work with a check by queen", function () {
		doTest(true, [
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', '♛', ' ', '♔', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
		]);
	});

	it("should work with a king alone", function () {
		doTest(false, [
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', '♔', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
		]);
	});

	it("should work with no check", function () {
		doTest(false, [
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			['♛', ' ', ' ', '♞', ' ', ' ', ' ', '♛'],
			[' ', ' ', ' ', '♔', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
		]);
	});

	it("should work with a piece blocking another's line of sight", function () {
		doTest(false, [
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			['♜', ' ', '♝', '♔', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
		]);
	});
*/

function kingIsInCheck (chessboard) {
    const kingPosition = findKingPosition(chessboard);
    
    if (isQueenAttacking(kingPosition, chessboard)) return true;
    
    if (isBishopAttacking(kingPosition, chessboard)) return true;
    
    if (isRookAttacking(kingPosition, chessboard)) return true;
    
    if (isKnightAttacking(kingPosition, chessboard)) return true;
    
    if (isPawnAttacking(kingPosition, chessboard)) return true;
    
    return false;
  }
  
  function findKingPosition(chessboard) {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (chessboard[row][col] === '♔') {
          return { row, col };
        }
      }
    }
  }
  
  function isQueenAttacking(kingPosition, chessboard) {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];
    
    for (const [dx, dy] of directions) {
      let row = kingPosition.row + dx;
      let col = kingPosition.col + dy;
      
      while (row >= 0 && row < 8 && col >= 0 && col < 8) {
        const piece = chessboard[row][col];
        
        if (piece === '♛') {
          return true;
        }
        
        if (piece !== ' ') {
          break;
        }
        
        row += dx;
        col += dy;
      }
    }
    
    return false;
  }
  
  function isBishopAttacking(kingPosition, chessboard) {
    const directions = [
      [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];
    
    for (const [dx, dy] of directions) {
      let row = kingPosition.row + dx;
      let col = kingPosition.col + dy;
      
      while (row >= 0 && row < 8 && col >= 0 && col < 8) {
        const piece = chessboard[row][col];
        
        if (piece === '♝') {
          return true;
        }
        
        if (piece !== ' ') {
          break;
        }
        
        row += dx;
        col += dy;
      }
    }
    
    return false;
  }
  
  function isRookAttacking(kingPosition, chessboard) {
    const directions = [
      [-1, 0], [0, -1], [0, 1], [1, 0]
    ];
    
    for (const [dx, dy] of directions) {
      let row = kingPosition.row + dx;
      let col = kingPosition.col + dy;
      
      while (row >= 0 && row < 8 && col >= 0 && col < 8) {
        const piece = chessboard[row][col];
        
        if (piece === '♜') {
          return true;
        }
        
        if (piece !== ' ') {
          break;
        }
        
        row += dx;
        col += dy;
      }
    }
    
    return false;
  }
  
  function isKnightAttacking(kingPosition, chessboard) {
    const knightMoves = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2],  [1, 2],  [2, -1],  [2, 1]
    ];
    
    for (const [dx, dy] of knightMoves) {
      const row = kingPosition.row + dx;
      const col = kingPosition.col + dy;
      
      if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        if (chessboard[row][col] === '♞') {
          return true;
        }
      }
    }
    
    return false;
  }
  
  function isPawnAttacking(kingPosition, chessboard) {
    const pawnMoves = [
      [-1, -1], [-1, 1]
    ];
    
    for (const [dx, dy] of pawnMoves) {
      const row = kingPosition.row + dx;
      const col = kingPosition.col + dy;
      
      if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        if (chessboard[row][col] === '♟') {
          return true;
        }
      }
    }
    
    return false;
  }