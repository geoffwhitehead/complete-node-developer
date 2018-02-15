const request = require('request')

//key AIzaSyDRqstjwYqwzo7-iJD2T_FtU3d_Pk3-3Wo
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=generator%20studios%20trafalgar%20street%20newcastle%20upon%20tyne'
const key = 'AIzaSyDRqstjwYqwzo7-iJD2T_FtU3d_Pk3-3Wo'
request({
  url: url+'&key='+key,
  json: true,
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
})