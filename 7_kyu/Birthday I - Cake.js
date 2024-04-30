/*
It's your birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (candles). Please note this is not reality, and your age can be anywhere up to 1000. Yes, you would look a mess.

As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!

When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles, the carpet will catch fire.

You will work out the number of candles that will fall from the provided lowercase string (debris). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in the string, with the alphabetical position ("a" = 1, "b" = 2, etc.) of each odd indexed character to get the string's total.

For example:

"abc"  -->  "a" = 97, "b" = 2, "c" = 99  -->  total = 198
If the carpet catches fire, return "Fire!", if not, return "That was close!".
*/
function cake(candles, debris) {
  const totalCandles = candles;
  let totalDebris = 0;

  for (let i = 0; i < debris.length; i++) {
    if (i % 2 === 0) {
      totalDebris += debris.charCodeAt(i);
    } else {
      totalDebris += debris.charCodeAt(i) - 96;
    }
  }

  const fallPercentage = totalDebris / totalCandles;
  if (fallPercentage > 0.7) {
    return "Fire!";
  } else {
    return "That was close!";
  }
}
