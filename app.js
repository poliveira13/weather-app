const request = require("request");

const url =
  "https://api.darksky.net/forecast/adb7b35147130a9e9494246f8f756ab9/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
