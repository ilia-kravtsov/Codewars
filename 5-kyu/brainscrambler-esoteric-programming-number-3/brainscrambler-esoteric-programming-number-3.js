          if (value !== undefined) {
            stack.pop();
            stacks[(current + 1) % 3].push(value);
          }
        } else if (ch === '*') {
          stack.push(0);
        } else if (ch === '^') {
          if (stack.length) stack.pop();
        } else if (ch === '#') {
          current = (current + 1) % 3;
        } else if (ch === ',') {
          let j = i + 1;
          let num = '';
​
          while (j < input.length && input[j] >= '0' && input[j] <= '9') {
            num += input[j];
            j++;
          }
​
          if (num.length) {
            stack.push(Number(num));
            i = j - 1;
          }
        } else if (ch === '.') {
          if (value !== undefined) {
            output += String(value);
          }
        } else if (ch === ']') {
          if (value !== undefined && value > 0) {
            i = brackets[i];
          }
        }
      }
​
      return output;
    }
  };
};