const weatherValues = [
  (italyWeather = 30),
  (albaniaWeather = 25),
  (greeceWeather = 27),
  (germanyWeather = 21),
];

function getWeatherFromSource1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(italyWeather);
    }, 3000);
  });
}

function getWeatherFromSource2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(albaniaWeather);
    }, 1500);
  });
}

function getWeatherFromSource3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(greeceWeather);
    }, 2000);
  });
}

function getWeatherFromSource4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(germanyWeather);
    }, 1000);
  });
}

function getAllWeatherData() {
  return Promise.all([
    getWeatherFromSource1(),
    getWeatherFromSource2(),
    getWeatherFromSource3(),
    getWeatherFromSource4(),
  ]).then((results) => {
    const sum = results.reduce((a, b) => a + b, 0);
    const averageTemperature = sum / weatherValues.length;
    console.log(`Average temperature: ${averageTemperature}°C`);
    console.log();
  });
}

getAllWeatherData();
