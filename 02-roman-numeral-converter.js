// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

const mapping = [
  {val: 1000, char: 'M'},
  {val: 900, char: 'CM'},
  {val: 500, char: 'D'},
  {val: 400, char: 'CD'},
  {val: 100, char: 'C'},
  {val: 90, char: 'XC'},
  {val: 50, char: 'L'},
  {val: 40, char: 'XL'},
  {val: 10, char: 'X'},
  {val: 9, char: 'IX'},
  {val: 5, char: 'V'},
  {val: 4, char: 'IV'},
  {val: 1, char: 'I'}
];

function convertToRoman(num) {
  return mapping.reduce((output, {val, char}) => {
    if(val === 1) {
      output += char.repeat(num);
    } else {
      output += char.repeat(num / val);
      num %= val;
    }
    return output;
  }, '')
}