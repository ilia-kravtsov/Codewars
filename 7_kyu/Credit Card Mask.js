/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

function maskify(cc) {
  const arr = [...cc];
  const viewPart = arr.slice(-4);
  const hiddenPart = arr.slice(0, -4);
  for (let i = 0; i < hiddenPart.length; i++) {
    hiddenPart[i] = '#';
  }
  return hiddenPart.join('') + viewPart.join('');
}

// const maskify = cc => cc.replace(/.(?=.{4})/g, '#');

// function maskify(cc) {
//   const arr = [...cc];
//   const viewPart = arr.slice(-4);
//   const hiddenPart = arr.slice(0, -4);
//   hiddenPart.fill('#').join('')
//   return hiddenPart.join('') + viewPart.join('');
// }

// function maskify(cc) {
//   let arr = cc.split('');
//   if (arr.length > 4) {
//     arr.splice(0, arr.length - 4, ...new Array(arr.length - 4).fill('#'));
//   }
//   return arr.join('');
// }

// function maskify(cc) {
//   if (cc.length <= 4) return cc;
//   return '#'.repeat(cc.length - 4) + cc.slice(-4);
// }