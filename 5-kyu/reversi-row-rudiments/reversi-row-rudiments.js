function reversiRow(moves){
  const board = Array(8).fill('.');
  
  for (let turn = 0; turn < moves.length; turn++) {
    const pos = moves[turn];
    const me = turn % 2 === 0 ? '*' : 'O';
    const opp = me === '*' ? 'O' : '*';
    
    board[pos] = me;
    
    for (const dir of [-1, 1]) {
      let i = pos + dir;
      const seen = [];
      
      while (i >= 0 && i < 8 && board[i] === opp) {
        seen.push(i);
        i += dir;
      }
      
      if (seen.length && i >= 0 && i < 8 && board[i] === me) {
        for (const j of seen) board[j] = me;
      }
    }
  }
  
  return board.join('');
}