function crack(hash) {
  const crypto = require("crypto");

  for (let i = 0; i <= 99999; i++) {
    const pin = i.toString().padStart(5, "0");

    const result = crypto
      .createHash("md5")
      .update(pin)
      .digest("hex");

    if (result === hash) {
      return pin;
    }
  }
}