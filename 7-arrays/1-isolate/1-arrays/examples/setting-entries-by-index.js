// #todo

'use strict';

function removeBiggest(arr) {
  let maxNumber = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }

  }
  return maxNumber;
} 
  
removeBiggest([1,2,6,4,5]);
console
