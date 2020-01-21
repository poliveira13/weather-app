const request = require("request");

const urlTempo =
  "https://api.darksky.net/forecast/adb7b35147130a9e9494246f8f756ab9/-23.2245916,-45.923067?units=si";

const urlMap =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoicG9saXZlaXJhMTMiLCJhIjoiY2s1bnU4djlvMWVsOTNvcWxoZHEydnF1YSJ9.JEWhBdnzWdFf0ze87lGADw&limit=1";

request({ url: urlTempo, json: true }, (error, response) => {
  const base = response.body;
  const erro = response.body.error;

  if (error) {
    console.log("Unable to connect to weather service! ");
  } else if (erro) {
    console.log(erro.code + erro.error);
  } else {
    console.log(
      base.daily.data[0].summary +
        "It's a currently " +
        base.currently.temperature +
        " Grau Celsius" +
        " With probability : " +
        base.currently.precipProbability +
        "% of rain"
    );
  }
});

request({ url: urlMap, json: true }, (error, response) => {
  const lat = response.body.features[0].center[1];
  const long = response.body.features[0].center[0];
  const erro = response.body.features;

  if (error) {
    console.log("Unable to connect to MapBox!");
  } else if (erro.length === 0) {
    console.log("Unable to find location. Try again");
  } else {
    console.log(lat, long);
  }
});
