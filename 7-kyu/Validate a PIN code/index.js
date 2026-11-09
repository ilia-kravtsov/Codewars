// The code below was created by NI - Natural Intelligence
function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) {
      return false;
    }
​
    for (const pinElement of pin) {
        if (pinElement < "0" || pinElement > "9") {
          return false;
        }
    }
​
    return true;
}