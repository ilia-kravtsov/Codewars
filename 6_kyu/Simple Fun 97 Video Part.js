/*
Task
You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

Example
For part = "02:20:00" and total = "07:00:00", the output should be [1, 3].

You have watched 1 / 3 of the whole video.

Input/Output
[input] string part

A string of the following format "hh:mm:ss" representing the time you have been watching the video.

[input] string total

A string of the following format "hh:mm:ss" representing the total video duration.

[output] an integer array

An array of the following format [a, b] (where a / b is a reduced fraction).
*/

function videoPart(part, total) {
  const partInSeconds = part.split(":").reduce((acc, time) => 60 * acc + +time);
  const totalInSeconds = total
    .split(":")
    .reduce((acc, time) => 60 * acc + +time);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(partInSeconds, totalInSeconds);

  return [partInSeconds / divisor, totalInSeconds / divisor];
}
