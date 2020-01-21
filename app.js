const request = require("request");

const url =
  "https://api.darksky.net/forecast/adb7b35147130a9e9494246f8f756ab9/-23.2245916,-45.923067?lang=pt";

request({ url: url, json: true }, (error, response) => {
  const base = response.body;
  // console.log(response.body.currently)
  console.log(
    base.daily.data[0].summary +
      "A temperatura atual é de: " +
      base.currently.temperature +
      " graus celcius." +
      " Com probabilidade de : " +
      base.currently.precipProbability +
      "% de preceptação"
  );
});
