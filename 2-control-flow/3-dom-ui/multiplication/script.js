import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('do-math','left', 'rigth').addEventListener('click', () => {
  debugger;

  // read user values
 readNumber = '';
  // use a for loop to multiply the two numbers
for (let i = 0; i < readNumber.length; i++) {
  readNumber *= i;
}
   
  // display the product
  display('your output', readNumber);
});
