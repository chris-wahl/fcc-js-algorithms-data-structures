// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

const DENOMINATION = { // Reference for the size of each demonination
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.10,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'FIFTY': 50,
  'ONE HUNDRED': 100
};  

function checkCashRegister(price, cash, cid) {
  let diff = cash - price;

  if (cid.reduce((p, n) => p + n[1], 0) === diff) {
    // The diff is equal to the sum total in the drawer.
    return {status: 'CLOSED', change: cid};
  }

  let change = [];
  // Start from highest, go to lowest.  Will auto-sort `change`
  // as well as use largest denominations first.
  cid.sort((p, n) => DENOMINATION[p] > DENOMINATION[n] ? 1 : -1)
    .forEach(cashObj => {
      const DENOM = cashObj[0]; // 'PENNY', 'FIFTY', etc
      const D_VALUE = DENOMINATION[DENOM]; // Value fo the denomination
      let amountOnHand = cashObj[1]; // Amount in the drawer
    
      if (diff < D_VALUE || amountOnHand === 0) {
        // Denomination is too large to make change, even if it is on hand.
        // Or it isn't even on hand.
        return;
      } else if (amountOnHand <= diff) {
        // Can't make ALL the change from this denomination,
        // so use it all up.
        diff -= amountOnHand;
        change.push([DENOM, amountOnHand]);
      } else {
        // Get the maximum amount of the denomination that can be contributed
        // to making change without going over.
        const amountFromDenom = Math.floor(diff / D_VALUE) * D_VALUE;
        diff -= amountFromDenom;
        change.push([DENOM, amountFromDenom]);
      }
      // Need to fix floating point errors by constantly re-adjusting to 2 decimals.
      diff = parseFloat(diff.toFixed(2));
  });


  if (diff > 0) {
    // Ran out of change in the drawer.
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  }

  return {status: 'OPEN', change};
}