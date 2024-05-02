function getCurrentTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentTime = new Date();
        resolve(currentTime);
      }, 2000);
    });
  }
  
  getCurrentTime()
    .then((currentTime) => {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      console.log("Current Time: ", formattedTime);
      // Display the time in your preferred way (e.g., update a DOM element)
    })
    .catch((error) => {
      console.error("Error fetching current time:", error);
    });
  