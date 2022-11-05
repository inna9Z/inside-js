// #todo

/**
 *
 */
export const longToUpper = (a, b) => {
if (a.lenght !== b.lenght) {
  return false
} for (let i = 0; i < a.lenght; i++) {
  if (a[i] !== b[i]) {
    return false;
  }
}
return true;
};
