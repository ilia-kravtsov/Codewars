/*
For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.
*/

function parseMolecule(formula) {
  function multiplyCounts(counts, multiplier) {
    for (let atom in counts) {
      counts[atom] *= multiplier;
    }
    return counts;
  }
  function parse(formula) {
    let stack = [];
    let current = {};
    let i = 0;

    while (i < formula.length) {
      const char = formula[i];

      if (char === "(" || char === "[" || char === "{") {
        stack.push(current);
        current = {};
        i++;
      } else if (char === ")" || char === "]" || char === "}") {
        i++;
        let multiplier = "";
        while (i < formula.length && /\d/.test(formula[i])) {
          multiplier += formula[i];
          i++;
        }
        multiplier = multiplier ? parseInt(multiplier) : 1;
        current = multiplyCounts(current, multiplier);
        const previous = stack.pop();
        for (let atom in current) {
          previous[atom] = (previous[atom] || 0) + current[atom];
        }
        current = previous;
      } else if (/[A-Z]/.test(char)) {
        let element = char;
        i++;
        while (i < formula.length && /[a-z]/.test(formula[i])) {
          element += formula[i];
          i++;
        }
        let count = "";
        while (i < formula.length && /\d/.test(formula[i])) {
          count += formula[i];
          i++;
        }
        count = count ? parseInt(count) : 1;
        current[element] = (current[element] || 0) + count;
      } else {
        i++;
      }
    }

    return current;
  }

  return parse(formula);
}