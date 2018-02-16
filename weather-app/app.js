const request = require('request')
const yargs = require('yargs');


const argv = yargs
.options( {
  a: {
    demand: true, 
    alias: 'address',
    describe: 'Addres to fetch',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

let encodedAddress = encodeURIComponent(argv.a);

//key AIzaSyDRqstjwYqwzo7-iJD2T_FtU3d_Pk3-3Wo
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
const key = 'AIzaSyDRqstjwYqwzo7-iJD2T_FtU3d_Pk3-3Wo'

request({
  url: url+'&key='+key,
  json: true,
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
})