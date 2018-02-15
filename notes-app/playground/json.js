// let obj = {
//   name: 'Geoff'
// }

// let stringObj = JSON.stringify(obj)

// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Ansrew", "age": 123}';

// let person = JSON.parse(personString)

// console.log(person);

const fs = require('fs')


let originalNote = {
  title: 'some title',
  body: 'some body'
}

originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

let noteString = fs.readFileSync('notes.json')

let note = JSON.parse(noteString);

console.log(note.title);