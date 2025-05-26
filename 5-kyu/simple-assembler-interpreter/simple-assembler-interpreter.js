function simple_assembler(program) {
  const registers = {};
  let i = 0;
​
  const getValue = (x) => isNaN(x) ? registers[x] : parseInt(x);
​
  while (i < program.length) {
    const [cmd, x, y] = program[i].split(' ');
​
    switch (cmd) {
      case 'mov':
        registers[x] = getValue(y);
        break;
      case 'inc':
        registers[x]++;
        break;
      case 'dec':
        registers[x]--;
        break;
      case 'jnz':
        if (getValue(x) !== 0) {
          i += getValue(y) - 1; 
        }
        break;
    }
​
    i++;
  }
​
  return registers;
}
​