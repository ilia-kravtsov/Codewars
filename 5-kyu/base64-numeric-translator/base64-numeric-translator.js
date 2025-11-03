function base64toBase10(base64) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let result = 0;
​
  for (let i = 0; i < base64.length; i++) {
    const value = chars.indexOf(base64[i]);
    result = result * 64 + value;
  }
​
  return result;
}
​