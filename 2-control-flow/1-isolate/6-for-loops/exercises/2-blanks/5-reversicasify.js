// #todo

'use strict';

console.log('-- begin --');

/* Reversicasify

  you can use for loops to do some logic for each element in a string

*/

const originalString = 'abcde';
console.log('originalString:', originalString);

let reverseUpperCase = '';

for (let i = originalString.length -1; i >= 0; i--) {
  const nextletter = originalString[i];
  const letterToUpperCase = nextletter.toUpperCase();
  reverseUpperCase += letterToUpperCase; 
  // a blank canvas 

  if (reverseUpperCase === 'EDCBA') {
    console.log('reversed string is the original reversed');
  }
}
 console.log(reverseUpperCase);
console.assert(
  reverseUpperCase === 'EDCBA',
  'reversed string is the original reversed',
);

console.log('-- end --');
