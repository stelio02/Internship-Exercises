function changeEnough(change, totalDue) {
    const totalChange = change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
    
    return totalChange >= totalDue;
  }
  
  console.log(changeEnough([2, 100, 0, 0], 14.11)); // false
  console.log(changeEnough([0, 0, 20, 5], 0.75)); // true
  console.log(changeEnough([30, 40, 20, 5], 12.55)); // true
  console.log(changeEnough([10, 0, 0, 50], 3.85)); // false
  console.log(changeEnough([1, 0, 5, 219], 19.99)); // false
  