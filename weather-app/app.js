const yargs = require('yargs');

//api key 80906f88b643471b26604dfc07937067 forecast.io
//https://api.darksky.net/forecast/80906f88b643471b26604dfc07937067/51.5891053,-0.2440412

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        a: {
          demand: true,
          alias: 'address',
          describe: 'Address to fetch weather for',
          string: true
        }
     })
     .help()
     .alias('help', 'h')
     .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
   if(errorMessage){
       console.log(errorMessage);
   } else {
       console.log(JSON.stringify(results, undefined, 2));
       weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}, but if feels like ${weatherResults.apparentTemperature}`);
                // console.log(weatherResults);
            }

       });
   }
});
