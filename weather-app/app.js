const request = require('request')
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const key = '/79f8c89553449dea6f5cc4812e02fdf1'
const myLat = '/55.1612105'
const myLng = '/-1.6783462'
const darkSkyUrl = 'https://api.forecast.io/forecast'
const argv = yargs
  .options({
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

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// })

request({
  url: `https://api.forecast.io/forecast${key}${myLat}${myLng}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('unabke to connect')
  } else {
    console.log(body)

  }
})