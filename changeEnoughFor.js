function changeEnough(change, totalDue) {

  if (!Array.isArray(change) || change.length !== 4 || !change.every(Number.isInteger) || totalDue <= 0 || typeof totalDue !== 'number') {
    throw new Error('Invalid input');
  }

  let totalChange = 0;
  const conversionRate = [0.25, 0.1, 0.05, 0.01];
  for (let i = 0; i < change.length; i++) {
    
    if (change[i] < 0) {
      throw new Error('Invalid input: Number of coins cannot be negative');
    }
    totalChange += change[i] * conversionRate[i];
  }

  return totalChange >= totalDue;
}

try {
  console.log(changeEnough([2, 100, 0, 0], 14.11)); // false
  console.log(changeEnough([0, 0, 20, 5], 0.75)); // true
  console.log(changeEnough([30, 40, 20, 5], 12.55)); // true
  console.log(changeEnough([10, 0, 0, 50], 3.85)); // false
  console.log(changeEnough([1, 0, 5, 219], 19.99)); // false

  console.log(changeEnough([-1, 0, 5, 219], 19.99)); // error

  console.log(changeEnough(1, 0, 5, 219, 19.99)); // error
  console.log(changeEnough([1.5, 0, 5, 219], 19.99)); // error
  console.log(changeEnough([1, 0, 5, 219], -19.99)); // error
  console.log(changeEnough([1, 0, 5, 219], 'S')); // error
  
} catch (error) {
  console.error(error.message);
}

/*
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

try {
  console.log(changeEnough([1.5, 0, 5, 219], 19.99)); // error
} catch (error) {
  console.error(error.message);
}

try {
  console.log(changeEnough([1, 0, 5, 219], -19.99)); // error
} catch (error) {
  console.error(error.message);
}

try {
  console.log(changeEnough([1, 0, 5, 219], 'S')); // error
} catch (error) {
  console.error(error.message);
}

try {
  console.log(changeEnough([-1, 0, 5, 219], 19.99)); // error
} catch (error) {
  console.error(error.message);
}
*/
