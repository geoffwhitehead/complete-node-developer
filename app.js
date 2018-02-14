console.log('Starting app.js');

const fs = require('fs')
const _ = require('lodash');
const yargs = require('yargs');

const notes =  require('./notes.js')

const argv = yargs.argv;
let command = argv._[0];

if(command === 'add'){
  let note = notes.addNote(argv.title, argv.body)
  if(note){
    notes.logNote(note)
  } else {
    console.log('Note title taken');
  }
} else if ( command === 'list'){
  notes.getAll();
} else if(command === 'remove'){
  let noteRemoved = notes.removeNote(argv.title)
  let message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message);
} else if(command === 'read') {
  let note = notes.getNote(argv.title)
  if(note) {  
    notes.logNote(note)
  } else {  
    console.log('note not found');
  }
} else {
  console.log('note recognised');
}
let logNote = (note) => {
  console.log('note found');
  console.log('Note created');
  console.log('--');
  console.log(`title: ${note.title}`);
  console.log(`body: ${note.body}`)
}