function lowestProduct(input) {
  if (input.length < 4) return "Number is too small";
  
  let lowest = Infinity;
  
  for (let i = 0; i <= input.length - 4; i++) {
    const product = parseInt(input[i]) * parseInt(input[i+1]) * 
                    parseInt(input[i+2]) * parseInt(input[i+3]);
    lowest = Math.min(lowest, product);
  }
  
  return lowest;
}