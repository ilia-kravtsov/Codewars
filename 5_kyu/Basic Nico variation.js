/*
Write a function nico/nico() that accepts two parameters:

key/$key - string consists of unique letters and digits
message/$message - string to encode
and encodes the message using the key.

First create a numeric key basing on a provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
Let's encode secretinformation using our crazy key.

2 3 1 5 4
---------
s e c r e
t i n f o
r m a t i
o n
After using the key:

1 2 3 4 5
---------
c s e e r
n t i o f
a r m i t
  o n   
Examples
nico("crazy", "secretinformation") => "cseerntiofarmit on  "
nico("abc", "abcd") => "abcd  "
nico("ba", "1234567890") => "2143658709" 
nico("key", "key") => "eky" 
*/

function nico(key, message) {
  const keyOrder = [...key]
    .map((char, index) => ({ char, index }))
    .sort((a, b) => a.char.localeCompare(b.char))
    .map((item) => item.index + 1);

  const rows = [];
  const keyLength = key.length;

  for (let i = 0; i < message.length; i += keyLength) {
    rows.push(message.slice(i, i + keyLength).padEnd(keyLength, " "));
  }

  const encoded = rows
    .map((row) => keyOrder.map((colIndex) => row[colIndex - 1]).join(""))
    .join("");

  return encoded;
}