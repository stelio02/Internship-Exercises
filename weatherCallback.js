const weatherValues = [
  (italyWeather = 30),
  (albaniaWeather = 25),
  (greeceWeather = 27),
  (germanyWeather = 21),
];

function getWeatherFromSource1(callback) {
  setTimeout(() => {
    callback(italyWeather);
  }, 1000);
}

function getWeatherFromSource2(callback) {
  setTimeout(() => {
    callback(albaniaWeather);
  }, 1000);
}

function getWeatherFromSource3(callback) {
  setTimeout(() => {
    callback(greeceWeather);
  }, 1000);
}

function getWeatherFromSource4(callback) {
  setTimeout(() => {
    callback(germanyWeather);
  }, 1000);
}

function getAllWeatherData() {
  getWeatherFromSource1();
  getWeatherFromSource2();
  getWeatherFromSource3();
  getWeatherFromSource4();

  const sum = weatherValues.reduce((a, b) => a + b, 0);
  const averageTemperature = sum / weatherValues.length;
  console.log(`Average temperature: ${averageTemperature}°C`);
}

getAllWeatherData();
