import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('to-pyramid').addEventListener('click', () => {
  debugger;

  // read user text

  // create the pyramid
 let n = 5;
 let readString = '';
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n - i; k++) {
      readString += '*';
    }
    readString += '\n';
  }

  // display the pyramid
  display(readString, 'pyramided');
});
