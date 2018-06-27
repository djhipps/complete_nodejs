const yargs = require('yargs');
const axios = require('axios');


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

var encoded_address = encodeURIComponent(argv.address);
var geocode_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyCi-mDtexglm90x68AqMOoFW583F4H9U9s`;

axios.get(geocode_url).then((response) => {
   if(response.data.status === 'ZERO_RESULTS'){
       throw new Error('Unable to find that address.');
   }
   var lat = response.data.results[0].geometry.location.lat;
   var lng = response.data.results[0].geometry.location.lng;
   var weather_url = `https://api.darksky.net/forecast/80906f88b643471b26604dfc07937067/${lat},${lng}`
   console.log(response.data.results[0].formatted_address);
   return axios.get(weather_url)
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);    
}).catch((e) => {
   if(e.code === 'ENOTFOUND'){
     console.log('Unable to connect to API servers.');
   } else{
      console.log(e.message);
   }
});
