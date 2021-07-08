// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  
  const breakPoint = cleaned.length / 2;
  const firstHalf = cleaned.slice(0, Math.trunc(breakPoint)).split("");
  const secondHalf = cleaned.slice(Math.round(breakPoint)).split("").reverse();

  for(let i = 0; i < firstHalf.length; i++) {
    if (firstHalf[i] !== secondHalf[i]) {
      return false;
    }
  }
  return true;
}