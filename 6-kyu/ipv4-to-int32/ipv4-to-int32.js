function ipToInt32(ip) {
    return ip
        .split('.')
        .reduce((acc, octet) => (acc << 8) + Number(octet), 0) >>> 0;
}
​