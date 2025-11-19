class UrlShortener {
​
  constructor() {
    this.longToShort = new Map();
    this.shortToLong = new Map();
    this.counter = 0;
    this.prefix = "short.ly/";
  }
​
  encode(num) {
    let s = "";
    while (s.length < 4) {
      s = String.fromCharCode(97 + (num % 26)) + s;
      num = Math.floor(num / 26);
    }
    return s;
  }
​
  shorten(longURL) {
    if (this.longToShort.has(longURL)) {
      return this.longToShort.get(longURL);
    }
    const code = this.encode(this.counter++);
    const shortURL = this.prefix + code;
    this.longToShort.set(longURL, shortURL);
    this.shortToLong.set(shortURL, longURL);
    return shortURL;
  }
​
  redirect(shortURL) {
    return this.shortToLong.get(shortURL);
  }
}
​