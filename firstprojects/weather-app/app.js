// const yargs = require('yargs');
//
// //api key 80906f88b643471b26604dfc07937067 forecast.io
// //https://api.darksky.net/forecast/80906f88b643471b26604dfc07937067/51.5891053,-0.2440412
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//     .options({
//         a: {
//           demand: true,
//           alias: 'address',
//           describe: 'Address to fetch weather for',
//           string: true
//         }
//      })
//      .help()
//      .alias('help', 'h')
//      .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
//    if(errorMessage){
//        console.log('errorMessage');
//    } else {
//        console.log(JSON.stringify(results, undefined, 2));
//    }
// });


const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/80906f88b643471b26604dfc07937067/51.5891053,-0.2440412',
    json:true
},  (error, response, body) =>{
    if(!error && response.statusCode === 200){
      console.log(body.currently.temperature);
    } else {
      console.log('Unable to fetch weather');
    }
});
