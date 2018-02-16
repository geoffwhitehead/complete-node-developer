const request = require('request')
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')


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

geocode.geocodeAddress(argv.a)