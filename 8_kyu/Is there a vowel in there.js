isVow = a => a.map(x=>/[aeiou]/.test(String.fromCharCode(x))?String.fromCharCode(x):x)
