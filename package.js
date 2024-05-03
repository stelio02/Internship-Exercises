function orderPackage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccessful = Math.random() < 0.95; 
        if (isSuccessful) {
          resolve("Package ordered successfully");
        } else {
          reject("Failed to order package");
        }
      }, 2000); 
    });
  };
  
  function dispatchPackage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccessful = Math.random() < 0.85; 
        if (isSuccessful) {
          resolve("Package dispatched");
        } else {
          reject("Failed to dispatch package");
        }
      }, 2000); 
    });
  };
  
  function receivePackage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccessful = Math.random() < 0.95; 
        if (isSuccessful) {
          resolve("Package received");
        } else {
          reject("Failed to receive package");
        }
      }, 3000); 
    });
  };
  
  orderPackage()
    .then((result) => {
      console.log(result);
      return dispatchPackage();
    })
    .then((result) => {
      console.log(result);
      return receivePackage();
    })
    .then((result) => {
      console.log(result);
      console.log("Package handling completed successfully!");
    })
    .catch((error) => {
      console.error("Error in package handling:", error);
    });
  