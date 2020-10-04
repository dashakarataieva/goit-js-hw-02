const getItemsString = function (array) {
  let itemsWithNumbers = "";
  // for (let i = 0; i < array.length; i++) {
  //   itemsWithNumbers.push(`${i + 1} - ${array[i]}\n`);
  for (let i = 0; i < array.length; i += 1) {
    itemsWithNumbers = `${i + 1} - ${array[i]}\n`;
  }
  return itemsWithNumbers;
};
// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
console.log(getItemsString([5, 10, 15]));
