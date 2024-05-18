const italyWeather = { temperature: 30 };
const albaniaWeather = { temperature: 25 };
const greeceWeather = { temperature: 27 };
const germanyWeather = { temperature: 21 };

function getWeatherFromSource1(callback) {
  setTimeout(() => {
    callback(italyWeather);
  }, 1000);
}

function getWeatherFromSource2(callback) {
  setTimeout(() => {
    callback(albaniaWeather);
  }, 1500);
}

function getWeatherFromSource3(callback) {
  setTimeout(() => {
    callback(greeceWeather);
  }, 2000);
}

function getWeatherFromSource4(callback) {
  setTimeout(() => {
    callback(germanyWeather);
  }, 2500);
}

function getAllWeatherData() {
  let weatherData = [];

  getWeatherFromSource1((italyWeather) => {
    weatherData.push(italyWeather);
    checkLength();
  });

  getWeatherFromSource2((albaniaWeather) => {
    weatherData.push(albaniaWeather);
    checkLength();
  });

  getWeatherFromSource3((greeceWeather) => {
    weatherData.push(greeceWeather);
    checkLength();
  });

  getWeatherFromSource4((germanyWeather) => {
    weatherData.push(germanyWeather);
    checkLength();
  });

  function checkLength() {
    if (weatherData.length === 4) {
      calculateAverageTemperature(weatherData);
    }
  }

  function calculateAverageTemperature(weatherData) {
    let sum = 0;
    for (let i = 0; i < weatherData.length; i++) {
      sum = sum + weatherData[i].temperature;
    }
    let averageTemperature = sum / weatherData.length;
    console.log(`Average temperature: ${averageTemperature}°C`);
  }
}

getAllWeatherData();
