function changeEnough(change, totalDue) {
    const conversionRate = [0.25, 0.1, 0.05, 0.01];
    
    let totalChange = 0;
    for (let i = 0; i < change.length; i++) {
      totalChange += change[i] * conversionRate[i];
    }
    
    return totalChange >= totalDue;
  }
  
  console.log(changeEnough([2, 100, 0, 0], 14.11)); // false
  console.log(changeEnough([0, 0, 20, 5], 0.75)); // true
  console.log(changeEnough([30, 40, 20, 5], 12.55)); // true
  console.log(changeEnough([10, 0, 0, 50], 3.85)); // false
  console.log(changeEnough([1, 0, 5, 219], 19.99)); // false