/*
You will be given an array which lists the current inventory of stock in your store and another array which lists the new inventory being delivered to your store today.

Your task is to write a function that returns the updated list of your current inventory in alphabetical order.

Example
currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']]
newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]

updateInventory(currentStock, newStock)  ==>
[[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'], [43, 'Sony']]
*/

// ______________________ version # 1

function updateInventory(curStock, newStock) {
  const inventoryMap = new Map();

  curStock.forEach(item => {
    inventoryMap.set(item[1], item[0]);
  });

  newStock.forEach(item => {
    if (inventoryMap.has(item[1])) {
      inventoryMap.set(item[1], inventoryMap.get(item[1]) + item[0]);
    } else {
      inventoryMap.set(item[1], item[0]);
    }
  });

  const updatedStock = Array.from(inventoryMap, ([name, quantity]) => [quantity, name]);

  updatedStock.sort((a, b) => a[1].localeCompare(b[1]));

  return updatedStock;
}

// ______________________ version # 2

// function updateInventory(curStock, newStock) {
//   const updatedStock = [];

//   for (let i = 0; i < curStock.length; i++) {
//     let found = false;
//     for (let j = 0; j < newStock.length; j++) {
//       if (curStock[i][1] === newStock[j][1]) {
//         updatedStock.push([curStock[i][0] + newStock[j][0], curStock[i][1]]);
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       updatedStock.push(curStock[i]);
//     }
//   }

//   for (let i = 0; i < newStock.length; i++) {
//     let found = false;
//     for (let j = 0; j < updatedStock.length; j++) {
//       if (newStock[i][1] === updatedStock[j][1]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       updatedStock.push(newStock[i]);
//     }
//   }

//   updatedStock.sort(function (a, b) {
//     return a[1].localeCompare(b[1]);
//   });

//   return updatedStock;
// }