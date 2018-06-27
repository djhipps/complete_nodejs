const request = require('request');

var geocodeAddress = (address) => {
     return new Promise((resolve, reject) => {
          var encoded_address = encodeURIComponent(address);
          request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyCi-mDtexglm90x68AqMOoFW583F4H9U9s`,
            json:true
          }, (error, response, body) =>{
              if(error){
                  reject('Unable to connect.');
              } else if (body.status === 'ZERO_RESULTS'){
                  reject('Unable to find address');
              } else if(body.status === 'OK'){
                  resolve({
                      address:body.results[0].formatted_address,
                      latitude:body.results[0].geometry.location.lat,
                      longitude: body.results[0].geometry.location.lng,
                  });
              }
          });
     });
}

geocodeAddress('19146').then((location) => {
   console.log(JSON.stringify(location, undefined,2));
},(errorMessage) => {
  console.log(errorMessage);
});
