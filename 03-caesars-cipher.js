// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

const MIN = 'A'.charCodeAt();
const MAX = 'Z'.charCodeAt();
const RANGE = MAX - MIN + 1;

function rot13(str) {
  return String.fromCharCode(...str.split("").map(char => {
    let code = char.charCodeAt();
    if (code < MIN || code > MAX) {
      return code;
    }
    code -= RANGE / 2;
    return code < MIN ? code + RANGE: code;
  }));
}
