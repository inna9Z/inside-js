// #todo

'use strict';

console.log('-- begin --');

/* fill in the blanks to pass the assertions */

let numberOfEggs = 0;

while (numberOfEggs !==  12) {
  numberOfEggs = numberOfEggs + 12;
  console.log('numberOfEggs:', numberOfEggs);
}

console.assert(numberOfEggs === 12, 'there should be a dozen eggs');

console.log('-- end --');
// Reverse letter
let before = 'toasvhvvh';
let after = '';
for (let i = before.length - 1; i >= 0; i--) {
  after += before[i];
}
console.log(after);
