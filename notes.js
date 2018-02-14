console.log('Starting notes.js');

const fs = require('fs')

let addNote= (title, body) => {
  var notes = [];
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString);
  } catch(e) {

  }

  let duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }

}

let getAll = () => {
  console.log('getting all notes');
}

let getNote = (title) => {
  console.log('getting note ', title);
}

let removeNote = (title) => {
  console.log('removing: ', title);
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}