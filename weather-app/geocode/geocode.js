const request  = require('request');


let geocodeAddress = (address) => {
  let encodedAddress = encodeURIComponent(address);

  //key AIzaSyDRqstjwYqwzo7-iJD2T_FtU3d_Pk3-3Wo
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
  const key = 'AIzaSyDRqstjwYqwzo7-iJD2T_FtU3d_Pk3-3Wo'
  
  request({
    url: url+'&key='+key,
    json: true,
  }, (error, response, body) => {
    if(error){
      console.log('error');
    } else if(body.status === 'ZERO_RESULTS'){
      console.log('iunable to find');
    } else if(body.status === 'OK'){
      console.log(body.results[0]);
    }
  })
}


module.exports.geocodeAddress = geocodeAddress