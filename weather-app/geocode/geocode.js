const request  = require('request');


let geocodeAddress = (address, cb) => {
  let encodedAddress = encodeURIComponent(address);

  //key AIzaSyDRqstjwYqwzo7-iJD2T_FtU3d_Pk3-3Wo
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
  const key = 'AIzaSyDRqstjwYqwzo7-iJD2T_FtU3d_Pk3-3Wo'
  
  request({
    url: url+'&key='+key,
    json: true,
  }, (error, response, body) => {
    if(error){
      cb('unabke to connect')
    } else if(body.status === 'ZERO_RESULTS'){
      cb('iunable to find');
    } else if(body.status === 'OK'){
      cb(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      })
    }
  })
}


module.exports.geocodeAddress = geocodeAddress