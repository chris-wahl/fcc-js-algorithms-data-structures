// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

const validFormat = /^(1[\(\-\ ]?)?((\d{3})|(\(\d{3}\))|(\([^\(]\d{3}[^\)]))[\-\ ]?\d{3}[\-\ ]?\d{4}$/g;
/* That's one ugly regex str. Woof.

 1. Check if it starts with a 1 and includes an optional (, - or _. - OPTIONAL
 2. Check for one of 3 patterns -> 555, (555), and explicity no mis-matched parenthesis (allows -585- and _585_, etc)
 3. Optional _ or -
 4. 555
 5. Optional _ or -
 6. 5555
 7. End of string.
*/ 

function telephoneCheck(str) {
  return validFormat.test(str);
}