// #todo

'use strict';

const instructions = `Remembery, the game of remembering.\n\n. ` +
`You will be prompted to enter 3 phrase.\n.` +
`Next you will be prompted to remember one of them.\n\n.` +
`if you enter it exsactly you win!`;
alert(instructions);


  let input1 = null; 
  
  while (input1 === '' || input1 === null) {
    input1 = prompt('enter your first secret phrase');
  }
  let input2 = null;
  while (input2 === '' || input2 === null) {
    input2 = prompt('enter your second secret phrase')
  }
  let input3 = null;
  while (input3 === '' || input3 === null) {
    input3 = prompt('enter your thirt secret phrase')
  }
   alert('all seved! get ready to remember');


   const randomDecimal = Math.random();
   const decimalTime3 = randomDecimal * 3;
   const randomFrom1To3 = Math.ceil(decimalTime3);


   let correctAnswer = '';
   if (randomFrom1To3 === 1) {
     correctAnswer = input1;
   } else if (randomFrom1To3 === 2) {
     correctAnswer = input2;
   } else if (randomFrom1To3 === 3) {
     correctAnswer === input3;
   }

   const guessMessage = 'guess phrase' + randomFrom1To3;
   const userGuess = prompt(guessMessage);

   const guessIsCorrect = userGuess === correctAnswer;

   
   if (guessIsCorrect) {
      alert('correct! phrase ' + randomFrom1To3 + ' was "' + correctAnswer + '"');
   } else {
      alert('nope :(');
   } 