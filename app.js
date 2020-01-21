const request = require("request");

const url =
  "https://api.darksky.net/forecast/adb7b35147130a9e9494246f8f756ab9/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  const data = response.body.currently;
  // console.log(response.body.currently)
  console.log(
    "A temperatura atual é de: " +
      data.temperature +
      ", com probabilidade de chuva de: " +
      data.precipProbability +
      "%"
  );
});
