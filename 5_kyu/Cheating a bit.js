/*
Introduction
So, there is this game where you manage several soldiers, and you're losing against the machine.

What can you do? Easy: patch the savegame file to restore your soldier's health!

Details
Each soldier has the following structure:

name_length: 16 bit integer, little endian
name: string of 8 bit characters
health: 16 bit integer, little endian
Example: "\x0C\x00Maximilianus\x04\x00"

The binary string is randomly generated each time, so don't try to hard-code things in your code.

The job
Your job is to code a function that will receive a string of consecutive binary data (the file contents) representing a random number of soldiers (a minimum of 2 are always present), and return it patched, setting each soldier's health to 500 points.

Soldiers can be arranged in the output string in any order.

The tests will check if the returned string is correctly formed (not empty and such) and that each soldier has 500 health points.

STRINGSARRAYSPUZZLES
*/

function patchData(str) {
  const soldiers = [];
  let index = 0;

  while (index < str.length) {
    const nameLength = str.charCodeAt(index) + (str.charCodeAt(index + 1) << 8);
    const name = str.slice(index + 2, index + 2 + nameLength);
    const health = String.fromCharCode(0xF4, 0x01); // 500 in little endian format
    const soldier = String.fromCharCode(nameLength & 0xFF, (nameLength >> 8) & 0xFF) + name + health;

    soldiers.push(soldier);
    index += 2 + nameLength + 2;
  }

  return soldiers.join('');
}