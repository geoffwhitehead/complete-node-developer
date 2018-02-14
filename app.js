console.log('Starting app.js');

const fs = require('fs')
const os = require('os')
const notes =  require('./notes.js')

let res = notes.addNote();

console.log(res);
// var user =os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', 'hello world' + user.username + notes.age, function(err) {
//   if (err) {
//     console.log('unable to write');
//   }
// })