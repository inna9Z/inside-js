// Function random  generator
function guessGame(guess) {
  const random = Math.ceil(Math.random() * 5);
  if (guess > random) {
    return 'Bigger' + random;
  }
  if (guess < random) {
    return 'Smaller' + random;
  }
  if (guess === random) {
    'Congrats ' + random;
  }
}
console.log(guessGame(3));
