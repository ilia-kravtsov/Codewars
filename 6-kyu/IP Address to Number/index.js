function ipToNum(ip) {
  return ip.split('.').reduce((num, octet) => num * 256 + Number(octet), 0);
}
​
function numToIp(num) {
  return [24, 16, 8, 0]
    .map(shift => (num >>> shift) & 255)
    .join('.');
}