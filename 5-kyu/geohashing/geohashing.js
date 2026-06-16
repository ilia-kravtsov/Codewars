const crypto = require('crypto');
​
function geoHashing(dow, date) {
  date = date || new Date();
​
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(date.getUTCDate()).padStart(2, '0');
​
  const input = `${yyyy}-${mm}-${dd}-${Number(dow).toFixed(2)}`;
​
  const hash = crypto
    .createHash('md5')
    .update(input)
    .digest('hex');
​
  function hexFraction(hex) {
    let value = 0;
​
    for (let i = 0; i < hex.length; i++) {
      value += parseInt(hex[i], 16) / Math.pow(16, i + 1);
    }
​
    return Number(value.toFixed(6));
  }
​
  return [
    hexFraction(hash.slice(0, 16)),
    hexFraction(hash.slice(16))
  ];
}