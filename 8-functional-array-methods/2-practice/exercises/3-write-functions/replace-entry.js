/**
 * replaces a specific entry in an array
 * this function does not modify the original array
 *
 * @param {Array} [arr=[]] - an array of items, one will be changed
 * @param {number} [index=0] - the index to replace
 * @param {any} newEntry - the value to put at that index
 *
 * @returns {Array} a copy of the array with one entry modified
 */

const arr = ['a', 'b', 'c'];
  const index = arr.indexOf();
export const replaceEntry = (arr, index) => {

  if (index !== -1) {
    arr[index] = 'x';
  }
  //const newArr = [...arr];
 // console.log(newArr)
};

console.log(replaceEntry(`${arr[index] = 'x'}`))