/*
function changeEnough(change, totalDue) {

  if (!Array.isArray(change) || change.length !== 4 || !change.every(Number.isInteger) || totalDue <= 0 || typeof totalDue !== 'number') {
    throw new Error('Invalid input');
  }

  const conversionRates = [0.25, 0.1, 0.05, 0.01];

  const totalChange = change.reduce((acc, numCoins, index) => {
  
    if (numCoins < 0) {
      throw new Error('Invalid input: Number of coins cannot be negative');
    }
    return acc + numCoins * conversionRates[index];
  }, 0);

  return totalChange >= totalDue;
}

try {
  console.log(changeEnough([2, 100, 0, 0], 14.11)); // false
  console.log(changeEnough([0, 0, 20, 5], 0.75)); // true
  console.log(changeEnough([30, 40, 20, 5], 12.55)); // true
  console.log(changeEnough([10, 0, 0, 50], 3.85)); // false
  console.log(changeEnough([1, 0, 5, 219], 19.99)); // false

  console.log(changeEnough(1, 0, 5, 219, 19.99)); // error
} catch (error) {
  console.error(error.message);
}
*/

const assert = require('assert');

function changeEnough(change, totalDue) {
  assert(Array.isArray(change), 'Change should be an array');
  assert(change.length === 4, 'Change array should have exactly 4 elements');
  assert(change.every(Number.isInteger), 'All elements in change array should be integers');
  assert(totalDue > 0 && typeof totalDue === 'number', 'Total due should be a positive number');

  const conversionRates = [0.25, 0.1, 0.05, 0.01];

  const totalChange = change.reduce((acc, numCoins, index) => {
    assert(numCoins >= 0, 'Number of coins cannot be negative');
    return acc + numCoins * conversionRates[index];
  }, 0);

  return totalChange >= totalDue;
}

assert.strictEqual(changeEnough([2, 100, 0, 0], 14.11), false);
assert.strictEqual(changeEnough([0, 0, 20, 5], 0.75), true);
assert.strictEqual(changeEnough([30, 40, 20, 5], 12.55), true);
assert.strictEqual(changeEnough([10, 0, 0, 50], 3.85), false);
assert.strictEqual(changeEnough([1, 0, 5, 219], 19.99), false);

assert.strictEqual(changeEnough(1, 0, 5, 219, 19.99), true);





  