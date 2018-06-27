const request = require('request');

var apidomain = 'https://api.darksky.net/forecast';
var apikey = '80906f88b643471b26604dfc07937067';
//'https://api.darksky.net/forecast/80906f88b643471b26604dfc07937067/51.5891053,-0.2440412'

var getWeather = (latitude, longitude, callback) => request({
    url:  `${apidomain}/${apikey}/${latitude},${longitude}`,
    json:true
},  (error, response, body) =>{
    if(!error && response.statusCode === 200){
       // console.log(body.currently);
       callback(undefined, {
         temperature:body.currently.temperature,
         apparentTemperature:body.currently.apparentTemperature
       });
    } else {
      callback('Unable to fetch weather');
    }
});

module.exports.getWeather = getWeather;
